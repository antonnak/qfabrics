interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

const sizes = {
  sm: 28,
  md: 36,
  lg: 48,
};

export function Logo({ variant = 'dark', size = 'md', showText = true, className = '' }: LogoProps) {
  const dimension = sizes[size];
  const strokeWidth = 4;
  const circleRadius = 20;
  const letterHeight = circleRadius * 2.5;

  const qCenterX = 45;
  const qCenterY = 50;
  const lineAngle = Math.PI / 6;
  const lineStartX = qCenterX - circleRadius * Math.cos(lineAngle) * 0.8;
  const lineStartY = qCenterY - circleRadius * Math.sin(lineAngle) * 0.8 + 4;
  const fStartY = 48;

  const stroke = variant === 'dark' ? '#FFFFFF' : '#000000';

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width={dimension}
        height={dimension}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Q circle */}
        <circle
          cx={qCenterX}
          cy={qCenterY}
          r={circleRadius}
          stroke={stroke}
          strokeWidth={strokeWidth}
          fill="none"
        />

        {/* Diagonal line from Q to F */}
        <line
          x1={lineStartX}
          y1={lineStartY}
          x2="85"
          y2={fStartY + letterHeight * 0.7 + 4}
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />

        {/* F letter */}
        <g>
          {/* Vertical line */}
          <line
            x1="75"
            y1={fStartY}
            x2="75"
            y2={fStartY + letterHeight}
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          {/* Top horizontal */}
          <line
            x1="75"
            y1={fStartY}
            x2={75 + letterHeight * 0.7}
            y2={fStartY}
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          {/* Middle horizontal */}
          <line
            x1="75"
            y1={fStartY + letterHeight * 0.5}
            x2={75 + letterHeight * 0.55}
            y2={fStartY + letterHeight * 0.5}
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
        </g>
      </svg>

      {showText && (
        <span className="font-semibold text-foreground">
          QuantumFabrics
        </span>
      )}
    </div>
  );
}
