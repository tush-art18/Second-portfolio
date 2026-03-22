import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="relative w-full pt-20 bg-background">
      {/* 
        The main dark container with large rounded top corners.
      */}
      <div className="relative w-full rounded-t-[3rem] md:rounded-t-[4rem] bg-[#1a1d24] text-white pt-20 pb-8 px-8">
        
        {/* Subtle background contour/noise texture bound to the rounded borders */}
        <div className="absolute inset-0 rounded-t-[3rem] md:rounded-t-[4rem] overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-20" />
        </div>

        {/* Floating Center Logo overlapping the top edge */}
        <div className="absolute z-20 p-2 -translate-x-1/2 rounded-full -top-10 md:-top-12 left-1/2 bg-background md:p-3">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-[#1a1d24] rounded-full flex items-center justify-center p-3 md:p-5 shadow-2xl shadow-black/50">
                <img src="/legacy/assets/logo.png" alt="Tushar Palase Logo" className="object-contain w-full h-full drop-shadow-md" />
            </div>
        </div>

        <div className="relative z-10 flex flex-col justify-between gap-12 mx-auto mt-12 max-w-7xl md:flex-row md:gap-8 lg:mt-4">
          
          {/* Left Column: Contact Data */}
          <div className="flex-1 space-y-4">
            <h3 className="mb-6 text-2xl font-medium tracking-wide font-heading">Contact</h3>
            <p className="text-gray-400 font-body text-sm leading-relaxed max-w-[200px]">
              Maharashtra, India<br /><br />
              +91 98765 43210<br />
              abc@gmail.com
            </p>
          </div>

          {/* Middle-Left Column: Socials */}
          <div className="flex-1 pt-1 space-y-3">
            <h3 className="hidden mb-6 text-xl font-medium tracking-wide opacity-0 font-heading md:block">Social</h3>
             <SocialLink text="LinkedIn" href="https://www.linkedin.com/in/tushar-palase-b8030127a" />
             <SocialLink text="GitHub" href="https://github.com/tush-art18" />
             <SocialLink text="WhatsApp" href="https://web.whatsapp.com/" />
          </div>

          {/* Center Column: The Merged Contact Call-to-Action */}
          <div className="flex-[2] flex flex-col items-center justify-center text-center space-y-3 order-first md:order-none px-4">
             <h2 className="mt-2 text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:text-5xl font-heading">
               Let's build something <br /> <span className="italic tracking-tighter text-primary">amazing</span> together.
             </h2>
             <p className="max-w-md mx-auto mb-4 italic text-gray-400 font-body text-sm md:text-base">
                Feel free to reach out for collaborations, freelance projects, or full-time opportunities.
             </p>
             
             <div className="flex flex-col justify-center w-full gap-4 mt-4 sm:flex-row">
                 <a href="mailto:abc@gmail.com" className="flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold transition-all rounded-full shadow-lg bg-primary hover:bg-orange-600 font-body shadow-orange-500/20 hover:scale-105">
                     Get In Touch <span className="text-base leading-none">👋</span>
                 </a>
             </div>
          </div>

          {/* Right Column: Quick Links */}
          <div className="flex-1 space-y-4 lg:pl-16">
            <h3 className="mb-6 text-2xl font-medium tracking-wide font-heading">Explore</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                <FooterLink text="Home" href="#hero" />
                <FooterLink text="About" href="#about" />
                <FooterLink text="Skills" href="#skills" />
                <FooterLink text="Projects" href="#projects" />
            </div>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="relative z-10 flex flex-col items-center justify-between pt-6 mx-auto mt-12 text-xs text-gray-500 border-t max-w-7xl md:flex-row border-white/10 font-body">
            <div className="flex gap-4 mb-4 md:mb-0">
                <span className="flex items-center gap-2 px-3 py-1 font-semibold text-white rounded bg-white/10">
                   <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                   Available for Work
                </span>
            </div>
            <div className="flex gap-6">
                <a href="#" className="transition-colors hover:text-white">Cookies policy</a>
                <a href="#" className="transition-colors hover:text-white">Privacy policy</a>
                <span>© {new Date().getFullYear()} Tushar Palase</span>
            </div>
        </div>

      </div>
    </footer>
  );
}

function SocialLink({ text, href }) {
    return (
        <a href={href} target="_blank" rel="noreferrer" className="flex items-center text-sm text-gray-300 transition-colors group w-fit font-body hover:text-primary">
            {text}
            <span className="ml-2 opacity-50 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all">↗</span>
        </a>
    )
}

function FooterLink({ text, href }) {
    return (
        <a href={href} className="text-sm text-gray-300 transition-colors font-body hover:text-white">
            {text}
        </a>
    )
}
