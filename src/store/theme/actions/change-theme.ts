import { StoreActionParams } from '@/store/interface';
import { Themes, ThemeState } from '@/store';

export const changeTheme: StoreActionParams<ThemeState, Themes> = function (
  theme: Themes,
): void {
  localStorage.setItem('theme', theme);
  this.theme = theme;
};
