# Arc Observatory

Static dashboard for Arc mainnet (5042). Serve `dist/` with any static host, e.g. `python3 -m http.server 4173 --directory dist`.

## Data
- Arc Circle RPC: ERC-20 USDC totalSupply and decimals at the same block; chain ID checked. Native balances are not added again.
- DefiLlama `/v2/chains`: canonical chain aggregate, never a sum of overlapping rows.
- DefiLlama `/protocols`: exact `chainTvls.Arc`, including zero balances; risk curators and yield layers marked overlapping.
- DefiLlama history: `/v2/historicalChainTvl/Arc` and `/stablecoincharts/Arc?stablecoin=2` (USDC).
- Morpho GraphQL: first 100 indexed V2 vaults on chain 5042. $1,000 minimum display threshold can be expanded. Not an exhaustive contract census or endorsement.

Refresh every five minutes while open. No credentials, wallet connection, persistent data, or transactions. Public upstream endpoints must remain available with CORS. Each source fails independently; indexed USDC fallback is labeled. Chain TVL failures preserve the prior amount with a stale label. Historical dates are UTC.

Run `node --test data.test.mjs` for decimal, chain filtering, missing-data and change calculation checks. Run `node --check dist/app.mjs` for syntax validation.

Contract sources: Arc documentation, DefiLlama Morpho adapter registry and Aave DAO address book. Links are included in the dashboard methodology.
