import type { GptMessage } from '@/api/modules/ai/types';
import { defineStore } from 'pinia';
import type { Conversation } from './types';

export interface DefaultWord extends GptMessage {
  name: string;
  type: string;
  id: string;
  desc: string;
}
interface ConversationStore {
  list: Conversation[];
  /* 预设 */
  defaultWord: DefaultWord[];
  shortcut: DefaultWord[];
}

const useConversationStore = defineStore('conversation', {
  state: (): ConversationStore => ({
    list: [],
    defaultWord: [],
    shortcut: [],
  }),
  persist: true,
});

export default useConversationStore;
