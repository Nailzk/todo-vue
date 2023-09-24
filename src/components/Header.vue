<template>
  <header>
    <div class="date">
      <div class="current-date">
        <h1 class="h-1 font-weight-bold text-purple">{{ currentDayName }},</h1>
        <h2 class="h-2 font-weight-regular text-purple">{{currentDayNumber}}th</h2>
      </div>
      <div class="month">
        <p class="body-2 text-secondary font-weight-medium">{{currentMonthName}}</p>
      </div>
    </div>
    <div class="counter text-secondary"><span class="font-weight-medium">{{ count }}</span> Tasks</div>

    <AddTaskButton/>
  </header>
</template>

<script setup lang="ts">
import AddTaskButton from "@/components/AddTaskButton.vue";
import {DateUtils} from "@/utils";

const {count} = defineProps<{ count: Number }>()

const currentDayName = DateUtils.getCurrentDayName();
const currentDayNumber = DateUtils.getCurrentDayNumber();
const currentMonthName = DateUtils.getCurrentMonthName();

</script>

<style scoped>
header {
  position: relative;
  padding: 40px 20px 30px;
  border-bottom: 1px solid rgb(var(--v-theme-secondary));
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

header .date {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

header .date .current-date {
  display: flex;
  gap: 10px;
  align-items: flex-end;
}
</style>