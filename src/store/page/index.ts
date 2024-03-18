import { defineStore } from 'pinia';
interface PageSettings {
  theme: string;
  locale: string;
  direction: 'ltr' | 'rtl';
  wave: boolean;
  virtual: boolean;
  size?: 'small' | 'middle' | 'large' | undefined;
  autoInsertSpaceInButton: boolean;
  screenType: 0 | 1;
  baseUrl: string;
}

const usePageStore = defineStore('page', {
  state: (): PageSettings => ({
    theme: '#00a6fb',
    locale: '',
    size: 'small',
    direction: 'ltr',
    wave: true,
    virtual: true,
    autoInsertSpaceInButton: true,
    screenType: 0,
    baseUrl: `https://openkey.cloud/v1/chat/completions`,
  }),
  persist: true,
});

export default usePageStore;
