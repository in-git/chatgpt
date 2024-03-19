<template>
  <div class="session flex-1">
    <!-- <ul class="flex gr-8 flex-col">
      <li v-for="item in 40" :key="item" class="flex justify-between">
        <div class="flex gc-12">
          <div class="index flex flex-s">{{ item }}</div>
          <div class="flex flex-col justify-between">
            <div class="text-14">NAME</div>
            <div class="text-999">预览消息</div>
          </div>
        </div>
        <div class="flex flex-col justify-between">
          <div class="text-right text-14">
            <EllipsisOutlined />
          </div>
          <div class="text-999">2024年3月19日</div>
        </div>
      </li>
    </ul> -->
    <PhoneHead />
    <Sidebar />
  </div>
</template>

<script setup lang="ts">
import Sidebar from '@/views/sidebar/Sidebar.vue';
import PhoneHead from './head/PhoneHead.vue';
</script>

<style lang="scss" scoped>
.session {
  height: calc(100% - 48px);
  overflow-y: auto;
  li {
    padding: 4px 0;
  }
  .index {
    $wh: 36px;
    width: $wh;
    height: $wh;
    border-radius: var(--radius);
    background-color: #ebe7e7;
  }
}
.gpt-sidebar {
  width: 100vw !important;
}
::v-deep(.head) {
  display: none !important;
}
</style>
