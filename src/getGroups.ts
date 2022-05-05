import fs from 'fs'
import { promisify } from 'util'
import { parse } from 'csv-parse'
import globSync from 'glob'
import { dataDir } from './constants'
import {
  Addresses,
  Group,
  Groups
} from './types'
import { normalizeAddress } from './utils/normalizeAddress'
import isBlacklisted from './utils/isBlacklisted'
import preliminaryAddresses from './data/preliminaryAddresses'
import addressMetadata from './data/addressMetadata'

const glob = promisify(globSync)

async function getGroups (): Promise<Group[]> {
  const addresses = await getAddresses()

  const groups = buildGroups(addresses)
  populateTopAddresses(groups)

  const sortedGroups = getSortedGroups(groups)

  return sortedGroups
}

function buildGroups (addresses: Addresses): Groups {
  const groups: { [key: number]: Group } = {}

  const setGroupId = (address: string, groupId: number) => {
    const addressData = addresses[address]
    if (addressData.groupId !== undefined) {
      return
    }

    addressData.groupId = groupId
    // Add address to group
    groups[groupId].addresses.push(address)
    if (preliminaryAddresses[address]) {
      groups[groupId].preliminaryAddresses.push(address)
    }

    addressData.connections.forEach(connection => {
      setGroupId(connection, groupId)
    })
  }

  let currentGroupId = 0
  for (const address of Object.keys(addresses)) {
    groups[currentGroupId] = {
      groupId: currentGroupId,
      preliminaryAddresses: [],
      addresses: []
    }
    setGroupId(address, currentGroupId)
    currentGroupId++
  }

  return groups
}

async function getAddresses (): Promise<Addresses> {
  const addresses: Addresses = {}

  // const files = fs.readdirSync(`${dataDir}/transfers`)
  const files = await glob(`${dataDir}/transfers/**/*.csv`)

  for (const file of files) {
    await addAddresses(addresses, file)
  }

  return addresses
}

async function addAddresses (addresses: Addresses, csvPath: string) {
  const csv = fs.createReadStream(csvPath, 'utf-8')

  const parser = csv.pipe(parse({ delimiter: ',' }))

  for await (const transfer of parser) {
    const from = normalizeAddress(transfer[0])
    const to = normalizeAddress(transfer[1])
    if (from === 'from' || to === 'to') continue
    if (isBlacklisted(to) || isBlacklisted(from)) continue

    // Set from connection
    if (!addresses[from]) {
      addresses[from] = {
        connections: new Set()
      }
    }
    addresses[from].connections.add(to)

    // Set to connection
    if (!addresses[to]) {
      addresses[to] = {
        connections: new Set()
      }
    }
    addresses[to].connections.add(from)
  }
}

function populateTopAddresses (groups: Groups) {
  for (const groupId in groups) {
    const group = groups[groupId]
    const addresses = group.preliminaryAddresses

    let topAddress
    let topTotalVolume = 0
    for (const address of addresses) {
      const metadata = addressMetadata[address]
      if (metadata?.totalVolume > topTotalVolume) {
        topAddress = address
        topTotalVolume = metadata.totalVolume
      }
    }

    group.topAddress = topAddress
  }
}

function getSortedGroups (groups: { [key: number]: Group }): Group[] {
  let sortedGroups: Group[] = []
  Object.keys(groups).forEach((groupIdKey) => {
    const groupId = parseInt(groupIdKey)
    const group = groups[groupId]
    if (group.addresses.length > 3) {
      sortedGroups.push(group)
    }
  })

  sortedGroups = sortedGroups.sort((a, b) => {
    return b.preliminaryAddresses.length - a.preliminaryAddresses.length
  })

  sortedGroups = sortedGroups.filter(group =>
    group.addresses.length > 5 && group.preliminaryAddresses.length > 3
  )

  return sortedGroups
}

export default getGroups
