import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/data/translations';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const AboutUs = () => {
  const { lang } = useLanguage();
  const ref = useScrollAnimation();

  return (
    <section id="about" className="py-16 sm:py-24 bg-background">
      <div ref={ref} className="fade-in-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">{t.about.heading[lang]}</h2>
          <p className="text-foreground/80 leading-relaxed mb-4">{t.about.p1[lang]}</p>
          <p className="text-foreground/80 leading-relaxed">{t.about.p2[lang]}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
