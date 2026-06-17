// Single source of truth for the portfolio.
// Add a new engagement by appending one object — tables/badges render from this.

export type Report = string | "private" | "undisclosed" | undefined;

export interface Audit {
  client: string;
  tags: string[];
  duration?: string;
  position?: string; // 0xMacro seniority
  report?: Report; // local path (/reports/x.pdf), external url, "private", or "undisclosed"
}

// Tag → color (mirrors the shields.io palette used in the README).
export const tagColors: Record<string, string> = {
  derivatives: "#0E8A16",
  "synthetic-assets": "#00B3A4",
  crosschain: "#7957D5",
  perps: "#1F6FEB",
  "account-abstraction": "#FF8C00",
  relayers: "#6A737D",
  "evm-attestation": "#A371F7",
  staking: "#F66A0A",
  vault: "#F66A0A",
  stablecoin: "#2EA043",
  amm: "#DB61A2",
  erc20: "#0969DA",
  game: "#DB61A2",
  launchpad: "#6A737D",
  nft: "#8250DF",
  automation: "#8250DF",
  deployment: "#0969DA",
  "liquid-staking": "#1F6FEB",
  orderbook: "#0E8A16",
  bridge: "#0969DA",
  lending: "#34D058",
  dao: "#8250DF",
  governance: "#6F42C1",
  social: "#D876E3",
  donations: "#FBCA04",
  library: "#0366D6",
  bonds: "#6E7781",
};

// ── Lead Security Researcher @ Guardian ─────────────────────────────
export const guardian: Audit[] = [
  { client: "Synthetix Treasury Market", tags: ["derivatives", "synthetic-assets"], duration: "1 week" },
  { client: "GMX Crosschain — 1", tags: ["crosschain", "derivatives"], duration: "3 weeks" },
  { client: "GMX Gasless Updates (Sponsored Call)", tags: ["account-abstraction", "relayers"], duration: "1.5 weeks" },
  { client: "Polynomial Short Review", tags: ["derivatives"], duration: "0.5 week" },
  { client: "GMX Crosschain — 2", tags: ["crosschain", "derivatives"], duration: "1.5 weeks" },
  { client: "GMX Gasless Updates (OneBalance)", tags: ["account-abstraction", "relayers"], duration: "1 week" },
  { client: "████ Attester", tags: ["evm-attestation"], duration: "0.5 week" },
  { client: "Synthetix Autocompound Vault", tags: ["staking", "vault"], duration: "1.5 weeks" },
  { client: "USDT0 Polygon Upgrade", tags: ["crosschain", "stablecoin"], duration: "1 week" },
  { client: "USDT0 Onesig", tags: ["crosschain", "stablecoin"], duration: "0.5 week" },
  { client: "GMX Crosschain — 3", tags: ["crosschain", "derivatives"], duration: "1 week" },
  { client: "M0 Uniswap Hooks", tags: ["amm"], duration: "0.5 week" },
  { client: "GMX Crosschain — 4", tags: ["crosschain", "derivatives"], duration: "1 week" },
  { client: "Push Token Migration", tags: ["crosschain", "erc20"], duration: "1 day" },
  { client: "M0 EVM Extensions", tags: ["stablecoin"], duration: "1 week" },
  { client: "Aria Staking", tags: ["staking", "vault"], duration: "1 week" },
  { client: "Gamma Limit Order Manager", tags: ["amm"], duration: "1.5 weeks" },
  { client: "SNX Staking", tags: ["staking", "vault"], duration: "0.2 week" },
  { client: "USDT Polygon Upgrade Part 2", tags: ["crosschain", "stablecoin"], duration: "0.5 week" },
  { client: "Olympus Convertible Deposits", tags: ["staking", "bonds"], duration: "1.5 weeks" },
  { client: "MUSD MExtensions Update", tags: ["stablecoin"], duration: "0.5 week" },
  { client: "GMX Fee Automation", tags: ["automation"], duration: "1 week" },
  { client: "USDT XLayer Deployment", tags: ["deployment"], duration: "0.2 week" },
  { client: "GMX Fee Scripts", tags: ["automation"], duration: "1 week" },
  { client: "USDT0 Plasma Deployment", tags: ["deployment"], duration: "0.2 week" },
  { client: "USDT0 Hedera OFT & Adapter", tags: ["crosschain"], duration: "1 week" },
  { client: "Fastlane", tags: ["liquid-staking"], duration: "4.5 weeks" },
  { client: "Bigcoin", tags: ["game", "launchpad"], duration: "2 weeks" },
  { client: "USDT0 MegaETH Deployment", tags: ["deployment"], duration: "0.2 week" },
  { client: "M0 Liquidity Delivery & Portals", tags: ["orderbook", "crosschain"], duration: "3 weeks" },
  { client: "Yuga Torch NFT", tags: ["nft"], duration: "0.5 week" },
  { client: "GMX V2 · V2.2C · V2.3", tags: ["derivatives"], duration: "7 weeks" },
  { client: "LayerZero ███████", tags: ["crosschain"], duration: "4 weeks" },
  { client: "M0 ██████", tags: ["stablecoin"], duration: "2 weeks" },
  { client: "USDT0 Tempo Deployment", tags: ["deployment"], duration: "0.2 week" },
  { client: "USDT0 Hedera Deployment", tags: ["deployment"], duration: "0.2 week" },
  { client: "USDT0 / XAUT0 Celo Deployment & Upgrade", tags: ["crosschain", "stablecoin"], duration: "1 week" },
  { client: "USDT0 Conflux Tx Verification", tags: ["deployment"], duration: "0.2 week" },
  { client: "USAT Celo Deployment & Tx Verification", tags: ["crosschain", "stablecoin"], duration: "0.5 week" },
  { client: "Fastlane █████", tags: ["liquid-staking"], duration: "2 weeks" },
  { client: "LayerZero ██████", tags: ["crosschain"], duration: "1 week" },
  { client: "Perpcity", tags: ["derivatives"], duration: "2 weeks" },
];

