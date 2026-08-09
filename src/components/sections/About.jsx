import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 w-full relative flex items-center justify-center z-20 overflow-hidden bg-[#f4efe6] text-[#1a365d] font-body">
      {/* Background Decorative Glow (Blue to Orange Gradient Glow behind Card) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-gradient-to-tr from-blue-500/20 via-purple-500/15 to-orange-500/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="z-10 grid items-center w-full gap-12 lg:gap-16 px-6 sm:px-10 max-w-7xl mx-auto lg:grid-cols-12">
        {/* ========================================================================= */}
        {/* LEFT COLUMN: TEXT CONTENT */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          {/* Section Tag */}
          <span className="text-[#3b82f6] font-bold text-xs md:text-sm tracking-[0.2em] uppercase block mb-3">
            ABOUT ME
          </span>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading tracking-tight text-[#1a365d] mb-6 leading-[1.15]">
            Building digital experiences with{' '}
            <span className="text-[#3b82f6]">purpose</span> &{' '}
            <span className="text-[#f97316]">precision</span>.
          </h2>

          {/* Bio Paragraphs */}
          <p className="text-base md:text-lg text-[#1a365d]/75 leading-relaxed mb-4 max-w-2xl">
            I'm a Full Stack Developer & UI/UX Designer who loves turning ideas into functional, beautiful and impactful digital products.
          </p>
          <p className="text-base md:text-lg text-[#1a365d]/75 leading-relaxed mb-8 max-w-2xl">
            I specialize in modern web technologies and enjoy crafting seamless experiences from concept to code.
          </p>

          {/* Signature */}
          <div className="mb-8">
            <span className="font-['Great_Vibes',cursive] text-4xl sm:text-5xl lg:text-6xl text-[#1a365d] tracking-wide select-none block transform -rotate-3 hover:scale-105 transition-transform origin-left">
              Tushar Palase
            </span>
          </div>

          {/* CTA Button */}
          <a
            href="#skills"
            className="inline-flex items-center gap-2.5 bg-black hover:bg-zinc-800 text-white px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] group"
          >
            MORE ABOUT ME
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* ========================================================================= */}
        {/* RIGHT COLUMN: PORTRAIT CARD & DECORATION */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="lg:col-span-5 relative flex justify-center lg:justify-end"
        >
          {/* Main Dark Image Frame - Image perfectly edge-to-edge inside black box */}
          <div className="relative z-10 w-full max-w-md aspect-[4/5] rounded-3xl bg-[#0c0d10] p-2.5 shadow-2xl border border-white/10 overflow-hidden group">
            <div className="w-full h-full rounded-2xl overflow-hidden bg-black relative">
              <img
                src="/legacy/assets/profile.png"
                alt="Tushar Palase"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Decorative Dot Grid Pattern (Bottom Right of Image) */}
          <div className="absolute -bottom-6 -right-6 z-0 hidden sm:grid grid-cols-6 gap-2 p-2 pointer-events-none opacity-40">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#1a365d]/40" />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
