import './styles/style.scss';
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';

import { createApp } from 'vue';
import { VuetyfiConfig } from './vuetyfi.config.ts';

import App from './App.vue';
import router from './router';

import { createPinia } from 'pinia';
import { createVuetify } from 'vuetify';

import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
  components,
  directives,
  ...VuetyfiConfig,
});

createApp(App)
  .use(router)
  .use(vuetify)
  .use(createPinia())
  .mount('#app');
