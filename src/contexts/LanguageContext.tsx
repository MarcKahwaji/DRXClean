import React, { createContext, useContext, useState, useCallback } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  isArabic: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  toggleLang: () => {},
  isArabic: false,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('en');

  const toggleLang = useCallback(() => {
    setLang(prev => prev === 'en' ? 'ar' : 'en');
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, isArabic: lang === 'ar' }}>
      <div className={lang === 'ar' ? 'rtl' : ''}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
