import { Wine } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <Wine size={32} />
          <span>Mendoza</span>
        </div>
        <p className="footer-text">
          © {currentYear} Mendoza Tourism. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
