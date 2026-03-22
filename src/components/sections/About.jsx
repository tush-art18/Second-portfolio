import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-40 w-full relative flex flex-col items-center justify-center z-20 overflow-hidden min-h-[90vh]">
      
      {/* Huge Background Typography for Depth */}
      <motion.div 
         initial={{ x: -100, opacity: 0 }}
         whileInView={{ x: 0, opacity: 0.03 }}
         transition={{ duration: 1.5 }}
         viewport={{ once: true }}
         className="absolute top-1/2 left-0 -translate-x-14 md:-translate-x-10 -translate-y-1/2 text-[15vw] md:text-[12vw] font-heading font-black leading-none whitespace-nowrap text-border/5 pointer-events-none select-none opacity-5"
      >
         CREATIVE DEVELOPER
      </motion.div>

      {/* Floating accent shape */}
      <motion.div 
         initial={{ scale: 0, opacity: 0 }}
         whileInView={{ scale: 1, opacity: 1 }}
         transition={{ duration: 1, delay: 0.5 }}
         viewport={{ once: true }}
         className="absolute right-[-10vw] top-[20%] w-[30vw] h-[30vw] bg-secondary/20 rounded-full blur-[80px] pointer-events-none"
      />

      <div className="z-10 grid items-center w-full gap-16 px-6 mx-auto max-w-7xl xl:px-12 md:grid-cols-2 md:gap-24">
         
         <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true, margin: "-100px" }}
           className="flex flex-col items-start"
         >
           <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 tracking-tighter uppercase leading-[0.9]">
             Beyond <br/><span className="italic font-light tracking-tight text-primary">The Code</span>
           </h2>
           <div className="w-24 h-1.5 bg-primary/80 rounded-full mb-8 shadow-md" />
           <p className="text-sm font-semibold tracking-widest uppercase text-text/50 font-heading">
              Innovating Digital Experiences
           </p>
         </motion.div>

         <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative p-8 space-y-6 text-lg leading-relaxed border shadow-xl md:space-y-8 text-text/70 font-body md:text-xl md:p-12 bg-white/40 border-white/60 rounded-3xl backdrop-blur-md"
         >
            {/* Elegant Corner Accent perfectly aligned to the card's 3xl radius */}
            <div className="absolute -left-[2px] -top-[2px] w-12 h-12 border-t-[3px] border-l-[3px] border-primary rounded-tl-3xl opacity-80 pointer-events-none" />
            <div className="absolute -right-[2px] -bottom-[32px] w-12 h-12 border-b-[3px] border-r-[3px] border-secondary rounded-br-3xl opacity-80 pointer-events-none" />
            
            <p className="text-xl font-medium leading-snug tracking-tight md:text-3xl text-text">
                I am <strong className="font-bold text-primary">TUSHAR PALASE</strong>, a Computer Science graduate.
            </p>
            <p>
                My academic foundation laid the groundwork for my journey in technology, enabling me to develop a strong analytical mindset and problem-solving capabilities. From the very beginning of my education, I’ve been driven by a curiosity for how things work under the hood.
            </p>
            <p>
                My core expertise spans across <span className="font-semibold text-text border-b-2 border-secondary/50 pb-0.5">Python, Django, NumPy, Pandas, Matplotlib, HTML, CSS, JavaScript, React, Tailwind CSS, MySQL, and MongoDB</span>, ensuring I can build everything from robust data architectures to highly polished, performance-optimized web solutions.
            </p>
         </motion.div>
      </div>
    </section>
  );
}
