import { HeroSection } from '@/components/sections/HeroSection';
import { BacklinksCTASection } from '@/components/sections/BacklinksCTASection';

export default function Home() {
  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-indigo-600 focus:text-white focus:rounded">
        Skip to main content
      </a>
      <main id="main-content" className="min-h-screen bg-white">
        <HeroSection />
        <BacklinksCTASection />
      </main>
    </>
  );
}
