import { defineStore } from 'pinia';
import { initTheme,changeTheme } from './actions';

export enum Themes {
  Dark = 'dark',
  Light = 'light',
}

export type ThemeState = {
  theme: Themes;
};

export const useThemeStore = defineStore({
  id: 'theme',
  state: () => ({ theme: Themes.Light }) as ThemeState,
  actions: {
    changeTheme,
    initTheme
  },
});
