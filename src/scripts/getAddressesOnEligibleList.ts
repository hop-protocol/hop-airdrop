import fs from 'fs'
import {
  dataDir
} from '../constants'
const groups = require('../data/groups.json')

const addresses: string[] = []

const groupNames: Set<string> = new Set()

async function getAddressesOnEligibleList () {
  if (addresses.length === 0) {
    throw new Error('Please add addresses to review')
  }

  // Only use unique addresses
  const addressSet: Set<string> = new Set()
  for (let address of addresses) {
    address = address.toLocaleLowerCase()
    addressSet.add(address)
  }

  const eligibleAddresses: string[] = fs.readFileSync(`${dataDir}/eligibleAddresses.txt`)
    .toString()
    .split('\n')
    .filter(a => !!a)

  let numIncluded = 0
  addressSet.forEach(address => {
    if (eligibleAddresses.includes(address)) {
      numIncluded++
      logGroupName(address)
    }
  })

  console.log(`${numIncluded} out of ${addresses.length}`)
  console.log('Top addresses of groups:', groupNames)
  logDuplicates(addresses)
}

function logGroupName (address: string) {
  for (const group of groups) {
    const eliminatedAddresses = group.eliminatedAddresses
    if (eliminatedAddresses.includes(address)) {
      groupNames.add(group.groupName)
    }
  }
}

function logDuplicates (addresses: string[]) {
  const duplicateValues: string[] = []
  const uniqueValues: Record<string, boolean> = {}
  for (const address of addresses) {
    if (uniqueValues[address]) {
      duplicateValues.push(address)
    }

    uniqueValues[address] = true
  }

  console.log(`Duplicate addresses:\n${duplicateValues}`)
}

getAddressesOnEligibleList()
  .catch(err => console.error(err))
