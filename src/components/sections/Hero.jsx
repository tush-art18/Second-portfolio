import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Preload, Text, Float, Sparkles, MeshDistortMaterial, Sphere, Torus } from '@react-three/drei';
import * as THREE from 'three';

// Highly dynamic 3D background
function InteractiveScene() {
  const groupRef = useRef();
  const ring1 = useRef();
  const ring2 = useRef();

  useFrame((state, delta) => {
    // Smooth mouse follow for the entire group
    const targetX = (state.pointer.x * Math.PI) / 8;
    const targetY = (state.pointer.y * Math.PI) / 10;
    groupRef.current.rotation.y = THREE.MathUtils.damp(groupRef.current.rotation.y, targetX, 2, delta);
    groupRef.current.rotation.x = THREE.MathUtils.damp(groupRef.current.rotation.x, -targetY, 2, delta);

    // Continuous rotation for elegant high-tech rings (Astrolabe effect)
    if (ring1.current) ring1.current.rotation.x += delta * 0.15;
    if (ring1.current) ring1.current.rotation.y += delta * 0.2;
    if (ring2.current) ring2.current.rotation.x -= delta * 0.1;
    if (ring2.current) ring2.current.rotation.z += delta * 0.18;
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={1} color="#f4efe6" />
      <directionalLight position={[5, 10, 5]} intensity={2.5} color="#ffffff" />

      {/* Dynamic Magical Sparkles covering the space */}
      <Sparkles count={500} scale={15} size={1.5} speed={0.2} opacity={0.3} color="#1a365d" />
      <Sparkles count={250} scale={12} size={2.5} speed={0.6} opacity={0.8} color="#ea580c" />

      {/* The Central Glowing "Circle" from the reference, made into a 3D Liquid Sphere */}
      <Sphere args={[2.5, 64, 64]} position={[0, -0.5, -5]}>
        <MeshDistortMaterial color="#98b9b4" distort={0.25} speed={2} roughness={0.1} metalness={0.2} />
      </Sphere>

      {/* High-Tech Orbital Rings replacing basic abstract shapes */}
      <Torus ref={ring1} args={[3.2, 0.015, 16, 100]} position={[0, -0.5, -4]}>
        <meshStandardMaterial color="#ea580c" />
      </Torus>
      <Torus ref={ring2} args={[3.8, 0.015, 16, 100]} position={[0, -0.5, -4]}>
        <meshStandardMaterial color="#1a365d" wireframe opacity={0.5} transparent />
      </Torus>

      {/* Main 3D Kinetic Text: Overlapping layers and stroke outlines for huge style impact */}
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

        {/* Stroke Outline Text (Neon aesthetic without the neon colors) */}
        <Text
          position={[0, -0.2, -2]}
          fontSize={3.6}
          color="transparent" // Transparent fill so only the stroke shows
          strokeWidth={0.02}
          strokeColor="#ea580c"
          anchorX="center"
          anchorY="middle"
          letterSpacing={0.1}
          fontWeight={900}
        >
          DEVELOPER
        </Text>

        {/* Subtle backing shadow text */}
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
  // We parallax the Portrait image SLIGHTLY down when scrolling
  const yImage = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <section id="hero" className="relative h-[100svh] w-full flex items-center justify-center overflow-hidden">

      {/* 3D Canvas Background (Z=0) */}
      <div className="absolute inset-0 z-0 bg-background">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <InteractiveScene />
          <Preload all />
        </Canvas>
      </div>

      {/* Portrait Overlay (Z=10) */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-end w-full h-full pointer-events-none">
        {/* We use Framer Motion for the portrait to give it parallax weight */}
        <motion.img
          style={{ y: yImage }}
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.3, duration: 1.5, delay: 0.2 }}
          src="/legacy/assets/profile.png"
          alt="Tushar Palase"
          className="h-[75vh] md:h-[85vh] object-contain object-bottom pointer-events-auto filter drop-shadow-[0_20px_40px_rgba(26,54,93,0.3)] z-10"
        />

        {/* Floating Glassmorphism Badges for "Pro" Portfolio Look */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="hidden md:flex absolute left-[15%] top-[40%] bg-surface/80 border border-text/10 backdrop-blur-md px-6 py-3 rounded-full items-center gap-3 shadow-xl pointer-events-auto"
        >
          <div className="flex flex-col">
            <span className="mb-1 text-sm font-bold leading-none leading-tight text-text">Creative</span>
            <span className="text-xs font-semibold leading-none tracking-wider uppercase text-text/60">Developer</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="hidden md:flex absolute right-[15%] top-[55%] bg-surface/80 border border-secondary/30 backdrop-blur-md px-6 py-3 rounded-full items-center gap-3 shadow-xl pointer-events-auto"
        >
          <span className="text-2xl">⚡</span>
          <div className="flex flex-col">
            <span className="mb-1 text-sm font-bold leading-none leading-tight text-text">Full Stack</span>
            <span className="text-xs font-semibold leading-none tracking-wider uppercase text-text/60">Engineering</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator (Clean minimalist bar) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute z-20 flex flex-col items-center -translate-x-1/2 pointer-events-none bottom-6 left-1/2"
      >
        <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#1a365d] mb-2 font-bold opacity-80">Scroll</span>
        <div className="w-0.5 h-8 md:h-12 bg-gradient-to-b from-[#1a365d] to-transparent animate-pulse rounded-full" />
      </motion.div>
    </section>
  );
}
