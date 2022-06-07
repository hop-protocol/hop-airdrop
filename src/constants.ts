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
  '0xa3e5fe8eef1f74b2874a2871ccb681301cb9a7e2': '0xeeff1559b2876e90a6cf341ac4d37e84dba5e8c5',
  '0x45b8e549905b319f0fad19764dc2f716dc16e055': '0x9d3ef9a3dbe0d354d1321ecb7eff3cceb52ad39e',
  '0xb8011157c7a06501aa949ed3bdefc7a4d3c6c637': '0xb00aff69c3cb4c62ffbc1e17401fb11a235f7779',
  '0xb275b0bd0b9b4587dd28f9e6c8f77162d6fb3280': '0x75f6f5e6df1e0e4f3630b3aca77643f3531a2e31',
  '0x80c63f3948be11b54fb2a2944217f75b0ae2cbbc': '0x65bcf16a4f336b2f987c7c2559544cd2ad75ba02',
  '0xdde3d150941ab60c2958993039d47cfe3c10a448': '0xa8e136294aa7e2f1792b510b969363cc622f128a',
  '0x5ba0edfce3208250e6445c7ae875aec8502e6292': '0x214ced3547cf2eb4589f60df0de249c8fdf3fd92',
  '0xd10bb4cbd30ee3aa6f4f444a9f30ed9dd185c12f': '0x8ee32089ef570384c25e19cca1251a5d522dd74f',
  '0x0f277b823c5ebce867f07c45eb32f8f5f79404f7': '0x182983fe63fc5417e54e024146cd83feaa8e1572',
  '0xa75938f6f2132980a32239f29b8bf80e7f257dfd': '0xd5cb2bca5b3e3421f0fe9214ab15ecd59680c143',
  '0x4ba9045adb31d01c6678eeada5283c395177c430': '0xae5c05848a8583d4dd95d35246f3f075b3e3910f',
  '0xc7f934cb4363281dc9ef587d0add87b548ca3bf8': '0x535f7a334a691390293c968b8e37bfaead977179',
  '0xf71ba04a67ce1691f0f79635a62f3cafdd19cab1': '0x173dda68ed8813088cce537f39fd9b47e84460d4',
  '0xc63dbb830ed822edc98ebc4532a75881d24103f4': '0x5b73ef1fa61c3a1410f032a27d7041c33cab4502',
  '0xa8041bbea73e238c12f725e00f12d27393384977': '0x54537f8a808d92be89c5248793c5e8ad31cbf9d6',
  '0x69c2842ad29199b8d4f93f2d57742f1d00eed0eb': '0x5911324f786c36e39dc58a73cf638b42ed518710',
  '0xccd6cc1025c3f3eed2b827b03c1d27ef73643152': '0x50bb3f2dd2f7be1f8dc1d63314c8e3fa4f23eb4a'
}
