<template>
  <div class="gpt-sidebar">
    <div class="head px-8">
      <div class="text-666">会话标题</div>
      <a-tooltip title="创建对话">
        <div class="system-icon create" @click="create">
          <PlusOutlined />
        </div>
      </a-tooltip>
    </div>
    <ul class="list" ref="listRef" v-show="store.$state.list.length > 0">
      <li
        class="flex align-center p-8 justify-between"
        v-for="(item, key) in store.$state.list"
        :key="key"
        :class="{ active: conversation.id === item.id }"
        @click="selectConversation(item)"
      >
        <div class="flex align-center">
          <div class="image">
            <img />
          </div>
          <div class="ml-8">
            <div class="session-name" v-if="!item.edit">{{ item.title }}</div>
            <input
              @blur="item.edit = false"
              v-focus
              v-input-select
              type="text"
              v-else
              v-model="item.title"
            />
            <div class="mt-4 time">{{ item.time }}</div>
          </div>
        </div>
        <div class="flex gc-4">
          <div class="system-icon handle">
            <DragOutlined />
          </div>
          <a-dropdown trigger="click" placement="bottomLeft">
            <div class="actions system-icon">
              <EllipsisOutlined />
            </div>
            <template #overlay>
              <a-menu
                style="width: 140px"
                @select="selectMenu"
                @click="selectMenu"
                :items="menus"
              ></a-menu>
            </template>
          </a-dropdown>
        </div>
      </li>
    </ul>
    <a-empty v-show="store.$state.list.length === 0" description="请创建对话" />
  </div>
</template>

<script setup lang="ts">
import useConversationStore from '@/store/conversation/conversation';
import { DragOutlined, EllipsisOutlined, PlusOutlined } from '@ant-design/icons-vue';
import { useDateFormat, useNow } from '@vueuse/core';
import { useSortable } from '@vueuse/integrations/useSortable';
import type { MenuInfo } from 'ant-design-vue/es/menu/src/interface';
import { nanoid } from 'nanoid';
import { conversation, menus } from './sidebar';

const store = useConversationStore();

const listRef = ref();

const selectConversation = (item: Conversation) => {
  conversation.value = item;
};

const selectMenu = (info: MenuInfo) => {
  if (info.item.action) {
    info.item.action();
  }
};
const create = () => {
  const formatted = useDateFormat(useNow(), 'YYYY-MM-DD HH:mm:ss');
  const id = nanoid();

  const newItem: Conversation = {
    title: `新建会话列表(${store.$state.list.length + 1})`,
    time: formatted.value,
    id,
    edit: false,
  };
  store.$state.list.push({
    ...newItem,
  });
  conversation.value = newItem;
};

nextTick(() => {
  useSortable(listRef, store.$state.list, {
    animation: 200,
    handle: '.handle',
  });
});
</script>

<style lang="scss" scoped>
@import './sidebar';
</style>
