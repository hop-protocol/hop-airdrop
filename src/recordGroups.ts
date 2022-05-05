import fs from 'fs'
import { dataDir } from './constants'
import { Group } from './types'
import preliminaryAddresses from './data/preliminaryAddresses'
import eliminatedGroups from './data/eliminatedGroups'
import customGroups from './data/customGroups'

function recordGroups (groups: Group[]) {
  writeGroupsToJson(groups)
  writeeligibleAddressesToFile(groups)
}

function writeGroupsToJson (sortedGroups: Group[]) {
  // Write the groups to a json
  const groupsJson = sortedGroups.map(group => ({
    groupName: group.topAddress ?? 'Missing address metadata',
    notes: '',
    totalConnectedAddresses: group.addresses.length,
    totalEliminatedAddresses: group.preliminaryAddresses.length,
    eliminatedAddresses: group.preliminaryAddresses
  }))

  const groupsLocation = `${dataDir}/groups.json`
  if (fs.existsSync(groupsLocation)) {
    fs.unlinkSync(groupsLocation)
  }
  fs.writeFileSync(groupsLocation, JSON.stringify(groupsJson, null, 2), 'utf-8')
}

function writeeligibleAddressesToFile (sortedGroups: Group[]) {
  let filteredGroups = sortedGroups.filter(group => {
    return group.topAddress && eliminatedGroups[group.topAddress]
  })

  filteredGroups = filteredGroups.concat(customGroups)

  const allGroupedAddresses: { [key: string]: boolean } = {}
  const minGroupSize = 8
  for (const group of filteredGroups) {
    if (group.preliminaryAddresses.length < minGroupSize) continue

    for (const address of group.preliminaryAddresses) {
      allGroupedAddresses[address] = true
    }
  }

  const allpreliminaryAddresses = Object.keys(preliminaryAddresses)

  const eligibleAddresses = allpreliminaryAddresses.filter(address =>
    !allGroupedAddresses[address]
  )

  const eligibleAddressesLocation = `${dataDir}/eligibleAddresses.txt`
  if (fs.existsSync(eligibleAddressesLocation)) {
    fs.unlinkSync(eligibleAddressesLocation)
  }
  eligibleAddresses.forEach(address => {
    fs.writeFileSync(eligibleAddressesLocation, `${address}\n`, { flag: 'a' })
  })
}

export default recordGroups
