import { createApp } from 'vue';
import Dev from './serve.vue';
import UpcComponents from '@/entry.esm';

const app = createApp(Dev);
app.use(UpcComponents);

app.mount('#app');
