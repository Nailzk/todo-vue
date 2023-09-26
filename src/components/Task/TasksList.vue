<script setup lang="ts">
import Task from '@/components/Task/Task.vue';
import { AddTaskButtonStore, ITask, useAddTaskButtonStore } from '@/store';
import TaskCreate from '@/components/Task/TaskCreate.vue';
import { onMounted, ref } from 'vue';

const { taskList } = defineProps<{ taskList: ITask[] }>();

const tasksStore = useAddTaskButtonStore();

const addTaskButtonState = ref<AddTaskButtonStore>({ isActive: false });

onMounted(() => {
  addTaskButtonState.value = tasksStore.$state;
});
</script>

<template>
  <ul class="tasks-list">
    <li class="tasks-list-item" v-if="addTaskButtonState.isActive">
      <TaskCreate />
    </li>
    <li class="tasks-list-item" v-if="taskList.length" v-for="task in taskList" :key="task.id">
      <Task :task="task" />
    </li>
  </ul>

  <div class="empty-list text-secondary" v-if="!taskList.length">
    <v-icon icon="mdi-format-list-group h1"></v-icon>
    <h1 class="h1 font-weight-medium">Tasks list is empty :(</h1>
  </div>
</template>

<style scoped>
.tasks-list {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  overflow-y: auto;
  height: calc(100% - 170px);
  margin-top: 20px;
}

.tasks-list-item:not(:last-child) {
  border-bottom: 1px solid rgb(var(--v-theme-secondary));
}

.empty-list {
  margin-top: 50px;
  text-align: center;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
}
</style>
