<script setup lang="ts">

import Header from "@/components/Header.vue";
import TasksList from "@/components/Task/TasksList.vue";
import {TasksState, useTasksStore} from "@/store";
import {onMounted, ref} from "vue";

const tasksStore = useTasksStore();


const itemsState = ref<TasksState>({items: [], total: 0})

tasksStore.getAll()

onMounted(() => {
  itemsState.value = tasksStore.$state;
})
</script>

<template>
  <div class="wrapper">
    <Header :count="itemsState.total"/>
    <TasksList :taskList="itemsState.items"/>
  </div>
</template>

<style scoped>
.wrapper {
  border-radius: 12px;
  overflow: hidden;
  background-color: #fff;
  height: 100%;
}
</style>