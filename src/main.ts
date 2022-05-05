import getGroups from './getGroups'
import recordGroups from './recordGroups'
import calcFinalDistribution from './calcFinalDistribution'

async function main () {
  const groups = await getGroups()
  recordGroups(groups)
  await calcFinalDistribution()
}

main()
  .catch(err => console.error(err))
