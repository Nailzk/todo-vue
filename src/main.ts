import './styles/style.scss';
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';

import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import router from './router';
import { VuetyfiConfig } from './vuetyfi.config.ts';

const vuetify = createVuetify({
  components,
  directives,
  ...VuetyfiConfig,
});

createApp(App).use(router).use(vuetify).use(createPinia()).mount('#app');
