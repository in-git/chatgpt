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
    <router-view />
  </ConfigProvider>
</template>

<script setup lang="ts">
import { ConfigProvider } from 'ant-design-vue';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import { pageStore } from './store/page/utils';

const locale = ref(zhCN);
const store = pageStore();

const theme = computed(() => {
  return {
    token: {
      colorPrimary: store.$state.theme,
      borderRadius: 4,
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
