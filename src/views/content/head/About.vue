<template>
  <div style="width: 240px">
    <a-descriptions title="关于" :column="1">
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

      <a-descriptions-item label="版本">初代</a-descriptions-item>
    </a-descriptions>
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
</style>
