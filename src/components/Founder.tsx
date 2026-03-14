import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/data/translations';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Quote } from 'lucide-react';
import founderImg from '@/assets/Mr_EhsanAlkhen.jpeg';

const Founder = () => {
  const { lang } = useLanguage();
  const ref = useScrollAnimation();

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div ref={ref} className="fade-in-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-8 sm:gap-12 items-center">
          <div className="md:col-span-2">
            <div className="relative">
              <img
                src={founderImg}
                alt="Ehsan Al-Khen - Founder of DRX"
                className="w-full rounded-xl shadow-lg object-cover aspect-[3/4]"
              />
              <div className="absolute inset-0 rounded-xl" style={{ background: 'linear-gradient(135deg, transparent 70%, hsla(26,82%,47%,0.15))' }} />
              {/* Decorative accent corner */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 rounded-xl border-2 border-accent/30 -z-10" />
            </div>
          </div>
          <div className="md:col-span-3 space-y-4">
            <span className="text-sm text-muted-foreground uppercase tracking-widest" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {t.founder.label[lang]}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              {t.founder.name[lang]}
            </h2>
            <div className={`founder-accent ${lang === 'ar' ? 'pr-5' : 'pl-5'}`}>
              <Quote className="h-5 w-5 text-accent/40 mb-2" />
              <p className="text-foreground/80 leading-relaxed">{t.founder.bio[lang]}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
