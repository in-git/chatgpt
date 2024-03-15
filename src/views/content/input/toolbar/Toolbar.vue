<template>
  <div class="toolbar flex align-center justify-between px-8">
    <div class="flex gc-2">
      <ul>
        <li v-for="(item, key) in conversationStore.$state.shortcut" :key="key">
          {{ item.name }}
        </li>
      </ul>
      <div>
        <a-tooltip title="新增预设">
          <div class="system-icon" @click="visible = true">
            <PlusOutlined />
          </div>
        </a-tooltip>
      </div>
    </div>
    <!--  -->
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
    <DefaultWord v-model:visible="visible" />
  </div>
</template>

<script setup lang="ts">
import useConfigStore from '@/store/config/config';
import useConversationStore from '@/store/conversation/conversation';
import { conversation } from '@/views/sidebar/sidebar';
import { PlusOutlined } from '@ant-design/icons-vue';
import DefaultWord from './DefaultWord.vue';

const visible = ref(false);
const configStore = useConfigStore();
const conversationStore = useConversationStore();
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

<style lang="scss" scoped>
.toolbar {
  line-height: 32px;
  height: 32px;
  .system-icon {
    &:hover {
      background: #fff;
    }
  }
}
</style>
