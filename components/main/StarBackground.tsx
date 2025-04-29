'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const StarsBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    const starsCount = 500;
    const starsGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(starsCount * 3);
    const speeds = new Float32Array(starsCount); // har star ka apna speed

    for (let i = 0; i < starsCount; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 1000; // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 1000; // y
      positions[i * 3 + 2] = -Math.random() * 1000;         // z

      // Random speed: kuch normal (2-4), kuch shooting star fast (10-20)
      speeds[i] = Math.random() < 0.97 ? (2 + Math.random() * 2) : (10 + Math.random() * 10);
    }

    starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 1.5,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.9,
    });

    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    camera.position.z = 0;

    const animate = () => {
      requestAnimationFrame(animate);

      const positions = starsGeometry.attributes.position.array as Float32Array;

      for (let i = 0; i < starsCount; i++) {
        positions[i * 3 + 2] += 6; // apni speed se move kar

        // Agar star camera ke pass aa gaya, reset karo
        if (positions[i * 3 + 2] > camera.position.z) {
          positions[i * 3 + 2] = -1000;
          positions[i * 3 + 0] = (Math.random() - 0.5) * 1000;
          positions[i * 3 + 1] = (Math.random() - 0.5) * 1000;

          // Shooting stars random create hote rahenge
          speeds[i] = Math.random() < 0.97 ? (2 + Math.random() * 2) : (10 + Math.random() * 10);
        }
      }

      starsGeometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};

export default StarsBackground;
