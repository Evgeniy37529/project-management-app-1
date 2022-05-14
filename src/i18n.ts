import i18n from 'i18next';
import 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
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
  //ns: ['ns1'],
  //defaultNS: 'ns1',
  resources,
  fallbackLng: 'en',
  //debug: true,
  // keySeparator: false, // we use content as keys

  // interpolation: {
  //   escapeValue: false,
  // },
  // react: {
  //   useSuspense: false,
  // },
});

export default i18n;
