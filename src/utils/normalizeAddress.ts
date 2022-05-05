export function normalizeAddress (address: string) {
  return address.replace('\\x', '0x').toLowerCase()
}
