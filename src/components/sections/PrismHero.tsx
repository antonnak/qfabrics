"use client";

import { motion } from "framer-motion";
import { prismFloat, glowPulse } from "@/lib/animations";

export function PrismHero() {
  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background glow effects */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full blur-[100px] opacity-50"
        style={{
          background: "radial-gradient(circle, var(--prism-green) 0%, transparent 70%)",
          left: "20%",
          top: "20%",
        }}
        variants={glowPulse}
        animate="animate"
      />
      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full blur-[120px] opacity-40"
        style={{
          background: "radial-gradient(circle, var(--prism-red) 0%, var(--prism-orange) 40%, transparent 70%)",
          right: "15%",
          bottom: "20%",
        }}
        variants={glowPulse}
        animate="animate"
        transition={{ delay: 1.5 }}
      />

      {/* Main prism SVG */}
      <motion.svg
        viewBox="0 0 400 400"
        className="w-full max-w-[400px] h-auto relative z-10"
        variants={prismFloat}
        animate="animate"
      >
        <defs>
          {/* Gradient for left face - green tinted */}
          <linearGradient id="leftFaceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1a2a1a" />
            <stop offset="50%" stopColor="#0f1a0f" />
            <stop offset="100%" stopColor="#0a0a0a" />
          </linearGradient>

          {/* Gradient for right face - red/orange tinted */}
          <linearGradient id="rightFaceGradient" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2a1a1a" />
            <stop offset="50%" stopColor="#1a0f0f" />
            <stop offset="100%" stopColor="#0a0a0a" />
          </linearGradient>

          {/* Gradient for front face - neutral dark */}
          <linearGradient id="frontFaceGradient" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#1a1a1a" />
            <stop offset="100%" stopColor="#0a0a0a" />
          </linearGradient>

          {/* Green edge glow */}
          <linearGradient id="greenEdgeGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--prism-green)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="var(--prism-green)" stopOpacity="0.2" />
          </linearGradient>

          {/* Red/orange edge glow */}
          <linearGradient id="redEdgeGlow" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--prism-orange)" stopOpacity="0.8" />
            <stop offset="50%" stopColor="var(--prism-red)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="var(--prism-red)" stopOpacity="0.2" />
          </linearGradient>

          {/* Glow filter for edges */}
          <filter id="edgeGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Stronger glow for highlights */}
          <filter id="strongGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Prism faces - 3D pyramid viewed from front/below */}
        {/* Points: top (200, 60), bottom-left (60, 340), bottom-right (340, 340), inner-bottom (200, 280) */}

        {/* Left face */}
        <polygon
          points="200,60 60,340 200,280"
          fill="url(#leftFaceGradient)"
          stroke="none"
        />

        {/* Right face */}
        <polygon
          points="200,60 340,340 200,280"
          fill="url(#rightFaceGradient)"
          stroke="none"
        />

        {/* Front/bottom face */}
        <polygon
          points="60,340 340,340 200,280"
          fill="url(#frontFaceGradient)"
          stroke="none"
        />

        {/* Edge highlights with glow */}
        {/* Left edge - green glow */}
        <motion.line
          x1="200"
          y1="60"
          x2="60"
          y2="340"
          stroke="url(#greenEdgeGlow)"
          strokeWidth="2"
          filter="url(#edgeGlow)"
          initial={{ opacity: 0.6 }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Right edge - red/orange glow */}
        <motion.line
          x1="200"
          y1="60"
          x2="340"
          y2="340"
          stroke="url(#redEdgeGlow)"
          strokeWidth="2"
          filter="url(#edgeGlow)"
          initial={{ opacity: 0.6 }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />

        {/* Center edge - white highlight */}
        <motion.line
          x1="200"
          y1="60"
          x2="200"
          y2="280"
          stroke="var(--prism-edge)"
          strokeWidth="1.5"
          filter="url(#edgeGlow)"
          initial={{ opacity: 0.4 }}
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        {/* Bottom edges */}
        <line
          x1="60"
          y1="340"
          x2="200"
          y2="280"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="1"
        />
        <line
          x1="340"
          y1="340"
          x2="200"
          y2="280"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="1"
        />
        <line
          x1="60"
          y1="340"
          x2="340"
          y2="340"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1"
        />

        {/* Top apex highlight */}
        <motion.circle
          cx="200"
          cy="60"
          r="4"
          fill="white"
          filter="url(#strongGlow)"
          initial={{ opacity: 0.6 }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.svg>

      {/* Perspective grid lines radiating from bottom */}
      <svg
        viewBox="0 0 800 400"
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
        preserveAspectRatio="xMidYMax slice"
      >
        {/* Radiating lines from bottom center */}
        {Array.from({ length: 15 }).map((_, i) => {
          const angle = -70 + (i * 140) / 14;
          const radians = (angle * Math.PI) / 180;
          const length = 600;
          const x2 = 400 + Math.cos(radians) * length;
          const y2 = 400 - Math.sin(radians) * length;
          return (
            <line
              key={i}
              x1="400"
              y1="400"
              x2={x2}
              y2={y2}
              stroke="white"
              strokeWidth="0.5"
              opacity={0.3 - Math.abs(i - 7) * 0.03}
            />
          );
        })}
      </svg>
    </div>
  );
}
