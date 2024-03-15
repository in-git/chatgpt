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
      <div class="px-8">
        <a-tabs>
          <a-tab-pane key="list" tab="预设列表">
            <WordList />
          </a-tab-pane>
          <a-tab-pane key="form" tab="新建">
            <WordForm />
          </a-tab-pane>
        </a-tabs>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import WordForm from './form/WordForm.vue';
import WordList from './list/WordList.vue';

const emit = defineEmits(['update:visible']);
defineProps<{
  visible: boolean;
}>();
</script>

<style lang="scss" scoped>
.default-word {
  width: 600px;
  height: 450px;
  position: fixed;
  background: white;
  overflow-y: auto;
  z-index: 10;

  left: calc(50% - 250px);
  top: calc(50% - 225px);
  box-shadow: var(--window-shadow);

  .system-head {
    border-bottom: 1px solid #ddd;
    background: white;
  }

  section {
    height: calc(100% - 32px);
  }
}
::v-deep(.ant-card) {
  box-shadow: none;
}
</style>
