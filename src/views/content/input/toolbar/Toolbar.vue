<template>
  <div class="toolbar flex align-center justify-between px-8">
    <div class="flex gc-2 align-center">
      <ul class="flex gc-2">
        <template v-for="(item, key) in classification" :key="key">
          <a-popover trigger="click" :title="type || '未分类'">
            <a-tooltip :title="item.label" placement="bottom">
              <li class="cursor-pointer system-icon" @click="type = item.value">
                <component :is="item.icon"></component>
              </li>
            </a-tooltip>
            <template #content>
              <div style="width: 240px" :bordered="false" :borderStyle="{ padding: '0' }">
                <ul class="selected-list" v-if="list.length > 0">
                  <li v-for="(item, key) in list" :key="key" @click="selectDefaultWord(item)">
                    <div>{{ item.name }}</div>
                  </li>
                </ul>
                <a-empty v-else></a-empty>
              </div>
            </template>
          </a-popover>
        </template>
      </ul>
      <a-divider type="vertical"></a-divider>
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
  </div>
  <DefaultWordVue v-model:visible="visible" />
</template>

<script setup lang="ts">
import useConfigStore from '@/store/config/config';
import useConversationStore, { type DefaultWord } from '@/store/conversation/conversation';
import { conversation } from '@/views/sidebar/sidebar';
import { PlusOutlined } from '@ant-design/icons-vue';
import DefaultWordVue from './DefaultWord.vue';
import { classification } from './form/data';

const visible = ref(false);
const configStore = useConfigStore();
const conversationStore = useConversationStore();
const count = ref(0);

const type = ref('');
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
const selectDefaultWord = (item: DefaultWord) => {
  conversation.value.messageList.push({
    role: item.role,
    content: item.content,
  });
};
const list = computed(() => {
  return conversationStore.$state.defaultWord.filter(e => {
    if (!type.value) {
      return e;
    }
    return e.type === type.value;
  });
});
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
