import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-background relative border-t border-text/10 text-center flex flex-col items-center justify-center px-6">
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/10 to-transparent pointer-events-none" />
        
        <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-heading font-bold mb-6 tracking-tighter"
        >
            Let's build something <br/> <span className="text-primary tracking-tighter italic">amazing</span> together.
        </motion.h2>
        
        <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-text/70 font-body text-lg md:text-xl max-w-2xl mx-auto mb-12"
        >
            Feel free to reach out for collaborations, freelance projects, or full-time opportunities.
        </motion.p>
        
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-6 md:gap-12 items-center justify-center"
        >
            <div className="flex items-center gap-4 bg-black/5 hover:bg-white shadow-sm border border-text/10 px-8 py-4 rounded-full backdrop-blur-md transition-colors cursor-pointer hover:border-text/30">
                <span className="text-2xl">📞</span>
                <span className="font-heading font-medium tracking-wider text-text w-32">+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-4 bg-black/5 hover:bg-white shadow-sm border border-text/10 px-8 py-4 rounded-full backdrop-blur-md transition-colors cursor-pointer hover:border-text/30">
                <span className="text-2xl">📧</span>
                <span className="font-heading font-medium tracking-wider text-text">abc@gmail.com</span>
            </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           transition={{ duration: 1, delay: 1 }}
           viewport={{ once: true }}
           className="mt-20 flex gap-6"
        >
            <SocialLink href="https://www.linkedin.com/in/tushar-palase-b8030127a" icon="/legacy/assets/in.png" alt="LinkedIn" />
            <SocialLink href="https://github.com/tush-art18" icon="/legacy/assets/gh.png" alt="GitHub" />
            <SocialLink href="https://web.whatsapp.com/" icon="/legacy/assets/wh.png" alt="WhatsApp" />
        </motion.div>
    </section>
  );
}

function SocialLink({ href, icon, alt }) {
    return (
        <a 
            href={href} 
            target="_blank" 
            rel="noreferrer"
            className="h-14 w-14 bg-black/5 border border-text/20 rounded-full flex items-center justify-center hover:bg-white hover:scale-110 shadow-sm transition-all cursor-pointer hover:border-text/40"
        >
            <img src={icon} alt={alt} className="h-6 w-6 object-contain brightness-0 opacity-80 hover:opacity-100" />
        </a>
    )
}
