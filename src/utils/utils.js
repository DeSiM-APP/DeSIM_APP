import { onMounted, onUnmounted } from 'vue';

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
