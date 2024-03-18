<template>
  <div style="width: 240px">
    <a-tabs>
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
    </a-tabs>
  </div>
</template>

<script setup lang="ts"></script>

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
</style>
