import axios from 'axios';

export const sendMsg = async (data: GptParams) => {
  return await axios.post<GptResult>(`https://openkey.cloud/v1/chat/completions`, data);
};
