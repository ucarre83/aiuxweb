"/components/layout/Footer.tsx";

const Footer = () => {
  return (
    <footer className="w-full py-8 bg-aiux-black text-aiux-cream mt-16 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} AIUX STUDIO. Todos los derechos reservados.
        </p>
        <p className="text-xs mt-2">
          Innovación en Desarrollo de Software e Inteligencia Artificial.
        </p>
        {/* Optional: Add links to social media or legal pages here */}
        <div className="mt-4">
          <a href="/legal#privacy" className="text-xs text-aiux-cream hover:text-aiux-gold mx-2">Política de Privacidad</a>
          <span className="text-xs text-gray-500">|</span>
          <a href="/legal#terms" className="text-xs text-aiux-cream hover:text-aiux-gold mx-2">Aviso Legal</a>
          <span className="text-xs text-gray-500">|</span>
          <a href="/legal#cookies" className="text-xs text-aiux-cream hover:text-aiux-gold mx-2">Política de Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

