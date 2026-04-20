import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'QuantumFabrics — Production AI Agents for Enterprise';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          backgroundColor: '#000000',
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.03) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.02) 0%, transparent 50%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%)',
              marginRight: '20px',
            }}
          />
          <span
            style={{
              fontSize: '28px',
              color: 'rgba(255,255,255,0.6)',
              letterSpacing: '-0.02em',
            }}
          >
            QuantumFabrics
          </span>
        </div>
        <div
          style={{
            fontSize: '56px',
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.2,
            letterSpacing: '-0.03em',
            marginBottom: '24px',
          }}
        >
          Production AI Agents
          <br />
          for Enterprise
        </div>
        <div
          style={{
            fontSize: '24px',
            color: 'rgba(255,255,255,0.5)',
            lineHeight: 1.5,
            maxWidth: '700px',
          }}
        >
          We build AI agents that actually ship — integrated into your operations, not stuck in pilot.
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '60px',
            left: '80px',
            fontSize: '18px',
            color: 'rgba(255,255,255,0.3)',
          }}
        >
          quantumfabrics.ai
        </div>
      </div>
    ),
    { ...size }
  );
}
