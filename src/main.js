import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './locales/i18n'
import 'vant/lib/index.css';
import './style.css'
import { IndexBar, IndexAnchor } from 'vant';

const app = createApp(App)
app.use(router)
app.use(i18n)
app.use(IndexBar);
app.use(IndexAnchor);
app.mount('#app')
