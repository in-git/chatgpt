import useConversationStore from '@/store/conversation/conversation';
import { ClearOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons-vue';

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
    key: 'delete',
    icon: () => h(DeleteOutlined),
    label: '删除',
    title: '删除',
    action() {
      const store = useConversationStore();
      store.$state.list = store.$state.list.filter(e => {
        return e.id !== conversation.value.id;
      });
    },
  },
  {
    key: 'clear',
    icon: () => h(ClearOutlined),
    label: '清空',
    title: '清空',
    action() {},
  },
];
