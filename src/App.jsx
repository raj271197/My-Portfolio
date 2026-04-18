import { useEffect, useMemo, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Background from './components/layout/Background';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import './styles/global.css';

const getInitialTheme = () => {
  if (typeof window === 'undefined') {
    return 'dark';
  }

  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
};

const getInitialResumeVariant = () => {
  if (typeof window === 'undefined') {
    return 'developer';
  }

  const savedVariant = localStorage.getItem('resumeVariant');

  return savedVariant === 'business' ? 'business' : 'developer';
};

function App() {
  const [theme, setTheme] = useState(() => getInitialTheme());
  const [resumeVariant, setResumeVariant] = useState(() => getInitialResumeVariant());
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('resumeVariant', resumeVariant);
  }, [resumeVariant]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;

      setScrollProgress(progress);
      setShowBackToTop(scrollTop > 600);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Reveal sections once they enter the viewport for a subtle scroll-driven entrance.
    const animatedElements = document.querySelectorAll('[data-animate]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -60px 0px',
      },
    );

    animatedElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  const backToTopLabel = useMemo(
    () => `Back to top. Current scroll progress ${Math.round(scrollProgress)} percent.`,
    [scrollProgress],
  );

  return (
    <div className="app-shell">
      <div className="scroll-progress" aria-hidden="true">
        <span style={{ width: `${scrollProgress}%` }} />
      </div>

      <Background />

      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        resumeVariant={resumeVariant}
      />

      <main id="top">
        <Hero
          resumeVariant={resumeVariant}
          onResumeVariantChange={setResumeVariant}
        />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />

      <button
        type="button"
        className={`back-to-top ${showBackToTop ? 'is-visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label={backToTopLabel}
      >
        <ArrowUp size={18} />
      </button>
    </div>
  );
}

export default App;
