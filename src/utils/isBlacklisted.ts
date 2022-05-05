import blacklist from '../data/blacklists/blacklist'
import connectionBlacklist from '../data/blacklists/connectionBlacklist'
import contractBlacklist from '../data/blacklists/contractBlacklist'
import depositAddressBlacklist from '../data/blacklists/depositAddressBlacklist'
import exchangeBlacklist from '../data/blacklists/exchangeBlacklist'
import fundraisingBlacklist from '../data/blacklists/fundraisingBlacklist'
import gitcoinGrantsBlacklist from '../data/blacklists/gitcoinGrantsBlacklist'
import givethBlacklist from '../data/blacklists/givethBlacklist'
import nftPowerUserBlacklist from '../data/blacklists/nftPowerUserBlacklist'
import whitelist from '../data/whitelists/whitelist'
import fundingRatioWhitelist from '../data/whitelists/fundingRatioWhitelist'

export default function isBlacklisted (address: string): boolean {
  const appearsOnBlacklist = !!(blacklist[address] ||
    connectionBlacklist[address] ||
    contractBlacklist[address] ||
    depositAddressBlacklist[address] ||
    exchangeBlacklist[address] ||
    fundraisingBlacklist[address] ||
    gitcoinGrantsBlacklist[address] ||
    givethBlacklist[address] ||
    nftPowerUserBlacklist[address]
  )
  const appearsOnWhitelist = !!(whitelist[address] ||
    fundingRatioWhitelist[address]
  )
  return appearsOnBlacklist && !appearsOnWhitelist
}
