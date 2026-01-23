import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, GraduationCap, Users, Briefcase, HandCoins, BookOpenText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for active section detection
  useEffect(() => {
    // Only observe sections that have menu items - hero and transition are excluded from highlighting
    const menuSections = ['why-us', 'faculty', 'himaprotekta', 'scholarship', 'alumni', 'journal'];
    // Track transition and hero to know when we're NOT in a menu section
    const allSections = ['hero', 'transition', ...menuSections];
    
    const visibleSections = new Set<string>();
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.add(entry.target.id);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });
        
        // Check if we're in hero or transition - if so, no menu should be highlighted
        if (visibleSections.has('hero') || visibleSections.has('transition')) {
          // Only set to hero/transition if no menu section is also visible
          const hasMenuSection = menuSections.some(s => visibleSections.has(s));
          if (!hasMenuSection) {
            setActiveSection(visibleSections.has('hero') ? 'hero' : 'transition');
            return;
          }
        }
        
        // Find the first visible menu section
        for (const section of menuSections) {
          if (visibleSections.has(section)) {
            setActiveSection(section);
            return;
          }
        }
        
        // Default to no active section if nothing visible
        if (visibleSections.size === 0) {
          setActiveSection('');
        }
      },
      {
        rootMargin: '-20% 0px -20% 0px', // Section must be in middle 60% of viewport
        threshold: 0
      }
    );

    allSections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const leftMenuLinks = [
    { name: 'Keunggulan', href: '#why-us', section: 'why-us', icon: <Sparkles size={20} /> },
    { name: 'Dosen', href: '#faculty', section: 'faculty', icon: <GraduationCap size={20} /> },
    { name: 'Alumni', href: '#alumni', section: 'alumni', icon: <Briefcase size={20} /> },
  ];

  const rightMenuLinks = [
    { name: 'Beasiswa', href: '#scholarship', section: 'scholarship', icon: <HandCoins size={20} /> },
    { name: 'Mahasiswa', href: '#himaprotekta', section: 'himaprotekta', icon: <Users size={20} /> },
    { name: 'Jurnal', href: '#journal', section: 'journal', icon: <BookOpenText size={20} /> },
  ];

  const allNavLinks = [
    { name: 'Beranda', href: '#hero', section: 'hero' },
    ...leftMenuLinks,
    ...rightMenuLinks,
  ];

  const getLinkClasses = (section: string) => {
    const isActive = activeSection === section;
    return `flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
      isActive 
        ? 'bg-primary/15 text-primary' 
        : 'text-text-main/70 hover:bg-primary/10 hover:text-text-main'
    }`;
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300 ${
          scrolled ? 'top-3' : 'top-6'
        }`}
      >
        <div className={`glass-pill rounded-full flex items-center justify-between transition-all duration-500 ease-out ${
          scrolled 
            ? 'w-[85%] md:w-[70%] px-6 py-3 shadow-lg' 
            : 'w-[95%] md:w-[90%] px-6 py-3'
        }`}>
          
          {/* Desktop Left Menu */}
          <div className="hidden min-[1060px]:flex items-center space-x-1">
            {leftMenuLinks.map((link) => (
              <a 
                key={link.section}
                href={link.href} 
                className={getLinkClasses(link.section)}
                title={link.name}
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Logo Center */}
          <div className="flex-shrink-0 mx-auto min-[1060px]:mx-0 translate-x-0 min-[1060px]:-translate-x-1/2 min-[1060px]:absolute min-[1060px]:left-1/2">
             <a href="#hero" className="flex flex-col items-center justify-center group cursor-pointer">
                <img 
                  src="/assets/navbar_logos.png" 
                  alt="Partner Logos" 
                  className="h-8 md:h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-300" 
                />
                <span className="font-bold text-[10px] tracking-widest uppercase text-text-main mt-1 whitespace-nowrap group-hover:text-primary transition-colors">
                  Proteksi Tanaman FP Unila
                </span>
             </a>
          </div>

          {/* Desktop Right Menu */}
          <div className="hidden min-[1060px]:flex items-center space-x-1">
            {rightMenuLinks.map((link) => (
              <a 
                key={link.section}
                href={link.href} 
                className={getLinkClasses(link.section)}
                title={link.name}
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}

          </div>

          {/* Mobile Menu Toggle */}
          <div className="min-[1060px]:hidden">
            <button onClick={() => setIsOpen(true)} className="p-2 text-text-main">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Full Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background-main flex flex-col items-center justify-center"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 p-2 bg-white rounded-full shadow-sm"
            >
              <X size={24} />
            </button>
            
            <div className="flex flex-col items-center space-y-8">
              {allNavLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-display text-3xl font-bold transition-colors ${
                    activeSection === link.section 
                      ? 'text-primary' 
                      : 'text-text-main hover:text-primary'
                  }`}
                >
                  {link.name}
                </a>
              ))}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
