import type { DefaultWord } from '@/store/conversation/conversation';
import {
  AppleOutlined,
  CodeOutlined,
  HighlightOutlined,
  TranslationOutlined,
  UserOutlined,
} from '@ant-design/icons-vue';

export const classification = [
  {
    label: '未分类',
    value: '',
    icon: markRaw(AppleOutlined),
  },
  {
    label: '用户',
    value: '用户',
    icon: markRaw(UserOutlined),
  },
  {
    label: '多国语言',
    value: '多国语言',
    icon: markRaw(TranslationOutlined),
  },
  {
    label: '编程',
    value: '编程',
    icon: markRaw(CodeOutlined),
  },
  {
    label: '写作',
    value: '写作',
    icon: markRaw(HighlightOutlined),
  },
];

const defaultWordObj: DefaultWord = {
  name: '',
  role: 'assistant',
  content: '',
  type: '',
  id: '',
  desc: '',
};
export const defaultWordForm = ref<DefaultWord>({
  ...defaultWordObj,
});
export const resetDefaultWordForm = () => {
  defaultWordForm.value = {
    ...defaultWordObj,
  };
};
