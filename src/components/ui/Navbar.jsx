import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function NavLinks() {
    return (
        <>
            {['Home', 'About', 'Skills', 'Projects'].map((item) => (
                <a 
                   key={item} 
                   href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                   className="relative text-sm transition-colors font-body text-text/70 hover:text-text group"
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
        <div className="flex items-center justify-between mx-auto max-w-7xl">
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
            <div className="items-center hidden space-x-8 md:flex">
               <NavLinks />
               <a href="/legacy/assets/TUSHAR-PALASE-RESUME.pdf" target="_blank" rel="noreferrer" className="px-6 py-2.5 bg-text hover:bg-primary text-background rounded-full font-body text-sm font-semibold transition-colors shadow-lg">
                  Resume
               </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
                className="md:hidden text-text p-2 focus:outline-none relative z-[110] outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Menu"
            >
                <div className="relative flex flex-col justify-between w-6 h-5">
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
                         className="text-4xl font-black tracking-tighter uppercase transition-colors font-heading text-text hover:text-primary"
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
                     className="px-10 py-4 mt-8 text-xl font-bold rounded-full shadow-lg bg-primary text-background font-body shadow-primary/30"
                  >
                        Resume
                  </motion.a>
              </motion.div>
          )}
      </AnimatePresence>
    </>
  )
}
