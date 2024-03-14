<template>
  <div class="gpt-content flex-1 flex flex-col relative">
    <HeadVue />
    <Splitpanes class="default-theme" horizontal>
      <pane size="80">
        <MessageVue />
      </pane>
      <pane size="40" max-size="50" min-size="30">
        <InputVue />
      </pane>
    </Splitpanes>
  </div>
</template>

<script setup lang="ts">
import { Pane, Splitpanes } from 'splitpanes';
import 'splitpanes/dist/splitpanes.css';
import HeadVue from './head/Head.vue';
import InputVue from './input/Input.vue';
import MessageVue from './message/Message.vue';
</script>

<style lang="scss" scoped>
::v-deep(.splitpanes) {
  .splitpanes__splitter {
    height: 4px !important;
    background: #ddd !important;
    &::before {
      display: none !important;
    }
    &::after {
      display: none !important;
    }
  }
  .splitpanes__pane {
    background: #f2f2f2 !important;
  }
}
</style>
