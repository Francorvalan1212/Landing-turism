import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Gallery = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      url: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/09/35/9d/60.jpg',
      alt: 'Cordillera de los Andes'
    },
    {
      url: 'https://www.memo.com.ar/files/image/76/76586/67126dd1e0949.jpg',
      alt: 'Viñedos al atardecer'
    },
    {
      url: 'https://www.cucinare.tv/wp-content/uploads/2018/08/18-08-21-Copa.jpg',
      alt: 'Copa de vino tinto'
    },
    {
      url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/b5/a8/02/aconcagua-32-largejpg.jpg?w=1200&h=-1&s=1',
      alt: 'Aconcagua'
    },
    {
      url: 'https://www.boulevardtravel.com.ar/images/galeria/Galeria/3225_Bodega_Baudron_-_Bodegas_de_Mendoza.jpg',
      alt: 'Bodega tradicional'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="gallery" className="gallery" ref={ref}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {t.gallery.title}
      </motion.h2>
      <motion.div
        className="gallery-container"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <button className="gallery-nav prev" onClick={prevSlide} aria-label="Previous image">
          <ChevronLeft size={32} />
        </button>

        <div className="gallery-slider">
          <motion.img
            key={currentIndex}
            src={images[currentIndex].url}
            alt={images[currentIndex].alt}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <button className="gallery-nav next" onClick={nextSlide} aria-label="Next image">
          <ChevronRight size={32} />
        </button>

        <div className="gallery-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Gallery;
