<template>
  <div class="phone-head system-head">
    <div class="flex align-center gc-4">
      <img :src="logoPng" width="24" class="logo" />
      CHATGPT
    </div>
    <div class="flex gc-4 text-16">
      <div class="system-icon" @click="createSession" v-for="(item, key) in functions" :key="key">
        <component :is="item.icon"></component>
      </div>
    </div>
  </div>
  <div class="session flex-1">
    <Sidebar />
  </div>
</template>

<script setup lang="ts">
import logoPng from '@/assets/logo.png';
import { clearAll, createSession } from '@/views/sidebar/sidebar';
import Sidebar from '@/views/sidebar/Sidebar.vue';
import { ClearOutlined, PlusOutlined, SettingOutlined } from '@ant-design/icons-vue';
import { displaySetup } from '../head/data';

const functions = [
  {
    icon: markRaw(PlusOutlined),
    action() {
      createSession();
    },
  },
  {
    icon: markRaw(ClearOutlined),
    action() {
      clearAll();
    },
  },
  {
    icon: markRaw(SettingOutlined),
    action() {
      displaySetup.value = true;
    },
  },
];
</script>

<style lang="scss" scoped>
.session {
  height: calc(100%);
  overflow-y: auto;
  li {
    padding: 4px 0;
  }
  .index {
    $wh: 36px;
    width: $wh;
    height: $wh;
    border-radius: var(--radius);
    background-color: #f5f2f3;
  }
}
.phone-head {
  background-color: #f1f1f1;
  $hh: 48px;
  line-height: $hh;
  height: $hh;
  position: sticky;
  top: 0;
  z-index: 100;
  .logo {
    border-radius: 4px;
  }
}
.gpt-sidebar {
  width: 100vw !important;
}
::v-deep(.head) {
  display: none !important;
}
</style>
