<template>
  <div class="gpt-home flex-s flex">
    <div class="core flex">
      <SidebarVue />
      <Content />
    </div>
  </div>
</template>

<script setup lang="ts">
import Content from './content/Content.vue';
import SidebarVue from './sidebar/Sidebar.vue';
</script>
<style scoped lang="scss">
.gpt-home {
  width: 100%;
  height: 100vh;
  padding: 20px;
  background: url('../assets/background.webp');
  .core {
    width: 1000px;
    height: 700px;
    background: #fff;
    border-radius: var(--radius);
  }
}
</style>
