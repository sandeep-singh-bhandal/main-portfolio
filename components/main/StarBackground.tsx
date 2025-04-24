"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

const StarBackground = (props: any) => {
  const ref = useRef<any>(null);
  
  // Modified initialization with validation
  const [sphere] = useState(() => {
    // Generate exactly 5000 points (5000 * 3 components)
    const positions = random.inSphere(new Float32Array(5000 * 3), { radius: 1.2 });
    
    // Validation checks
    if (positions.length !== 15000) {
      console.error(`Invalid array length: ${positions.length} (expected 15000)`);
    }
    
    const hasNaN = positions.some((v:Number) => Number.isNaN(v));
    if (hasNaN) {
      console.error("NaN values detected in positions array!");
    }
    
    console.log('Generated positions:', {
      length: positions.length,
      sample: positions.slice(0, 6) // First 2 points (x,y,z,x,y,z)
    });

    return positions;
  });

  useFrame((state, delta) => {
    if (ref.current) { // Added null check
      ref.current.rotation.x -= delta/10;
      ref.current.rotation.y -= delta/15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 z-[20]">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
      <Preload all />
    </Canvas>
  </div>
);

export default StarsCanvas;
