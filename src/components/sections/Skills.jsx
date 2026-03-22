import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const skills = [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" },
    { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" },
    { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
    { name: "Matplotlib", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
];

function TiltCard({ skill, index }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out the mouse movements heavily for a "premium liquid" feel
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  // Map mouse coordinates to rotation angles (max 25 degrees)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["25deg", "-25deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-25deg", "25deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // calculate mouse position relative to the center of the card
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Convert to percentage (-0.5 to 0.5)
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    // Return card to resting completely flat
    x.set(0);
    y.set(0);
  };

  return (
    // The perspective wrapper is crucial for the 3D popping effect to break outside the 2D plane
    <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        style={{ perspective: 1200 }}
    >
      <motion.div
        ref={ref}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        // Continuous independent breathing float for each card
        animate={{ y: [0, -10, 0] }}
        transition={{ 
            y: { duration: 4 + (index % 3), repeat: Infinity, ease: "easeInOut", delay: index * 0.2 } 
        }}
        className="relative flex flex-col items-center bg-white/40 shadow-xl border border-white/60 rounded-[2rem] p-10 cursor-pointer transition-colors hover:border-primary/50"
      >
        {/* Hover Ambient Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-secondary/10 opacity-0 transition-opacity duration-300 pointer-events-none rounded-[2rem]" />
        
        {/* Floating Icon layer pushed outwards physically into the Z-axis */}
        <motion.div 
           className="h-20 w-20 md:h-24 md:w-24 mb-6 flex items-center justify-center pointer-events-none drop-shadow-2xl"
           style={{ transform: "translateZ(80px)" }} // Massively pops the image toward the screen when tilted
        >
          <img 
            src={skill.icon} 
            alt={skill.name} 
            className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(26,54,93,0.2)]" 
          />
        </motion.div>

        {/* Floating Text layer pushed slightly outward, but less than the image */}
        <motion.span 
           className="text-[#1a365d] font-heading font-black text-xl md:text-2xl tracking-wide pointer-events-none"
           style={{ transform: "translateZ(40px)" }}
        >
           {skill.name}
        </motion.span>
      </motion.div>
    </motion.div>
  );
}

export default function Skills() {
    return (
        <section id="skills" className="py-32 bg-background relative overflow-hidden">
            {/* Ambient background decoration blobs to increase premium light theme depth */}
            <div className="absolute top-[10%] left-[10%] w-[40rem] h-[40rem] bg-secondary/10 rounded-full blur-[120px] pointer-events-none opacity-50" />
            <div className="absolute bottom-[10%] right-[10%] w-[40rem] h-[40rem] bg-primary/10 rounded-full blur-[120px] pointer-events-none opacity-50" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-5xl md:text-7xl font-heading font-bold tracking-tighter uppercase text-[#1a365d] mb-4">
                        Tech <span className="text-primary italic font-light tracking-tight">Arsenal</span>
                    </h2>
                    <p className="text-[#1a365d]/50 uppercase tracking-[0.2em] font-body text-sm font-semibold">Hover over cards to interact</p>
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
                    {skills.map((skill, index) => (
                        <TiltCard key={index} skill={skill} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}
