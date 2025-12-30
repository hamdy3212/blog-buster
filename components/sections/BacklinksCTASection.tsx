import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function BacklinksCTASection() {
  return (
    <section className="py-10 px-4">
      <Container size="lg">
        <div className="w-full max-w-[1126px] min-h-[194px] lg:h-[194px] mx-auto bg-gradient-to-br from-[#5048E5] via-purple-600 to-[#8B63E9] rounded-[40px] shadow-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center lg:items-center h-full py-8 lg:py-0 gap-6 lg:gap-0 overflow-hidden relative">
            {/* Left side - Text and Button */}
            <div className="flex flex-col gap-4 lg:gap-2.5 flex-1 px-6 lg:py-6 lg:pl-[52px] text-center lg:text-left w-full lg:w-auto">
              <h2 className="font-inter font-semibold text-[clamp(20px,3vw,24px)] leading-[1.2] text-white flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 lg:gap-3">
                <span>Need backlinks while waiting?</span>
                <span className="text-2xl" role="img" aria-label="gift">
                  🎁
                </span>
              </h2>

              <p className="font-inter text-sm sm:text-base font-normal text-white/90 mx-auto lg:mx-0">
                MediaBoost is another product we built for backlinks and media
                coverage.
              </p>

              <div className="flex justify-center lg:justify-start mt-2">
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-full sm:w-[241px] h-[51px] px-6 sm:px-8 py-4 gap-2 font-inter text-sm sm:text-base font-semibold leading-none text-center whitespace-nowrap bg-white text-indigo-600 rounded-full shadow-lg hover:bg-indigo-50 hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out"
                >
                  👉 Visit Mediaboost Ⓜ️
                </a>
              </div>
            </div>

            {/* Right side - Image - Hidden on mobile, visible on desktop */}
            <Image
              src="/images/publications-social-proof.png"
              alt="MediaBoost featured in top publications: Yahoo Finance with 92 DR Score, Associated Press with 119.6M viewers, and Business Insider with 92 DR Score"
              quality={100}
              width={600}
              height={194}
              priority
              className="hidden lg:block absolute h-full flex-shrink-0 right-[80px]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
