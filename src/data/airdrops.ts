// Airdrop logo imports
import jigsawLogo from "@/assets/airdrops/jigsaw-logo.png";
import dropeeLogo from "@/assets/airdrops/dropee-logo.png";
import teaFiLogo from "@/assets/airdrops/tea-fi-logo.png";
import idosLogo from "@/assets/airdrops/idos-logo.png";
import oroLogo from "@/assets/airdrops/oro-logo.png";
import chaingptLogo from "@/assets/airdrops/chaingpt-logo.png";
import hyperouteLogo from "@/assets/airdrops/hyperoute-logo.png";
import tradexyzLogo from "@/assets/airdrops/tradexyz-logo.png";
import psyLogo from "@/assets/airdrops/psy-logo.png";
import todayLogo from "@/assets/airdrops/today-logo.png";
import sparkleLogo from "@/assets/airdrops/sparkle-logo.png";
import solsticeLogo from "@/assets/airdrops/solstice-logo.png";
import hyperethLogo from "@/assets/airdrops/hypereth-logo.png";
import dydxLogo from "@/assets/airdrops/dydx-logo.png";
import whitebitLogo from "@/assets/airdrops/whitebit-logo.png";
import solpumpLogo from "@/assets/airdrops/solpump-logo.png";
import fattyLogo from "@/assets/airdrops/fatty-logo.png";
import coinpilotLogo from "@/assets/airdrops/coinpilot-logo.png";
import reagentLogo from "@/assets/airdrops/reagent-logo.png";
import ultrasolidLogo from "@/assets/airdrops/ultrasolid-logo.png";

export interface Airdrop {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  category: string;
  status: "active" | "upcoming" | "ended";
  // SEO placeholders
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  // Content placeholders
  logoUrl: string;
  bannerUrl?: string;
  fullDescription?: string;
  requirements?: string[];
  rewards?: string;
  endDate?: string;
}

