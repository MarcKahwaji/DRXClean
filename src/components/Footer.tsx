import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/data/translations";
import logo from "@/assets/DRXLogo.png";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const { lang } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo & Tagline */}
          <div>
            <img src={logo} alt="DRX" className="h-16 w-auto mb-4 rounded" />
            <p className="text-primary-foreground/60 text-sm leading-relaxed">{t.footer.tagline[lang]}</p>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t.footer.quickLinks[lang]}</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                {t.nav.about[lang]}
              </a>
              <a
                href="#services"
                className="block text-sm text-primary-foreground/60 hover:text-accent transition-colors"
              >
                {t.nav.services[lang]}
              </a>
              <a
                href="#contact"
                className="block text-sm text-primary-foreground/60 hover:text-accent transition-colors"
              >
                {t.nav.contact[lang]}
              </a>
            </div>
          </div>
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t.footer.contactInfo[lang]}</h4>
            <div className="space-y-2 text-sm text-primary-foreground/60">
              <p>{t.footer.headOffice[lang]}</p>
              <p>{lang === 'en' ? 'Lebanon' : 'لبنان'}: +961 76 963 061</p>
              <p>{lang === 'en' ? 'Syria' : 'سوريا'}: +963 988 884 385</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/40">
          <p>{t.footer.copyright[lang]}</p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.facebook.com/share/185GDqcuCD/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/drx.auto?igsh=bzVydXk2MzAzcDdk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
          <p className="italic">{t.footer.motto[lang]}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
