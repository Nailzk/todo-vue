<script setup lang="ts">
import { Themes, useThemeStore } from '@/store';
import { useTheme } from 'vuetify';
import { ref, watch } from 'vue';

const themeStore = useThemeStore();
const theme = useTheme();

const isDarkInit = themeStore.theme === Themes.Dark;
const isDark = ref<boolean>(isDarkInit);

watch(isDark, (curr: boolean) => {
  console.log(curr);
  const themeName = curr ? Themes.Dark : Themes.Light;
  themeStore.changeTheme(themeName);
  theme.global.name.value = themeName;

  setThemeClass();
});

function setThemeClass() {
  const body = document.querySelector('body');

  if (body) {
    body.classList.remove('light');
    body.classList.remove('dark');
    body.classList.add(themeStore.theme);
  }
}
</script>

<template>
  <div class="utils-buttons">
    <v-switch
      true-icon="mdi-moon-waning-crescent"
      false-icon="mdi-white-balance-sunny"
      class="theme-switch"
      v-model="isDark"
    ></v-switch>
  </div>
</template>

<style scoped lang="scss">
.utils-buttons {
  position: absolute;
  top: 20px;
  right: 20px;
}
</style>
