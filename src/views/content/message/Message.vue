<template>
  <div class="gpt-message flex-1 p-12" ref="msgRef">
    <ul class="msg-list flex gr-8 flex-col">
      <li v-for="(item, key) in conversation.messageList" :key="key">
        <div class="message-item flex gc-4" :class="[item.role]">
          <div class="avatar flex flex-s">
            <img :src="isSystem(item.role) ? logoPng : userPng" class="w-100 h-100" />
          </div>
          <div class="msg-item" :class="[expand ? 'expand-text' : '']">
            <div class="flex gc-4 align-center msg-head" style="width: fit-content">
              <div class="text-999">
                {{ item.role }}
              </div>
              <div class="actions flex gc-2 text-999">
                <template v-for="(v, k) in messageActions" :key="k">
                  <a-tooltip :title="v.tips">
                    <div class="system-icon" @click="v.action(item, key)">
                      <component :is="v.icon"></component>
                    </div>
                  </a-tooltip>
                </template>
              </div>
            </div>
            <div class="msg">
              <div v-if="!isSystem(item.role)">
                {{ item.content }}
              </div>
              <!-- <VMarkdownView mode="light" v-else :content="item.content"></VMarkdownView> -->
              <div v-else v-html="item.content"></div>
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
import { messageActions } from './data';

const expand = ref(false);
const msgRef = ref<HTMLElement | null>();
const isSystem = (role: string) => {
  return role === 'assistant';
};
watch(
  conversation,
  () => {
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
