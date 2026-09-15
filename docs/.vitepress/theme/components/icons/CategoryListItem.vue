<script setup lang="ts">
import { useCategoryView } from '../../composables/useCategoryView';

const categoryTitleTranslations: Record<string, string> = {
  Accessibility: '无障碍',
  'Accounts & access': '账户与访问',
  Animals: '动物',
  Arrows: '箭头',
  Buildings: '建筑',
  Charts: '图表',
  Communication: '通信',
  Connectivity: '连接',
  Cursors: '光标',
  Design: '设计',
  'Coding & development': '编码与开发',
  Devices: '设备',
  Emoji: '表情符号',
  'File icons': '文件图标',
  Finance: '金融',
  'Food & beverage': '食品与饮料',
  Gaming: '游戏',
  Home: '家居',
  Layout: '布局',
  Mail: '邮件',
  Mathematics: '数学',
  Medical: '医疗',
  Multimedia: '多媒体',
  Nature: '自然',
  'Navigation & Places': '导航与地点',
  Notification: '通知',
  People: '人物',
  Photography: '摄影',
  Science: '科学',
  Seasons: '季节',
  Security: '安全',
  Shapes: '形状',
  Shopping: '购物',
  Social: '社交',
  Sports: '运动',
  Sustainability: '可持续发展',
  'Text formatting': '文本格式',
  'Time & calendar': '时间与日历',
  Tools: '工具',
  Transportation: '交通',
  Travel: '旅行',
  Weather: '天气',
};

function translateCategoryTitle(title: string) {
  return categoryTitleTranslations[title] ?? title;
}

interface Header {
  level: number;
  title: string;
  slug: string;
  iconCount: number;
  link: string;
  name: string;
  children: Header[];
}

type MenuItem = Omit<Header, 'slug' | 'children'> & {
  children?: MenuItem[];
};

defineProps<{
  headers: MenuItem[];
  root?: boolean;
}>();

const { selectedCategory } = useCategoryView();

function onClick(categoryName: string) {
  selectedCategory.value = categoryName;

  const heading = document.querySelector<HTMLAnchorElement>(categoryName);
  heading?.focus();

  const url = new URL(window.location.href);
  url.pathname = '/icons/categories';
  url.hash = categoryName;
  window.history.pushState({}, '', url);
}
</script>

<template>
  <ul :class="root ? 'root' : 'nested'">
    <li v-for="{ children, link, title, iconCount, name } in headers">
      <a
        class="outline-link"
        :href="link"
        @click="onClick(name)"
        :title="translateCategoryTitle(title)"
        :class="{
          inactive: iconCount === 0,
        }"
      >
        <span>
          {{ translateCategoryTitle(title) }}
        </span>
        <span
          class="icon-count"
          :aria-label="`${translateCategoryTitle(title)}图标数量`"
        >
          {{ iconCount }}
        </span>
      </a>
    </li>
  </ul>
</template>

<style scoped>
.root {
  position: relative;
  z-index: 1;
}

.nested {
  padding-left: 13px;
}

.outline-link {
  display: flex;
  align-items: baseline;
  line-height: 28px;
  color: var(--vp-c-text-2);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color 0.5s;
  font-weight: 500;
}

.outline-link:hover,
.outline-link.active {
  color: var(--vp-c-text-1);
  transition: color 0.25s;
}

.outline-link.inactive {
  color: var(--vp-c-text-4);
  pointer-events: none;
}

.outline-link.nested {
  padding-left: 13px;
}

.icon-count {
  opacity: 0.5;
  margin-left: auto;
  font-size: 11px;
  font-weight: 400;
}

.outline-link.inactive .icon-count {
  opacity: 0;
}
</style>
