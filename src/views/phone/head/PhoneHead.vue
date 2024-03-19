<template>
  <div>
    <div class="system-head">
      <div>
        <span class="text-999 mr-4">模型</span>
        <a-select
          v-model:value="configStore.$state.model"
          style="width: 140px"
          :options="modelList"
        ></a-select>
      </div>
      <div class="system-icon" @click="displaySetup = true">
        <SettingOutlined />
      </div>
    </div>
    <a-modal v-model:visible="displaySetup" title="设置">
      <Gpt />
    </a-modal>
  </div>
</template>

<script setup lang="ts">
import useConfigStore from '@/store/config/config';
import { modelList } from '@/views/content/setting/gpt/data';
import Gpt from '@/views/content/setting/gpt/Gpt.vue';
import { SettingOutlined } from '@ant-design/icons-vue';
import { displaySetup } from './data';
const configStore = useConfigStore();
</script>

<style lang="scss" scoped>
$hh: 42px;
.system-head {
  background-color: #f5f2f3;
  line-height: $hh;
  height: $hh;
  border-bottom: 1px solid #ddd;
}
</style>
