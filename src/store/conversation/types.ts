interface Conversation {
  title: string;
  time: string;
  id: string;
  /* Allows editing session names */
  edit: boolean;
  messageList: GptMessage[];
}
