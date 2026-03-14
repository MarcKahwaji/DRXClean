import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/data/translations";
import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X } from "lucide-react";
import WhatsAppModal from "./WhatsAppModal";
import logo from "@/assets/DRXLogo.png";
import translateIcon from "@/assets/translate-icon.png";

const Header = () => {
  const { lang, toggleLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [waModal, setWaModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.about[lang], href: "#about" },
    { label: t.nav.services[lang], href: "#services" },
    { label: t.nav.contact[lang], href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "bg-background shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20 sm:h-24">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2">
            <img src={logo} alt="DRX Logo" className="h-16 sm:h-20 w-auto object-contain" />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${scrolled ? "text-foreground" : "text-white"}`}
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {link.label}
              </a>
            ))}
            <div className="w-px h-5 bg-current opacity-20 mx-1" />
            <button
              onClick={toggleLang}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                scrolled
                  ? "hover:bg-muted"
                  : "hover:bg-white/10"
              }`}
              title={lang === "en" ? "Switch to Arabic" : "Switch to English"}
            >
              <img
                src={translateIcon}
                alt="Translate"
                className={`h-5 w-5 ${scrolled ? "" : "invert brightness-0 invert"}`}
              />
              <span
                className={`text-sm font-semibold ${scrolled ? "text-foreground" : "text-white"}`}
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {lang === "en" ? "العربية" : "English"}
              </span>
            </button>
            <Button
              size="sm"
              onClick={() => setWaModal(true)}
              className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2"
            >
              <MessageCircle className="h-4 w-4" />
              {t.nav.bookNow[lang]}
            </Button>
          </nav>

          {/* Mobile: Language Toggle + Hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleLang}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg transition-all duration-200 ${
                scrolled ? "hover:bg-muted" : "hover:bg-white/10"
              }`}
              title={lang === "en" ? "Switch to Arabic" : "Switch to English"}
            >
              <img
                src={translateIcon}
                alt="Translate"
                className={`h-5 w-5 ${scrolled ? "" : "invert brightness-0 invert"}`}
              />
              <span
                className={`text-xs font-semibold ${scrolled ? "text-foreground" : "text-white"}`}
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {lang === "en" ? "العربية" : "English"}
              </span>
            </button>
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? (
                <X className={`h-6 w-6 ${scrolled ? "text-foreground" : "text-white"}`} />
              ) : (
                <Menu className={`h-6 w-6 ${scrolled ? "text-foreground" : "text-white"}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden bg-background border-t shadow-lg p-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-foreground text-sm font-medium py-2"
              >
                {link.label}
              </a>
            ))}
            <Button
              size="sm"
              onClick={() => {
                setWaModal(true);
                setMobileOpen(false);
              }}
              className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 mt-2"
            >
              <MessageCircle className="h-4 w-4" />
              {t.nav.bookNow[lang]}
            </Button>
          </div>
        )}
      </header>
      <WhatsAppModal open={waModal} onOpenChange={setWaModal} />
    </>
  );
};

export default Header;
