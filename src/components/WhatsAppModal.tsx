import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/data/translations';
import { MessageCircle } from 'lucide-react';

interface WhatsAppModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  message?: string;
}

const WhatsAppModal = ({ open, onOpenChange, message }: WhatsAppModalProps) => {
  const { lang } = useLanguage();
  const defaultMsg = message || 'Hello DRX, I would like to inquire about your services. مرحباً DRX، أود الاستفسار عن خدماتكم.';
  const encoded = encodeURIComponent(defaultMsg);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl">{t.whatsappModal.title[lang]}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 mt-4">
          <a href={`https://wa.me/96176963061?text=${encoded}`} target="_blank" rel="noopener noreferrer">
            <Button className="w-full h-14 text-lg bg-primary hover:bg-primary/90 text-primary-foreground gap-3">
              <MessageCircle className="h-5 w-5" />
              {t.whatsappModal.lebanon[lang]}
            </Button>
          </a>
          <a href={`https://wa.me/963988884385?text=${encoded}`} target="_blank" rel="noopener noreferrer">
            <Button className="w-full h-14 text-lg bg-accent hover:bg-accent/90 text-accent-foreground gap-3">
              <MessageCircle className="h-5 w-5" />
              {t.whatsappModal.syria[lang]}
            </Button>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WhatsAppModal;
