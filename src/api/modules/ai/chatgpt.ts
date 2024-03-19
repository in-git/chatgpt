import usePageStore from '@/store/page';
import axios from 'axios';
import type { GptParams, GptResult } from './types';

export const sendMsg = async (data: GptParams) => {
  const page = usePageStore();
  return await axios.post<GptResult>(`${page.$state.baseUrl}`, data);
};
interface Speech {
  model: 'tts-1-hd';
  input: string;
  voice: 'alloy';
  response_format: 'mp3' | 'mp3' | 'aac' | 'opus' | 'flac' | 'pcm' | 'wav';
  speed: number;
}

export const speech = async (data: Speech) => {
  return await axios.post(`https://openkey.cloud/v1/audio/speech`, data, {
    responseType: 'blob',
  });
};
