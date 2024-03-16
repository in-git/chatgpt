export interface GptResult {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Choice[];
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
  system_fingerprint: string;
}
export interface GptMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
  time?: string;
}

export interface GptParams {
  messages: GptMessage[];
  model: 'gpt-3.5-turbo';
  stream: boolean;
  temperature: number;
  top_p: number;
}

export interface Choice {
  index: number;
  message: GptMessage;
  logprobs?: any;
  finish_reason: string;
}
