import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Wine, Mountain, UtensilsCrossed, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Activities = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const activities = [
    {
      icon: Wine,
      title: t.activities.wine.title,
      description: t.activities.wine.description,
      image: 'https://blog.rentennials.app/wp-content/uploads/2024/09/Las-9-mejores-bodegas-de-Mendoza.jpeg'
    },
    {
      icon: Mountain,
      title: t.activities.adventure.title,
      description: t.activities.adventure.description,
      image: 'https://viajeydescubra.com/wp-content/uploads/2022/01/Guia-Mendoza-Potrerillos-Alta-Montana-Argentina.jpg'
    },
    {
      icon: UtensilsCrossed,
      title: t.activities.gastronomy.title,
      description: t.activities.gastronomy.description,
      image: 'https://www.sanrafaeleando.com.ar/assets/images/3-16-1916x1078.webp'
    },
    {
      icon: Sparkles,
      title: t.activities.wellness.title,
      description: t.activities.wellness.description,
      image: 'https://caminoalandar.net/wp-content/uploads/2013/10/3.jpg'
    }
  ];

  return (
    <section id="activities" className="activities" ref={ref}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {t.activities.title}
      </motion.h2>
      <div className="activities-grid">
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            className="activity-card"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="activity-image-container">
              <img src={activity.image} alt={activity.title} />
              <div className="activity-overlay"></div>
              <div className="activity-icon">
                <activity.icon size={32} />
              </div>
            </div>
            <div className="activity-content">
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Activities;
