<template>
  <Transition
    enter-active-class="animate__animated animate__slideInDown"
    leave-active-class="animate__animated animate__slideOutDown"
  >
    <!--  -->
    <div v-if="visible" class="default-word" v-draggable>
      <div class="system-head" data-drag>
        <div>新增预设</div>
        <div class="system-icon" @click="emit('update:visible', false)">
          <CloseOutlined />
        </div>
      </div>
      <div class="p-8">
        <a-segmented :options="options" v-model:value="current"></a-segmented>
        <!--  -->
        <section>
          <WordList v-if="current === 'list'" />
          <WordForm v-else />
        </section>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import WordForm from './form/WordForm.vue';
import WordList from './list/WordList.vue';

const emit = defineEmits(['update:visible']);

const current = ref('list');

const options = [
  {
    label: '列表',
    value: 'list',
  },
  {
    label: '创建',
    value: 'form',
  },
];
defineProps<{
  visible: boolean;
}>();
</script>

<style lang="scss" scoped>
.default-word {
  width: 600px;
  height: 400px;
  position: fixed;
  background: white;
  z-index: 10;
  left: calc(50% - 200px);
  top: calc(50% - 300px);
  box-shadow: var(--window-shadow);
  .system-head {
    border-bottom: 1px solid #ddd;
  }
  section {
    height: calc(100% - 32px);
  }
}
</style>
