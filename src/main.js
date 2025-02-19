import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './locales/i18n'
import 'vant/lib/index.css';
import './style.css'
import { Locale } from 'vant';
// import Vant from 'vant';
import enUS from 'vant/lib/locale/lang/en-US';
Locale.use('en-US', enUS);
import Toast from './components/toast/index.js'
const app = createApp(App)
app.use(router)
app.use(i18n)
// app.use(Vant);
app.use(Toast)
app.mount('#app')
