import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/data/translations';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import adraLogo from '@/assets/partner-adra.png';
import oxfamLogo from '@/assets/partner-oxfam.png';

const partners = [
  { name: 'ADRA', logo: adraLogo },
  { name: 'Oxfam', logo: oxfamLogo },
];

const Partners = () => {
  const { lang } = useLanguage();
  const ref = useScrollAnimation();

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div ref={ref} className="fade-in-section max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{t.partners.heading[lang]}</h2>
        <p className="text-muted-foreground mb-10">{t.partners.subtext[lang]}</p>
        <div className="grid sm:grid-cols-2 gap-6 max-w-lg mx-auto">
          {partners.map((p) => (
            <div key={p.name} className="border border-border rounded-xl p-8 flex items-center justify-center bg-background hover:shadow-md transition-all duration-300">
              <img src={p.logo} alt={p.name} className="h-16 sm:h-20 w-auto max-w-[140px] sm:max-w-[180px] object-contain partner-logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
