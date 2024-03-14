import { defineStore } from 'pinia';
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
