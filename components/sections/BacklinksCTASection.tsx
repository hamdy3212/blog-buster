"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PublicationsCarousel } from "./TemplateVisualization";

export function BacklinksCTASection() {
  return (
    <section className="py-8 sm:py-10 lg:py-12 px-4" aria-label="Backlinks CTA">
      <Container size="lg">
        <div className="w-full max-w-[1126px] mx-auto bg-gradient-to-br from-[#5048E5] via-purple-600 to-[#8B63E9] rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center lg:items-start h-full py-6 sm:py-8 lg:py-6 gap-4 lg:gap-0 relative overflow-hidden">
            {/* Left side - Text and Button */}
            <div className="flex flex-col gap-2.5 sm:gap-3 lg:gap-3 lg:max-w-[620px] px-6 sm:px-8 lg:py-6 lg:pl-[52px] lg:pr-8 text-center lg:text-left w-full pointer-events-none">
              <h2 className="font-inter flex flex-row font-semibold text-[20px] sm:text-[22px] lg:text-[24px] leading-[1.3] sm:leading-[1.2] text-white flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 pointer-events-auto">
                <span className="whitespace-nowrap">Need backlinks while waiting?</span>
                <span className="text-xl sm:text-2xl" role="img" aria-label="gift">
                  🎁
                </span>
              </h2>

              <p className="font-inter text-[13px] sm:text-[14px] lg:text-base font-normal text-white/90 leading-[1.5] max-w-md mx-auto lg:mx-0 lg:max-w-full pointer-events-auto">
                MediaBoost is another product we built for backlinks and media
                coverage.
              </p>

              <div className="flex justify-center lg:justify-start mt-1 pointer-events-auto">
                <a
                  href="#"
                  rel="noopener noreferrer"
                  aria-label="Visit MediaBoost for backlinks and media coverage"
                  className="inline-flex items-center justify-center w-full max-w-[260px] sm:max-w-[280px] lg:w-auto lg:min-w-[241px] h-[44px] sm:h-[48px] lg:h-[51px] px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 gap-2 font-inter text-[13px] sm:text-[14px] lg:text-base font-semibold leading-none text-center bg-white text-indigo-600 rounded-full shadow-lg hover:bg-indigo-50 hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                >
                  <span aria-hidden="true">👉</span> Visit Mediaboost{" "}
                  <span aria-hidden="true">Ⓜ️</span>
                </a>
              </div>
            </div>

            {/* Right side - Animated Publications Carousel */}
            <div className="w-full h-[120px] sm:h-[140px] lg:h-[280px] lg:w-auto lg:absolute lg:right-[40px] xl:right-[60px] lg:max-w-[220px] lg:bottom-0 z-20 pointer-events-auto">
              <PublicationsCarousel />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
