import { resources, defaultNS } from './constants/i18nResourcesConst';
declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: typeof resources['en'];
  }
}
