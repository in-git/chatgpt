<template>
  <div>
    <a-form :model="configStore.$state">
      <a-card>
        <a-form-item label="Key">
          <a-input v-model:value="configStore.$state.token"></a-input>
        </a-form-item>
      </a-card>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import useConfigStore from '@/store/config/config';

const configStore = useConfigStore();
</script>

<style lang="scss" scoped></style>
