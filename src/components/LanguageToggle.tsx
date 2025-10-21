import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.div
      className="language-toggle"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <button
        className={`lang-btn ${language === 'es' ? 'active' : ''}`}
        onClick={() => setLanguage('es')}
        aria-label="Cambiar a español"
      >
        🇪🇸 ES
      </button>
      <button
        className={`lang-btn ${language === 'en' ? 'active' : ''}`}
        onClick={() => setLanguage('en')}
        aria-label="Switch to English"
      >
        🇬🇧 EN
      </button>
    </motion.div>
  );
};

export default LanguageToggle;
