import { createRouter, createWebHashHistory } from 'vue-router'
import Welcome from '@/views/welcome/Welcome.vue';     // 欢迎页面，对应路由 "/"
import Login from '@/views/login/Login.vue';           // 登录页面，对应路由 "/login"
import Register from '@/views/register/Register.vue';     // 注册页面，对应路由 "/register"
import Layout from '@/views/Layout.vue'                // Layout 组件
import Home from '@/views/home/Home.vue';             // 主页，对应路由 "/home"
import Import from '@/views/import/Import.vue';     // 导入订单页面，对应路由 "/import"
import Review from '@/views/review/Review.vue';       // 预览页面，对应路由 "/preview"
import esimCenter from '@/views/esimCenter/esimCenter.vue';       // esim详情，对应路由 "/esimCenter"

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
  // 使用 Layout 包裹的页面
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home,
        meta: {
          title: 'home.title'
        }
      },
      {
        path: 'import',
        name: 'Import',
        component: Import,
        meta: {
          headerTemplate: 'back-close',
          title: 'import.title'
        }
      },
      {
        path: 'review',
        name: 'Review',
        component: Review,
        meta: {
          headerTemplate: 'back-close',
          title: 'review.title'
        }
      },
      {
        path: 'esimCenter',
        name: 'esimCenter',
        component: esimCenter,
        meta: {
          headerTemplate: 'user_center',
          title: 'esimCenter.title'
        }
      },
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router; 