// ── Previously at 0xMacro ───────────────────────────────────────────
export const macro: Audit[] = [
  { client: "Connext", tags: ["bridge", "crosschain"], position: "Associate + Point", duration: "6 weeks", report: "/reports/Connext.pdf" },
  { client: "Fuji", tags: ["crosschain", "lending"], position: "Lead (Solo Auditor)", duration: "4 weeks", report: "/reports/Fuji.pdf" },
  { client: "PartyDAO-2", tags: ["dao", "governance", "nft"], position: "Lead", duration: "2 weeks", report: "/reports/PartyDAO-2.pdf" },
  { client: "NFT-Hashi", tags: ["crosschain", "nft"], position: "Lead", duration: "0.5 week", report: "private" },
  { client: "Kwenta", tags: ["account-abstraction", "derivatives"], position: "Associate", duration: "2 weeks", report: "/reports/Kwenta.pdf" },
  { client: "TreasureDAO", tags: ["game"], position: "Associate", duration: "4 weeks", report: "private" },
  { client: "Sommelier-1", tags: ["staking", "vault"], position: "Associate", duration: "2 weeks", report: "/reports/Sommelier-1.pdf" },
  { client: "Sommelier-2", tags: ["staking", "vault"], position: "Associate + Point", duration: "3 weeks", report: "private" },
  { client: "Sommelier-3", tags: ["staking", "vault"], position: "Associate", duration: "3 weeks", report: "/reports/Sommelier-3.pdf" },
  { client: "PartyDAO-1", tags: ["dao", "governance", "nft"], position: "Associate", duration: "4 weeks", report: "/reports/PartyDAO-1.pdf" },
  { client: "Zion", tags: ["social"], position: "Associate + Point", duration: "2 weeks", report: "private" },
  { client: "MakerDAO", tags: ["lending", "stablecoin"], position: "Associate", duration: "1 week", report: "/reports/Maker.pdf" },
  { client: "Synthetix", tags: ["derivatives", "synthetic-assets"], position: "Associate", duration: "1 week", report: "/reports/Synthetix.pdf" },
  { client: "Hop", tags: ["bridge", "crosschain"], position: "Associate", duration: "0.5 week", report: "private" },
  { client: "xDonations", tags: ["crosschain", "donations"], position: "Associate", duration: "0.5 week", report: "https://github.com/0xcuriousapple/curiousapple-audits/blob/main/src/xDonations.pdf" },
  { client: "Thirdweb", tags: ["library"], position: "Associate + Point", duration: "2 weeks", report: "/reports/thirdweb.pdf" },
  { client: "Frax TWAMM", tags: ["amm"], position: "Apprentice", duration: "2 weeks", report: "private" },
  { client: "Wristables", tags: ["nft"], position: "Apprentice", duration: "1 week", report: "/reports/Wristables.pdf" },
];

// ── Public Audit Contests (Big Wins) ────────────────────────────────
export interface Contest {
  place: string;
  client: string;
  href: string;
  tags: string[];
  note?: string;
}

export const contests: Contest[] = [
  { place: "1st", client: "Raft Finance", tags: ["stablecoin", "lending"], href: "https://github.com/raft-fi/contracts/issues?q=is%3Aissue%20is%3Aclosed%20author%3A0xcuriousapple" },
  { place: "1st", client: "VMEX Finance", tags: ["lending"], href: "https://github.com/hats-finance/VMEX-0x050183b53cf62bcd6c2a932632f8156953fd146f/issues/24" },
  { place: "1st", client: "Reserve Protocol", tags: ["vault"], href: "https://cantina.xyz/competitions/9dfca0bc-a7bf-482e-a3df-4eb861f55c4f/leaderboard" },
  { place: "3rd", client: "Socket Messaging Bridge", tags: ["crosschain"], href: "https://sockettech.notion.site/WarRoom-Leaderboard-47a977c54ff74fd48eac780a9d518c70" },
];

