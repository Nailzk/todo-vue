import { StoreAction } from '@/store/interface';
import { Themes, ThemeState } from '@/store';

export const initTheme: StoreAction<ThemeState> =
  async function (): Promise<void> {
    const theme: Themes | null = localStorage.getItem('theme') as Themes;

    if (!theme) localStorage.setItem('theme', Themes.Light);
    else {
      const isThemeExist = Object.values(Themes).includes(theme);

      if (isThemeExist) {
        this.theme = theme;
      } else {
        this.theme = Themes.Light;
      }
    }
  };
