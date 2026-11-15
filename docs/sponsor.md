---
title: 赞助
description: 赞助 Lucide，支持图标审核、新软件包和可靠发布。可在 Open Collective 或 GitHub Sponsors 选择赞助档位。
layout: page
faq:
  - question: Lucide 会一直免费吗？
    answer: 会。无论你是否赞助，所有图标都将继续以 ISC 许可证免费开源。
  - question: 选择 Open Collective 还是 GitHub Sponsors？
    answer: 两个平台提供相同的档位。Open Collective 支持以欧元通过银行卡、银行转账和 PayPal 付款，并公开账目。GitHub Sponsors 使用你现有的 GitHub 账号以美元扣款，也支持为组织开具发票。
  - question: 可以按年付款吗？
    answer: Gold 和 Platinum 档位支持按年付款，金额为月付的 10 倍，相当于免付两个月，并可获得一张发票。
  - question: 我的标志什么时候会显示？
    answer: 标志取自你的 Open Collective 或 GitHub 个人资料。lucide.dev 会在一天内更新。npm README 使用托管图片，因此无需发布新版本即可更新。
  - question: 赞助能让我的图标被采纳吗？
    answer: 不能。合作伙伴提交的图标 PR 会优先审核，但每个图标都必须遵守相同的设计指南并接受社区审查。
  - question: 可以随时取消吗？
    answer: 可以。你可以随时在 Open Collective 或 GitHub Sponsors 取消定期赞助。
---

<script setup>
import Faq from '~/.vitepress/theme/components/base/Faq.vue'
import SponsorSection from '~/.vitepress/theme/components/sponsor/SponsorSection.vue'
import SponsorHero from '~/.vitepress/theme/components/sponsor/SponsorHero.vue'
import SponsorAmountPicker from '~/.vitepress/theme/components/sponsor/SponsorAmountPicker.vue'
import SponsorTiers from '~/.vitepress/theme/components/sponsor/SponsorTiers.vue'
import SponsorWall from '~/.vitepress/theme/components/sponsor/SponsorWall.vue'
import SponsorFundingUses from '~/.vitepress/theme/components/sponsor/SponsorFundingUses.vue'
import SponsorCta from '~/.vitepress/theme/components/sponsor/SponsorCta.vue'
</script>

<SponsorHero />
<SponsorAmountPicker />
<SponsorTiers />
<SponsorWall />
<SponsorFundingUses />
<SponsorSection narrow class="faq-section">
  <Faq title="常见问题" />
</SponsorSection>
<SponsorCta />

<style scoped>
.faq-section {
  padding-block: 96px;
}
</style>
