import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Particles({ count = 1000 }) {
  const mesh = useRef();
  
  // Generate random positions and colors for particles
  const [positions, colors] = useMemo(() => {
    const positionArray = new Float32Array(count * 3);
    const colorArray = new Float32Array(count * 3);
    
    // Choose our neon colors
    const color1 = new THREE.Color('#00f3ff'); // primary cyan
    const color2 = new THREE.Color('#7000ff'); // secondary violet
    
    for (let i = 0; i < count; i++) {
        // distribute them in a box or sphere
        positionArray[i * 3] = (Math.random() - 0.5) * 15;
        positionArray[i * 3 + 1] = (Math.random() - 0.5) * 15;
        positionArray[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2;
        
        // Mix colors based on random value
        const mixedColor = color1.clone().lerp(color2, Math.random());
        colorArray[i * 3] = mixedColor.r;
        colorArray[i * 3 + 1] = mixedColor.g;
        colorArray[i * 3 + 2] = mixedColor.b;
    }
    
    return [positionArray, colorArray];
  }, [count]);

  // Animate the particles
  useFrame((state) => {
    if (!mesh.current) return;
    
    const time = state.clock.getElapsedTime();
    
    // Slow rotation
    mesh.current.rotation.y = time * 0.05;
    mesh.current.rotation.x = time * 0.02;
    
    // Gentle floating effect based on mouse (with damping)
    mesh.current.position.y = Math.sin(time * 0.5) * 0.2;
    mesh.current.position.x = Math.sin(time * 0.3) * 0.2;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute 
            attach="attributes-position"
            count={count}
            array={positions}
            itemSize={3}
        />
        <bufferAttribute 
            attach="attributes-color"
            count={count}
            array={colors}
            itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
          size={0.05} 
          vertexColors 
          transparent
          opacity={0.8}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
