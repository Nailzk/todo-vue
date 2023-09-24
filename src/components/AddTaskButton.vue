<template>
  <v-btn density="default" class="text-white" :icon="icon" @click="handleButtonClick()"></v-btn>
</template>

<script setup lang="ts">
import {computed, onMounted, ref} from "vue";
import {AddTaskButtonStore, useAddTaskButtonStore} from "@/store";

const tasksStore = useAddTaskButtonStore();


const addTaskButtonState = ref<AddTaskButtonStore>({isActive: false});

onMounted(() => {
  addTaskButtonState.value = tasksStore.$state;
})

const icon = computed(() => addTaskButtonState.value.isActive ? 'mdi-close' : 'mdi-plus');

function handleButtonClick(): void {
  tasksStore.change();
}
</script>

<style scoped>
.v-btn {
  background: rgb(var(--v-theme-primary));
  width: calc(var(--v-btn-height) + 24px);
  height: calc(var(--v-btn-height) + 24px);
  position: absolute;
  right: 20px;
  bottom: -25px;
}
</style>