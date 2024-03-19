<template>
  <div class="phone flex flex-col">
    <div class="phone-content">
      <Session v-if="showContent" />
      <Chat v-else />
    </div>
  </div>
</template>

<script setup lang="ts">
import Chat from './chat/Chat.vue';
import { showContent } from './data';

import Session from './session/Session.vue';
</script>

<style lang="scss" scoped>
.phone-content {
  height: calc(100% - 48px);
  overflow-y: auto;
}
</style>
