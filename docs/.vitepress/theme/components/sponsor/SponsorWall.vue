<script setup lang="ts">
import SponsorSection from './SponsorSection.vue';
import SponsorSectionHeader from './SponsorSectionHeader.vue';
import SponsorLogoGrid from './SponsorLogoGrid.vue';
import SponsorAvatars from './SponsorAvatars.vue';
</script>

<template>
  <SponsorSection
    id="sponsors"
    class="wall"
  >
    <SponsorSectionHeader
      title="赞助者"
      description="感谢每一位支持 Lucide 持续发展的赞助者。"
      class="wall-header"
    />
    <SponsorLogoGrid
      tier="platinum"
      :placeholders="1"
    />
    <SponsorLogoGrid
      tier="gold"
      :placeholders="2"
    />
    <SponsorLogoGrid tier="bronze" />
    <SponsorAvatars />
  </SponsorSection>
</template>

<style scoped>
.wall {
  padding-top: 48px;
  padding-bottom: 96px;
}

.wall-header {
  max-width: none;
  padding-top: 24px;
  border-top: 1px solid var(--vp-c-divider);
}
</style>
