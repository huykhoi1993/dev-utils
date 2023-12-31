import './style.css';
import App from './App.vue';
import router from '@/router';

const pinia = createPinia();
const app = createApp(App);

// Use plugins
app.use(router);
app.use(pinia);

// Mount vue app
app.mount('#app');
