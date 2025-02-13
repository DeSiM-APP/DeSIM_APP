import { createRouter, createWebHashHistory } from 'vue-router'
import Welcome from '@/views/welcome/Welcome.vue';     // 欢迎页面，对应路由 "/"
import Login from '@/views/login/Login.vue';           // 登录页面，对应路由 "/login"
import Register from '@/views/register/Register.vue';     // 注册页面，对应路由 "/register"
import Home from '@/views/home/Home.vue';             // 主页，对应路由 "/home"
import ImportOrder from '@/views/import/Import.vue'; // 导入订单页面，对应路由 "/import"
import Preview from '@/views/preview/Preview.vue';       // 预览页面，对应路由 "/preview"

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/import',
    name: 'ImportOrder',
    component: ImportOrder
  },
  {
    path: '/preview',
    name: 'Preview',
    component: Preview
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router; 