<script setup lang="ts">
import { ref } from 'vue';
import { useScroll } from '@vueuse/core';
import VPButton from 'vitepress/dist/client/theme-default/components/VPButton.vue';
import Icon from '@lucide/vue/src/Icon';
import { chevronLeft, chevronRight } from '../../../data/iconNodes';
import SponsorSection from './SponsorSection.vue';
import SponsorSectionHeader from './SponsorSectionHeader.vue';
import SponsorTierCard from './SponsorTierCard.vue';
import { PARTNER_EMAIL, TIERS } from './tiers';

// Card width plus the gap between cards.
const SCROLL_STEP = 316;

const track = ref<HTMLElement | null>(null);
const { arrivedState } = useScroll(track);

function scrollTrack(direction: 1 | -1) {
  track.value?.scrollBy({ left: direction * SCROLL_STEP, behavior: 'smooth' });
}
</script>

<template>
  <SponsorSection
    id="tiers"
    class="tiers"
  >
    <div class="tiers-header">
      <SponsorSectionHeader
        title="赞助档位"
        description="个人有两个档位，企业有三个档位。每升一档都会增加一项清晰的展示权益，且权益逐级累加。Open Collective（欧元）和 GitHub Sponsors（美元）提供相同档位。"
        class="tiers-title"
      />
      <div class="track-controls">
        <button
          type="button"
          class="track-button"
          aria-label="上一组档位"
          :disabled="arrivedState.left"
          @click="scrollTrack(-1)"
        >
          <Icon
            :iconNode="chevronLeft"
            name="chevron-left"
            :size="20"
            aria-hidden="true"
          />
        </button>
        <button
          type="button"
          class="track-button"
          aria-label="下一组档位"
          :disabled="arrivedState.right"
          @click="scrollTrack(1)"
        >
          <Icon
            :iconNode="chevronRight"
            name="chevron-right"
            :size="20"
            aria-hidden="true"
          />
        </button>
      </div>
    </div>

    <div class="track-wrapper">
      <div
        ref="track"
        class="track"
        role="region"
        aria-label="赞助档位"
        tabindex="0"
      >
        <SponsorTierCard
          v-for="tier in TIERS"
          :key="tier.id"
          :tier="tier"
        />
      </div>
      <div
        class="fade fade-left"
        :class="{ visible: !arrivedState.left }"
        aria-hidden="true"
      />
      <div
        class="fade fade-right"
        :class="{ visible: !arrivedState.right }"
        aria-hidden="true"
      />
    </div>

    <div class="partner">
      <div class="partner-text">
        <h3 class="partner-title">成为合作伙伴？欢迎联系。</h3>
        <p class="partner-description">
          每次仅与一位合作伙伴合作，金额可协商。权益包括独家“由……支持”展示位、在发布公告中展示标志、年度路线图沟通会，以及优先审核你的图标 PR。
        </p>
      </div>
      <VPButton
        :href="`mailto:${PARTNER_EMAIL}`"
        text="联系我们"
        theme="alt"
        target="_self"
      />
    </div>

    <p class="disclaimer">
      赞助不代表图标一定会被采纳，也不会带来设计决策权。每个图标都遵守相同的指南并接受社区审查。通过 GitHub Sponsors 使用发票付款，可免除部分组织服务费。
    </p>
  </SponsorSection>
</template>

<style scoped>
.tiers {
  padding-top: 96px;
  padding-bottom: 48px;
}

.tiers-header {
  display: flex;
  flex-wrap: wrap;
  gap: 16px 24px;
  align-items: flex-end;
  justify-content: space-between;
}

.tiers-title {
  flex: 999 1 480px;
  min-width: 0;
}

.track-controls {
  display: flex;
  gap: 8px;
}

.track-button {
  width: 44px;
  height: 44px;
  border-radius: 999px;
  border: 1px solid var(--vp-c-border);
  background-color: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    background-color 0.25s,
    opacity 0.25s;
}

.track-button:not(:disabled):hover {
  background-color: var(--vp-c-bg-soft);
}

.track-button:disabled {
  opacity: 0.4;
  cursor: default;
}

.track-wrapper {
  position: relative;
}

.track {
  display: flex;
  gap: 16px;
  align-items: stretch;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  padding-bottom: 12px;
  padding-right: 24px;
  scroll-padding-right: 24px;
  scrollbar-width: none;
  scroll-snap-align: center;
  scroll-padding-left: 24px;
  scroll-padding-right: 24px;
}

.track::-webkit-scrollbar {
  display: none;
}

.track:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 4px;
  border-radius: 12px;
}

.fade {
  position: absolute;
  top: 0;
  bottom: 12px;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s;
}

.fade.visible {
  opacity: 1;
}

.fade-left {
  left: 0;
  width: 48px;
  background: linear-gradient(to left, transparent, var(--vp-c-bg));
}

.fade-right {
  right: 0;
  width: 48px;
  background: linear-gradient(to right, transparent, var(--vp-c-bg) 85%);
}

@media (min-width: 640px) {
  .fade-left {
    width: 96px;
  }

  .fade-right {
    width: 160px;
  }

  .track {
    scroll-snap-align: start;
  }
}

.partner {
  padding: 24px 28px;
  border-radius: 16px;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  align-items: center;
  justify-content: space-between;
}

.partner-text {
  flex: 999 1 480px;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.partner-title {
  margin: 0;
  font-size: 20px;
  line-height: 28px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.partner-description,
.disclaimer {
  margin: 0;
  font-size: 14px;
  line-height: 22px;
  color: var(--vp-c-text-2);
}

.disclaimer {
  margin-top: -8px;
  font-size: 13px;
  line-height: 20px;
}
</style>
