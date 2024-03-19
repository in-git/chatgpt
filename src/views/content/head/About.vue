<template>
  <div style="width: 240px">
    <a-tabs @tab-click="tabClick">
      <a-tab-pane key="about" tab="关于">
        <a-descriptions :column="1">
          <a-descriptions-item label="版本">初代</a-descriptions-item>
          <a-descriptions-item label="框架">
            <div class="flex gc-4 align-center">
              <div class="logo">
                <img src="https://vuejs.org/logo.svg" />
              </div>
              <div class="logo">
                <img src="https://www.tslang.cn/assets/images/icons/favicon.ico" />
              </div>
            </div>
          </a-descriptions-item>
          <a-descriptions-item label="源码">
            <a href="https://gitee.com/in-git/chat-gpt.git" target="_blank" class="text-center">
              <img src="https://gitee.com/static/images/logo-en.svg" width="24" alt="" />
            </a>
          </a-descriptions-item>

          <a-descriptions-item label="屏幕支持">大于1000px</a-descriptions-item>
        </a-descriptions>
      </a-tab-pane>
      <a-tab-pane tab="作者">
        <a-descriptions title="反馈" :column="1">
          <a-descriptions-item label="作者">
            <span class="text-primary">吴文龙</span>
          </a-descriptions-item>

          <a-descriptions-item label="BUG/功能">
            <a-typography-paragraph class="my-0" copyable>444891953@qq.com</a-typography-paragraph>
          </a-descriptions-item>
        </a-descriptions>
      </a-tab-pane>
      <a-tab-pane tab="感谢Star" key="star">
        <a-card :loading="loading">
          <ul class="star-users">
            <li v-for="item in starUsers" :key="item.id" @click="openLink(item.html_url)">
              <a-image :src="item.avatar_url" width="32px" height="32px" :preview="false"></a-image>
              <div>
                {{ item.name }}
              </div>
            </li>
          </ul>
        </a-card>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script setup lang="ts">
import { getStarUsers } from '@/api/modules/gitee/gitee';
import { openLink } from '@/utils/common/utils';
import type { Key } from 'ant-design-vue/es/_util/type';

const starUsers = ref<StarUser[]>();

const loading = ref(false);
const getStartUserList = async () => {
  loading.value = true;
  const { data } = await getStarUsers();
  loading.value = false;
  starUsers.value = data;
};
const tabClick = (key: Key) => {
  if (key === 'star') {
    getStartUserList();
  }
};
</script>

<style lang="scss" scoped>
.logo {
  width: 32px;
  padding: 2px;
  height: 32px;
  img {
    width: 100%;
    height: 100%;
  }
}
.text-primary {
  color: var(--primary);
}
.star-users {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(32px, 0.2fr));
}
</style>
