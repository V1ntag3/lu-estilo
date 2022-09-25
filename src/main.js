import { createApp } from 'vue';
import App from './App.vue';
import Localizacao from '../src/components/Localizacao.vue';
import router from './router' // <---

const app = createApp(App);
app.component('LocalizacaoItem', Localizacao);
app.use(router).mount('#app');
