import { createRouter, createWebHashHistory } from 'vue-router'
import Welcome from '@/views/welcome/Welcome.vue';     // 欢迎页面，对应路由 "/"
import Login from '@/views/login/Login.vue';           // 登录页面，对应路由 "/login"
import Register from '@/views/register/Register.vue';     // 注册页面，对应路由 "/register"
import Layout from '@/views/Layout.vue'                // Layout 组件
import Home from '@/views/home/Home.vue';             // 主页，对应路由 "/home"
import Import from '@/views/import/Import.vue';     // 导入订单页面，对应路由 "/import"
import Usagedetail from '@/views/ueagedetail/ueagedetail.vue';     // 导入订单页面，对应路由 "/import"
import Review from '@/views/review/Review.vue';       // 预览页面，对应路由 "/preview"
import AddEsims from '@/views/addEsims/AddEsims.vue';       // 添加esim卡页面，对应路由 "/addEsims"
import esimCenter from '@/views/esimCenter/esimCenter.vue';
import Tutorial from '@/views/tutorial/Tutorial.vue';       // esim详情，对应路由 "/esimCenter"
import Dashboard from '@/views/dashboard/Dashboard.vue';  // 添加 Dashboard 组件导入

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
  // 使用 Layout 包裹的页面
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/register',
        name: 'Register',
        component: Register,
        meta: {
          headerTemplate: 'back',
          title: ' '
        }
      },
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
        path: 'addEsims',
        name: 'AddEsims',
        component: AddEsims,
        meta: {
          headerTemplate: 'close',
          title: 'addEsims.title'
        }
      },
      {
        path: 'esimCenter',
        name: 'esimCenter',
        component: esimCenter,
        meta: {
          headerTemplate: 'user_center',
          title: 'eSIM Center'
        }
      },
      {
        path: 'tutorial',
        name: 'Tutorial',
        component: Tutorial,
        meta: {
          headerTemplate: 'back',
          title: 'tutorial.title'
        }
      },
      {
        path: 'dashboard/:id',
        name: 'Dashboard',
        component: Dashboard,
        meta: {
          headerTemplate: 'back',
          title: ' '
        }
      },
      {
        path: 'usagedetail',
        name: 'usagedetail',
        component: Usagedetail,
        meta: {
          headerTemplate: 'back',
          title: 'usagedetail.title'
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