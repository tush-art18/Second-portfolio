import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const projects = [
    {
        title: "Urban Interior E-Commerce",
        description: "A premium full-stack e-commerce solution featuring dynamic product visualization, secure cart management, and seamless architecture.",
        image: "/legacy/assets/urban-interior.png",
        tags: ["HTML", "CSS"],
        link: "https://urbaninterior.netlify.app/"
    },
    {
        title: "Coffee Shope Website",
        description: "A visually engaging and responsive coffee shop landing page, featuring an elegant menu showcase and inviting modern styling.",
        image: "/legacy/assets/brown-beans.png",
        tags: ["HTML", "CSS"],
        link: "https://brown-beans.netlify.app/"
    },
    {
        title: "Tribute Webpage",
        description: "A tribute webpage to the Bhagat Singh. ",
        image: "/legacy/assets/tt.png",
        tags: ["HTML", "CSS"],
        link: "https://tribute-sbs.netlify.app/"
    },
    {
        title: "Secure Identity Framework",
        description: "A highly secure registration and authentication framework optimized for robust session persistence and absolute identity protection.",
        image: "/legacy/assets/regform.png",
        tags: ["React", "Express", "JWT", "MongoDB"],
        link: "#"
    }
];

const Card = ({ i, isLast, title, description, image, tags, link, progress, range, targetScale }) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [1.3, 1]);
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div ref={container} className={`h-screen w-full flex items-center justify-center sticky top-0 ${isLast ? 'mb-0' : 'mb-[15vh]'}`}>
            <motion.div
                style={{
                    backgroundColor: i % 2 === 0 ? '#1a1d24' : '#14161b',
                    scale,
                    top: `calc(${i * 25}px)`,
                }}
                className="sticky flex flex-col w-[92vw] md:w-[85vw] max-w-6xl h-[80vh] md:h-[65vh] lg:h-[70vh] rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-8 lg:p-10 shadow-2xl border border-white/10 origin-top overflow-hidden"
            >
                <div className="relative flex flex-col h-full gap-3 md:flex-row md:gap-10">
                    {/* Left Content Column */}
                    <div className="z-10 flex flex-col justify-between flex-grow w-full py-1 md:w-1/2">
                        <div>
                            <span className="text-[#ea580c] font-heading font-black text-sm md:text-xl mb-0.5 md:mb-1 block">0{i + 1}</span>
                            <h3 className="mb-2 text-2xl font-black leading-tight tracking-tighter text-white md:text-4xl lg:text-5xl font-heading md:mb-3">{title}</h3>
                            <p className="max-w-lg mb-3 text-xs leading-relaxed md:text-base font-body text-white/70 md:mb-6 line-clamp-3 md:line-clamp-none">{description}</p>

                            <div className="flex flex-wrap gap-1.5 md:gap-2">
                                {tags.map((tag, index) => (
                                    <span key={index} className="px-2 py-0.5 md:px-3 md:py-1 bg-white/5 text-white/80 border border-white/10 rounded-full font-body text-[10px] md:text-sm font-semibold shadow-sm whitespace-nowrap">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <a href={link || "#"} target={link && link !== "#" ? "_blank" : "_self"} rel="noreferrer" className="w-fit flex items-center gap-1.5 md:gap-2 mt-3 md:mt-4 px-5 py-2.5 md:px-6 md:py-3 bg-[#ea580c] hover:bg-white hover:text-[#1a365d] text-white rounded-full font-body text-sm md:text-base font-bold transition-colors shadow-lg shadow-[#ea580c]/30 flex-shrink-0">
                            Explore Project <span>↗</span>
                        </a>
                    </div>

                    {/* Right Image Column (Parallax Container) */}
                    <div className="relative w-full md:w-1/2 h-[22vh] min-h-[160px] md:min-h-[50vh] rounded-[1rem] md:rounded-[1.5rem] overflow-hidden bg-black/20 mt-3 md:mt-0 border border-white/5 flex-shrink-0">
                        <motion.div className="absolute inset-0 w-full h-full" style={{ scale: imageScale }}>
                            <img src={image} alt={title} className="object-cover w-full h-full transition-opacity duration-500 opacity-80 hover:opacity-100" />
                        </motion.div>
                        {/* Gradient vignette for premium contrast over edges */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1d24]/90 via-transparent to-transparent pointer-events-none" />
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default function Projects() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    return (
        <section id="projects" className="bg-[#f4efe6] text-[#1a365d] w-full relative -mt-1 rounded-t-[3rem] z-30">
            {/* Dark background contrast container tying effortlessly into the Footer */}
            <div className="pt-32 pb-[8vh] px-6 text-center relative z-10 w-full mb-[-10vh]">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-heading font-black mb-6 tracking-tighter uppercase text-[#1a365d]"
                >
                    Featured <span className="text-[#ea580c] italic font-light tracking-tight">Work</span>
                </motion.h2>
                <p className="text-[#1a365d]/50 font-body text-lg md:text-xl max-w-2xl mx-auto uppercase tracking-widest font-semibold">Scroll to explore my engineering solutions</p>
            </div>

            <div ref={container} className="relative pb-[5vh]">
                {projects.map((project, i) => {
                    const targetScale = 1 - ((projects.length - i) * 0.05);
                    return (
                        <Card
                            key={`p_${i}`}
                            i={i}
                            isLast={i === projects.length - 1}
                            {...project}
                            progress={scrollYProgress}
                            range={[i * 0.25, 1]}
                            targetScale={targetScale}
                        />
                    )
                })}
            </div>
        </section>
    )
}
