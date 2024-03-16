<template>
  <div class="content-input flex flex-col h-100">
    <Toolbar />
    <div class="textarea flex-1 h-100 relative">
      <textarea
        :disabled="loading"
        @keydown.enter="send"
        v-model="msg"
        placeholder="按下[alt/ctrl]+enter 换行, 按 enter 发送消息"
        v-focus
        ref="textareaRef"
      ></textarea>
      <LoadingVue v-if="loading" />
    </div>
    <div class="my-4 text-right mr-12">
      <a-button type="primary" :disabled="msg.length === 0" @click="send" :loading="loading">
        发送
      </a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { sendMsg } from '@/api/modules/ai/chatgpt';
import type { GptMessage } from '@/api/modules/ai/types';
import useConfigStore from '@/store/config/config';
import { conversation } from '@/views/sidebar/sidebar';
import LoadingVue from './Loading.vue';
import Toolbar from './toolbar/Toolbar.vue';

const configStore = useConfigStore();

const msg = ref<string>('');
const loading = ref(false);
const textareaRef = ref<HTMLTextAreaElement | null>();

const send = async () => {
  const event = window.event as MouseEvent;
  if (!msg.value) {
    return;
  }
  if (event.ctrlKey || event.altKey) {
    msg.value += '\n';
    return;
  } else {
    event.preventDefault();
  }
  loading.value = true;

  try {
    const newMsg: GptMessage = {
      role: 'user',
      content: msg.value,
    };
    conversation.value.messageList.push({
      ...newMsg,
    });
    let tempMsg = undefined;
    if (configStore.$state.memory) {
      tempMsg = conversation.value.messageList;
    } else {
      tempMsg = [newMsg];
    }
    console.log(tempMsg);

    const { data } = await sendMsg({
      messages: tempMsg,
      model: configStore.$state.model,
      stream: false,
      temperature: configStore.$state.temperature,
      top_p: 0.7,
    });
    msg.value = '';
    data.choices.forEach(e => {
      conversation.value.messageList.push({
        role: e.message.role,
        content: e.message.content,
      });
    });
    nextTick(() => {
      textareaRef.value?.focus();
    });
    loading.value = false;
  } catch (error) {
    loading.value = false;
  }
};
</script>

<style lang="scss" scoped>
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
textarea:disabled {
  color: #999;
}
</style>
