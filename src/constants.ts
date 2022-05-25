import path from 'path'
import { utils } from 'ethers'
const { parseUnits } = utils

export const hopTransfersDir = path.resolve(__dirname, 'data/hopTransfers')
export const dataDir = path.resolve(__dirname, 'data')

export const tokens: string[] = [
  'ETH',
  'MATIC',
  'USDC',
  'USDT',
  'DAI'
]

export const chainSlugs: {[key: string]: string} = {
  mainnet: 'mainnet',
  arbitrum: 'arbitrum',
  optimism1: 'optimism',
  optimism2: 'optimism',
  polygon: 'polygon',
  xdai: 'xdai'
}

export const startDate = 1623907245
export const snapshotTimestamp = 1648771200

export const totalBridgeUserTokens = parseUnits('33500000')
export const earlyUserMultiplier = 1 // Multiplier range is 1 to earlyUserMultiplier + 1
export const volumeTierMultiplier: {[key: number]: number} = {
  3000: 3,
  2000: 2
  // default is 1
}

export const verifiedAddressChangeMap: Record<string, string> = {
}
