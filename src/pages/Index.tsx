import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import MissionVision from '@/components/MissionVision';
import WhatWeDo from '@/components/WhatWeDo';
import Founder from '@/components/Founder';
import Services from '@/components/Services';
import Coverage from '@/components/Coverage';
import Partners from '@/components/Partners';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const Index = () => {
  return (
    <>
      <Header />
      <Hero />
      <div className="section-divider" />
      <AboutUs />
      <MissionVision />
      <WhatWeDo />
      <div className="section-divider" />
      <Founder />
      <Services />
      <div className="section-divider" />
      <Coverage />
      <Partners />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
};

export default Index;
