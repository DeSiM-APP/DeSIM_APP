import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n, { useLocale } from './locales/i18n'
import * as echarts from 'echarts'
import 'vant/lib/index.css';
import './style.css'
import { createPinia } from 'pinia';

useLocale();

const app = createApp(App)
app.config.globalProperties.$echarts = echarts
app.use(router)
app.use(i18n)
app.use(createPinia())
app.mount('#app')
