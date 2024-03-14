import { copyText } from '@/utils/common/utils';
import { conversation } from '@/views/sidebar/sidebar';
import { CopyOutlined, DeleteOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';

export const messageActions = [
  {
    tips: '复制',
    action(item: GptMessage) {
      console.log('copy', item);
      copyText(item.content);
      message.success('Copied');
    },
    icon: markRaw(CopyOutlined),
  },
  {
    tips: '删除',
    action(item: GptMessage, index: number) {
      conversation.value.messageList = conversation.value.messageList.filter((_, i) => {
        return i !== index;
      });
    },
    icon: markRaw(DeleteOutlined),
  },
];