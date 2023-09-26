<script setup lang="ts">
import Header from '@/components/Header.vue';
import TasksList from '@/components/Task/TasksList.vue';
import { useTasksStore } from '@/store';

const tasksStore = useTasksStore();

tasksStore.getAll();
</script>

<template>
  <div class="wrapper">
    <Header :count="tasksStore.total" />
    <TasksList :taskList="tasksStore.items" />
  </div>
</template>

<style scoped>
.wrapper {
  border-radius: 12px;
  overflow: hidden;
  background-color: rgb(var(--v-theme-accentBg));
  height: 100%;
}
</style>