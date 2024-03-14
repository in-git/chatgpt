import { defineStore } from 'pinia';
interface Config {
  token: string;
}
const useConfigStore = defineStore('config', {
  state: (): Config => ({
    token: '',
  }),
  persist: true,
});

export default useConfigStore;
