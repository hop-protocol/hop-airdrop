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

  const eligibleAddresses: string[] = fs.readFileSync(`${dataDir}/eligibleAddresses.txt`)
    .toString()
    .split('\n')
    .filter(a => !!a)

  let numIncluded = 0
  for (const address of addresses) {
    if (eligibleAddresses.includes(address)) {
      numIncluded++
      logGroupName(address)
    }
  }

  console.log(`${numIncluded} out of ${addresses.length}`)

  console.log('Top addresses of groups:', groupNames)
}

function logGroupName (address: string) {
  for (const group of groups) {
    const eliminatedAddresses = group.eliminatedAddresses
    if (eliminatedAddresses.includes(address)) {
      groupNames.add(group.groupName)
    }
  }
}

getAddressesOnEligibleList()
  .catch(err => console.error(err))
