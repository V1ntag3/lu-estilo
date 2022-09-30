import { createApp } from 'vue';
import { createPinia } from 'pinia'
import App from './App.vue';
import router from './router/router'
const app = createApp(App);

import maska from 'maska'
app.use(maska)
const pinia = createPinia()


app.use(pinia)
app.use(router)



    app.mount('#app');
