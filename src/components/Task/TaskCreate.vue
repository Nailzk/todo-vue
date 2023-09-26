<template>
  <div class="task">
    <v-form @submit.prevent="handleSubmit()" ref="form">
      <v-text-field
        label="Todo name"
        color="secondary"
        v-model="name"
        :rules="rules"
      >
        <template v-slot:append>
          <v-btn
            color="accet-bg"
            elevation="0"
            type="submit"
            block
            icon="mdi-plus"
          ></v-btn>
        </template>
      </v-text-field>
    </v-form>
  </div>
</template>

<script setup lang="ts">
import { useAddTaskButtonStore, useTasksStore } from '@/store';
import { ref } from 'vue';
import { TASK_INPUT_RULES } from '@/components/Task/task-create.rules.ts';

const rules = TASK_INPUT_RULES;

const tasksStore = useTasksStore();
const addTaskButtonStore = useAddTaskButtonStore();

const form = ref<HTMLFormElement | null>(null);
const name = ref('');

async function handleSubmit(): Promise<void> {
  const { valid } = await form.value?.validate();

  if (!valid) return;

  tasksStore.createItem({
    name: name.value,
    createdAt: new Date(),
    isDone: false,
  });
  addTaskButtonStore.change();
}
</script>

<style scoped lang="scss">
.task {
  padding: 20px 30px 0px;
}

.v-btn {
  color: rgb(var(--v-theme-primary)) !important;
}
</style>
