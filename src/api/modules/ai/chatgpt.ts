import useConfigStore from '@/store/config/config';
import usePageStore from '@/store/page';
import axios from 'axios';
import type { GptParams, GptResult } from './types';

interface Speech {
  model: 'tts-1-hd';
  input: string;
  voice: 'alloy';
  response_format: 'mp3' | 'mp3' | 'aac' | 'opus' | 'flac' | 'pcm' | 'wav';
  speed: number;
}

export const sendMsg = async (data: GptParams) => {
  const configStore = useConfigStore();
  const page = usePageStore();
  return await axios.post<GptResult>(`${page.$state.baseUrl}`, data, {
    headers: {
      Authorization: `Bearer ${configStore.$state.token}`,
    },
  });
};

export const speech = async (data: Speech) => {
  return await axios.post(`https://openkey.cloud/v1/audio/speech`, data, {
    responseType: 'blob',
  });
};

interface Balance {
  total: number;
  balanceData: number;
}
export const getBalance = async (): Promise<Balance> => {
  const subscription = `https://openkey.cloud/v1/dashboard/billing/subscription`;
  // const url1 = `https://billing.openkey.cloud/api/v1/token`;
  const usage = `https://openkey.cloud/v1/dashboard/billing/usage`;
  const configStore = useConfigStore();

  const data = {
    headers: {
      Authorization: `Bearer ${configStore.$state.token}`,
    },
    data: {
      api_key: configStore.$state.token,
    },
  };
  /* 获取总量 */
  const { data: subscriptionData } = await axios.get(`${subscription}`, data);
  /* 获取已使用了的 */
  const { data: usageData } = await axios.get(`${usage}`, data);
  return {
    total: usageData.total_usage,
    balanceData: subscriptionData.hard_limit_usd,
  };
};
