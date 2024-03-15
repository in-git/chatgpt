<template>
  <div>
    <div class="flex justify-between align-center">
      <a-radio-group v-model:value="currentType">
        <a-radio-button
          v-for="(item, key) in classification"
          :value="item.value"
          :key="item.value"
          button-style="solid"
        >
          {{ item.label }}
        </a-radio-button>
      </a-radio-group>
      <div class="flex gc-4">
        <a-popconfirm title="是否删除这个记录" @confirm="del">
          <a-button danger :disabled="!currentWord">
            <DeleteOutlined />
          </a-button>
        </a-popconfirm>
        <a-tooltip title="编辑">
          <a-button type="primary" :disabled="!currentWord" @click="edit">
            <EditOutlined />
          </a-button>
        </a-tooltip>
      </div>
    </div>

    <a-card class="mt-8" :bordered="false" :body-style="{ padding: '8px 0' }">
      <ul class="flex gc-4 world-list" v-if="list.length > 0" ref="listRef">
        <li
          v-for="item in list"
          @click="selectItem(item)"
          :class="{ active: item === currentWord }"
        >
          <a-card :title="item.name">
            <div>{{ item.desc || '暂无描述' }}</div>
          </a-card>
        </li>
      </ul>
      <a-empty v-else></a-empty>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import useConversationStore, { type DefaultWord } from '@/store/conversation/conversation';
import { EditOutlined } from '@ant-design/icons-vue';
import { useSortable } from '@vueuse/integrations/useSortable';
import { tabs } from '../data';
import { classification, defaultWordForm } from '../form/data';

const listRef = ref();
const conversationStore = useConversationStore();
const currentType = ref('');
const currentWord = ref<DefaultWord>();
const selectItem = (item: DefaultWord) => {
  currentWord.value = item;
};
nextTick(() => {
  useSortable(listRef, conversationStore.$state.defaultWord, {
    animation: 200,
  });
});
const list = computed(() => {
  return conversationStore.$state.defaultWord.filter(e => {
    if (!currentType.value) return e;
    return e.type === currentType.value;
  });
});

const edit = () => {
  if (currentWord.value) {
    defaultWordForm.value = currentWord.value;
    tabs.value = 'form';
  }
};
const del = () => {
  if (currentWord.value) {
    conversationStore.$state.defaultWord = conversationStore.$state.defaultWord.filter(e => {
      if (!currentWord.value) {
        return e;
      }
      return e.id !== currentWord.value.id;
    });
  }
};
</script>

<style lang="scss" scoped>
.world-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30%, 0.2fr));
  li {
    cursor: pointer;
  }
  li.active {
    .ant-card {
      border: 1px solid var(--primary);
    }
  }
}
</style>
