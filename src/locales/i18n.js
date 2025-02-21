import { createI18n } from 'vue-i18n'
import en from './en'
import zh from './zh'
import jp from './jp'

const messages = {
  en,
  zh,
  jp
}

const i18n = createI18n({
  locale: 'en', // 设置默认语言为英文
  fallbackLocale: 'en', // 当所选语言不存在时回退到英文
  messages, // 配置语言包
})

// 添加切换语言的方法
export const changeLanguage = (lang) => {
  i18n.global.locale = lang;
};

export default i18n 