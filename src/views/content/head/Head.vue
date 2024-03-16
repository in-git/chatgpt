<template>
  <div class="content-head flex justify-between align-center">
    <div class="flex gc-4">
      <a-breadcrumb>
        <a-breadcrumb-item>{{ configStore.$state.model }}</a-breadcrumb-item>
        <a-breadcrumb-item>
          {{ conversation.title || 'empty' }}
        </a-breadcrumb-item>
      </a-breadcrumb>
    </div>

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
      <a-popover trigger="click" placement="bottomRight">
        <a-tooltip title="关于">
          <div class="system-icon">
            <InfoCircleOutlined />
          </div>
        </a-tooltip>
        <template #content>
          <About></About>
        </template>
      </a-popover>
    </div>
  </div>
</template>

<script setup lang="ts">
import useConfigStore from '@/store/config/config';
import usePageStore from '@/store/page';
import { conversation } from '@/views/sidebar/sidebar';
import {
  FullscreenExitOutlined,
  FullscreenOutlined,
  InfoCircleOutlined,
  SettingOutlined,
} from '@ant-design/icons-vue';
import { showSetting } from '../setting/setting';
import About from './About.vue';

const configStore = useConfigStore();
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
  height: 32px;
  border-bottom: 1px solid #ddd;
  .system-icon {
    &:hover {
      background: #e7e7e7;
    }
  }
}
</style>
