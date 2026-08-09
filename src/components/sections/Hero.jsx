import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Preload, Text, Float, Sparkles, MeshDistortMaterial, Sphere, Torus } from '@react-three/drei';
import { ArrowRight, ArrowDown } from 'lucide-react';
import * as THREE from 'three';

// 3D background scene
function InteractiveScene() {
  const groupRef = useRef();
  const ring1 = useRef();
  const ring2 = useRef();

  useFrame((state, delta) => {
    const targetX = (state.pointer.x * Math.PI) / 8;
    const targetY = (state.pointer.y * Math.PI) / 10;
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.damp(groupRef.current.rotation.y, targetX, 2, delta);
      groupRef.current.rotation.x = THREE.MathUtils.damp(groupRef.current.rotation.x, -targetY, 2, delta);
    }

    if (ring1.current) {
      ring1.current.rotation.x += delta * 0.15;
      ring1.current.rotation.y += delta * 0.2;
    }
    if (ring2.current) {
      ring2.current.rotation.x -= delta * 0.1;
      ring2.current.rotation.z += delta * 0.18;
    }
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={1} color="#f4efe6" />
      <directionalLight position={[5, 10, 5]} intensity={2.5} color="#ffffff" />

      {/* Sparkles */}
      <Sparkles count={500} scale={15} size={1.5} speed={0.2} opacity={0.3} color="#1a365d" />
      <Sparkles count={250} scale={12} size={2.5} speed={0.6} opacity={0.8} color="#ea580c" />

      {/* Central 3D Distorted Sphere */}
      <Sphere args={[2.5, 64, 64]} position={[0, -0.5, -5]}>
        <MeshDistortMaterial color="#98b9b4" distort={0.25} speed={2} roughness={0.1} metalness={0.2} />
      </Sphere>

      {/* Orbital Rings */}
      <Torus ref={ring1} args={[3.2, 0.015, 16, 100]} position={[0, -0.5, -4]}>
        <meshStandardMaterial color="#ea580c" />
      </Torus>
      <Torus ref={ring2} args={[3.8, 0.015, 16, 100]} position={[0, -0.5, -4]}>
        <meshStandardMaterial color="#1a365d" wireframe opacity={0.5} transparent />
      </Torus>

      {/* 3D Kinetic Text */}
      <Float speed={2} rotationIntensity={0.15} floatIntensity={0.4}>
        <Text
          position={[0, 1.8, -3]}
          fontSize={1.8}
          color="#1a365d"
          anchorX="center"
          anchorY="middle"
          letterSpacing={0.08}
          fontWeight={900}
        >
          FULL STACK
        </Text>

        <Text
          position={[0, -0.2, -2]}
          fontSize={3.6}
          color="transparent"
          strokeWidth={0.02}
          strokeColor="#ea580c"
          anchorX="center"
          anchorY="middle"
          letterSpacing={0.1}
          fontWeight={900}
        >
          DEVELOPER
        </Text>

        <Text
          position={[0, -0.2, -2.1]}
          fontSize={3.6}
          color="#1a365d"
          fillOpacity={0.15}
          anchorX="center"
          anchorY="middle"
          letterSpacing={0.1}
          fontWeight={900}
        >
          DEVELOPER
        </Text>
      </Float>
    </group>
  );
}

export default function Hero() {
  const { scrollY } = useScroll();
  const yImage = useTransform(scrollY, [0, 500], [0, 100]);



  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden font-body bg-background pt-16 md:pt-0">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0 bg-background">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <InteractiveScene />
          <Preload all />
        </Canvas>
      </div>

      {/* Main Character / Portrait Overlay (Shifted directly to the bottom edge) */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-end w-full h-full pointer-events-none">
        <motion.img
          style={{ y: yImage }}
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', bounce: 0.3, duration: 1.5, delay: 0.2 }}
          src="/legacy/assets/profile.png"
          alt="Tushar Palase"
          className="h-[70vh] sm:h-[80vh] md:h-[88vh] lg:h-[94vh] max-h-[1000px] object-contain object-bottom pointer-events-auto filter drop-shadow-[0_20px_40px_rgba(26,54,93,0.3)] z-10"
        />
        {/* Soft base blend gradient */}
        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-background via-background/40 to-transparent pointer-events-none z-15" />
      </div>

      {/* ========================================================================= */}
      {/* LEFT SIDE CONTENT (Description + Action Buttons - Positioned near bottom) */}
      {/* ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute left-6 sm:left-10 lg:left-16 bottom-8 sm:bottom-10 md:bottom-12 lg:bottom-14 max-w-xs sm:max-w-sm lg:max-w-md z-20 pointer-events-auto hidden sm:block"
      >
        <p className="text-sm sm:text-base lg:text-lg text-[#1a365d] font-medium leading-relaxed mb-4 drop-shadow-sm">
          I design and build digital experiences that are fast, beautiful and impactful.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-black hover:bg-zinc-800 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 shadow-md hover:scale-105"
          >
            <span>→</span> VIEW MY WORK <span>→</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-white/80 hover:bg-white text-[#1a365d] border border-[#1a365d]/20 backdrop-blur-md px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm hover:scale-105"
          >
            LET'S TALK
          </a>
        </div>
      </motion.div>

      {/* ========================================================================= */}
      {/* RIGHT SIDE CONTENT (Rotating Scroll Badge - Positioned near bottom) */}
      {/* ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute right-6 sm:right-10 lg:right-16 bottom-8 sm:bottom-10 md:bottom-12 lg:bottom-14 z-20 pointer-events-auto hidden sm:flex flex-col items-center"
      >
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
          {/* Rotating Circular Text SVG */}
          <svg className="w-full h-full animate-[spin_12s_linear_infinite]" viewBox="0 0 100 100">
            <path
              id="circlePath"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              fill="none"
            />
            <text className="text-[9.5px] uppercase tracking-[0.2em] fill-[#1a365d] font-bold">
              <textPath href="#circlePath" startOffset="0%">
                AVAILABLE FOR FREELANCE • SCROLL DOWN •
              </textPath>
            </text>
          </svg>

          {/* Center Down Arrow */}
          <a
            href="#about"
            className="absolute w-10 h-10 rounded-full bg-white/80 border border-[#1a365d]/20 backdrop-blur-md flex items-center justify-center text-[#1a365d] hover:scale-110 transition-transform shadow-sm"
          >
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </motion.div>

      {/* Mobile-only CTA Container */}
      <div className="sm:hidden absolute bottom-6 inset-x-4 z-20 flex flex-col items-center text-center pointer-events-auto">
        <p className="text-xs text-[#1a365d] font-medium mb-3 max-w-xs">
          I design and build digital experiences that are fast, beautiful and impactful.
        </p>
        <div className="flex items-center gap-2">
          <a
            href="#projects"
            className="bg-black text-white px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider"
          >
            VIEW WORK
          </a>
          <a
            href="#contact"
            className="bg-white/80 border border-[#1a365d]/20 text-[#1a365d] px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider"
          >
            LET'S TALK
          </a>
        </div>
      </div>

    </section>
  );
}
