import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/data/translations';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useStaggerAnimation } from '@/hooks/useScrollAnimation';
import { Shield, Clock, Eye } from 'lucide-react';

const WhatWeDo = () => {
  const { lang } = useLanguage();
  const ref = useScrollAnimation();
  const staggerRef = useStaggerAnimation();

  const pillars = [
    { icon: Shield, title: t.whatWeDo.safety, desc: t.whatWeDo.safetyDesc },
    { icon: Clock, title: t.whatWeDo.reliability, desc: t.whatWeDo.reliabilityDesc },
    { icon: Eye, title: t.whatWeDo.transparency, desc: t.whatWeDo.transparencyDesc },
  ];

  return (
    <section className="py-16 sm:py-24 bg-muted">
      <div ref={ref} className="fade-in-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t.whatWeDo.heading[lang]}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t.whatWeDo.subtext[lang]}</p>
        </div>
        <div ref={staggerRef} className="grid sm:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {pillars.map((p, i) => (
            <div key={i} className="stagger-item bg-background rounded-xl p-6 sm:p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <p.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{p.title[lang]}</h3>
              <p className="text-muted-foreground text-base leading-relaxed">{p.desc[lang]}</p>
            </div>
          ))}
        </div>
        <div className="rounded-xl p-6 sm:p-8 bg-background shadow-sm" style={{ borderTop: '4px solid', borderImage: 'linear-gradient(to right, hsl(26,82%,47%), hsl(170,50%,40%)) 1' }}>
          <p className="text-foreground text-center leading-relaxed">{t.whatWeDo.quote[lang]}</p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
