<template>
  <div class="toolbar flex align-center justify-between px-8">
    <div class="system-icon">
      <TranslationOutlined />
    </div>
    <div class="flex gc-4 align-center">
      <a-popconfirm title="清空当前聊天记录" @confirm="clear" placement="bottom">
        <a-tooltip title="清空当前会话的聊天记录">
          <a-button type="text" danger>
            <DeleteOutlined />
          </a-button>
        </a-tooltip>
      </a-popconfirm>
      <!--  -->
      <a-popover title="开启/关闭记忆">
        <a-switch size="small" v-model:checked="configStore.$state.memory"></a-switch>
        <template #content>
          <div class="text-999" style="width: 200px">
            <InfoCircleFilled />
            将聊天记录给AI处理,让AI能通过对话理解语境,同时加剧TOKENS损耗
          </div>
          <a-card class="my-8">
            <a-statistic
              title="聊天字数统计"
              :value="count"
              v-if="configStore.$state.memory"
            ></a-statistic>
            <div v-else>
              <InfoCircleFilled />
              不携带历史记录
            </div>
          </a-card>
        </template>
      </a-popover>
    </div>
  </div>
</template>

<script setup lang="ts">
import useConfigStore from '@/store/config/config';
import { conversation } from '@/views/sidebar/sidebar';
import { DeleteOutlined, InfoCircleFilled, TranslationOutlined } from '@ant-design/icons-vue';
const configStore = useConfigStore();

const count = ref(0);
const clear = () => {
  conversation.value.messageList = [];
};
watch(
  conversation,
  () => {
    count.value = 0;
    conversation.value.messageList.forEach(e => {
      count.value += e.content.length;
    });
  },
  {
    deep: true,
  },
);
</script>

<style lang="scss" scoped></style>
