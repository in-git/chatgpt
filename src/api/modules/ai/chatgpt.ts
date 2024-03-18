import usePageStore from '@/store/page';
import axios from 'axios';
import type { GptParams, GptResult } from './types';

export const sendMsg = async (data: GptParams) => {
  const page = usePageStore();
  return await axios.post<GptResult>(`${page.$state.baseUrl}`, data);
};
