import { defineStore } from 'pinia';
import type { Conversation } from './types';

interface ConversationStore {
  list: Conversation[];
}
const useConversationStore = defineStore('conversation', {
  state: (): ConversationStore => ({
    list: [],
  }),
  persist: true,
});

export default useConversationStore;
