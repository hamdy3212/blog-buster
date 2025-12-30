import { HeroSection } from '@/components/sections/HeroSection';
import { TemplateVisualizationSection } from '@/components/sections/TemplateVisualizationSection';
import { BacklinksCTASection } from '@/components/sections/BacklinksCTASection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <BacklinksCTASection />
    </main>
  );
}
