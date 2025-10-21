import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="about" ref={ref}>
      <div className="about-container">
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="about-title">{t.about.title}</h2>
          <p className="about-text">{t.about.text}</p>
        </motion.div>
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="https://images.unsplash.com/photo-1546863340-7e4e97e46f42?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuZG96YSUyQyUyMGFyZ2VudGluYXxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000"
            alt="Viñedos de Mendoza"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
