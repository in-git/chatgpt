import type { GptMessage } from '@/api/modules/ai/types';

export interface Conversation {
  title: string;
  time: string;
  id: string;
  /* Allows editing session names */
  edit: boolean;
  messageList: GptMessage[];
}
