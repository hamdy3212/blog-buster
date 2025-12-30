import Image from 'next/image';
import { Container } from '@/components/ui/Container';

export function BacklinksCTASection() {
  return (
    <section className="py-16 sm:py-20">
      <Container size="lg">
        <div className="w-full max-w-[1126px] h-[194px] mx-auto bg-gradient-to-br from-[#5048E5] via-purple-600 to-[#8B63E9] rounded-[40px] shadow-2xl overflow-hidden">
          <div className="flex items-center h-full">
            {/* Left side - Text and Button */}
            <div className="flex flex-col gap-2.5 flex-1 py-6 pl-[52px]">
              <h2 className="font-inter text-2xl font-semibold leading-none text-white flex items-center gap-3">
                Need backlinks while waiting?
                <span className="text-2xl" role="img" aria-label="gift">🎁</span>
              </h2>
              
              <p className="font-inter text-base font-normal leading-[29.25px] text-white/90 whitespace-nowrap">
                MediaBoost is another product we built for backlinks and media coverage.
              </p>
              
              <a
                href="#"
                className="inline-flex items-center justify-center w-[241px] mt-4 h-[51px] px-8 py-4 gap-2 font-inter text-base font-semibold leading-none text-center whitespace-nowrap bg-white text-indigo-600 rounded-full shadow-lg hover:bg-indigo-50 hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out"
              >
                👉 Visit Mediaboost Ⓜ️
              </a>
            </div>

            {/* Right side - Image */}
            <div className="relative h-full flex-shrink-0 w-[calc(50%-80px)] mr-20">
              <Image
                src="/images/publications-social-proof.png"
                alt="MediaBoost featured in top publications: Yahoo Finance with 92 DR Score, Associated Press with 119.6M viewers, and Business Insider with 92 DR Score"
                fill
                quality={100}
                
                sizes="600px"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
