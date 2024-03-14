export interface Chatgpt {
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
  role: string;
  content: string;
}
interface Choice {
  index: number;
  message: GptMessage[];
  logprobs?: any;
  finish_reason: string;
}
