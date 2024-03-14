<template>
  <div class="content-input flex flex-col h-100">
    <div class="toolbar flex align-center justify-between px-8">
      <div class="system-icon">
        <TranslationOutlined />
      </div>
    </div>
    <div class="textarea flex-1 h-100">
      <textarea
        :disabled="loading"
        @keydown.enter="send"
        v-model="msg"
        placeholder="AI 一下吧"
        v-focus
      ></textarea>
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
import useConfigStore from '@/store/config/config';
import { conversation } from '@/views/sidebar/sidebar';
import { TranslationOutlined } from '@ant-design/icons-vue';

const configStore = useConfigStore();
const msg = ref<string>('');
const loading = ref(false);

const send = async () => {
  const event = window.event as MouseEvent;
  if (!msg.value) {
    return;
  }
  if (event.ctrlKey) {
    msg.value += '\n';
    return;
  } else {
    event.preventDefault();
  }
  loading.value = true;

  try {
    conversation.value.messageList.push({
      role: 'user',
      content: msg.value,
    });
    const { data } = await sendMsg({
      messages: conversation.value.messageList,
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
    loading.value = false;
  } catch (error) {
    loading.value = false;
  }
};
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
textarea:disabled {
  color: #999;
}
</style>
