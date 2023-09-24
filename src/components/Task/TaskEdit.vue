<template>
  <div class="task edit">
    <v-form ref="form" @submit.prevent="handleUpdate()">
      <v-text-field
          label="Todo name"
          color="secondary"
          v-model="name"
          :rules="rules"
          ref="input"
      >
      </v-text-field>

      <v-btn color="white" elevation="0" type="submit" block icon="mdi-check"></v-btn>
      <v-btn color="white" elevation="0" type="submit" block icon="mdi-close" @click.prevent="$emit('cancel')"></v-btn>
    </v-form>
  </div>
</template>

<script setup lang="ts">
import {ITask} from "@/store";
import {ref} from "vue";
import {TASK_INPUT_RULES} from "@/components/Task/task.rules.ts";

const emit = defineEmits(['cancel', 'update'])

const {task} = defineProps<{ task: ITask }>()

const rules = TASK_INPUT_RULES;

const name = ref(task?.name ?? '');
const form = ref<HTMLFormElement | null>(null);

async function handleUpdate(): Promise<void> {
  const {valid} = await form.value?.validate();
  if (!valid) return;

  emit('update', name.value);
}
</script>


<style scoped lang="scss">
@import "task";

.task.edit {
  padding: 20px 30px 0;
  display: flex;
}

.v-form {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 50px 50px;
  gap: 10px;
}

.v-btn {
  color: rgb(var(--v-theme-primary)) !important;

  .v-input__append {
    display: grid;
  }
}
</style>