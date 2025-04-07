
import React, { createContext, useState, useContext, useEffect } from 'react';
import { translations, Translations } from '../utils/translations';

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: keyof Translations) => string;
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'hu',
  setLanguage: () => {},
  t: () => '',
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState('hu');
  
  useEffect(() => {
    const storedLanguage = localStorage.getItem('language') || 'hu';
    setLanguage(storedLanguage);
  }, []);

  const handleSetLanguage = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: keyof Translations) => {
    return translations[language]?.[key] || translations['en'][key];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
