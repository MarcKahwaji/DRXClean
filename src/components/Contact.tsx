import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { t, serviceOptions, carTypeOptions } from '@/data/translations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  const { lang } = useLanguage();
  const ref = useScrollAnimation();
  const [form, setForm] = useState({
    name: '',
    service: '',
    fromDate: '',
    toDate: '',
    date: '',
    pickup: '',
    destination: '',
    carType: '',
    notes: '',
  });

  const needsDateRange = form.service === 'Cross-Border Travel' || form.service === 'Internal Transportation' || form.service === 'Car Rentals' || form.service === 'Corporate Contracts' || form.service === 'Chauffeur Services' || form.service === 'Nationwide Tours';
  const needsDateTime = form.service === 'Cross-Border Travel' || form.service === 'Internal Transportation';

  const selectedServiceAr = serviceOptions.find(s => s.en === form.service)?.ar || form.service;
  const selectedCarAr = carTypeOptions.find(c => c.en === form.carType)?.ar || form.carType;

  const buildMessage = () => {
    let msg = `Hello DRX, I would like to request a quote.\n\n`;
    msg += `Name: ${form.name}\n`;
    msg += `Service: ${form.service}\n`;
    if (needsDateRange) {
      msg += `From: ${form.fromDate}\nTo: ${form.toDate}\n`;
    } else {
      msg += `Date: ${form.date}\n`;
    }
    msg += `Pickup: ${form.pickup}\n`;
    msg += `Destination: ${form.destination}\n`;
    msg += `Vehicle: ${form.carType}\n`;
    if (form.notes) msg += `Notes: ${form.notes}\n`;

    msg += `\n---\n\n`;
    msg += `مرحباً DRX، أود طلب عرض سعر.\n\n`;
    msg += `الاسم: ${form.name}\n`;
    msg += `الخدمة: ${selectedServiceAr}\n`;
    if (needsDateRange) {
      msg += `من: ${form.fromDate}\nإلى: ${form.toDate}\n`;
    } else {
      msg += `التاريخ: ${form.date}\n`;
    }
    msg += `موقع الانطلاق: ${form.pickup}\n`;
    msg += `الوجهة: ${form.destination}\n`;
    msg += `المركبة: ${selectedCarAr}\n`;
    if (form.notes) msg += `ملاحظات: ${form.notes}\n`;

    return encodeURIComponent(msg);
  };

  const sendTo = (number: string) => {
    window.open(`https://wa.me/${number}?text=${buildMessage()}`, '_blank');
  };

  return (
    <section id="contact" className="py-0">
      <div ref={ref} className="fade-in-section grid lg:grid-cols-2 min-h-[600px]">
        {/* Left - Dark Side */}
        <div className="bg-primary p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">{t.contact.getInTouch[lang]}</h2>
          <p className="text-primary-foreground/70 mb-8 leading-relaxed">{t.contact.contactSubtext[lang]}</p>

          <div className="space-y-4">
            <a
              href="https://wa.me/96176963061?text=Hello%20DRX%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.%20%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20DRX%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%D9%83%D9%85."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="w-full justify-start gap-3 border border-white/15 text-primary-foreground bg-white/5 hover:bg-white/10 h-12 rounded-lg">
                <MessageCircle className="h-5 w-5" style={{ color: 'hsl(142,70%,40%)' }} />
                Lebanon: +961 76 963 061
              </Button>
            </a>
            <a
              href="https://wa.me/963988884385?text=Hello%20DRX%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.%20%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20DRX%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%D9%83%D9%85."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="w-full justify-start gap-3 border border-white/15 text-primary-foreground bg-white/5 hover:bg-white/10 h-12 rounded-lg">
                <MessageCircle className="h-5 w-5" style={{ color: 'hsl(142,70%,40%)' }} />
                Syria: +963 988 884 385
              </Button>
            </a>
          </div>
        </div>

        {/* Right - Form */}
        <div className="bg-background p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">{t.contact.requestQuote[lang]}</h2>
          <div className="space-y-4">
            <Input
              placeholder={t.contact.fullName[lang]}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <Select value={form.service} onValueChange={(v) => setForm({ ...form, service: v })}>
              <SelectTrigger>
                <SelectValue placeholder={t.contact.selectService[lang]} />
              </SelectTrigger>
              <SelectContent>
                {serviceOptions.map((s) => (
                  <SelectItem key={s.en} value={s.en}>{s[lang]}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {needsDateRange ? (
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-muted-foreground mb-1 block">{t.contact.fromDate[lang]}</label>
                  <Input type={needsDateTime ? 'datetime-local' : 'date'} value={form.fromDate} onChange={(e) => setForm({ ...form, fromDate: e.target.value })} />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-1 block">{t.contact.toDate[lang]}</label>
                  <Input type={needsDateTime ? 'datetime-local' : 'date'} value={form.toDate} onChange={(e) => setForm({ ...form, toDate: e.target.value })} />
                </div>
              </div>
            ) : (
              <div>
                <label className="text-xs text-muted-foreground mb-1 block">{t.contact.date[lang]}</label>
                <Input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
              </div>
            )}

            <Input
              placeholder={t.contact.pickup[lang]}
              value={form.pickup}
              onChange={(e) => setForm({ ...form, pickup: e.target.value })}
            />
            <Input
              placeholder={t.contact.destination[lang]}
              value={form.destination}
              onChange={(e) => setForm({ ...form, destination: e.target.value })}
            />
            <Select value={form.carType} onValueChange={(v) => setForm({ ...form, carType: v })}>
              <SelectTrigger>
                <SelectValue placeholder={t.contact.selectCar[lang]} />
              </SelectTrigger>
              <SelectContent>
                {carTypeOptions.map((c) => (
                  <SelectItem key={c.en} value={c.en}>{c[lang]}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Textarea
              placeholder={t.contact.notes[lang]}
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              rows={3}
            />
            <div className="grid grid-cols-2 gap-3 pt-2">
              <Button onClick={() => sendTo('96176963061')} className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                <Send className="h-4 w-4" />
                {t.contact.sendLebanon[lang]}
              </Button>
              <Button onClick={() => sendTo('963988884385')} className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
                <Send className="h-4 w-4" />
                {t.contact.sendSyria[lang]}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
