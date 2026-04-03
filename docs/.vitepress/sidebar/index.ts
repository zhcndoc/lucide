import { DefaultTheme, UserConfig } from 'vitepress';
import { reactSidebar } from './react';
import { vueSidebar } from './vue';
import { svelteSidebar } from './svelte';
import { lucideSidebar } from './lucide';
import { solidSidebar } from './solid';
import { preactSidebar } from './preact';
import { reactNativeSidebar } from './react-native';
import { astroSidebar } from './astro';
import { resourcesSidebar } from './resources';
import { angularSidebar } from './angular';
import { lucideStaticSidebar } from './static';

type Sidebar = UserConfig<DefaultTheme.Config>['themeConfig']['sidebar'];

export const guideSidebarTop: DefaultTheme.SidebarItem[] = [
  {
    text: '入门',
    items: [
      { text: '介绍', link: '/guide/' },
      { text: 'Lucide V1', link: '/guide/version-1' },
      { text: '安装', link: '/guide/installation' },
    ],
  },
];

const sidebar: Sidebar = {
  '/guide': [{ text: '', link: '/' }],
  '/guide/lucide/': lucideSidebar,
  '/guide/react/': reactSidebar,
  '/guide/vue/': vueSidebar,
  '/guide/svelte/': svelteSidebar,
  '/guide/solid/': solidSidebar,
  '/guide/astro/': astroSidebar,
  '/guide/preact/': preactSidebar,
  '/guide/react-native/': reactNativeSidebar,
  '/guide/angular/': angularSidebar,
  '/guide/static/': lucideStaticSidebar,
  '/community': resourcesSidebar,
  '/contribute': resourcesSidebar,
  '/license': resourcesSidebar,
  '/code-of-conduct': resourcesSidebar,
  '/brand-logo-statement': resourcesSidebar,
  // This should be here to keep the sidebar shown on the icons page
  icons: [{ text: '', link: '/' }],
};

export default sidebar;
