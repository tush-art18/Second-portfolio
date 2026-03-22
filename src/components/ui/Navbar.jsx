import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function NavLinks() {
    return (
        <>
            {['Home', 'About', 'Skills', 'Projects'].map((item) => (
                <a 
                   key={item} 
                   href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                   className="text-sm font-body text-text/70 hover:text-text transition-colors relative group"
                >
                   {item}
                   <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                </a>
            ))}
        </>
    )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 w-full p-4 md:p-6 z-[100] transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md shadow-sm border-b border-text/5' : 'bg-transparent'} ${mobileMenuOpen ? 'bg-transparent shadow-none border-none backdrop-blur-none' : ''}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               className="font-heading font-bold text-2xl tracking-tighter cursor-pointer relative z-[110]"
               onClick={() => {
                   window.scrollTo(0,0);
                   setMobileMenuOpen(false);
               }}
            >
               TUSHAR<span className="text-primary">.DEV</span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
               <NavLinks />
               <a href="/legacy/assets/TUSHAR-PALASE (2).pdf" target="_blank" rel="noreferrer" className="px-6 py-2.5 bg-text hover:bg-primary text-background rounded-full font-body text-sm font-semibold transition-colors shadow-lg">
                  Resume
               </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
                className="md:hidden text-text p-2 focus:outline-none relative z-[110] outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Menu"
            >
                <div className="w-6 h-5 flex flex-col justify-between relative">
                    <span className={`w-full h-0.5 bg-current transform transition-all duration-300 origin-left ${mobileMenuOpen ? 'rotate-45 translate-x-1' : ''}`} />
                    <span className={`w-full h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                    <span className={`w-full h-0.5 bg-current transform transition-all duration-300 origin-left ${mobileMenuOpen ? '-rotate-45 translate-x-1' : ''}`} />
                </div>
            </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
          {mobileMenuOpen && (
              <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 z-[90] bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 md:hidden h-screen"
              >
                  {['Home', 'About', 'Skills', 'Projects'].map((item, i) => (
                      <motion.a 
                         key={item} 
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ delay: i * 0.1 }}
                         href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                         onClick={() => setMobileMenuOpen(false)}
                         className="text-4xl font-heading font-black text-text hover:text-primary transition-colors uppercase tracking-tighter"
                      >
                         {item}
                      </motion.a>
                  ))}
                  <motion.a 
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.4 }}
                     href="/legacy/assets/TUSHAR-PALASE (2).pdf" 
                     target="_blank" 
                     rel="noreferrer" 
                     onClick={() => setMobileMenuOpen(false)}
                     className="mt-8 px-10 py-4 bg-primary text-background rounded-full font-body text-xl font-bold shadow-lg shadow-primary/30"
                  >
                        Resume
                  </motion.a>
              </motion.div>
          )}
      </AnimatePresence>
    </>
  )
}
