import { defineStore } from 'pinia';
interface Config {
  token: string;
  temperature: number;
  top_p: number;
  model: 'gpt-3.5-turbo';
}
const useConfigStore = defineStore('config', {
  state: (): Config => ({
    token: '',
    model: 'gpt-3.5-turbo',
    temperature: 1,
    top_p: 1,
  }),
  persist: true,
});

export default useConfigStore;
