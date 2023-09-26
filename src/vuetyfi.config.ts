import { VuetifyOptions } from 'vuetify';

export const VuetyfiConfig: VuetifyOptions = {
  theme: {
    defaultTheme: 'dark',
    themes: {
      light: {
        dark: false,
        colors: {
          accentBg: '#fff',
          primary: '#EB7571',
          secondary: '#ADB4B5',
          purple: '#6665E4',
        },
      },
      dark: {
        dark: true,
        colors: {
          accentBg: '#040D12',
          primary: '#5C8374',
          secondary: '#93B1A6',
          purple: '#2e7a7a',
        },
      },
    },
  },
  icons: {
    defaultSet: 'mdi',
  },
};
