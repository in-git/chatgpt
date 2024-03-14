import useConversationStore from '@/store/conversation/conversation';
import { ClearOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons-vue';
import { Modal } from 'ant-design-vue';

export const conversation = ref<Conversation>({
  title: '',
  time: '',
  id: '',
  edit: false,
  messageList: [],
});

export const menus = [
  {
    key: 'edit',
    icon: () => h(EditOutlined),
    label: '编辑',
    title: '编辑',
    action() {
      conversation.value.edit = true;
    },
  },

  {
    key: 'clear',
    icon: () => h(ClearOutlined),
    label: '清空',
    title: '清空',
    action() {
      Modal.confirm({
        title: '警告',
        content: `保留这个对话框，但会清空所有聊天记录`,
        onOk() {
          conversation.value.messageList = [];
        },
        centered: true,
      });
    },
  },
  {
    key: 'delete',
    icon: () => h(DeleteOutlined),
    label: '删除记录',
    title: '删除',
    action() {
      Modal.confirm({
        title: '警告',
        content: '将会删除所有信息,包括这个对话框',
        onOk() {
          const store = useConversationStore();
          store.$state.list = store.$state.list.filter(e => {
            return e.id !== conversation.value.id;
          });
        },
        centered: true,
      });
    },
  },
];
