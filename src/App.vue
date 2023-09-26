<script setup lang="ts">
import { useThemeStore } from '@/store';
import UtilsButtons from '@/components/UtilsButtons.vue';
import { useTheme } from 'vuetify';

const themeStore = useThemeStore();

themeStore.initTheme();

const theme = useTheme();
theme.global.name.value = themeStore.theme;

initThemeBodyClass();
function initThemeBodyClass() {
  const body = document.querySelector('body');

  if (body) {
    body.classList.add(themeStore.theme);
  }
}
</script>

<template>
  <main>
    <UtilsButtons />
    <router-view></router-view>
  </main>
</template>

<style scoped>
main {
  padding: 0 10px;
  max-width: 500px;
  height: 70vh;
  margin: 0 auto;
}
</style>