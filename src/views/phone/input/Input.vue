<template>
  <div class="phone-input">
    <div class="toolbar px-8 flex align-center justify-between">
      <div class="flex align-center text-999 gc-4">
        记忆
        <a-switch></a-switch>
      </div>
      <div>
        <div class="system-icon text-red">
          <DeleteOutlined />
        </div>
      </div>
    </div>
    <div class="flex py-8">
      <input :disabled="dataLoading" v-focus type="text" ref="textRef" v-model="msg" />
      <a-button type="primary" :loading="dataLoading" @click="sendMsg">发送</a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { dataLoading, msg, send } from '@/views/content/input/data';

const textRef = ref<HTMLElement>();
const sendMsg = () => {
  nextTick(() => {
    send(textRef);
  });
};
</script>

<style lang="scss" scoped>
.phone-input {
  border-top: 1px solid #eee;
}
$hh: 32px;
input {
  outline: none;
  border: none;
  flex: 1;
  line-height: $hh;
  height: $hh;
  padding: 0 8px;
  font-size: 16px;
  color: #333;
}
.ant-btn {
  border-radius: 2px;
  height: $hh;
  width: 60px;
}
.toolbar {
  height: 32px;
}
.text-red {
  color: #f58989;
}
</style>
