// index.ts
import { createVNode, render } from 'vue';
import ToastComponent from './Toast.vue';

const Toast = {
  install(app) {
    // 创建挂载容器
    const mountPoint = document.createElement('div');
    document.body.appendChild(mountPoint);
    
    // 创建Toast实例
    const vnode = createVNode(ToastComponent);
    vnode.appContext = app._context;
    render(vnode, mountPoint);

    // 添加全局方法
    app.config.globalProperties.$toast = {
      show: (message) => vnode.component?.exposed?.addToast(message),
      success: (message) => vnode.component?.exposed?.addToast(message, 'success'),
      error: (message) => vnode.component?.exposed?.addToast(message, 'error')
    };
  }
};

// 创建直接调用的函数式API
const show = (message) => {
  // 实现逻辑同组件内部方法
};

export default Toast;
export const toast = {
  show,
  success: (message) => show(message, 'success'),
  error: (message) => show(message, 'error')
};