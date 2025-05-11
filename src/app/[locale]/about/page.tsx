"use client";
import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('Navbar'); // Using Navbar for now, can create specific messages later

  return (
    <div>
      <h1 className="text-3xl font-bold text-aiux-gold mb-6">{t('about')}</h1>
      <p className="text-aiux-light-cream">
        Contenido de la página Sobre Nosotros (placeholder).
      </p>
    </div>
  );
}
