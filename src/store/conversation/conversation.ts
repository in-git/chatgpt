import type { GptMessage } from '@/api/modules/ai/types';
import { defineStore } from 'pinia';
import type { Conversation } from './types';

export interface DefaultWord extends GptMessage {
  name: string;
  type: string;
}
interface ConversationStore {
  list: Conversation[];
  /* 预设 */
  defaultWord: DefaultWord[];
}

const useConversationStore = defineStore('conversation', {
  state: (): ConversationStore => ({
    list: [],
    defaultWord: [],
  }),
  persist: true,
});

export default useConversationStore;
