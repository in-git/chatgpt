<template>
  <div class="content-head flex justify-between">
    <div>{{ conversation.title || 'empty' }}</div>
    <div class="flex align-center gc-4">
      <template v-for="(item, key) in options" :key="key">
        <a-tooltip :title="item.tips">
          <div class="system-icon" @click="item.action">
            <component :is="item.icon"></component>
          </div>
        </a-tooltip>
      </template>
      <template v-if="pageStore.$state.screenType === 0">
        <a-tooltip title="最大化">
          <div class="system-icon" @click="pageStore.$state.screenType = 1">
            <FullscreenOutlined />
          </div>
        </a-tooltip>
      </template>

      <template v-else>
        <a-tooltip title="收起">
          <div class="system-icon" @click="pageStore.$state.screenType = 0">
            <FullscreenExitOutlined />
          </div>
        </a-tooltip>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import usePageStore from '@/store/page';
import { conversation } from '@/views/sidebar/sidebar';
import { FullscreenExitOutlined, FullscreenOutlined, SettingOutlined } from '@ant-design/icons-vue';
import { showSetting } from '../setting/setting';

const pageStore = usePageStore();

const options = [
  {
    icon: markRaw(SettingOutlined),
    tips: '打开设置',
    action() {
      showSetting.value = true;
    },
  },
];
</script>

<style lang="scss" scoped>
.content-head {
  line-height: 32px;
  padding: 0 8px;
  border-bottom: 1px solid #ddd;
  .system-icon {
    &:hover {
      background: #e7e7e7;
    }
  }
}
</style>
