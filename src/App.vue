<template>
  <ConfigProvider
    :theme="theme"
    :locale="locale"
    :componentSize="store.$state.size"
    :direction="store.$state.direction"
    :wave="{
      disabled: !store.$state.wave,
    }"
    :virtual="store.$state.virtual"
    :autoInsertSpaceInButton="store.$state.autoInsertSpaceInButton"
  >
    <HomeVue />
  </ConfigProvider>
</template>

<script setup lang="ts">
import { ConfigProvider } from 'ant-design-vue';
import type { ThemeConfig } from 'ant-design-vue/es/config-provider/context';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import usePageStore from './store/page';
import HomeVue from './views/Home.vue';

const locale = ref(zhCN);
const store = usePageStore();

const theme = computed((): ThemeConfig => {
  return {
    token: {
      borderRadius: 4,
      fontSize: 12,
      colorPrimary: store.$state.theme,
    },
  };
});
</script>

<style lang="scss" scoped>
.windows {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}
</style>
