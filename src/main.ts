import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from '@/router';

const app = createApp(App);

// Use plugins
app.use(router);

// Mount vue app
app.mount('#app');
