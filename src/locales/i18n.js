import { createI18n } from "vue-i18n";
import en from "./en";
import zh from "./zh";
import jp from "./jp";
import { Locale } from "vant";
import enUS from "vant/lib/locale/lang/en-US";
import zhCN from "vant/lib/locale/lang/zh-CN";
import jaJP from "vant/lib/locale/lang/ja-JP";

const messages = {
  en,
  zh,
  jp,
};

const i18n = createI18n({
  locale: localStorage.getItem("language") || "en",
  fallbackLocale: "en",
  messages,
});

export const changeLanguage = (lang) => {
  i18n.global.locale = lang;
  localStorage.setItem("language", lang);

  if (lang === "en") {
    Locale.use("en-US", enUS);
  } else if (lang === "zh") {
    Locale.use("zh-CN", zhCN);
  } else if (lang === "jp") {
    Locale.use("ja-JP", jaJP);
  }
};

export const useLocale = () => {
  const currentLang = localStorage.getItem("language") || "en";
  changeLanguage(currentLang); 
};

export default i18n;
