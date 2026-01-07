"use client";

import { useEffect, useRef } from 'react';

export function MeshHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // 3D Mesh Configuration
    const gridSize = 40;
    const spacingX = 30;
    const spacingZ = 18;
    let time = 0;

    // Create mesh grid points with landscape orientation
    const createMeshGrid = (t: number) => {
      const points: { x: number; y: number; z: number }[][] = [];

      for (let i = 0; i < gridSize; i++) {
        points[i] = [];
        for (let j = 0; j < gridSize; j++) {
          const x = (i - gridSize / 2) * spacingX;
          const z = (j - gridSize / 2) * spacingZ;

          // Create flowing organic wave patterns
          const wave1 = Math.sin(x * 0.015 + z * 0.025 + t * 1.5) * 35;
          const wave2 = Math.cos(x * 0.02 + z * 0.015 - t * 1.0) * 25;
          const wave3 = Math.sin(z * 0.03 + x * 0.01 + t * 0.7) * 20;
          const ripple = Math.sin(Math.sqrt(x * x + z * z) * 0.015 + t) * 15;
          const y = wave1 + wave2 + wave3 + ripple;

          points[i][j] = { x, y, z };
        }
      }
      return points;
    };

    // Project 3D point to 2D with landscape perspective
    const project = (x: number, y: number, z: number) => {
      const centerX = canvas.offsetWidth / 2;
      const centerY = canvas.offsetHeight * 0.62;

      // Rotate for flowing wave view
      const rotX = -0.5;
      const rotY = 0.15;

      // Apply Y rotation first
      const x1 = x * Math.cos(rotY) - z * Math.sin(rotY);
      const z1 = x * Math.sin(rotY) + z * Math.cos(rotY);

      // Then X rotation
      const y1 = y * Math.cos(rotX) - z1 * Math.sin(rotX);
      const z2 = y * Math.sin(rotX) + z1 * Math.cos(rotX);

      // Natural perspective - things get smaller in the distance
      const perspective = 800;
      const scale = perspective / (perspective + z2 + 400);

      return {
        x: centerX + x1 * scale * 1.8,
        y: centerY + y1 * scale * 1.8,
        scale,
        z: z2
      };
    };

    // Get color based on depth
    const getColor = (z: number, scale: number) => {
      const normalized = Math.max(0, Math.min(1, (z + 500) / 1000));

      // Cyan to blue gradient with depth
      const opacity = 0.15 + scale * 0.7;

      if (normalized < 0.25) {
        // Far back - darker blue
        return `rgba(20, 60, 100, ${opacity * 0.3})`;
      } else if (normalized < 0.5) {
        // Mid-back - blue to cyan
        const t = (normalized - 0.25) / 0.25;
        return `rgba(${Math.floor(20 + t * 30)}, ${Math.floor(60 + t * 100)}, ${Math.floor(100 + t * 60)}, ${opacity * 0.6})`;
      } else if (normalized < 0.75) {
        // Mid-front - cyan
        const t = (normalized - 0.5) / 0.25;
        return `rgba(${Math.floor(50 + t * 30)}, ${Math.floor(160 + t * 40)}, ${Math.floor(160 + t * 40)}, ${opacity})`;
      } else {
        // Very front - bright cyan
        const t = (normalized - 0.75) / 0.25;
        return `rgba(${Math.floor(80 + t * 100)}, ${Math.floor(200 + t * 55)}, ${Math.floor(200 + t * 55)}, ${opacity})`;
      }
    };

    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      const points = createMeshGrid(time);

      // Draw mesh lines
      ctx.lineWidth = 1;

      // Draw in back-to-front order for proper depth
      // Horizontal lines (along X axis)
      for (let j = 0; j < gridSize; j++) {
        for (let i = 0; i < gridSize - 1; i++) {
          const p1 = points[i][j];
          const p2 = points[i + 1][j];

          const proj1 = project(p1.x, p1.y, p1.z);
          const proj2 = project(p2.x, p2.y, p2.z);

          const avgZ = (proj1.z + proj2.z) / 2;
          const avgScale = (proj1.scale + proj2.scale) / 2;

          ctx.strokeStyle = getColor(avgZ, avgScale);
          ctx.beginPath();
          ctx.moveTo(proj1.x, proj1.y);
          ctx.lineTo(proj2.x, proj2.y);
          ctx.stroke();
        }
      }

      // Vertical lines (along Z axis)
      for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize - 1; j++) {
          const p1 = points[i][j];
          const p2 = points[i][j + 1];

          const proj1 = project(p1.x, p1.y, p1.z);
          const proj2 = project(p2.x, p2.y, p2.z);

          const avgZ = (proj1.z + proj2.z) / 2;
          const avgScale = (proj1.scale + proj2.scale) / 2;

          ctx.strokeStyle = getColor(avgZ, avgScale);
          ctx.beginPath();
          ctx.moveTo(proj1.x, proj1.y);
          ctx.lineTo(proj2.x, proj2.y);
          ctx.stroke();
        }
      }

      // Draw dots at intersections for closer points
      for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
          const p = points[i][j];
          const proj = project(p.x, p.y, p.z);

          if (proj.scale > 0.3) {
            const dotSize = 1.2 + (proj.scale * 2);
            ctx.fillStyle = getColor(proj.z, proj.scale);
            ctx.beginPath();
            ctx.arc(proj.x, proj.y, dotSize, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      time += 0.005; // Reduced by 50% for smoother animation
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[400px] bg-background overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.7) 70%)'
        }}
      />

      {/* 3D Mesh Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ mixBlendMode: 'screen' }}
        aria-label="Animated 3D mesh background visualization"
        role="img"
      >
        Interactive 3D mesh animation with flowing wave patterns
      </canvas>
    </div>
  );
}
