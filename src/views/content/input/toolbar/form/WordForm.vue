<template>
  <div>
    <a-card :bordered="false" :body-style="{ padding: '0' }">
      <a-form :wrapperCol="{ span: 12 }" :label-col="{ span: 4 }" :model="form" @finish="submit">
        <a-form-item label="名字" required>
          <a-input placeholder="请输入预设名" v-model:value="form.name"></a-input>
        </a-form-item>
        <a-form-item label="角色" required>
          <a-radio-group :options="roleOptions" v-model:value="form.role"></a-radio-group>
        </a-form-item>
        <a-form-item label="分类" required>
          <a-auto-complete
            v-model:value="form.type"
            :options="classification"
            placeholder="请选择分类"
          />
          <!-- <a-select :options="classification" v-model:value="form.type"></a-select> -->
        </a-form-item>
        <a-form-item label="描述" required>
          <a-input placeholder="请输入描述" v-model:value="form.desc"></a-input>
        </a-form-item>
        <a-form-item label="内容" required>
          <a-textarea
            :autoSize="{ minRows: 2, maxRows: 6 }"
            placeholder="请输入预设内容"
            v-model:value="form.content"
          ></a-textarea>
        </a-form-item>
        <a-row>
          <a-col :span="12" :offset="4">
            <a-button htmlType="submit" type="primary">保存</a-button>
          </a-col>
        </a-row>
      </a-form>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import useConversationStore, { type DefaultWord } from '@/store/conversation/conversation';
import { nanoid } from 'nanoid';
import { classification } from './data';

const form = ref<DefaultWord>({
  name: '',
  role: 'assistant',
  content: '',
  type: '',
  id: '',
  desc: '',
});

const conversation = useConversationStore();

const roleOptions = [
  {
    label: '助手',
    value: 'assistant',
  },
  {
    label: '系统',
    value: 'system',
  },
];

const submit = () => {
  form.value.id = nanoid();
  conversation.$state.defaultWord.push({
    ...form.value,
  });
};
</script>

<style lang="scss" scoped></style>
