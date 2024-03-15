import axios from 'axios';
import type { GptParams, GptResult } from './types';

export const sendMsg = async (data: GptParams) => {
  return await axios.post<GptResult>(`https://openkey.cloud/v1/chat/completions`, data);
};
