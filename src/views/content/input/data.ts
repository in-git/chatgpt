import { sendMsg } from '@/api/modules/ai/chatgpt';
import type { GptMessage } from '@/api/modules/ai/types';
import useConfigStore from '@/store/config/config';
import { conversation } from '@/views/sidebar/sidebar';

export const msg = ref<string>('');
export const dataLoading = ref();
export const send = async (inputEl: Ref<HTMLElement | undefined>) => {
  const configStore = useConfigStore();
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
  dataLoading.value = true;
  let tempMsg = undefined;
  try {
    const newMsg: GptMessage = {
      role: 'user',
      content: msg.value,
    };
    conversation.value.messageList.push({
      ...newMsg,
    });

    if (configStore.$state.memory) {
      tempMsg = conversation.value.messageList;
    } else {
      tempMsg = [newMsg];
    }

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
      inputEl.value?.focus();
    });
    dataLoading.value = false;
  } catch (error) {
    dataLoading.value = false;
    if (configStore.$state.memory) {
      conversation.value.messageList.pop();
    }
  }
};
