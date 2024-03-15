<template>
  <div>
    <a-form
      :model="configStore.$state"
      :wrapper-col="{ span: 8, offset: 10 }"
      :label-col="{ span: 6 }"
      layout="vertical"
    >
      <a-card title="GPT设置">
        <a-form-item label="Key">
          <a-input v-model:value="configStore.$state.token" allow-clear></a-input>
          <div class="text-999">
            <InfoCircleFilled />
            相当于一个账号,
            <a-button type="link" href="https://faucet.openkey.cloud/" target="_blank">
              免费体验
            </a-button>
            每天有一定额度
          </div>
        </a-form-item>

        <a-divider class="my-8" />
        <a-form-item label="模型">
          <a-select v-model:value="configStore.$state.model" :options="modelList"></a-select>
        </a-form-item>

        <a-divider class="my-8" />
        <a-form-item label="随机性[temperature]">
          <a-slider
            :min="0"
            :step="0.1"
            :max="1"
            v-model:value="configStore.$state.temperature"
            class="my-4"
          ></a-slider>
          <div class="text-999">
            <InfoCircleFilled />
            值越大，随机性越高
          </div>
        </a-form-item>

        <a-divider class="my-8" />
        <a-form-item label="核采样[top_p]">
          <a-slider
            :min="0"
            :step="0.1"
            :max="1"
            v-model:value="configStore.$state.top_p"
            class="my-4"
          ></a-slider>
          <div class="text-999">
            <InfoCircleFilled />
            与随机性类似
          </div>
        </a-form-item>
      </a-card>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import useConfigStore from '@/store/config/config';
import { InfoCircleFilled } from '@ant-design/icons-vue';
import { modelList } from './data';

const configStore = useConfigStore();
</script>

<style lang="scss" scoped>
.ant-form-item {
  margin-bottom: 0;
}
.text-orange {
  color: orange;
  zoom: 0.9;
}
</style>
