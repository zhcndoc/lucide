<script setup lang="ts">
import HomeContainer from './HomeContainer.vue'
import HomeSectionTitle from './HomeSectionTitle.vue'
import { useRouter } from 'vitepress';
import { data } from './HomePackagesSection.data'
import VPButton from 'vitepress/dist/client/theme-default/components/VPButton.vue';

const { go } = useRouter()
</script>

<template>
  <HomeContainer>
    <HomeSectionTitle>适用于：</HomeSectionTitle>
    <div class="packages-list">
      <a
        v-for="{ name, logo, logoDark } in data.packages"
        :href="`/guide/packages/${name}`"
        class="package-logo"
        :aria-label="`了解有关 ${name} 包的更多信息`"
        @click.prevent="go(`/guide/packages/${name}`)"
      >
        <img
          :src="logo"
          :class="{ light: logoDark, 'image-logo': true }"
          :alt="`${name} 标志`"
          loading="lazy"
        />

        <img
          v-if="logoDark"
          :src="logoDark"
          :alt="`${name} 标志`"
          class="image-logo dark"
          loading="lazy"
        />
      </a>
    </div>
    <div class="more-button-wrapper">
      <VPButton text="还有更多" href="/packages" theme="alt" class="more-button"/>
    </div>
  </HomeContainer>
</template>

<style scoped>

.image-logo {
  object-fit: contain;
  width: 36px;
  height: 36px;
}

.packages-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 -0.5rem;
  gap: 16px;
}

.more-button-wrapper {
  margin-top: 24px;
  display: flex;
  justify-content: center;
}

.package-logo {
  transition: opacity ease-in .15s;
}

.package-logo:hover {
  opacity: .6;
}

html.dark .image-logo.light {
  display: none;
}
html:not(.dark) .image-logo.dark {
  display: none;
}
</style>
