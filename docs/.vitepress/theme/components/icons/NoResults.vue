<script setup lang="ts">
import { ref, onMounted, computed, markRaw, shallowReadonly, watch } from 'vue';
import {
  bird,
  squirrel,
  rabbit,
  ghost,
  castle,
  drama,
  dog,
  cat,
  wandSparkles,
  save,
  snowflake,
  cake,
  fish,
  turtle,
  rat,
  worm,
  testTubeDiagonal,
  sword,
} from '../../../data/iconNodes';
import createLucideIcon from '@lucide/vue/src/createLucideIcon';
import { useEventListener } from '@vueuse/core';
import VPButton from 'vitepress/dist/client/theme-default/components/VPButton.vue';
import { IconNode } from '../../types';

const { searchQuery, isBrandSearch } = defineProps<{
  searchQuery: string;
  isBrandSearch: boolean;
}>();

defineEmits(['clear']);

interface Placeholder {
  title: string;
  message: string;
  icon: IconNode;
  finePrint?: string;
}

const brandPlaceholders: Placeholder[] = shallowReadonly([
  {
    title: '哇哦！这是一个吓人的品牌标志！',
    message:
      '[name] 和它的伙伴经常出没在这个搜索框里，但你永远找不到它们。',
    icon: markRaw(ghost),
  },
  {
    title: '谢谢你，马里奥！',
    message: '但是 [name] 在另一座城堡里！',
    icon: markRaw(castle),
  },
  {
    title: '[name] 其实试镜过我们的图标集',
    message: '……但没有收到回电。',
    icon: markRaw(drama),
  },
  {
    title: '如此搜索。非常 [name]。',
    message: '非常不在这里。太棒了。',
    icon: markRaw(dog),
  },
  {
    title: '我能有 [name] 吗？',
    message: '这里没有 [name] 给你。',
    icon: markRaw(cat),
  },
  {
    title: '正在加载 [name]...',
    message: '致命错误：我们的卡带里只有开源像素。',
    icon: markRaw(save),
  },
  {
    title: '[name] 不能通行',
    message: '不要在任何一天的黎明等待它的到来。',
    icon: markRaw(wandSparkles),
  },
  {
    title: '凛冬将至',
    message: '但 [name] 肯定不会。',
    icon: markRaw(snowflake),
  },
  {
    title: '蛋糕是个谎言',
    message: 'Lucide 里为 [name] 提供图标的承诺也是如此。',
    icon: markRaw(cake),
  },
  {
    title: '这不是 bug',
    message: '没有 [name] 图标本身就是一种特性。',
    icon: markRaw(worm),
  },
  {
    title: '实验室炸了',
    message: '我们试过把 [name] 和开源图标混在一起。',
    icon: markRaw(testTubeDiagonal),
  },
  {
    title: '独自上路很危险',
    message: '不如拿这个图标试试 - 它不是 [name]，但可能有帮助。',
    icon: markRaw(sword),
  },
]);

const notFoundPlaceholders: Omit<Placeholder, 'title'>[] = shallowReadonly([
  {
    message: '我们已经全局搜索过这个图标，但还是没找到。',
    icon: markRaw(bird),
  },
  {
    message: '我们检查了每一棵树。只有橡果，没有结果。',
    icon: markRaw(squirrel),
  },
  {
    message: '你已经钻得太深了 - 这个图标并不存在。',
    icon: markRaw(rabbit),
  },
  {
    message: '这个图标似乎从网里溜走了。',
    icon: markRaw(fish),
  },
  {
    message: '这个图标也许未来会存在……但现在还没到。',
    icon: markRaw(turtle),
  },
  {
    message: '糟了！这个图标似乎从缝隙里溜走了。',
    icon: markRaw(rat),
  },
]);

function randomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

const placeholderIcon = ref<HTMLElement>();
const placeholder = ref<Placeholder>();

watch(
  () => isBrandSearch,
  () => {
    placeholder.value = isBrandSearch
      ? {
          ...randomItem(brandPlaceholders),
          finePrint:
            'Lucide 不接受品牌标志，我们也不打算在未来添加它们。这是出于法律限制、设计一致性和维护成本等多方面考虑。',
        }
      : {
          title: `没有找到 “[name]” 的结果`,
          finePrint:
            '这个图标似乎还不存在……也许未来会有。你可以试试搜索相近词、浏览已有请求，或者创建一个新的请求。',
          ...randomItem(notFoundPlaceholders),
        };
  },
  { immediate: true },
);
const iconComponent = computed(() => createLucideIcon('placeholder', placeholder.value.icon));
const flip = ref(false);

onMounted(() => {
  useEventListener(document, 'mousemove', (mouseEvent) => {
    const { width, x } = placeholderIcon.value.getBoundingClientRect();

    const centerX = width / 2 + x;

    flip.value = !isBrandSearch && mouseEvent.x < centerX;
  });
});
</script>

<template>
  <div class="no-results">
    <component
      :is="iconComponent"
      class="placeholder-icon"
      ref="placeholderIcon"
      :class="{ flip }"
      :strokeWidth="1"
    />
    <h2 class="no-results-text">{{ placeholder.title.replace('[name]', searchQuery) }}</h2>
    <p class="no-results-message">
      {{ placeholder.message.replace('[name]', searchQuery) }}
    </p>
    <div class="divider"></div>
    <p
      v-if="placeholder.finePrint"
      class="no-results-fine-print"
    >
      {{ placeholder.finePrint }}
    </p>
    <VPButton
      v-if="isBrandSearch"
      text="前往 Simple Icons"
      theme="brand"
      :href="`https://simpleicons.org/?q=${searchQuery}`"
      target="_blank"
    />
    <VPButton
      v-else
      text="清除搜索并重试"
      theme="brand"
      @click="$emit('clear')"
    />
    <span class="text-divider">or</span>
    <VPButton
      v-if="isBrandSearch"
      text="阅读我们的品牌标志声明"
      theme="alt"
      href="https://github.com/lucide-icons/lucide/blob/main/BRAND_LOGOS_STATEMENT.md"
      target="_blank"
    />
    <VPButton
      v-else
      text="搜索 GitHub 问题"
      theme="alt"
      :href="`https://github.com/lucide-icons/lucide/issues?q=is%3Aopen+${searchQuery}`"
      target="_blank"
    />
  </div>
</template>

<style scoped>
.no-results {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-block: 48px;
}

.placeholder-icon {
  width: 96px;
  height: 96px;
  color: var(--vp-c-text-1);
}

.placeholder-icon.flip {
  transform: rotateY(180deg);
}

.no-results-text {
  line-height: 1.35;
  font-size: 24px;
  margin-top: 24px;
  margin-bottom: 8px;
  text-wrap: balance;
}

.no-results-message {
  text-wrap: balance;
}

.no-results-fine-print {
  max-inline-size: 60ch;
  font-size: 14px;
  margin-bottom: 32px;
  color: var(--vp-c-text-2);
  text-wrap: balance;
}

.text-divider {
  margin: 12px 0;
  font-size: 16px;
  color: var(--vp-c-neutral);
}
.divider {
  margin: 24px auto 18px;
  width: 64px;
  height: 1px;
  background-color: var(--vp-c-divider);
}
</style>
