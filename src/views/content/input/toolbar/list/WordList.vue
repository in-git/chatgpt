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
        <a-tooltip title="添加到快捷方式">
          <a-button :disabled="!currentWord">
            <PlusOutlined />
          </a-button>
        </a-tooltip>
        <a-button type="primary" :disabled="!currentWord">使用</a-button>
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
import { PlusOutlined } from '@ant-design/icons-vue';
import { useSortable } from '@vueuse/integrations/useSortable';
import { classification } from '../form/data';

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
</script>

<style lang="scss" scoped>
.world-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30%, 0.2fr));
  gap: 8px;
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
