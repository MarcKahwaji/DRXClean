import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/data/translations';
import { Button } from '@/components/ui/button';
import { MessageCircle, ArrowDown } from 'lucide-react';
import WhatsAppModal from './WhatsAppModal';
import heroBg from '@/assets/hero-bg.png';

const Hero = () => {
  const { lang } = useLanguage();
  const [waModal, setWaModal] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.bottom > 0) {
          setScrollY(window.scrollY);
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative min-h-screen flex items-center justify-center hero-clip overflow-hidden"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${scrollY * 0.3}px)`,
            willChange: 'transform',
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto hero-stagger">
          <span className="inline-block mb-6 px-4 py-2 border border-white/30 rounded-full text-xs sm:text-sm tracking-widest text-white/80 uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {t.hero.badge[lang]}
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {lang === 'en' ? (<>Your Journey,<br />Our Priority.</>) : (<>رحلتك،<br />أولويتنا.</>)}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
            {t.hero.subtext[lang]}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => setWaModal(true)}
              className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 text-base px-8"
            >
              <MessageCircle className="h-5 w-5" />
              {t.hero.bookWhatsApp[lang]}
            </Button>
            <a href="#contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white bg-white/10 hover:bg-white/20 gap-2 text-base px-8 w-full sm:w-auto"
              >
                <ArrowDown className="h-5 w-5" />
                {t.hero.requestQuote[lang]}
              </Button>
            </a>
          </div>
        </div>
      </section>
      <WhatsAppModal open={waModal} onOpenChange={setWaModal} />
    </>
  );
};

export default Hero;
