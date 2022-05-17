import { useEffect, useState } from 'react';
import { Switch } from 'antd';
import { useTranslation } from 'react-i18next';

export const SwitcherLanguage = () => {
  const [language, setLanguage] = useState<string>('en');
  const { i18n } = useTranslation();
  const changeLanguage = (checked: boolean) => {
    const language = checked ? 'en' : 'ru';
    i18n.changeLanguage(language);
    localStorage.setItem('language', language);
    setLanguage(language);
  };
  useEffect(() => {
    const localStorageLang = localStorage.getItem('language');
    i18n.changeLanguage(localStorageLang || language);
    setLanguage(localStorageLang || language);
  }, []);

  return (
    <>
      <Switch
        checkedChildren="en"
        unCheckedChildren="ru"
        checked={language === 'en' ? true : false}
        key="language"
        onChange={changeLanguage}
      />
    </>
  );
};
