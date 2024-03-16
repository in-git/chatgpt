<template>
  <div>
    <a-card :bordered="false" :body-style="{ padding: '0' }">
      <a-form
        :wrapperCol="{ span: 12 }"
        :label-col="{ span: 4 }"
        :model="defaultWordForm"
        @finish="submit"
      >
        <a-form-item label="名字" required name="name">
          <a-input placeholder="请输入预设名" v-model:value="defaultWordForm.name"></a-input>
        </a-form-item>
        <a-form-item label="角色" required name="role">
          <a-radio-group
            :options="roleOptions"
            v-model:value="defaultWordForm.role"
          ></a-radio-group>
        </a-form-item>
        <a-form-item label="分类" required name="type">
          <a-auto-complete
            v-model:value="defaultWordForm.type"
            :options="classification"
            placeholder="请选择分类"
          />
        </a-form-item>
        <a-form-item label="描述" required name="desc">
          <a-input placeholder="请输入描述" v-model:value="defaultWordForm.desc"></a-input>
        </a-form-item>
        <a-form-item label="内容" required name="content">
          <a-textarea
            :autoSize="{ minRows: 2, maxRows: 6 }"
            placeholder="请输入预设内容"
            v-model:value="defaultWordForm.content"
          ></a-textarea>
        </a-form-item>
        <a-row>
          <a-col :span="12" :offset="4">
            <a-button htmlType="submit" type="primary" class="mr-4">保存</a-button>
            <a-button @click="resetDefaultWordForm" danger>清空</a-button>
          </a-col>
        </a-row>
      </a-form>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import useConversationStore from '@/store/conversation/conversation';
import { message } from 'ant-design-vue';
import { nanoid } from 'nanoid';
import { tabs } from '../data';
import { classification, defaultWordForm, resetDefaultWordForm } from './data';

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
  {
    label: '用户',
    value: 'user',
  },
];

const submit = () => {
  if (!defaultWordForm.value.id) {
    defaultWordForm.value.id = nanoid();
    conversation.$state.defaultWord.push({
      ...defaultWordForm.value,
    });
  } else {
    conversation.$state.defaultWord.forEach(e => {
      if (e.id === defaultWordForm.value.id) {
        e = defaultWordForm.value;
      }
    });
  }
  message.success('操作成功');
  tabs.value = 'list';
};
</script>

<style lang="scss" scoped></style>
