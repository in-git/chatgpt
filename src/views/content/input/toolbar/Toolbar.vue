<template>
  <div class="toolbar flex align-center justify-between px-8">
    <div>
      <Keyword />
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
              <InfoCircleOutlined />
              不携带历史记录
              <div style="color: orange">
                <InfoCircleFilled />
                这会导致预设失效
              </div>
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
import { InfoCircleOutlined } from '@ant-design/icons-vue';
import Keyword from './Keyword.vue';

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
.selected-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 8px !important;
  li {
    line-height: 28px;
    padding: 0 8px;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background: var(--primary);
      color: white;
    }
  }
}
</style>
