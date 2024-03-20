import './assets/main.css'
import "./axios"
import { createApp,markRaw } from 'vue'
import { createPinia } from 'pinia'
import Toast from "vue-toastification";
import PrimeVue from 'primevue/config';
import Lara from '@/presets/lara';
import "vue-toastification/dist/index.css";
//import 'primevue/resources/themes/md-light-indigo/theme.css';
import App from './App.vue'
import router from './router'
import Ripple from 'primevue/ripple';

const app = createApp(App);
const pinia = createPinia();
pinia.use(({store}) => {
    store.router = markRaw(router);
});
app.use(Toast)
app.use(pinia);
app.directive('ripple', Ripple);
app.use(PrimeVue, { unstyled: true, pt: Lara }, { ripple: true });
app.use(router);

app.mount('#app')
