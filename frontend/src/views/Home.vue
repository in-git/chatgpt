<template>
  <div class="gpt-home flex-s flex">
    <div class="core flex relative">
      <SidebarVue />
      <Content />
      <Transition
        enter-active-class="animate__animated animate__slideInDown"
        leave-active-class="animate__animated animate__slideOutDown"
      >
        <SettingVue v-if="showSetting"></SettingVue>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import Content from './content/Content.vue';
import SettingVue from './content/setting/Setting.vue';
import { showSetting } from './content/setting/setting';
import SidebarVue from './sidebar/Sidebar.vue';
</script>
<style scoped lang="scss">
.gpt-home {
  width: 100%;
  height: 100vh;
  padding: 20px;
  background: url('../assets/background.webp');
  .core {
    width: 1000px;
    height: 700px;
    background: #fff;
    border-radius: var(--radius);
  }
}
</style>
