export const OPEN_COLLECTIVE_URL = 'https://opencollective.com/lucide-icons';
export const GITHUB_SPONSORS_URL = 'https://github.com/sponsors/lucide-icons';
export const PARTNER_EMAIL = 'info@lucide.dev';

export type TierId = 'supporter' | 'backer' | 'bronze' | 'gold' | 'platinum';

export interface Tier {
  id: TierId;
  name: string;
  /** Monthly amount in euros. */
  monthly: number;
  /** Yearly amount in euros, for tiers that can be paid yearly. */
  yearly?: number;
  audience: string;
  /** One-sentence summary of the perks, used in the amount picker. */
  summary: string;
  /** Perks this tier adds on top of the previous one. */
  perks: string[];
  featured?: boolean;
  /**
   * Tier slug on Open Collective. Open the tier on opencollective.com/lucide-icons and copy
   * it from the "Contribute" link, e.g. `basic-73095` from
   * https://opencollective.com/lucide-icons/contribute/basic-73095/checkout
   */
  openCollectiveTier: string;
  /**
   * Tier id on GitHub Sponsors. Open the tier on github.com/sponsors/lucide-icons and copy
   * the `tier_id` from its link, e.g. `671689` from
   * https://github.com/sponsors/lucide-icons/sponsorships?tier_id=671689
   */
  githubSponsorsTierId: number;
}

export const TIERS: Tier[] = [
  {
    id: 'supporter',
    name: 'Supporter',
    monthly: 5,
    audience: '面向个人',
    summary:
      '在 GitHub 上显示赞助者徽章、在 Discord 中获得赞助者身份组，并在 lucide.dev/sponsor 展示你的头像。',
    perks: [
      '在 GitHub 上显示赞助者徽章',
      '在 Discord 中获得赞助者身份组',
      '在 lucide.dev/sponsor 展示小尺寸头像',
    ],
    openCollectiveTier: 'basic-73095',
    githubSponsorsTierId: 671689,
  },
  {
    id: 'backer',
    name: 'Backer',
    monthly: 20,
    audience: '面向个人及自由职业者',
    summary: '包含 Supporter 档位的全部权益，并在 GitHub 主 README 中展示小尺寸头像或标志。',
    perks: ['在 GitHub 主 README 中展示小尺寸头像或标志'],
    openCollectiveTier: 'awesome-backer-73677',
    githubSponsorsTierId: 671692,
  },
  {
    id: 'bronze',
    name: 'Bronze',
    monthly: 100,
    audience: '面向小型企业和初创公司',
    summary: '在 lucide.dev/sponsor 和所有 npm README 中展示小尺寸标志，并赠送一套贴纸。',
    perks: [
      '在 lucide.dev/sponsor 展示小尺寸标志',
      '在所有 npm 软件包 README 中展示小尺寸标志',
      '免费赠送 Lucide 贴纸套装',
    ],
    openCollectiveTier: 'donation-55643',
    githubSponsorsTierId: 675253,
  },
  {
    id: 'gold',
    name: 'Gold',
    monthly: 500,
    yearly: 5000,
    audience: '面向在产品中使用 Lucide 的企业',
    summary: '在 lucide.dev 首页和文档侧边栏展示中尺寸标志，并赠送一件欢迎 T 恤。',
    perks: [
      '在 GitHub 主 README 中展示中尺寸标志',
      '在所有 npm 软件包 README 中展示中尺寸标志',
      '在 lucide.dev 首页赞助商栏和文档侧边栏展示中尺寸标志',
      '在 lucide.dev/sponsor 展示中尺寸标志',
      '赠送一件欢迎 T 恤',
    ],
    featured: true,
    openCollectiveTier: 'champions-circle-73678',
    githubSponsorsTierId: 675254,
  },
  {
    id: 'platinum',
    name: 'Platinum',
    monthly: 1000,
    yearly: 10000,
    audience: '面向大型企业和开发工具团队',
    summary:
      '首页顶部展示位、图标搜索页标志、维护者专属私密频道，以及价值 100 美元的周边礼品券。',
    perks: [
      '在首页顶部展示标志',
      '在 GitHub 主 README 顶部展示大尺寸标志',
      '在所有 npm 软件包 README 顶部展示大尺寸标志',
      '在 lucide.dev 首页赞助商栏和文档侧边栏展示大尺寸标志',
      '在图标搜索页展示标志',
      '在 X 和 Bluesky 发布专属欢迎帖',
      '与维护者交流的私密频道',
      '价值 100 美元的周边商店礼品券',
    ],
    openCollectiveTier: 'platinum-107266',
    githubSponsorsTierId: 675255,
  },
];

export const getTier = (id: TierId) => TIERS.find((tier) => tier.id === id)!;

/** The tier before this one, whose perks it inherits. */
export const getPreviousTier = (id: TierId) => TIERS[TIERS.findIndex((tier) => tier.id === id) - 1];

/** The highest tier a monthly amount qualifies for, or `null` below the lowest tier. */
export function getTierForAmount(monthly: number) {
  return [...TIERS].reverse().find((tier) => monthly >= tier.monthly) ?? null;
}

/**
 * The highest tier a yearly total qualifies for, or `null` below the lowest tier. Tiers with a
 * yearly price (two months free) count that price, so a yearly Gold sponsor isn't listed as Bronze.
 */
export function getTierForYearlyAmount(yearly: number) {
  return [...TIERS].reverse().find((tier) => yearly >= (tier.yearly ?? tier.monthly * 12)) ?? null;
}

export type Frequency = 'monthly' | 'once';

const getOpenCollectiveParams = (amount: number, frequency: Frequency) =>
  new URLSearchParams({
    interval: frequency === 'monthly' ? 'month' : 'oneTime',
    amount: String(amount),
    contributeAs: 'me',
  });

/** Checkout links for a tier, or the general sponsor pages without a tier. */
export function getTierLinks(tier?: Tier) {
  if (!tier) {
    return { openCollective: OPEN_COLLECTIVE_URL, githubSponsors: GITHUB_SPONSORS_URL };
  }

  const openCollectiveParams = getOpenCollectiveParams(tier.monthly, 'monthly');

  return {
    openCollective: `${OPEN_COLLECTIVE_URL}/contribute/${tier.openCollectiveTier}/checkout?${openCollectiveParams}`,
    githubSponsors: `${GITHUB_SPONSORS_URL}/sponsorships?tier_id=${tier.githubSponsorsTierId}`,
  };
}

/** Checkout links prefilled with a custom amount and frequency. */
export function getAmountLinks(amount: number, frequency: Frequency) {
  const openCollectiveParams = getOpenCollectiveParams(amount, frequency);
  const githubSponsorsParams = new URLSearchParams({
    frequency: frequency === 'monthly' ? 'recurring' : 'one-time',
    amount: String(amount),
  });

  return {
    openCollective: `${OPEN_COLLECTIVE_URL}/donate?${openCollectiveParams}`,
    githubSponsors: `${GITHUB_SPONSORS_URL}/sponsorships?${githubSponsorsParams}`,
  };
}

export const formatEuro = (amount: number) => `€${amount.toLocaleString('en-US')}`;
