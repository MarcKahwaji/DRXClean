import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/data/translations';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const MissionVision = () => {
  const { lang } = useLanguage();
  const ref = useScrollAnimation();

  const cards = [
    { title: t.mission.missionTitle, text: t.mission.missionText },
    { title: t.mission.visionTitle, text: t.mission.visionText },
  ];

  return (
    <section className="py-16 sm:py-24 bg-primary relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-10 left-10 w-64 h-64 rounded-full opacity-10 blur-3xl" style={{ background: 'radial-gradient(circle, hsl(26,82%,47%), transparent)' }} />
      <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full opacity-10 blur-3xl" style={{ background: 'radial-gradient(circle, hsl(170,50%,40%), transparent)' }} />

      <div ref={ref} className="fade-in-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground text-center mb-12">
          {t.mission.heading[lang]}
        </h2>
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {cards.map((card, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/10">
              <h3 className="text-xl sm:text-2xl font-semibold text-primary-foreground mb-4">{card.title[lang]}</h3>
              <p className="text-primary-foreground/80 leading-relaxed">{card.text[lang]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
