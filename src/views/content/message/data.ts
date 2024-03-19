import type { GptMessage } from '@/api/modules/ai/types';
import { copyText } from '@/utils/common/utils';
import { conversation } from '@/views/sidebar/sidebar';
import { CopyOutlined, DeleteOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
export const messageActions = [
  {
    tips: '复制',
    action(item: GptMessage) {
      copyText(item.content);
      message.success('Copied');
    },
    icon: markRaw(CopyOutlined),
  },

  {
    tips: '删除',
    action(_: GptMessage, index: number) {
      conversation.value.messageList = conversation.value.messageList.filter(
        (_: any, i: number) => {
          return i !== index;
        },
      );
    },
    icon: markRaw(DeleteOutlined),
  },
];
