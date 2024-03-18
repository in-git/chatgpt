<template>
  <div>
    <a-form
      :model="configStore.$state"
      :wrapper-col="{ span: 8, offset: 10 }"
      :label-col="{ span: 6 }"
      layout="vertical"
    >
      <a-card title="GPT设置">
        <a-form-item :wrapper-col="{ span: 12, offset: 6 }">
          <template #label>
            <span class="text-primary">秘钥[令牌][Key][Token]</span>
          </template>
          <a-textarea
            :autoSize="{ row: 4 }"
            v-model:value="configStore.$state.token"
            allow-clear
          ></a-textarea>
          <div class="text-999">
            <InfoCircleFilled />
            相当于一个账号,
            <a-button type="link" href="https://faucet.openkey.cloud/" target="_blank">
              推荐获取
            </a-button>
          </div>
        </a-form-item>
        <a-divider class="my-8" />
        <a-form-item label="查询余额" :wrapper-col="{ span: 12, offset: 6 }">
          <div>
            <a-card :loading="loading">
              <template #title>余额</template>
              <template #extra>
                <a-button
                  type="primary"
                  :disabled="!configStore.$state.token"
                  @click="subscription"
                  :loading="loading"
                  block
                >
                  查询
                </a-button>
              </template>
              <a-progress :percent="balance / (totalAmount / 100)">
                <template #format="percent">
                  <span>{{ percent.toFixed(2) }}%</span>
                </template>
              </a-progress>
              <div class="flex gc-12">
                <div class="mb-4">
                  <span class="text-999 mr-4">总余额:</span>
                  <span>{{ Number(balance).toFixed(2) }}</span>
                </div>
                <div>
                  <span class="text-999 mr-4">已使用:</span>
                  <span>{{ Number(totalAmount) / 100 }}</span>
                </div>
              </div>
            </a-card>
          </div>
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
        <a-divider class="my-8" />
      </a-card>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import useConfigStore from '@/store/config/config';
import { InfoCircleFilled } from '@ant-design/icons-vue';
import axios from 'axios';

const configStore = useConfigStore();
const loading = ref(false);

const balance = ref<number>(0);
const totalAmount = ref<number>(1);

const subscription = async () => {
  const subscription = `https://openkey.cloud/v1/dashboard/billing/subscription`;
  // const url1 = `https://billing.openkey.cloud/api/v1/token`;
  const usage = `https://openkey.cloud/v1/dashboard/billing/usage`;
  loading.value = true;

  const { data: subscriptionData } = await axios.get(`${subscription}`, {
    data: {
      api_key: configStore.$state.token,
    },
  });

  const { data: usageData } = await axios.get(`${usage}`, {
    data: {
      api_key: configStore.$state.token,
    },
  });
  loading.value = false;

  totalAmount.value = usageData.total_usage;

  balance.value = subscriptionData.hard_limit_usd;
  console.log(usageData, subscriptionData);
};
</script>

<style lang="scss" scoped>
.ant-form-item {
  margin-bottom: 0;
}
.text-orange {
  color: orange;
  zoom: 0.9;
}
.text-primary {
  color: var(--primary);
}
</style>
