<template>
  <div class="gpt-home">
    <div class="core flex relative" :style="style">
      <SidebarVue />
      <Content />
      <Transition
        enter-active-class="animate__animated animate__zoomIn"
        leave-active-class="animate__animated animate__zoomOut"
      >
        <SettingVue v-if="showSetting"></SettingVue>
      </Transition>
    </div>
  </div>

  <div class="phone flex flex-s">暂时不支持小屏显示</div>
</template>

<script setup lang="ts">
import usePageStore from '@/store/page';
import type { CSSProperties } from 'vue';
import Content from './content/Content.vue';
import SettingVue from './content/setting/Setting.vue';
import { showSetting } from './content/setting/setting';
import SidebarVue from './sidebar/Sidebar.vue';

const pageStore = usePageStore();
const screenOptions = [
  {
    width: 1000,
    height: 700,
  },
  {
    width: window.innerWidth * 0.8,
    height: window.innerHeight * 0.9,
  },
];
const style = computed((): CSSProperties => {
  const wh = screenOptions[pageStore.$state.screenType];
  return {
    width: `${wh.width}px`,
    height: `${wh.height}px`,
    left: `${window.innerWidth / 2 - wh.width / 2}px`,
    top: `${window.innerHeight / 2 - wh.height / 2}px`,
  };
});
</script>
<style scoped lang="scss">
.gpt-home {
  width: 100%;
  height: 100vh;
  padding: 20px;
  background: url('../assets/background.webp');

  .core {
    // width: 1000px;
    // height: 700px;
    transition: var(--transition);
    position: fixed;
    background: #fff;
    border-radius: var(--radius);
  }
}
.phone {
  font-size: 24px;
  font-weight: bold;
  height: 100vh;
  width: 100vw;
  color: #999;
}
@media screen and (max-width: 1000px) {
  .gpt-home {
    display: none;
  }
  .phone {
    display: flex;
  }
}
@media screen and (min-width: 1000px) {
  .phone {
    display: none;
  }
  .gpt-home {
    display: block;
  }
}
</style>
