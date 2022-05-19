# Hop Airdrop

This repo produces the final Hop Airdrop distribution for bridge users and liquidity providers after removing groups of sybil attacker addresses.


## Reporting a group of Sybil attacker addresses

To report a group of Sybil attacker addresses, create an issue on this repo and use the "Sybil Attacker Report" template.

Rules:
* Reports will be reviewed on a first-come, first serve basis.
* Reports must contain at least 10 address still in `/src/data/eligibleAddresses.txt` at the time of review
* Reports related to the Hop liquidity provider airdrop will not be considered since the liquidity provider airdrop was based on the amount and time liquidity was provided and does not need Sybil resistance.
* The methodology must be well explained and easy to understand. Self-reports can provide a list of signatures of "HOP_SYBIL_REPORT" to prove ownership of all reported addresses.
* Methodology that has a non-negligible chance of eliminating legitimate users will not be considered

Happy hunting 🏹

## Usage

To rerun the final distribution, run:

```
npm run main
```

The final distribution can be found at `/src/data/finalDistribution.json` or `/src/data/finalDistribution.csv`

_Note: The calculated final distribution will continue to be updated as sybil attacker groups are added._

