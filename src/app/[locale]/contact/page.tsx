"use client";
import { useTranslations } from 'next-intl';
import ContactForm from '@/components/ContactForm'; // Assuming ContactForm is in src/components

export default function ContactPage() {
  const t = useTranslations('Navbar'); // Using Navbar for now, can create specific messages later

  return (
    <div>
      <h1 className="text-3xl font-bold text-aiux-gold mb-6">{t('contact')}</h1>
      <div className="max-w-2xl mx-auto">
        <p className="text-aiux-light-cream mb-8 text-center">
          Si tienes alguna pregunta o deseas discutir un proyecto, no dudes en ponerte en contacto con nosotros a través del siguiente formulario.
        </p>
        <ContactForm />
      </div>
    </div>
  );
}
