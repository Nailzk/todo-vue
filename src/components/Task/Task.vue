<template>
  <div class="task" :class="{done: isDoneModel}" @mouseleave="isAsideActive = false" v-if="!isEditActive">
    <aside :class="{active: isAsideActive}" @click="handleAside()" v-if="!isEditActive">
      <div class="actions">
        <v-btn density="comfortable" icon="mdi-pencil" color="primary" class="elevation-0"
               @click.stop="handleEdit()"></v-btn>
        <v-btn density="comfortable" icon="mdi-minus" color="primary" class="elevation-0"
               @click.stop="handleRemove()"></v-btn>
      </div>
      <v-icon icon="mdi-menu-right" size="36" color="white"/>
    </aside>
    <v-checkbox v-model="isDoneModel" color="primary" hide-details></v-checkbox>
    <p class="name-text body-1 text-secondary font-weight-medium">{{ task.name }}</p>
    <p class="created-at text-secondary font-weight-medium">{{ date }}</p>
  </div>

  <TaskEdit v-if="isEditActive" @cancel="handleCancelEdit()" @update="handleUpdateTask($event)" :task="task"/>
</template>

<script setup lang="ts">
import {ITask, TasksState, useTasksStore} from "@/store";
import {computed, onMounted, ref, watch} from "vue";
import TaskEdit from "./TaskEdit.vue";
import {DateUtils} from "@/utils";

const {task} = defineProps<{ task: ITask }>()

const isDoneModel = ref<boolean>(task.isDone);
const taskState = ref<TasksState>();
const isAsideActive = ref<boolean>(false);
const isEditActive = ref<boolean>(false);

const taskStore = useTasksStore();

const date = computed(() => {
  const date = new Date(task.createdAt)

  return DateUtils.getCurrentTime(date);
})

watch(isDoneModel, (isDone: boolean) => {
  taskStore.updateItem({...task, isDone});
})

onMounted(() => {
  taskState.value = taskStore.$state;
})

function handleAside(): void {
  isAsideActive.value = !isAsideActive.value;
}

function handleRemove(): void {
  taskStore.deleteItem(task.id);
}

function handleEdit(): void {
  isEditActive.value = true;
}

function handleCancelEdit(): void {
  isEditActive.value = false;
  isAsideActive.value = false;
}

function handleUpdateTask(name: string): void {
  taskStore.updateItem({...task, name})
  handleCancelEdit();
}
</script>

<style scoped lang="scss">
@import "task";
</style>