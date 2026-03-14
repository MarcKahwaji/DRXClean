import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/data/translations';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { MapPin } from 'lucide-react';

const flags = [
  { country: { en: 'Lebanon', ar: 'لبنان' }, flag: '🇱🇧' },
  { country: { en: 'Syria', ar: 'سوريا' }, flag: '🇸🇾' },
  { country: { en: 'Jordan', ar: 'الأردن' }, flag: '🇯🇴' },
];

const Coverage = () => {
  const { lang } = useLanguage();
  const ref = useScrollAnimation();

  return (
    <section className="py-16 sm:py-24 bg-muted">
      <div ref={ref} className="fade-in-section max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <MapPin className="h-10 w-10 text-accent mx-auto mb-4" />
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">{t.coverage.heading[lang]}</h2>
        <p className="text-foreground/80 leading-relaxed mb-8">{t.coverage.text[lang]}</p>
        <div className="flex justify-center gap-6 sm:gap-10">
          {flags.map((f, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <span className="text-5xl">{f.flag}</span>
              <span className="text-sm font-medium text-foreground">{f.country[lang]}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coverage;
