export const translations = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre Mendoza',
      activities: 'Actividades',
      gallery: 'Galería',
      contact: 'Contacto'
    },
    hero: {
      title: 'Descubrí Mendoza',
      subtitle: 'Vinos, montañas y experiencias únicas en el corazón de Argentina',
      cta: 'Explorar ahora'
    },
    about: {
      title: 'Una tierra de contrastes',
      text: 'Mendoza es mucho más que vino. Es la majestuosidad de los Andes, el sabor de su gastronomía, la calidez de su gente. Aquí, cada momento se convierte en un recuerdo inolvidable. Descubrí viñedos centenarios, degustá los mejores vinos del mundo y viví la aventura en paisajes de montaña que te dejarán sin aliento.'
    },
    activities: {
      title: 'Experiencias que te esperan',
      wine: {
        title: 'Enoturismo',
        description: 'Recorridos por bodegas de clase mundial y degustaciones exclusivas'
      },
      adventure: {
        title: 'Aventura',
        description: 'Trekking, rafting y escalada en la Cordillera de los Andes'
      },
      gastronomy: {
        title: 'Gastronomía',
        description: 'Sabores únicos que combinan tradición argentina con cocina de autor'
      },
      wellness: {
        title: 'Relax',
        description: 'Spas, termas naturales y momentos de descanso en entornos únicos'
      }
    },
    gallery: {
      title: 'Descubrí Mendoza en imágenes'
    },
    contact: {
      title: '¿Listo para tu próxima aventura?',
      subtitle: 'Contáctanos y diseñaremos tu experiencia perfecta',
      name: 'Nombre completo',
      email: 'Correo electrónico',
      message: 'Contanos sobre tu viaje ideal',
      submit: 'Enviar consulta',
      success: '¡Gracias! Te contactaremos pronto.'
    },
    footer: {
      rights: 'Todos los derechos reservados'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Mendoza',
      activities: 'Activities',
      gallery: 'Gallery',
      contact: 'Contact'
    },
    hero: {
      title: 'Discover Mendoza',
      subtitle: 'Wines, mountains and unique experiences in the heart of Argentina',
      cta: 'Explore now'
    },
    about: {
      title: 'A land of contrasts',
      text: 'Mendoza is much more than wine. It\'s the majesty of the Andes, the flavor of its cuisine, the warmth of its people. Here, every moment becomes an unforgettable memory. Discover century-old vineyards, taste the world\'s finest wines, and live the adventure in mountain landscapes that will take your breath away.'
    },
    activities: {
      title: 'Experiences waiting for you',
      wine: {
        title: 'Wine Tourism',
        description: 'Tours through world-class wineries and exclusive tastings'
      },
      adventure: {
        title: 'Adventure',
        description: 'Trekking, rafting and climbing in the Andes Mountains'
      },
      gastronomy: {
        title: 'Gastronomy',
        description: 'Unique flavors combining Argentine tradition with signature cuisine'
      },
      wellness: {
        title: 'Wellness',
        description: 'Spas, natural hot springs and moments of rest in unique settings'
      }
    },
    gallery: {
      title: 'Discover Mendoza in images'
    },
    contact: {
      title: 'Ready for your next adventure?',
      subtitle: 'Contact us and we\'ll design your perfect experience',
      name: 'Full name',
      email: 'Email address',
      message: 'Tell us about your ideal trip',
      submit: 'Send inquiry',
      success: 'Thank you! We\'ll contact you soon.'
    },
    footer: {
      rights: 'All rights reserved'
    }
  }
};

export type Language = 'es' | 'en';
export type TranslationKey = typeof translations.es;
