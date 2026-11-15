<script setup lang="ts">
import Icon from '@lucide/vue/src/Icon';
import { gitPullRequest, server, shapes, users } from '../../../data/iconNodes';
import SponsorSection from './SponsorSection.vue';
import SponsorSectionHeader from './SponsorSectionHeader.vue';

const uses = [
  {
    title: '维护与审核',
    description: '审核图标 PR、修复问题，并为所有软件包发布新版本。',
    icon: gitPullRequest,
    name: 'git-pull-request',
  },
  {
    title: '新图标与软件包',
    description: '设计社区需要的图标，并支持新的框架。',
    icon: shapes,
    name: 'shapes',
  },
  {
    title: '贡献者',
    description: '支持参与 Lucide 设计、审核和文档编写的成员。',
    icon: users,
    name: 'users',
  },
  {
    title: '基础设施',
    description: '承担 lucide.dev、搜索、持续集成和团队日常工具的托管费用。',
    icon: server,
    name: 'server',
  },
];
</script>

<template>
  <SponsorSection band>
    <SponsorSectionHeader
      title="赞助资金的用途"
      description="Lucide 将资金存放在 Open Collective，所有支出均公开可查。"
    />
    <div class="uses">
      <div
        v-for="use in uses"
        :key="use.title"
        class="use"
      >
        <div class="icon-tile">
          <Icon
            :iconNode="use.icon"
            :name="use.name"
            :size="22"
            aria-hidden="true"
          />
        </div>
        <h3 class="use-title">{{ use.title }}</h3>
        <p class="use-description">{{ use.description }}</p>
      </div>
    </div>
  </SponsorSection>
</template>

<style scoped>
.uses {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
}

.use {
  padding: 24px;
  border-radius: 12px;
  background-color: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.icon-tile {
  width: 44px;
  height: 44px;
  border-radius: 8px;
  background-color: var(--vp-c-default-soft);
  color: var(--sponsor-accent);
  display: flex;
  align-items: center;
  justify-content: center;
}

.use-title {
  margin: 0;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.use-description {
  margin: 0;
  font-size: 14px;
  line-height: 24px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}
</style>
