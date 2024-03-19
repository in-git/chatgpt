<template>
  <div class="phone flex flex-col">
    <Session v-if="mode === 'session'" />
    <Chat v-else-if="mode === 'chat'" />

    <a-modal v-model:open="displaySetup" title="设置">
      <GptVue />
    </a-modal>
  </div>
</template>

<script setup lang="ts">
import GptVue from '../content/setting/gpt/Gpt.vue';
import Chat from './chat/Chat.vue';
import { mode } from './data';
import { displaySetup } from './head/data';
import Session from './session/Session.vue';
</script>

<style lang="scss" scoped></style>
