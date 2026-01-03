export function FabricMesh() {
  // Generate perspective grid lines that converge toward a vanishing point
  const horizontalLines = 14;
  const verticalLines = 35;

  return (
    <div className="absolute inset-0">
      {/* Glow effect behind the mesh */}
      <div
        className="absolute inset-0 blur-3xl opacity-40"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(255,255,255,0.15) 0%, transparent 70%)',
        }}
      />

      {/* Perspective grid SVG */}
      <svg
        className="w-full h-full"
        viewBox="0 0 1000 500"
        preserveAspectRatio="xMidYMax slice"
      >
        <defs>
          {/* Gradient for lines - fades toward edges */}
          <linearGradient id="lineGradientH" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="20%" stopColor="rgba(255,255,255,0.4)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.6)" />
            <stop offset="80%" stopColor="rgba(255,255,255,0.4)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>

          <linearGradient id="lineGradientV" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
            <stop offset="60%" stopColor="rgba(255,255,255,0.5)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.3)" />
          </linearGradient>

          {/* Subtle glow filter */}
          <filter id="meshGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1" result="blur"/>
            <feMerge>
              <feMergeNode in="blur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Vanishing point at bottom center (500, 500) */}

        {/* Horizontal perspective lines - closer together near vanishing point */}
        {[...Array(horizontalLines)].map((_, i) => {
          // Calculate y position with perspective (closer together at bottom)
          const progress = i / (horizontalLines - 1);
          const y = 500 - Math.pow(progress, 1.6) * 450;

          // Lines get wider as they go up (perspective)
          const spread = 500 + (450 - (500 - y)) * 1.8;
          const x1 = 500 - spread;
          const x2 = 500 + spread;

          // Opacity increases toward the bottom (closer to viewer)
          const opacity = 0.12 + progress * 0.4;

          return (
            <line
              key={`h-${i}`}
              x1={x1}
              y1={y}
              x2={x2}
              y2={y}
              stroke="url(#lineGradientH)"
              strokeWidth={0.5 + progress * 0.8}
              opacity={opacity}
              filter="url(#meshGlow)"
            />
          );
        })}

        {/* Vertical perspective lines - converge to vanishing point */}
        {[...Array(verticalLines)].map((_, i) => {
          // Distribute lines across the top edge (wider spread)
          const topX = (i / (verticalLines - 1)) * 1400 - 200;

          // All lines converge to center bottom
          const bottomX = 500;
          const bottomY = 500;
          const topY = 50;

          // Calculate opacity based on distance from center
          const distFromCenter = Math.abs(topX - 500) / 700;
          const opacity = 0.6 - distFromCenter * 0.45;

          return (
            <line
              key={`v-${i}`}
              x1={topX}
              y1={topY}
              x2={bottomX}
              y2={bottomY}
              stroke="url(#lineGradientV)"
              strokeWidth={0.6}
              opacity={Math.max(0.1, opacity)}
              filter="url(#meshGlow)"
            />
          );
        })}

        {/* Intersection dots for the "woven" effect */}
        {[...Array(horizontalLines)].map((_, row) => {
          const progress = row / (horizontalLines - 1);
          const y = 500 - Math.pow(progress, 1.6) * 450;

          // Calculate how many dots fit at this y level
          const spread = 500 + (450 - (500 - y)) * 1.8;
          const dotsAtLevel = Math.floor(10 + progress * 16);

          return [...Array(dotsAtLevel)].map((_, col) => {
            const xProgress = col / (dotsAtLevel - 1);
            const x = (500 - spread * 0.7) + xProgress * spread * 1.4;

            // Only show dots that are within bounds
            if (x < 0 || x > 1000) return null;

            const dotOpacity = (0.15 + progress * 0.45) * (1 - Math.abs(xProgress - 0.5) * 0.6);
            const dotSize = 1.2 + progress * 2;

            return (
              <circle
                key={`dot-${row}-${col}`}
                cx={x}
                cy={y}
                r={dotSize}
                fill="rgba(255,255,255,0.9)"
                opacity={dotOpacity}
              />
            );
          });
        })}
      </svg>

    </div>
  );
}
