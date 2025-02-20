import { onMounted, onUnmounted } from 'vue';
import { showToast } from 'vant';

/**
 * useClickOutside
 * 
 * 添加一个点击事件监听器来检测指定元素外的点击。
 * 
 * @param {Function} callback - 回调函数
 * @param {string} targetClass - 目标元素的class
 */
export function useClickOutside(callback, targetClass) {
  const handleClickOutside = (e) => {
    const path = e.composedPath();
    const clickedOutside = !path.some(
      (el) => el.classList && el.classList.contains(targetClass)
    );
    if (clickedOutside) {
      callback();
    }
  };

  onMounted(() => {
    window.addEventListener('click', handleClickOutside);
  });

  onUnmounted(() => {
    window.removeEventListener('click', handleClickOutside);
  });
}

/**
 * 显示错误提示
 * 
 * @param {Object} options - 配置选项
 * @param {string} [options.message=''] - 提示消息
 * @param {string} [options.type='error'] - 提示类型 error warning
 * @param {number} [options.duration=2000] - 提示持续时间
 * @param {Function} [options.onClick=null] - 按钮点击回调函数
 */
export const useToast = ({
  message = '',
  type = 'error',
  duration = 2000,
  onClick = null
} = {}) => {
  const textColor = type === 'error' ? '#FFF' : '#000';
  const buttonHtml = onClick ? `<button style="color: ${textColor};" id="toast-button">Go</button>` : '';
  
  const toast = showToast({
    message: `
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M2.93067 14.1662L8.81233 4.34703C8.93618 4.143 9.11051 3.97432 9.31851 3.85726C9.52651 3.74021 9.76116 3.67871 9.99983 3.67871C10.2385 3.67871 10.4732 3.74021 10.6812 3.85726C10.8892 3.97432 11.0635 4.143 11.1873 4.34703L17.069 14.1662C17.1902 14.3762 17.2543 14.6143 17.2549 14.8568C17.2556 15.0993 17.1927 15.3377 17.0726 15.5484C16.9526 15.759 16.7794 15.9346 16.5705 16.0576C16.3615 16.1806 16.124 16.2468 15.8815 16.2495H4.11817C3.8756 16.247 3.63792 16.181 3.42881 16.0581C3.2197 15.9351 3.04645 15.7595 2.92632 15.5488C2.8062 15.338 2.74339 15.0995 2.74415 14.8569C2.74491 14.6143 2.80922 14.3762 2.93067 14.1662ZM9.99983 7.49953C10.2208 7.49953 10.4328 7.58732 10.5891 7.7436C10.7454 7.89988 10.8332 8.11185 10.8332 8.33286V10.8329C10.8332 11.0539 10.7454 11.2658 10.5891 11.4221C10.4328 11.5784 10.2208 11.6662 9.99983 11.6662C9.77882 11.6662 9.56686 11.5784 9.41058 11.4221C9.2543 11.2658 9.1665 11.0539 9.1665 10.8329V8.33286C9.1665 8.11185 9.2543 7.89988 9.41058 7.7436C9.56686 7.58732 9.77882 7.49953 9.99983 7.49953ZM9.1665 13.3329C9.1665 13.1118 9.2543 12.8999 9.41058 12.7436C9.56686 12.5873 9.77882 12.4995 9.99983 12.4995H10.0065C10.2275 12.4995 10.4395 12.5873 10.5958 12.7436C10.752 12.8999 10.8398 13.1118 10.8398 13.3329C10.8398 13.5539 10.752 13.7658 10.5958 13.9221C10.4395 14.0784 10.2275 14.1662 10.0065 14.1662H9.99983C9.77882 14.1662 9.56686 14.0784 9.41058 13.9221C9.2543 13.7658 9.1665 13.5539 9.1665 13.3329Z"
            fill="${textColor}" />
        </svg>
        <div style="color: ${textColor};">${message}</div>
        ${buttonHtml}
    `,
    position: 'top',
    duration,
    className: `custom-toast custom-toast-${type}`,
    type: 'html',
  });

  if (onClick) {
    setTimeout(() => {
      const button = document.getElementById('toast-button');
      if (button) {
        button.addEventListener('click', (e) => {
          e.stopPropagation();
          onClick();
          toast.close();
        });
      }
    }, 0);
  }

  return toast;
};