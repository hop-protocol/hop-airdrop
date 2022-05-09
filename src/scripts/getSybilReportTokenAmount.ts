import { utils, BigNumber } from 'ethers'
import customGroups from '../data/customGroups'
const finalDistribution = require('../data/finalDistribution.json')

async function getSybilReportTokenAmount () {
  const groupId = 0
  if (!groupId) {
    throw new Error('Please specify the groupId of a custom group.')
  }

  let eliminatedAddresses: string[] = []
  for (const customGroup of customGroups) {
    if (customGroup.groupId === groupId) {
      eliminatedAddresses = customGroup.preliminaryAddresses
    }
  }

  let totalTokens: BigNumber = BigNumber.from('0')
  for (const eliminatedAddress of eliminatedAddresses) {
    const addressData = finalDistribution[eliminatedAddress]
    if (!addressData) {
      throw new Error(`Address data for ${eliminatedAddress} does not exist. All addresses should have relevant data.`)
    }

    const hopUserTokens = BigNumber.from(addressData.hopUserTokens)
    totalTokens = totalTokens.add(hopUserTokens)
  }

  const reward = totalTokens.mul(25).div(100)
  console.log(`Received ${utils.formatUnits(reward)} (out of a total of ${utils.formatUnits(totalTokens)}) for reporting ${eliminatedAddresses.length} addresses.`)
}

getSybilReportTokenAmount()
  .catch(err => console.error(err))
