<template>
  <div class="phone-head system-head">
    <div class="flex align-center gc-4">
      <img :src="logoPng" width="24" class="logo" />
      CHATGPT
    </div>
    <div class="flex gc-4 text-16">
      <div class="system-icon" @click="createSession">
        <PlusOutlined />
      </div>
      <div class="system-icon" @click="clearAll">
        <ClearOutlined />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import logoPng from '@/assets/logo.png';
import { clearAll, createSession } from '@/views/sidebar/sidebar';
import { ClearOutlined, PlusOutlined } from '@ant-design/icons-vue';
</script>

<style lang="scss" scoped>
.phone-head {
  background-color: #f1f1f1;
  $hh: 48px;
  line-height: $hh;
  height: $hh;
  .logo {
    border-radius: 4px;
  }
}
</style>
