export type AddressData = {
  groupId?: number
  connections: Set<string>
}

export type Addresses = {
  [key: string]: AddressData
}

export type Group = {
  groupId: number
  topAddress?: string
  preliminaryAddresses: string[]
  addresses: string[]
  tokensAwarded?: string
  note?: string
}

export type Groups = { [key: number]: Group }
