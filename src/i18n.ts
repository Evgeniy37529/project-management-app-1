import i18n from 'i18next';
import 'react-i18next';
import { initReactI18next } from 'react-i18next';
import { resources } from './constants/i18nResourcesConst';

i18n.use(initReactI18next).init({
  lng: 'en',
  resources,
  fallbackLng: 'en'
});

export default i18n;
