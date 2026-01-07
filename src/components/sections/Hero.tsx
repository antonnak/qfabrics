import { Button } from '@/components/ui/Button';
import { MeshHero } from './MeshHero';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-width 3D Mesh Background */}
      <div className="absolute inset-0 z-0">
        <MeshHero />
      </div>

      {/* Top gradient fade */}
      <div
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, transparent 100%)',
        }}
      />

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, transparent 100%)',
        }}
      />

      {/* Content - on top of mesh, shifted up */}
      <div className="relative z-20 px-6 sm:px-12 pb-48 sm:pb-64 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-[1.1] tracking-tight">
          Enterprise AI that works
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-foreground-muted max-w-2xl mx-auto leading-relaxed">
          We build AI agents that run inside your infrastructure—secure, compliant, and working. Not pilots that never deploy.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/contact" size="lg">
            Book a Demo
          </Button>
          <Button href="/how-we-work" variant="secondary" size="lg">
            See How We Work
          </Button>
        </div>
      </div>
    </section>
  );
}
