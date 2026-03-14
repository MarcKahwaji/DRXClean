import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/data/translations';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useStaggerAnimation } from '@/hooks/useScrollAnimation';


import crossBorder from '@/assets/service-cross-border.png';
import internal from '@/assets/service-internal.png';
import rentals from '@/assets/service-rentals.png';
import corporate from '@/assets/service-corporate.png';
import chauffeur from '@/assets/service-chauffeur.png';
import tours from '@/assets/service-tours.png';

const images = [crossBorder, internal, rentals, corporate, chauffeur, tours];

const descriptions = [
  { en: 'Safe travel between Syria, Lebanon, and Jordan with professional drivers.', ar: 'سفر آمن بين سوريا ولبنان والأردن مع سائقين محترفين.' },
  { en: 'Comfortable city-to-city and intercity transportation across Syria.', ar: 'تنقل مريح بين المدن وداخلها في أنحاء سوريا.' },
  { en: 'Modern vehicles available for daily, weekly, or monthly rental.', ar: 'سيارات حديثة متاحة للإيجار اليومي أو الأسبوعي أو الشهري.' },
  { en: 'Tailored fleet solutions for businesses and organizations.', ar: 'حلول أسطول مصممة خصيصاً للشركات والمؤسسات.' },
  { en: 'Experienced drivers for executive and VIP transportation.', ar: 'سائقون ذوو خبرة للنقل التنفيذي وكبار الشخصيات.' },
  { en: 'Guided tours across all Syrian governorates and historical sites.', ar: 'جولات سياحية عبر جميع المحافظات السورية والمواقع التاريخية.' },
];

const Services = () => {
  const { lang } = useLanguage();
  const ref = useScrollAnimation();
  const staggerRef = useStaggerAnimation();

  return (
    <section id="services" className="py-16 sm:py-24 bg-background">
      <div ref={ref} className="fade-in-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
          {t.services.heading[lang]}
        </h2>
        <div ref={staggerRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((item, i) => (
            <div key={i} className="stagger-item group rounded-xl overflow-hidden border border-border bg-background shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="h-48 overflow-hidden relative">
                <img src={images[i]} alt={item.en} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/60 via-accent/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-foreground mb-1">{item[lang]}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{descriptions[i][lang]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
