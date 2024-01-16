import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./en/translation.json";
import translationRU from "./ru/translation.json";
import translationKY from "./ky/translation.json";

i18n.use(initReactI18next).init({
  lng: "en",
  debug: true,
  resources: {
    en: {
      translation: translationEN,
    },
    ru: {
      translation: translationRU,
    },
    ky: {
      translation: translationKY,
    },
  },
});

export default i18n;
