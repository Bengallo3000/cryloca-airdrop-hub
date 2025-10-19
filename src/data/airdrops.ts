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
    shortDescription: "Join the waitlist and earn rewards by inviting friends to this innovative infrastructure project",
    category: "Infrastructure",
    status: "active",
    logoUrl: jigsawLogo,
    metaTitle: "Jigsaw Airdrop - Join Waitlist & Earn Rewards | Cryloca.eu",
    metaDescription: "Join the Jigsaw waitlist, invite friends and earn crypto rewards. Active airdrop for early supporters in blockchain infrastructure.",
    metaKeywords: "jigsaw, waitlist, referral, airdrop, crypto rewards, blockchain infrastructure",
    fullDescription: "Jigsaw is building next-generation blockchain infrastructure that enables seamless cross-chain interactions. Early supporters can join the waitlist and earn points by referring friends, which will be converted to tokens upon launch. The project focuses on solving scalability and interoperability challenges in the Web3 ecosystem.",
    requirements: [
      "Join the official waitlist on the Jigsaw platform",
      "Complete KYC verification (if required)",
      "Share your unique referral link with friends",
      "Earn bonus points for each successful referral",
      "Stay active in the community Discord and Telegram"
    ],
    rewards: "Points convertible to $JIGSAW tokens",
    endDate: "TBA - Campaign ongoing"
  },
  {
    id: "2",
    slug: "dropee",
    title: "Dropee",
    shortDescription: "Revolutionary platform for discovering and participating in verified crypto airdrops",
    category: "Platform",
    status: "active",
    logoUrl: dropeeLogo,
    metaTitle: "Dropee Airdrop - Revolutionary Distribution Platform | Cryloca.eu",
    metaDescription: "Participate in the Dropee airdrop and discover the new generation of crypto distribution with verified projects and secure participation.",
    metaKeywords: "dropee, platform, airdrop, crypto, token distribution",
    fullDescription: "Dropee is revolutionizing how airdrops are discovered and distributed in the crypto space. The platform aggregates verified airdrop opportunities, provides secure participation methods, and helps users maximize their airdrop earnings. Early platform users will receive native tokens as rewards for their engagement.",
    requirements: [
      "Create an account on Dropee platform",
      "Connect your Web3 wallet (MetaMask, WalletConnect supported)",
      "Complete profile verification",
      "Participate in at least 3 verified airdrops through the platform",
      "Engage with the platform regularly"
    ],
    rewards: "$DROPEE platform tokens",
    endDate: "Q2 2025"
  },
  {
    id: "3",
    slug: "tea-fi",
    title: "Tea-Fi",
    shortDescription: "Participate in the 4-week DeFi sprint campaign with exclusive yield farming rewards",
    category: "DeFi",
    status: "active",
    logoUrl: teaFiLogo,
    metaTitle: "Tea-Fi Airdrop - 4-Week Sprint Campaign | Cryloca.eu",
    metaDescription: "Participate in the Tea-Fi 4-week sprint campaign and earn high-yield DeFi rewards through liquidity provision and staking.",
    metaKeywords: "tea-fi, defi, sprint campaign, yield farming, liquidity, airdrop",
    fullDescription: "Tea-Fi brings innovative yield farming strategies to DeFi with their 4-week sprint campaign. Users can stake tokens, provide liquidity, and participate in governance to earn rewards. The platform utilizes advanced algorithmic strategies to maximize returns while maintaining security through audited smart contracts.",
    requirements: [
      "Hold a minimum of 100 USDT equivalent in supported tokens",
      "Provide liquidity to TEA-Fi pools",
      "Stake tokens for the duration of the sprint campaign",
      "Complete at least one governance vote",
      "Join official Telegram and follow on Twitter"
    ],
    rewards: "$TEA tokens + bonus yield",
    endDate: "March 15, 2025"
  },
  {
    id: "4",
    slug: "idos",
    title: "idOS",
    shortDescription: "Complete daily quests and human verification to earn rewards in this decentralized identity protocol",
    category: "Identity",
    status: "active",
    logoUrl: idosLogo,
    metaTitle: "idOS Airdrop - Decentralized Identity & Daily Rewards | Cryloca.eu",
    metaDescription: "Complete free quests, daily check-ins and human verification on idOS to earn tokens. Build your decentralized identity and get rewarded.",
    metaKeywords: "idos, identity, verification, quests, decentralized identity, web3, airdrop",
    fullDescription: "idOS is building a decentralized identity solution that puts users in control of their data. The platform combines privacy-preserving verification with daily engagement rewards. Users can complete quests, verify their humanity, and earn tokens while building their on-chain reputation.",
    requirements: [
      "Complete human verification process",
      "Daily check-in for 14 consecutive days",
      "Complete at least 5 platform quests",
      "Connect and verify social media accounts",
      "Refer 3 friends to the platform"
    ],
    rewards: "$IDOS tokens + bonus NFT for top contributors",
    endDate: "April 30, 2025"
  },
  {
    id: "5",
    slug: "oro-finance",
    title: "Oro Finance",
    shortDescription: "Stake $GOLD tokens and earn high APY rewards in this gold-backed DeFi protocol",
    category: "DeFi",
    status: "active",
    logoUrl: oroLogo,
    metaTitle: "Oro Finance Airdrop - Stake Gold-Backed Tokens | Cryloca.eu",
    metaDescription: "Buy and stake $GOLD tokens on Oro Finance to earn high APY rewards. Gold-backed DeFi with real-world asset integration.",
    metaKeywords: "oro finance, gold, staking, defi, real world assets, RWA, airdrop",
    fullDescription: "Oro Finance bridges traditional gold investments with DeFi through tokenized gold-backed assets. Users can buy, stake, and earn rewards with $GOLD tokens, which are backed by physical gold reserves. The platform offers attractive APY rates and airdrops additional tokens to early stakers.",
    requirements: [
      "Purchase minimum 0.1 $GOLD tokens",
      "Stake tokens for at least 30 days",
      "Complete KYC verification",
      "Hold staked position until airdrop snapshot",
      "Join official community channels"
    ],
    rewards: "$ORO governance tokens proportional to stake",
    endDate: "May 20, 2025"
  },
  {
    id: "6",
    slug: "chaingpt-talisman",
    title: "ChainGPT – Talisman Giveaway",
    shortDescription: "Engage on social media with hashtags and climb leaderboard to earn $SEEK tokens",
    category: "AI",
    status: "active",
    logoUrl: chaingptLogo,
    metaTitle: "ChainGPT Talisman Giveaway - Earn $SEEK Tokens | Cryloca.eu",
    metaDescription: "Post with hashtags, climb the leaderboard and earn $SEEK tokens in the ChainGPT Talisman giveaway. AI-powered blockchain rewards.",
    metaKeywords: "chaingpt, talisman, seek, ai, blockchain, social media, airdrop",
    fullDescription: "ChainGPT combines artificial intelligence with blockchain technology to create innovative Web3 solutions. The Talisman Giveaway rewards community engagement through social media activity. Users earn $SEEK tokens by posting content with specific hashtags, with additional bonuses for high-quality contributions and consistent engagement.",
    requirements: [
      "Follow ChainGPT on Twitter and join Telegram",
      "Create posts with #ChainGPT and #Talisman hashtags",
      "Retweet official announcements",
      "Engage with community posts (minimum 10 interactions)",
      "Submit wallet address for reward distribution"
    ],
    rewards: "$SEEK tokens based on leaderboard position",
    endDate: "April 15, 2025"
  },
  {
    id: "7",
    slug: "hyperoute",
    title: "HypeRoute",
    shortDescription: "Deposit assets and earn passive rewards through innovative DeFi routing protocol",
    category: "DeFi",
    status: "active",
    logoUrl: hyperouteLogo,
    metaTitle: "HypeRoute Airdrop - Smart Routing & Yield Optimization | Cryloca.eu",
    metaDescription: "Deposit on HypeRoute and earn passive income through their intelligent routing and yield optimization system.",
    metaKeywords: "hyperoute, defi, yield optimization, routing, deposit, passive income, airdrop",
    fullDescription: "HypeRoute optimizes DeFi yields through intelligent routing across multiple protocols. The platform automatically finds the best rates and rebalances positions for maximum returns. Early depositors receive platform tokens as rewards, with bonuses for larger deposits and longer lock periods.",
    requirements: [
      "Deposit minimum $100 in supported stablecoins",
      "Maintain deposit for at least 21 days",
      "Enable auto-compound feature",
      "Complete platform onboarding tutorial",
      "Verify email and wallet connection"
    ],
    rewards: "$ROUTE tokens + yield optimization bonuses",
    endDate: "Ongoing - Rewards distributed monthly"
  },
  {
    id: "8",
    slug: "trade-xyz",
    title: "trade.xyz",
    shortDescription: "Join exclusive waitlist and earn rewards by referring friends to next-gen trading platform",
    category: "Trading",
    status: "active",
    logoUrl: tradexyzLogo,
    metaTitle: "trade.xyz Airdrop - Next-Gen Trading Platform | Cryloca.eu",
    metaDescription: "Join the trade.xyz waitlist, refer friends and secure your early access rewards to the revolutionary trading platform.",
    metaKeywords: "trade.xyz, trading platform, waitlist, referral, early access, airdrop",
    fullDescription: "trade.xyz is building a next-generation trading platform that combines CEX performance with DEX security. The waitlist campaign rewards early adopters with platform tokens, with tier-based rewards based on referral count and engagement. Priority access to beta features is also included.",
    requirements: [
      "Join waitlist with email verification",
      "Complete user profile and preferences",
      "Refer at least 5 friends to the platform",
      "Follow on all social media channels",
      "Participate in community AMAs"
    ],
    rewards: "$XYZ tokens + priority beta access",
    endDate: "Platform launch - Q2 2025"
  },
  {
    id: "9",
    slug: "psy-protocol",
    title: "Psy Protocol",
    shortDescription: "Test innovative options protocol and earn rewards for providing valuable feedback",
    category: "Infrastructure",
    status: "active",
    logoUrl: psyLogo,
    metaTitle: "Psy Protocol Testnet Airdrop - Options Trading | Cryloca.eu",
    metaDescription: "Participate in the Psy Protocol testnet and earn rewards for testing innovative on-chain options infrastructure.",
    metaKeywords: "psy protocol, options, testnet, testing, derivatives, defi, airdrop",
    fullDescription: "Psy Protocol brings sophisticated options trading to DeFi with European-style, cash-settled options on multiple assets. Testnet participants help stress-test the protocol before mainnet launch and receive token rewards. Focus areas include trading interface, liquidity provision, and settlement mechanisms.",
    requirements: [
      "Request testnet tokens from faucet",
      "Execute at least 10 test trades",
      "Provide liquidity to test pools",
      "Submit bug reports or feedback",
      "Complete testnet survey"
    ],
    rewards: "$PSY tokens based on testnet contribution",
    endDate: "Testnet Phase 2 - May 2025"
  },
  {
    id: "10",
    slug: "today",
    title: "Today",
    shortDescription: "Join social platform waitlist and build your network for exclusive early adopter rewards",
    category: "Social",
    status: "active",
    logoUrl: todayLogo,
    metaTitle: "Today Social Platform Airdrop - Early Access Rewards | Cryloca.eu",
    metaDescription: "Join Today's waitlist, invite friends and earn early adopter rewards for the next generation social platform.",
    metaKeywords: "today, social platform, web3 social, waitlist, referral, community, airdrop",
    fullDescription: "Today is reimagining social media with Web3 principles - user ownership, privacy, and monetization. Waitlist members earn points through referrals and engagement, which convert to platform tokens at launch. Special NFT badges are awarded to top community builders.",
    requirements: [
      "Sign up for waitlist with email",
      "Connect Twitter account",
      "Invite 10+ friends using referral code",
      "Engage with pre-launch content",
      "Join Discord community"
    ],
    rewards: "$TODAY tokens + exclusive NFT badges",
    endDate: "Platform Beta - Q3 2025"
  },
  {
    id: "11",
    slug: "sparkle",
    title: "Sparkle",
    shortDescription: "Interact with innovative DeFi platform and earn rewards for active participation",
    category: "DeFi",
    status: "active",
    logoUrl: sparkleLogo,
    metaTitle: "Sparkle DeFi Airdrop - Platform Rewards | Cryloca.eu",
    metaDescription: "Interact with the Sparkle DeFi platform and earn rewards for your activity. Multiple earning opportunities through lending, borrowing, and staking.",
    metaKeywords: "sparkle, defi, lending, borrowing, platform rewards, airdrop",
    fullDescription: "Sparkle is a comprehensive DeFi protocol offering lending, borrowing, and yield farming. The platform rewards active users with governance tokens based on their interaction volume and consistency. Special bonus multipliers are available for users who engage with multiple platform features.",
    requirements: [
      "Connect wallet and complete registration",
      "Execute at least 5 transactions (lending, borrowing, or swaps)",
      "Maintain minimum $50 TVL on platform",
      "Vote on at least 1 governance proposal",
      "Hold positions for minimum 14 days"
    ],
    rewards: "$SPRKL governance tokens + yield bonuses",
    endDate: "June 30, 2025"
  },
  {
    id: "12",
    slug: "solstice",
    title: "Solstice",
    shortDescription: "Provide liquidity, hold USX/eUSX tokens, and complete social tasks for rewards",
    category: "DeFi",
    status: "active",
    logoUrl: solsticeLogo,
    metaTitle: "Solstice Airdrop - Liquidity Mining & Stablecoin Rewards | Cryloca.eu",
    metaDescription: "Complete social tasks, hold USX/eUSX stablecoins and supply liquidity on Solstice to earn substantial DeFi rewards.",
    metaKeywords: "solstice, liquidity mining, usx, eusx, stablecoin, defi, airdrop",
    fullDescription: "Solstice provides innovative stablecoin solutions with USX and eUSX, backed by over-collateralized positions. The airdrop campaign combines liquidity provision, token holding, and community engagement. Participants earn rewards through multiple streams with bonus multipliers for long-term holders.",
    requirements: [
      "Hold minimum 100 USX or eUSX tokens",
      "Provide liquidity to Solstice pools (minimum $200)",
      "Complete social media tasks (follow, retweet, like)",
      "Maintain positions for at least 30 days",
      "Join Telegram group and participate in discussions"
    ],
    rewards: "$SLSTC tokens proportional to contribution",
    endDate: "April 20, 2025"
  },
  {
    id: "13",
    slug: "hypereth",
    title: "HyperETH",
    shortDescription: "Trade Ethereum derivatives and earn rewards through referral program",
    category: "Trading",
    status: "active",
    logoUrl: hyperethLogo,
    metaTitle: "HyperETH Airdrop - Ethereum Trading & Referrals | Cryloca.eu",
    metaDescription: "Trade Ethereum derivatives on HyperETH and refer friends to earn bonus trading rewards and platform tokens.",
    metaKeywords: "hypereth, ethereum, eth, derivatives trading, referral, leverage, airdrop",
    fullDescription: "HyperETH specializes in Ethereum-focused trading with leverage up to 100x. The platform combines professional trading features with attractive reward programs. Traders earn points based on volume, with additional bonuses for successful referrals and consistent activity.",
    requirements: [
      "Register account and complete KYC",
      "Execute minimum $500 in trading volume",
      "Refer at least 3 active traders",
      "Maintain account activity for 60 days",
      "Follow on Twitter and join Telegram"
    ],
    rewards: "$HETH tokens + trading fee rebates",
    endDate: "May 31, 2025"
  },
  {
    id: "14",
    slug: "dydx",
    title: "dYdX",
    shortDescription: "Trade on leading perpetual DEX and compete for $3M in DYDX token rewards",
    category: "Trading",
    status: "active",
    logoUrl: dydxLogo,
    metaTitle: "dYdX Trading Competition - $3M DYDX Rewards | Cryloca.eu",
    metaDescription: "Trade perpetual contracts on dYdX to rank up and share $3M DYDX rewards. Professional decentralized trading with high liquidity.",
    metaKeywords: "dydx, perpetual trading, dex, competition, trading rewards, defi, airdrop",
    fullDescription: "dYdX is the leading decentralized exchange for perpetual trading with institutional-grade features. The platform is running a major trading competition with $3M in rewards. Traders compete based on volume, with additional bonuses for market making and consistent activity. The competition features multiple tiers ensuring rewards for traders of all sizes.",
    requirements: [
      "Connect wallet to dYdX platform",
      "Complete minimum trading volume of $1,000",
      "Maintain positive PnL throughout competition",
      "Follow dYdX on social media",
      "Complete identity verification for higher tier rewards"
    ],
    rewards: "Share of $3M DYDX token pool based on ranking",
    endDate: "March 31, 2025"
  },
  {
    id: "15",
    slug: "whitebit",
    title: "WhiteBIT",
    shortDescription: "Apply for exclusive WhiteBIT Nova Debit Card and receive welcome rewards",
    category: "Exchange",
    status: "active",
    logoUrl: whitebitLogo,
    metaTitle: "WhiteBIT Nova Debit Card Airdrop - Exclusive Rewards | Cryloca.eu",
    metaDescription: "Apply for the WhiteBIT Nova Debit Card and receive exclusive crypto rewards. Spend crypto anywhere Visa is accepted.",
    metaKeywords: "whitebit, debit card, crypto card, visa, exchange, spending rewards, airdrop",
    fullDescription: "WhiteBIT Nova is a crypto debit card that allows you to spend your cryptocurrency anywhere Visa is accepted. Early applicants receive welcome bonuses and reduced fees. The card features competitive cashback rates, instant crypto-to-fiat conversion, and no monthly fees for active users.",
    requirements: [
      "Register WhiteBIT account and complete KYC",
      "Apply for Nova Debit Card",
      "Fund account with minimum $100",
      "Activate card within 30 days of receipt",
      "Make first purchase using the card"
    ],
    rewards: "$50 welcome bonus + 2% cashback for 3 months",
    endDate: "Limited spots - First 10,000 applicants"
  },
  {
    id: "16",
    slug: "solpump",
    title: "SolPump",
    shortDescription: "Participate in hourly giveaways and grab free SOL tokens on Solana",
    category: "Solana",
    status: "active",
    logoUrl: solpumpLogo,
    metaTitle: "SolPump Airdrop - Hourly Free SOL Giveaways | Cryloca.eu",
    metaDescription: "Participate hourly in SolPump and grab free SOL tokens. Automated Solana airdrops with no complex requirements.",
    metaKeywords: "solpump, solana, sol, hourly giveaway, free tokens, airdrop",
    fullDescription: "SolPump runs automated hourly giveaways on the Solana blockchain, distributing SOL tokens to active community members. The platform gamifies crypto distribution with instant participation and transparent on-chain results. Regular participants earn multipliers for better chances to win.",
    requirements: [
      "Connect Solana wallet (Phantom or Solflare)",
      "Follow SolPump on Twitter",
      "Join Telegram announcement channel",
      "Participate in hourly giveaway (free entry)",
      "Hold SOL in wallet for gas fees"
    ],
    rewards: "Free SOL tokens - hourly distribution",
    endDate: "Ongoing campaign"
  },
  {
    id: "17",
    slug: "fatty",
    title: "FATTY",
    shortDescription: "Complete trading tasks, earn XP points, and collect exclusive cards in this trading bot ecosystem",
    category: "Trading Bot",
    status: "active",
    logoUrl: fattyLogo,
    metaTitle: "FATTY Trading Bot Airdrop - Earn XP & Cards | Cryloca.eu",
    metaDescription: "Sign up on FatBot, complete trading tasks, earn XP points and collect exclusive cards. Automated trading rewards system.",
    metaKeywords: "fatty, fatbot, trading bot, automation, tasks, xp, cards, airdrop",
    fullDescription: "FATTY is an advanced trading bot ecosystem that rewards users for engagement and trading activity. Earn XP by completing tasks, collect unique NFT cards that provide bonuses, and participate in leaderboard competitions. The platform combines automated trading with gamification for an engaging experience.",
    requirements: [
      "Sign up and link Telegram account",
      "Connect trading exchange API (read-only)",
      "Complete minimum 3 trading tasks",
      "Earn at least 500 XP points",
      "Collect at least 2 NFT cards"
    ],
    rewards: "$FATTY tokens based on XP + rare NFT cards",
    endDate: "Season 1 - June 15, 2025"
  },
  {
    id: "18",
    slug: "coinpilot",
    title: "Coinpilot",
    shortDescription: "Trade on advanced platform and grow your network through referrals for enhanced rewards",
    category: "Trading",
    status: "active",
    logoUrl: coinpilotLogo,
    metaTitle: "Coinpilot Airdrop - Trading Rewards & Referrals | Cryloca.eu",
    metaDescription: "Trade on Coinpilot advanced platform and refer friends to earn bonus trading rewards and platform tokens.",
    metaKeywords: "coinpilot, trading platform, referral program, trading rewards, airdrop",
    fullDescription: "Coinpilot offers advanced trading tools with AI-powered insights and automated strategies. The reward program combines trading volume incentives with referral bonuses. Users earn tokens proportional to their platform activity, with special bonuses for high-volume traders and successful referrals.",
    requirements: [
      "Create Coinpilot account with email verification",
      "Complete at least $250 in trading volume",
      "Refer minimum 2 friends who complete trades",
      "Use platform for 30 consecutive days",
      "Participate in trading competitions"
    ],
    rewards: "$CPLT tokens + trading fee discounts",
    endDate: "Q2 2025 - Rolling rewards"
  },
  {
    id: "19",
    slug: "reagent",
    title: "Reagent",
    shortDescription: "Connect wallet, complete social tasks, and compete for share of $25,000 prize pool",
    category: "DeFi",
    status: "active",
    logoUrl: reagentLogo,
    metaTitle: "Reagent Airdrop - $25,000 Prize Pool Giveaway | Cryloca.eu",
    metaDescription: "Connect wallet, complete social tasks and enter for a share of the $25,000 Reagent prize pool. Multiple winners guaranteed.",
    metaKeywords: "reagent, prize pool, giveaway, social tasks, defi, competition, airdrop",
    fullDescription: "Reagent is launching with a massive $25,000 giveaway to build its community. The protocol focuses on algorithmic market making and liquidity optimization. Winners are selected based on task completion and random lottery, ensuring fair distribution across all participant tiers.",
    requirements: [
      "Connect Web3 wallet (MetaMask, WalletConnect)",
      "Follow Reagent on Twitter and retweet announcement",
      "Join Discord server and verify role",
      "Complete all social media tasks (10+ tasks)",
      "Submit wallet address before deadline"
    ],
    rewards: "Share of $25,000 USDT prize pool (200 winners)",
    endDate: "March 25, 2025"
  },
  {
    id: "20",
    slug: "ultrasolid",
    title: "UltraSolid",
    shortDescription: "Provide liquidity to pools and expand network through referrals for DeFi rewards",
    category: "DeFi",
    status: "active",
    logoUrl: ultrasolidLogo,
    metaTitle: "UltraSolid Airdrop - Liquidity Mining & Referrals | Cryloca.eu",
    metaDescription: "Provide liquidity on UltraSolid DEX and refer friends to earn platform tokens. High APY with bonus rewards for early LPs.",
    metaKeywords: "ultrasolid, liquidity mining, dex, referral, yield farming, defi, airdrop",
    fullDescription: "UltraSolid is a next-generation DEX on Fantom with concentrated liquidity and advanced trading features. Liquidity providers earn trading fees plus additional token rewards. The referral program offers lifetime commissions on referred users' trading fees, creating passive income opportunities.",
    requirements: [
      "Provide liquidity to UltraSolid pools (minimum $100)",
      "Maintain LP position for at least 45 days",
      "Refer at least 5 friends who provide liquidity",
      "Stake LP tokens in reward farms",
      "Vote on governance proposals"
    ],
    rewards: "$ULTRA tokens + LP fee sharing",
    endDate: "Ongoing - Rewards vest over 6 months"
  },
];
