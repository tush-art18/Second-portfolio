import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const featuredProjects = [
    {
        id: '01',
        number: '01',
        title: 'Preschool Website',
        description: 'WOW Saplings Preschool & Teacher Training, Kolhapur',
        tags: ['JavaScript', 'Next.js', 'tailwindcss', 'Python', 'Django' , '2026'],
        link: 'https://wowsaplingsschool.in/',
        image: '/legacy/assets/wowsaplings.png',
        theme: 'dark'
    },
    {
        id: '02',
        number: '02',
        title: 'AURA Interiors',
        description: 'High performance architecture and interior design website.',
        tags: ['React.js', 'Tailwind CSS', 'GSAP','Rive', '2026'],
        link: 'https://aurainteriorsdemo.vercel.app/',
        image: '/legacy/assets/aura-interiors-studio.png',
        theme: 'dark'
    },
    {
        id: '03',
        number: '03',
        title: 'We Create Digital Solutions',
        description: 'Creative agency platform built with responsive architecture.',
        tags: ['React.js', 'Tailwind CSS', 'GSAP','Rive', '2026'],
        link: 'https://brand-masala-v2.vercel.app/',
        image: '/legacy/assets/digital-solutions.png',
        fallbackImage: '/legacy/assets/brand-masala.png',
        theme: 'light'
    }
];

const moreProjects = [
    {
        id: 'm1',
        title: 'Brown Beans',
        subtitle: 'Coffee shope website',
        category: 'React',
        link: 'https://brown-beans.vercel.app/',
        image: '/legacy/assets/foodie.png',
        fallbackImage: '/legacy/assets/brown-beans.png'
    },
    {
        id: 'm2',
        title: 'Video Editor',
        subtitle: 'Video editor portfolio Website',
        category: 'React.js',
        link: 'https://netresh-satpute.vercel.app/',
        image: '/legacy/assets/travelista.png',
        fallbackImage: '/legacy/assets/netresh-satpute-portfolio.png'
    },
    {
        id: 'm3',
        title: 'SMJCA',
        subtitle: 'SM Jr College, Coaching & Academy',
        category: 'React.js',
        link: 'https://smjca.com/',
        image: '/legacy/assets/taskify.png',
        fallbackImage: '/legacy/assets/smjca.png'
    },
    {
        id: 'm4',
        title: 'PalaSync',
        subtitle: 'Premium web design and development agency',
        category: 'React.js',
        link: 'https://palasync.vercel.app/',
        image: '/legacy/assets/fittrack.png',
        fallbackImage: '/legacy/assets/palasync-portfolio.png'
    }
];

