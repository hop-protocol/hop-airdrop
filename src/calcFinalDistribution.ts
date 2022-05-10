import fs from 'fs'
import { BigNumber, utils } from 'ethers'
import {
  dataDir,
  startDate,
  snapshotTimestamp,
  earlyUserMultiplier,
  volumeTierMultiplier,
  totalBridgeUserTokens
} from './constants'
import { createObjectCsvWriter } from 'csv-writer'
import addressMetadata from './data/addressMetadata'
import customGroups from './data/customGroups'
import hopUserTimestamps from './data/hopUserTimestamps'
import lpDistribution from './data/lpDistribution'

const { parseUnits } = utils

const ONE = parseUnits('1')

type AllAddresses = {
  addresses: Set<string>,
  lpAddresses: string[],
  eligibleAddresses: string[]
}

type AddressData = {
  lpTokens: string
  hopUserTokens: string,
  earlyMultiplier: number,
  volumeMultiplier: number,
  totalTokens: string
}

async function calcFinalDistribution () {
  const allAddresses: AllAddresses = getAddresses()
  const addresses = allAddresses.addresses

  const addressData: {[key: string]: AddressData} = {}
  let totalMultipliers = 0
  addresses.forEach(address => {
    if (!address) return

    // Sanity check
    const timestamp = hopUserTimestamps[address]
    const volume = addressMetadata[address]?.totalVolume
    if ((volume && !timestamp) || (!volume && timestamp)) {
      throw new Error('An address should have either a volume and timestamp or it should have neither')
    }

    const lpTokens = getLpTokens(address)

    let earlyMultiplier = 0
    let volumeMultiplier = 0
    if (allAddresses.eligibleAddresses.includes(address)) {
      earlyMultiplier = getEarlyMultiplier(address)
      volumeMultiplier = getVolumeMultiplier(address)
      const multiplier = earlyMultiplier * volumeMultiplier
      totalMultipliers += multiplier
    }

    addressData[address] = {
      lpTokens,
      hopUserTokens: '0',
      earlyMultiplier,
      volumeMultiplier,
      totalTokens: lpTokens
    }
  })

  const totalTokensAwarded = getTotalTokensAwarded()
  const totalRemainingBridgeUserTokens = totalBridgeUserTokens.sub(totalTokensAwarded)
  const baseAirdropTokens = totalRemainingBridgeUserTokens.div(Math.ceil(totalMultipliers))
  logBaseAirdropTokens(baseAirdropTokens)

  addresses.forEach(address => {
    const data = addressData[address]
    if (!data) throw new Error(`Missing address data for ${address}`)

    const multiplierNum = data.earlyMultiplier * data.volumeMultiplier
    const multiplier = parseUnits(multiplierNum.toFixed(18))
    const hopUserTokens = baseAirdropTokens
      .mul(multiplier)
      .div(ONE)
    data.hopUserTokens = hopUserTokens.toString()
    data.totalTokens = hopUserTokens.add(data.totalTokens).toString()
  })

  // Write JSON
  const distributionLocation = `${dataDir}/finalDistribution.json`
  if (fs.existsSync(distributionLocation)) {
    fs.unlinkSync(distributionLocation)
  }
  fs.writeFileSync(distributionLocation, JSON.stringify(addressData, null, 2), 'utf-8')

  // Write CSV
  const csvLocation = `${dataDir}/finalDistribution.csv`
  const csvWriter = createObjectCsvWriter({
    path: csvLocation,
    header: [
      { id: 'address', title: 'address' },
      { id: 'lpTokens', title: 'lpTokens' },
      { id: 'hopUserTokens', title: 'hopUserTokens' },
      { id: 'earlyMultiplier', title: 'earlyMultiplier' },
      { id: 'volumeMultiplier', title: 'volumeMultiplier' },
      { id: 'totalTokens', title: 'totalTokens' }
    ]
  })

  for (const address in addressData) {
    const data = addressData[address]

    await csvWriter.writeRecords([{
      address,
      ...data
    }])
  }
}

function getAddresses (): AllAddresses {
  const lpAddresses: string[] = Object.keys(lpDistribution)
  const eligibleAddresses: string[] = fs.readFileSync(`${dataDir}/eligibleAddresses.txt`)
    .toString()
    .split('\n')
    .filter(a => !!a)

  const addresses: Set<string> = new Set()
  for (const address of lpAddresses) {
    addresses.add(address)
  }

  for (const address of eligibleAddresses) {
    addresses.add(address)
  }

  return {
    addresses,
    lpAddresses,
    eligibleAddresses
  }
}

function getLpTokens (address: string) {
  const amount = lpDistribution[address]
  return amount ?? '0'
}

function getEarlyMultiplier (address: string) {
  const timestamp = hopUserTimestamps[address]
  if (!timestamp) return 0

  if (timestamp < startDate || timestamp > snapshotTimestamp) {
    throw new Error(`Timestamp out of bounds for ${address}`)
  }

  const additionalMultiplier = earlyUserMultiplier * (snapshotTimestamp - timestamp) / (snapshotTimestamp - startDate)

  return additionalMultiplier + 1
}

function getVolumeMultiplier (address: string) {
  const volume = addressMetadata[address]?.totalVolume
  if (!volume) return 0

  const keys = Object.keys(volumeTierMultiplier).reverse().map(k => parseInt(k))
  for (const tier of keys) {
    if (volume >= tier) {
      return volumeTierMultiplier[tier]
    }
  }

  return 1
}

function getTotalTokensAwarded (): BigNumber {
  let totalTokensAwarded: BigNumber = BigNumber.from('0')
  for (const customGroup of customGroups) {
    if (customGroup.tokensAwarded) {
      const tokensAwarded = parseUnits(customGroup.tokensAwarded)
      totalTokensAwarded = totalTokensAwarded.add(tokensAwarded)
    }
  }

  return totalTokensAwarded
}

function logBaseAirdropTokens (baseAirdropTokens: BigNumber): void {
  console.log('baseAirdropTokens', baseAirdropTokens.toString())

  // Write JSON
  const data = { amount: baseAirdropTokens.toString() }
  const baseAirdropTokensLocation = `${dataDir}/baseAirdropTokens.json`
  if (fs.existsSync(baseAirdropTokensLocation)) {
    fs.unlinkSync(baseAirdropTokensLocation)
  }
  fs.writeFileSync(baseAirdropTokensLocation, JSON.stringify(data, null, 2), 'utf-8')
}

export default calcFinalDistribution
