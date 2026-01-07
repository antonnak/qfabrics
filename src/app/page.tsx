import { Hero } from '@/components/sections/Hero';
import { TechStack } from '@/components/sections/ClientLogos';
import { ProblemSolution } from '@/components/sections/ProblemSolution';
import { Pillars } from '@/components/sections/Pillars';
import { FabricsGrid } from '@/components/sections/FabricsGrid';
import { Differentiators } from '@/components/sections/Differentiators';
import { Stats } from '@/components/sections/Stats';
import { CTA } from '@/components/sections/CTA';

export default function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <TechStack />
      <ProblemSolution />
      <Pillars />
      <FabricsGrid />
      <Differentiators />
      <Stats />
      <CTA />
    </main>
  );
}
