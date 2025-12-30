import Image from 'next/image';
import { Container } from '@/components/ui/Container';

export function BacklinksCTASection() {
  return (
    <section className="py-16 sm:py-20">
      <Container size="lg">
        <div className="w-full max-w-[1126px] mx-auto bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 rounded-[40px] shadow-2xl overflow-hidden" style={{ height: '194px' }}>
          {/* Flex layout */}
          <div className="flex items-center h-full">
            {/* Left side - Text and Button */}
            <div className="flex flex-col gap-6" style={{ padding: '24px 0 24px 52px', flex: '1' }}>
              {/* Title */}
              <h2 className="text-white flex items-center gap-3" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '24px', lineHeight: '100%' }}>
                Need backlinks while waiting?
                <span className="text-2xl" role="img" aria-label="thinking">🎁</span>
              </h2>
              
              {/* Description - one line */}
              <p className="text-white/90 whitespace-nowrap" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '29.25px' }}>
                MediaBoost is another product we built for backlinks and media coverage.
              </p>
              
              {/* CTA Button */}
              <div>
                <a
                  href="#"
                  className="inline-flex items-center justify-center whitespace-nowrap bg-white text-indigo-600 hover:bg-indigo-50 hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out shadow-lg"
                  style={{ 
                    width: '241px', 
                    height: '51px', 
                    padding: '16px 32px',
                    borderRadius: '100px',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    fontSize: '16px',
                    lineHeight: '100%',
                    textAlign: 'center'
                  }}
                >
                  👉 Visit Mediaboost Ⓜ️
                </a>
              </div>
            </div>

            {/* Right side - Publications social proof image (full height, 80px from right) */}
            <div className="relative h-full flex-shrink-0" style={{ width: 'calc(50% - 80px)', marginRight: '80px' }}>
              <Image
                src="/images/publications-social-proof.png"
                alt="MediaBoost featured in top publications: Yahoo Finance with 92 DR Score, Associated Press with 119.6M viewers, and Business Insider with 92 DR Score - trusted backlink and media coverage platform"
                fill
                quality={100}
                sizes="600px"
                priority
                unoptimized={false}
                style={{ objectPosition: 'center' }}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
