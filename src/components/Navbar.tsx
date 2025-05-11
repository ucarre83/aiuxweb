"use client";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation'; // Using next/navigation for path manipulation
import { useLocale, useTranslations } from 'next-intl';

const Navbar = () => {
  const t = useTranslations('Navbar');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    // Remove current locale prefix if present
    let newPath = pathname;
    if (pathname.startsWith(`/${locale}`)) {
      newPath = pathname.substring(`/${locale}`.length) || '/';
    }
    router.push(`/${newLocale}${newPath}`);
  };

  return (
    <nav className="w-full py-6 bg-aiux-black fixed top-0 left-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex-shrink-0">
          <Link href="/" legacyBehavior>
            <a className="text-3xl font-bold text-aiux-gold hover:text-aiux-cream transition-colors duration-300">
              AIUX STUDIO
            </a>
          </Link>
        </div>
        <div className="hidden md:flex items-center">
          <div className="ml-10 flex items-baseline space-x-4">
            <Link href="/" legacyBehavior><a className="text-aiux-cream hover:text-aiux-gold px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">{t('home')}</a></Link>
            <Link href="/about" legacyBehavior><a className="text-aiux-cream hover:text-aiux-gold px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">{t('about')}</a></Link>
            <Link href="/services" legacyBehavior><a className="text-aiux-cream hover:text-aiux-gold px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">{t('services')}</a></Link>
            <Link href="/contact" legacyBehavior><a className="text-aiux-cream hover:text-aiux-gold px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">{t('contact')}</a></Link>
          </div>
          <div className="ml-6 flex items-center space-x-2">
            <button 
              onClick={() => switchLocale('es')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${locale === 'es' ? 'text-aiux-gold' : 'text-aiux-cream hover:text-aiux-gold'}`}
            >
              ES
            </button>
            <span className="text-aiux-cream">|</span>
            <button 
              onClick={() => switchLocale('en')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${locale === 'en' ? 'text-aiux-gold' : 'text-aiux-cream hover:text-aiux-gold'}`}
            >
              EN
            </button>
          </div>
        </div>
        {/* Mobile menu button can be added here if needed */}
      </div>
    </nav>
  );
};

export default Navbar;