export const airdrops: Airdrop[] = [
  {
    id: "1",
    slug: "jigsaw-build",
    title: "Jigsaw",
    shortDescription: "Join Waitlist & Invite Friends",
    category: "Infrastructure",
    status: "active",
    logoUrl: jigsawLogo,
    metaTitle: "Jigsaw Airdrop - Join Waitlist & Earn Rewards | Cryloca.eu",
    metaDescription: "Join the Jigsaw waitlist, invite friends and earn crypto rewards. Active airdrop for early supporters.",
    metaKeywords: "jigsaw, waitlist, referral, airdrop, crypto rewards",
  },
  {
    id: "2",
    slug: "dropee",
    title: "Dropee",
    shortDescription: "Revolutionary airdrop platform",
    category: "Platform",
    status: "active",
    logoUrl: dropeeLogo,
    metaTitle: "Dropee Airdrop - Revolutionary Platform | Cryloca.eu",
    metaDescription: "Participate in the Dropee airdrop and discover the new generation of crypto distribution.",
    metaKeywords: "dropee, platform, airdrop, crypto",
  },
  {
    id: "3",
    slug: "tea-fi",
    title: "Tea-Fi",
    shortDescription: "4-Week Sprint Campaign",
    category: "DeFi",
    status: "active",
    logoUrl: teaFiLogo,
    metaTitle: "Tea-Fi Airdrop - 4-Week Sprint Campaign | Cryloca.eu",
    metaDescription: "Participate in the Tea-Fi 4-week sprint campaign and earn DeFi rewards.",
    metaKeywords: "tea-fi, defi, sprint campaign, rewards, airdrop",
  },
  {
    id: "4",
    slug: "idos",
    title: "idOS",
    shortDescription: "Free Quests, Daily Check-in & Verification",
    category: "Identity",
    status: "active",
    logoUrl: idosLogo,
    metaTitle: "idOS Airdrop - Free Quests & Daily Rewards | Cryloca.eu",
    metaDescription: "Complete free quests, daily check-ins and human verification on idOS to earn tokens.",
    metaKeywords: "idos, identity, verification, quests, airdrop",
  },
  {
    id: "5",
    slug: "oro-finance",
    title: "Oro Finance",
    shortDescription: "Buy/stake $GOLD tokens",
    category: "DeFi",
    status: "active",
    logoUrl: oroLogo,
    metaTitle: "Oro Finance Airdrop - Stake $GOLD | Cryloca.eu",
    metaDescription: "Buy and stake $GOLD tokens on Oro Finance to earn rewards.",
    metaKeywords: "oro, gold, staking, defi, airdrop",
  },
  {
    id: "6",
    slug: "chaingpt-talisman",
    title: "ChainGPT – Talisman Giveaway",
    shortDescription: "Post with hashtags, earn $SEEK",
    category: "AI",
    status: "active",
    logoUrl: chaingptLogo,
    metaTitle: "ChainGPT Talisman Giveaway - Earn $SEEK | Cryloca.eu",
    metaDescription: "Post with hashtags, climb the leaderboard and earn $SEEK tokens in the ChainGPT Talisman giveaway.",
    metaKeywords: "chaingpt, talisman, seek, ai, airdrop",
  },
  {
    id: "7",
    slug: "hyperoute",
    title: "HypeRoute",
    shortDescription: "Deposit and earn rewards",
    category: "DeFi",
    status: "active",
    logoUrl: hyperouteLogo,
    metaTitle: "HypeRoute Airdrop - Deposit & Earn | Cryloca.eu",
    metaDescription: "Deposit on HypeRoute and earn passive income through their reward system.",
    metaKeywords: "hyperoute, deposit, earn, defi, airdrop",
  },
  {
    id: "8",
    slug: "trade-xyz",
    title: "trade.xyz",
    shortDescription: "Join waitlist & refer friends",
    category: "Trading",
    status: "active",
    logoUrl: tradexyzLogo,
    metaTitle: "trade.xyz Airdrop - Join Waitlist | Cryloca.eu",
    metaDescription: "Join the trade.xyz waitlist, refer friends and secure your early access rewards.",
    metaKeywords: "trade.xyz, trading, waitlist, referral, airdrop",
  },
  {
    id: "9",
    slug: "psy-protocol",
    title: "Psy Protocol",
    shortDescription: "Participate in the testnet",
    category: "Infrastructure",
    status: "active",
    logoUrl: psyLogo,
    metaTitle: "Psy Protocol Testnet Airdrop | Cryloca.eu",
    metaDescription: "Participate in the Psy Protocol testnet and earn rewards for testing.",
    metaKeywords: "psy protocol, testnet, testing, airdrop",
  },
  {
    id: "10",
    slug: "today",
    title: "Today",
    shortDescription: "Join waitlist & refer friends",
    category: "Social",
    status: "active",
    logoUrl: todayLogo,
    metaTitle: "Today Airdrop - Join Waitlist | Cryloca.eu",
    metaDescription: "Join Today's waitlist, invite friends and earn early adopter rewards.",
    metaKeywords: "today, social, waitlist, referral, airdrop",
  },
  {
    id: "11",
    slug: "sparkle",
    title: "Sparkle",
    shortDescription: "Interact with platform",
    category: "DeFi",
    status: "active",
    logoUrl: sparkleLogo,
    metaTitle: "Sparkle Airdrop - Platform Interaction | Cryloca.eu",
    metaDescription: "Interact with the Sparkle platform and earn rewards for your activity.",
    metaKeywords: "sparkle, platform, interaction, defi, airdrop",
  },
  {
    id: "12",
    slug: "solstice",
    title: "Solstice",
    shortDescription: "Social tasks, hold USX/eUSX, supply liquidity",
    category: "DeFi",
    status: "active",
    logoUrl: solsticeLogo,
    metaTitle: "Solstice Airdrop - Liquidity & Social Tasks | Cryloca.eu",
    metaDescription: "Complete social tasks, hold USX/eUSX and supply liquidity on Solstice to earn rewards.",
    metaKeywords: "solstice, liquidity, usx, eusx, defi, airdrop",
  },
  {
    id: "13",
    slug: "hypereth",
    title: "HyperETH",
    shortDescription: "Trade & refer friends",
    category: "Trading",
    status: "active",
    logoUrl: hyperethLogo,
    metaTitle: "HyperETH Airdrop - Trade & Refer | Cryloca.eu",
    metaDescription: "Trade on HyperETH and refer friends to earn bonus rewards.",
    metaKeywords: "hypereth, ethereum, trading, referral, airdrop",
  },
  {
    id: "14",
    slug: "dydx",
    title: "dYdX",
    shortDescription: "Trade to rank & share $3M DYDX rewards",
    category: "Trading",
    status: "active",
    logoUrl: dydxLogo,
    metaTitle: "dYdX Trading Competition - $3M DYDX Rewards | Cryloca.eu",
    metaDescription: "Trade on dYdX to rank up and share $3M DYDX rewards in the August competition.",
    metaKeywords: "dydx, trading, competition, rewards, airdrop",
  },
  {
    id: "15",
    slug: "whitebit",
    title: "WhiteBIT",
    shortDescription: "Apply for WhiteBIT Nova Debit Card",
    category: "Exchange",
    status: "active",
    logoUrl: whitebitLogo,
    metaTitle: "WhiteBIT Nova Debit Card Airdrop | Cryloca.eu",
    metaDescription: "Apply for the WhiteBIT Nova Debit Card and receive exclusive rewards.",
    metaKeywords: "whitebit, debit card, exchange, rewards, airdrop",
  },
  {
    id: "16",
    slug: "solpump",
    title: "SolPump",
    shortDescription: "Participate hourly, grab free SOL",
    category: "Solana",
    status: "active",
    logoUrl: solpumpLogo,
    metaTitle: "SolPump Airdrop - Free SOL Hourly | Cryloca.eu",
    metaDescription: "Participate hourly in SolPump and grab free SOL tokens.",
    metaKeywords: "solpump, solana, sol, hourly, airdrop",
  },
  {
    id: "17",
    slug: "fatty",
    title: "FATTY",
    shortDescription: "Complete tasks, earn XP & cards",
    category: "Trading Bot",
    status: "active",
    logoUrl: fattyLogo,
    metaTitle: "FATTY Trading Bot Airdrop | Cryloca.eu",
    metaDescription: "Sign up on FatBot, complete tasks, earn XP and collect cards.",
    metaKeywords: "fatty, fatbot, trading bot, tasks, airdrop",
  },
  {
    id: "18",
    slug: "coinpilot",
    title: "Coinpilot",
    shortDescription: "Trade & refer friends",
    category: "Trading",
    status: "active",
    logoUrl: coinpilotLogo,
    metaTitle: "Coinpilot Airdrop - Trade & Refer | Cryloca.eu",
    metaDescription: "Trade on Coinpilot and refer friends to earn bonus rewards.",
    metaKeywords: "coinpilot, trading, referral, airdrop",
  },
  {
    id: "19",
    slug: "reagent",
    title: "Reagent",
    shortDescription: "$25,000 prize pool giveaway",
    category: "DeFi",
    status: "active",
    logoUrl: reagentLogo,
    metaTitle: "Reagent Airdrop - $25,000 Prize Pool | Cryloca.eu",
    metaDescription: "Connect wallet, complete social tasks and enter for a share of the $25,000 prize pool.",
    metaKeywords: "reagent, prize pool, giveaway, defi, airdrop",
  },
  {
    id: "20",
    slug: "ultrasolid",
    title: "UltraSolid",
    shortDescription: "Provide liquidity & refer friends",
    category: "DeFi",
    status: "active",
    logoUrl: ultrasolidLogo,
    metaTitle: "UltraSolid Airdrop - Liquidity & Referral | Cryloca.eu",
    metaDescription: "Provide liquidity on UltraSolid and refer friends to earn rewards.",
    metaKeywords: "ultrasolid, liquidity, referral, defi, airdrop",
  },
];
