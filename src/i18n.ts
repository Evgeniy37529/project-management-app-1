import i18n from 'i18next';
import 'react-i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './public/locales/en/en.json';
import translationRU from './public/locales/ru/ru.json';

export const defaultNS = 'ns1';
export const resources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
};

i18n.use(initReactI18next).init({
  lng: 'en',
  resources,
  fallbackLng: 'en',
});

export default i18n;
