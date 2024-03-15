import { defineStore } from 'pinia';
interface Config {
  token: string;
  temperature: number;
  top_p: number;
  memory: boolean;
  model: 'gpt-3.5-turbo';
  splitSize: number;
  max_tokens: number;
  frequency_penalty: number;
  stream: boolean;
}
const useConfigStore = defineStore('config', {
  state: (): Config => ({
    token: '',
    model: 'gpt-3.5-turbo',
    temperature: 1,
    top_p: 1,
    memory: true,
    splitSize: 40,
    max_tokens: 10,
    frequency_penalty: 0,
    stream: false,
  }),
  persist: true,
});

export default useConfigStore;
