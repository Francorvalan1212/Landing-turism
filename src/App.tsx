import { LanguageProvider } from './context/LanguageContext';
import LanguageToggle from './components/LanguageToggle';
import Hero from './components/Hero';
import About from './components/About';
import Activities from './components/Activities';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <LanguageToggle />
        <Hero />
        <About />
        <Activities />
        <Gallery />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
