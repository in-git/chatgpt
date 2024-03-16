import { defineStore } from 'pinia';
import type { Conversation } from './types';

export interface History {
  text: string;
  id: string;
}
interface ConversationStore {
  list: Conversation[];
  /* 预设 */
  history: History[];
}

const useConversationStore = defineStore('conversation', {
  state: (): ConversationStore => ({
    list: [],
    history: [],
  }),
  persist: true,
});

export default useConversationStore;
