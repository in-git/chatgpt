<template>
  <div class="phone flex flex-col">
    <Session v-if="mode === 'session'" />
    <Chat v-else-if="mode === 'chat'" />
  </div>
</template>

<script setup lang="ts">
import Chat from './chat/Chat.vue';
import { mode } from './data';
import Session from './session/Session.vue';
</script>

<style lang="scss" scoped></style>
