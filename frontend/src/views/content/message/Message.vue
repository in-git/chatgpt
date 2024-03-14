<template>
  <div class="gpt-message flex-1 p-12">
    <ul class="msg-list flex gr-12 flex-col">
      <li v-for="(item, key) in messageList" :key="key">
        <div class="message-item flex gc-4" :class="[item.from]">
          <div class="avatar">
            <img src="" />
          </div>
          <div class="msg-item">
            <div class="text-999" style="width: fit-content">{{ item.username }}</div>
            <div class="msg">{{ item.msg }}</div>
            <div class="actions">
              <div class="system-icon">
                <CopyOutlined />
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { CopyOutlined } from '@ant-design/icons-vue';

const messageList = [
  {
    username: 'System name',
    msg: `Lorem ipsum dolor ipsum Lorem ipsum dolor ipsumLorem ipsum dolor ipsum`,
    from: 'system',
  },
  {
    username: 'Username',
    msg: `这是一些字段`,
    from: 'user',
  },
];
</script>

<style lang="scss" scoped>
@import './style';
</style>
