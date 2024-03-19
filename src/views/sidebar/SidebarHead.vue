<template>
  <div>
    <div class="head px-8">
      <div class="text-666">
        <UnorderedListOutlined />
        会话列表({{ list.length }})
      </div>
      <div class="flex">
        <a-tooltip title="清空所有对话">
          <div class="system-icon" @click="clearAll" v-if="store.$state.list.length > 1">
            <DeleteOutlined />
          </div>
        </a-tooltip>
        <a-tooltip title="创建对话">
          <div class="system-icon create" @click="createSession">
            <PlusOutlined />
          </div>
        </a-tooltip>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useConversationStore from '@/store/conversation/conversation';
import { clearAll, createSession } from './sidebar';
const store = useConversationStore();
const list = computed(() => store.$state.list);
</script>

<style lang="scss" scoped>
.head {
  line-height: 32px;
  height: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
}
</style>
