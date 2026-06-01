"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Icosahedron } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";
import { Button } from "@/components/ui/button";

function RotatingShape() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Icosahedron ref={meshRef} args={[2, 1]}>
      <meshStandardMaterial
        color="currentColor"
        wireframe
        emissive="#444444"
        emissiveIntensity={0.2}
      />
    </Icosahedron>
  );
}

export function HeroSection() {
  return (
    <section className="bg-background relative flex min-h-[calc(100vh-4rem)] w-full items-center overflow-hidden">
      {/* Background gradients for extra modern feel */}
      <div className="from-primary/5 via-background to-background pointer-events-none absolute inset-0 bg-gradient-to-br" />

      <div className="relative z-10 container mx-auto flex flex-col-reverse items-center justify-between gap-8 px-4 py-12 md:flex-row md:px-8 md:py-24">
        {/* Text Content */}
        <motion.div
          className="flex flex-1 flex-col space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-heading text-foreground text-4xl leading-[1.1] font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Building Modern <br className="hidden lg:block" />
            <span className="from-primary to-primary/60 bg-gradient-to-r bg-clip-text text-transparent">
              Digital Experiences
            </span>
          </h1>
          <p className="text-muted-foreground max-w-[600px] text-lg leading-relaxed sm:text-xl">
            I craft responsive, scalable, and visually stunning web applications
            using the latest technologies like Next.js, Framer Motion, and
            Three.js.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="h-12 rounded-full px-8 text-base">
              View Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 rounded-full px-8 text-base"
            >
              Contact Me
            </Button>
          </div>
        </motion.div>

        {/* 3D Visual */}
        <motion.div
          className="aspect-square w-full flex-1 md:aspect-auto md:h-[600px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Canvas
            camera={{ position: [0, 0, 6], fov: 45 }}
            className="text-primary h-full w-full"
          >
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <OrbitControls
              enableZoom={false}
              autoRotate
              autoRotateSpeed={0.5}
            />
            <RotatingShape />
          </Canvas>
        </motion.div>
      </div>
    </section>
  );
}
