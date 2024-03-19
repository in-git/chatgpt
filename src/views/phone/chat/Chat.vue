<template>
  <div class="phone-message flex flex-col">
    <PhoneHead />
    <Message />
    <Input />
  </div>
</template>

<script setup lang="ts">
import Message from '@/views/content/message/Message.vue';
import Input from '@/views/phone/input/Input.vue';
import PhoneHead from '../head/PhoneHead.vue';
</script>

<style lang="scss" scoped>
.phone-message {
  height: 100%;
  width: 100vw;
}

.gpt-message {
  height: calc(100% - 100px) !important;
  flex-basis: calc(100% - 100px) !important;
}

.textarea {
  flex-basis: 42px !important ;
}
</style>