export default function Projects() {
    const handleImgError = (e, fallback) => {
        if (fallback) {
            e.target.src = fallback;
        }
    };

    return (
        <section id="projects" className="relative z-30 w-full overflow-hidden font-body">
            {/* ========================================================================= */}
            {/* TOP SECTION: FEATURED WORK (DARK THEME) */}
            {/* ========================================================================= */}
            <div className="bg-[#0b0c0e] text-white pt-24 pb-20 px-6 sm:px-10 lg:px-16">
                <div className="mx-auto max-w-7xl">
                    {/* Header */}
                    <div className="flex flex-col justify-between gap-6 mb-12 md:flex-row md:items-end lg:mb-16">
                        <div>
                            <span className="text-[#38bdf8] font-bold text-xs md:text-sm tracking-[0.2em] uppercase block mb-3">
                                FEATURED WORK
                            </span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading tracking-tight text-white max-w-2xl leading-[1.1]">
                                Selected projects that make an impact.
                            </h2>
                        </div>
                        <a
                            href="#projects"
                            className="inline-flex items-center self-start gap-2 pb-1 text-xs font-semibold tracking-wider uppercase transition-colors border-b text-zinc-400 hover:text-white group md:self-end border-zinc-800 hover:border-white"
                        >
                            VIEW ALL PROJECTS
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>

                    {/* Featured Layout: 1 Large full-width Card + 2 Side-by-side Cards below */}
                    <div className="space-y-6">
                        {/* ---------------- PROJECT 01 (FULL WIDTH) ---------------- */}
                        {featuredProjects.slice(0, 1).map((proj) => (
                            <motion.div
                                key={proj.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="bg-[#16171d] border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl hover:border-white/20 transition-all duration-300 group"
                            >
                                <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-12">
                                    {/* Left Image Preview */}
                                    <div className="order-1 lg:col-span-7 lg:order-1">
                                        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-black/40 border border-white/10 shadow-inner">
                                            <img
                                                src={proj.image}
                                                alt={proj.title}
                                                onError={(e) => handleImgError(e, proj.fallbackImage)}
                                                className="object-cover object-top w-full h-full transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                                        </div>
                                    </div>

                                    {/* Right Details */}
                                    <div className="flex flex-col justify-between order-2 h-full py-2 lg:col-span-5 lg:order-2">
                                        <div>
                                            <span className="block mb-4 font-mono text-5xl font-light sm:text-6xl lg:text-7xl text-zinc-600/60">
                                                {proj.number}
                                            </span>
                                            <h3 className="mb-3 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl font-heading">
                                                {proj.title}
                                            </h3>
                                            <p className="mb-6 text-sm leading-relaxed text-zinc-400 sm:text-base">
                                                {proj.description}
                                            </p>

                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-2 mb-8">
                                                {proj.tags.map((tag, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-zinc-800/80 text-zinc-300 border border-white/5"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Action Link */}
                                        <a
                                            href={proj.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white hover:text-[#38bdf8] transition-colors w-fit group/btn"
                                        >
                                            VIEW CASE STUDY
                                            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {/* ---------------- PROJECTS 02 & 03 (SIDE-BY-SIDE) ---------------- */}
                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                            {/* PROJECT 02 (DARK CARD) */}
                            {featuredProjects.slice(1, 2).map((proj) => (
                                <motion.div
                                    key={proj.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-[#16171d] border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-300 group"
                                >
                                    <div className="grid items-center grid-cols-1 gap-6 sm:grid-cols-12">
                                        <div className="flex flex-col justify-between order-2 h-full sm:col-span-6 sm:order-1">
                                            <div>
                                                <span className="block mb-2 font-mono text-4xl font-light sm:text-5xl text-zinc-600/60">
                                                    {proj.number}
                                                </span>
                                                <h3 className="mb-2 text-xl font-bold text-white sm:text-2xl font-heading">
                                                    {proj.title}
                                                </h3>
                                                <p className="mb-4 text-xs leading-relaxed text-zinc-400 sm:text-sm">
                                                    {proj.description}
                                                </p>

                                                <div className="flex flex-wrap gap-1.5 mb-6">
                                                    {proj.tags.map((tag, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="px-3 py-1 rounded-full text-[11px] font-medium bg-zinc-800/80 text-zinc-300 border border-white/5"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <a
                                                href={proj.link}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white hover:text-[#38bdf8] transition-colors w-fit group/btn"
                                            >
                                                VIEW CASE STUDY
                                                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                                            </a>
                                        </div>

                                        <div className="order-1 sm:col-span-6 sm:order-2">
                                            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-black/40 border border-white/10">
                                                <img
                                                    src={proj.image}
                                                    alt={proj.title}
                                                    onError={(e) => handleImgError(e, proj.fallbackImage)}
                                                    className="object-cover object-top w-full h-full transition-transform duration-700 group-hover:scale-105"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}

                            {/* PROJECT 03 (LIGHT INVERTED CARD) */}
                            {featuredProjects.slice(2, 3).map((proj) => (
                                <motion.div
                                    key={proj.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    viewport={{ once: true }}
                                    className="flex flex-col justify-between p-6 transition-all duration-300 bg-white border shadow-xl text-zinc-900 border-zinc-200 rounded-3xl sm:p-8 hover:shadow-2xl group"
                                >
                                    <div className="grid items-center grid-cols-1 gap-6 sm:grid-cols-12">
                                        <div className="flex flex-col justify-between order-2 h-full sm:col-span-6 sm:order-1">
                                            <div>
                                                <span className="block mb-2 font-mono text-4xl font-light sm:text-5xl text-zinc-300">
                                                    {proj.number}
                                                </span>
                                                <h3 className="mb-2 text-xl font-bold leading-tight sm:text-2xl font-heading text-zinc-900">
                                                    {proj.title}
                                                </h3>
                                                <p className="mb-4 text-xs leading-relaxed text-zinc-600 sm:text-sm">
                                                    {proj.description}
                                                </p>

                                                <div className="flex flex-wrap gap-1.5 mb-6">
                                                    {proj.tags.map((tag, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="px-3 py-1 rounded-full text-[11px] font-semibold bg-zinc-100 text-zinc-700 border border-zinc-200"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <a
                                                href={proj.link}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase transition-colors text-zinc-900 hover:text-sky-600 w-fit group/btn"
                                            >
                                                VIEW CASE STUDY
                                                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                                            </a>
                                        </div>

                                        <div className="order-1 sm:col-span-6 sm:order-2">
                                            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-zinc-50 border border-zinc-200">
                                                <img
                                                    src={proj.image}
                                                    alt={proj.title}
                                                    onError={(e) => handleImgError(e, proj.fallbackImage)}
                                                    className="object-cover object-top w-full h-full transition-transform duration-700 group-hover:scale-105"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ========================================================================= */}
            {/* BOTTOM SECTION: MORE WORK (BEIGE THEME) */}
            {/* ========================================================================= */}
            <div className="bg-[#f4efe6] text-[#1a365d] py-20 px-6 sm:px-10 lg:px-16 border-t border-[#1a365d]/10">
                <div className="mx-auto max-w-7xl">
                    {/* Header */}
                    <div className="mb-12">
                        <span className="text-[#ea580c] font-bold text-xs md:text-sm tracking-[0.2em] uppercase block mb-2">
                            MORE WORK
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight text-[#1a365d]">
                            More projects I'm proud of
                        </h2>
                    </div>

                    {/* 4 Projects Responsive Grid */}
                    <div className="grid grid-cols-1 gap-6 mb-16 sm:grid-cols-2 lg:grid-cols-4">
                        {moreProjects.map((item, index) => (
                            <motion.a
                                key={item.id}
                                href={item.link}
                                target={item.link !== '#' ? '_blank' : '_self'}
                                rel="noreferrer"
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex flex-col cursor-pointer group"
                            >
                                {/* Card Image Container */}
                                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white/70 border border-[#1a365d]/15 mb-4 shadow-sm group-hover:shadow-md transition-all">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        onError={(e) => handleImgError(e, item.fallbackImage)}
                                        className="object-cover object-top w-full h-full transition-transform duration-500 group-hover:scale-105"
                                    />
                                    {/* Overlay Subtle Shine */}
                                    <div className="absolute inset-0 transition-colors duration-300 bg-black/0 group-hover:bg-black/5" />
                                </div>

                                {/* Project Meta */}
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h3 className="font-bold font-heading text-lg text-[#1a365d] group-hover:text-[#ea580c] transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-xs text-[#1a365d]/60 font-body mt-0.5">
                                            {item.subtitle}
                                        </p>
                                        <span className="text-[11px] text-[#1a365d]/40 font-medium block mt-1">
                                            {item.category}
                                        </span>
                                    </div>
                                    <ArrowUpRight className="w-4 h-4 text-[#1a365d]/40 group-hover:text-[#ea580c] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    {/* Bottom Action Button */}
                    <div className="flex justify-center">
                        <a
                            href="#projects"
                            className="inline-flex items-center gap-2.5 bg-black hover:bg-zinc-800 text-white px-7 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shadow-lg"
                        >
                            VIEW ALL PROJECTS
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
