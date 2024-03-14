<template>
  <div class="settings" v-draggable>
    <div class="setting-head system-head px-8" data-drag>
      <div>系统设置</div>
      <div class="system-icon">
        <CloseOutlined />
      </div>
    </div>

    <div class="p-8">
      <a-segmented v-model:value="current" :options="data"></a-segmented>
      <div class="mt-8">
        <SystemVue v-if="current === 'system'" />
        <AdvanceVue v-else-if="current === 'advance'" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SegmentedOption } from 'ant-design-vue/es/segmented/src/segmented';
import AdvanceVue from './advance/Advance.vue';
import SystemVue from './system/System.vue';

const data: SegmentedOption[] = [
  {
    title: '系统设置',
    label: '系统设置',
    value: 'system',
  },
  {
    label: '高级设置',
    title: '高级设置',
    value: 'advance',
  },
];

const current = ref('advance');
</script>

<style lang="scss" scoped>
.settings {
  position: fixed;
  width: 600px;
  height: 400px;
  background: white;
  top: calc(50% - 200px);
  box-shadow: 0 0 46px #53535333;
  left: calc(50% - 300px);
  border: 1px solid #ddd;
  border-radius: var(--radius);
  .setting-head {
    border-bottom: 1px solid #ddd;
  }
  .system-icon {
    &:hover {
      background: #eee;
    }
  }
}
</style>
