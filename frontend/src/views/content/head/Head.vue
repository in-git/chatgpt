<template>
  <div class="content-head flex justify-between">
    <div>会话标题</div>
    <div class="flex align-center gc-4">
      <div class="system-icon">
        <FullscreenOutlined />
      </div>
      <div class="system-icon">
        <SettingOutlined />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FullscreenOutlined, SettingOutlined } from '@ant-design/icons-vue';
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
