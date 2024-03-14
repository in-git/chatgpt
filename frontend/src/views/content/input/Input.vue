<template>
  <div class="content-input flex flex-col h-100">
    <div class="toolbar flex align-center justify-between px-8">
      <div class="system-icon">
        <TranslationOutlined />
      </div>
    </div>
    <div class="textarea flex-1 h-100">
      <textarea v-focus></textarea>
    </div>
    <div class="my-4 text-right mr-12">
      <a-button type="primary">发送</a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TranslationOutlined } from '@ant-design/icons-vue';
</script>

<style lang="scss" scoped>
.toolbar {
  line-height: 32px;
  height: 32px;
  .system-icon {
    &:hover {
      background: #fff;
    }
  }
}
textarea {
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  resize: none;
  padding: 0 12px;
  margin: 0;
  background: transparent;
}
</style>
