<template>
  <div>
    <div class="system-head">
      <div class="flex align-center">
        <div class="system-icon text-999" @click="mode = 'session'">
          <LeftOutlined />
        </div>
        <a-divider type="vertical"></a-divider>
        <template v-if="conversation">
          <div>
            {{ conversation.title }}
            <a-divider type="vertical"></a-divider>
          </div>
        </template>

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
  </div>
</template>

<script setup lang="ts">
import useConfigStore from '@/store/config/config';
import { modelList } from '@/views/content/setting/gpt/data';
import { conversation } from '@/views/sidebar/sidebar';
import { LeftOutlined, SettingOutlined } from '@ant-design/icons-vue';
import { mode } from '../data';
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
