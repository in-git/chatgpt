<template>
  <div class="gpt-message flex-1 p-12" ref="msgRef">
    <ul class="msg-list flex gr-8 flex-col">
      <li v-for="(item, key) in conversation.messageList" :key="key">
        <div class="message-item flex gc-4" :class="[item.role]">
          <div class="avatar flex flex-s">
            <img :src="item.role === 'assistant' ? logoPng : userPng" class="w-100 h-100" />
          </div>
          <div class="msg-item">
            <div class="text-999" style="width: fit-content">{{ item.role }}</div>
            <div class="msg">{{ item.content }}</div>
            <div class="actions">
              <div class="system-icon mt-2">
                <CopyOutlined />
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import logoPng from '@/assets/logo.png';
import userPng from '@/assets/user.png';
import { conversation } from '@/views/sidebar/sidebar';
import { CopyOutlined } from '@ant-design/icons-vue';
const msgRef = ref<HTMLElement | null>();

watch(
  conversation,
  () => {
    console.log('===');

    nextTick(() => {
      if (msgRef.value) {
        msgRef.value.scrollTo({
          top: msgRef.value.scrollHeight,
          behavior: 'smooth',
        });
      }
    });
  },
  {
    deep: true,
  },
);
</script>

<style lang="scss" scoped>
@import './style';
</style>