// ── Independent Solo Audits ─────────────────────────────────────────
export interface SoloAudit {
  client: string;
  tags: string[];
  links: { label: string; href: Report }[];
}

export const solo: SoloAudit[] = [
  { client: "WeFi Finance", tags: ["lending"], links: [{ label: "Private", href: "private" }] },
  {
    client: "Raft",
    tags: ["stablecoin", "lending"],
    links: [
      { label: "1", href: "https://github.com/0xcuriousapple/curiousapple-audits/blob/main/src/Raft-1.md" },
      { label: "2", href: "https://github.com/0xcuriousapple/curiousapple-audits/blob/main/src/Raft-2.md" },
      { label: "3", href: "https://gist.github.com/0xcuriousapple/9537546b308ce08fdc20090c05b0f7d4" },
      { label: "4", href: "https://gist.github.com/0xcuriousapple/d5777b11dc6c109dcb207150e8bb3b56" },
      { label: "5", href: "https://gist.github.com/0xcuriousapple/d2d332af1edac19a6e856d309dc440c1" },
    ],
  },
  { client: "Ambire", tags: ["account-abstraction"], links: [{ label: "View", href: "https://gist.github.com/0xcuriousapple/3a670a8980991833df9ee124a6934e52" }] },
  { client: "Nostra", tags: ["lending"], links: [{ label: "View", href: "https://gist.github.com/0xcuriousapple/3c306d93f884348c82b444c8ac2194ff" }] },
];

// ── Bug Bounties ────────────────────────────────────────────────────
export interface Bounty {
  severity: "Critical" | "High" | "High/Medium" | "Medium";
  project: string;
  via: string;
  href?: string;
  note?: string;
}

export const bounties: Bounty[] = [
  { severity: "Critical", project: "Thirdweb", via: "Independent Bug Bounty", href: "https://gist.github.com/0xcuriousapple/e3df31decac16d3859349b4247a3e50c" },
  { severity: "Critical", project: "Rhinestone", via: "Independent Bug Bounty", href: "https://gist.github.com/0xcuriousapple/d7128a1d8ee342e21e8cea3350687566" },
  { severity: "High", project: "Rhinestone", via: "Independent Bug Bounty", href: "https://gist.github.com/0xcuriousapple/6c099551fc45274c20f7fb773ad5f2a0" },
  { severity: "High", project: "Cow", via: "Immunefi", href: "https://gist.github.com/0xcuriousapple/f68f63ab25f463f8f9fb5759209ab497" },
  { severity: "High", project: "Thirdweb", via: "Independent Bug Bounty", href: "https://gist.github.com/0xcuriousapple/a47472a1107384cf5db1470dc8a6d2cb" },
  { severity: "High", project: "Bridge Protocol", via: "Independent Bug Bounty", note: "Not permitted to disclose 🤷" },
  { severity: "High", project: "Bridge Protocol", via: "Independent Bug Bounty", note: "Not permitted to disclose 🤷" },
  { severity: "High", project: "Connext", via: "Immunefi", href: "https://gist.github.com/0xcuriousapple/5a624d56d95c49b2a18f9ed64f070376" },
  { severity: "High/Medium", project: "Ambire", via: "Independent + Immunefi", href: "https://gist.github.com/0xcuriousapple/6e45a013b1a4878c584941f2958c19bc" },
  { severity: "High/Medium", project: "ERC1271 Issue — 15+ Teams Affected", via: "Independent + Immunefi", href: "https://mirror.xyz/curiousapple.eth/pFqAdW2LiJ-6S4sg_u1z08k4vK6BCJ33LcyXpnNb8yU" },
  { severity: "Medium", project: "Raft", via: "Hats", href: "https://gist.github.com/0xcuriousapple/ce1f4150674f2559e375b401a02dc776" },
  { severity: "Medium", project: "Spiral DAO", via: "Hats", href: "https://gist.github.com/0xcuriousapple/5b48f9d8072b15cd5b0c5371398df0f3" },
];

// ── Publications ────────────────────────────────────────────────────
export interface Publication {
  title: string;
  href: string;
  source: string;
}

export const publications: Publication[] = [
  { title: "ERC1271 Replay — 15+ Teams Affected", href: "https://mirror.xyz/curiousapple.eth/pFqAdW2LiJ-6S4sg_u1z08k4vK6BCJ33LcyXpnNb8yU", source: "mirror.xyz" },
  { title: "How To Consume Chainlink Price Feeds Safely", href: "https://0xmacro.com/writing/how-to-consume-chainlink-price-feeds-safely", source: "0xMacro" },
  { title: "Solidity Gas Optimizations Cheat Sheet", href: "https://0xmacro.com/writing/solidity-gas-optimizations-cheat-sheet", source: "0xMacro" },
  { title: "Synthetix Staking Rewards Issue — Inefficient Reward Distribution", href: "https://0xmacro.com/writing/synthetix-staking-rewards-issue-inefficient-reward-distribution", source: "0xMacro" },
];
