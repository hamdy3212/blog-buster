"use client";

import { memo, useEffect, useRef } from "react";
import Image from "next/image";

interface Publication {
  id: number;
  name: string;
  logo: string;
  metric: string;
  metricValue: string;
  variant: 'blue' | 'green';
}

const PUBLICATIONS: Publication[] = [
  {
    id: 1,
    name: "Yahoo Finance",
    logo: "📰",
    metric: "DR Score",
    metricValue: "92",
    variant: "blue",
  },
  {
    id: 2,
    name: "Business Insider",
    logo: "📡",
    metric: "Viewers",
    metricValue: "119.6M",
    variant: "green",
  },
  {
    id: 3,
    name: "TechCrunch",
    logo: "💼",
    metric: "DR Score",
    metricValue: "92",
    variant: "blue",
  },
  {
    id: 4,
    name: "MarketWatch",
    logo: "📊",
    metric: "DR Score",
    metricValue: "91",
    variant: "green",
  },
  {
    id: 5,
    name: "Forbes Digital",
    logo: "💰",
    metric: "Viewers",
    metricValue: "156M",
    variant: "blue",
  },
  {
    id: 6,
    name: "Reuters News",
    logo: "🚀",
    metric: "DR Score",
    metricValue: "93",
    variant: "green",
  },
];

function PublicationCard({ name, logo, metric, metricValue, variant }: Publication) {
  const isBlue = variant === 'blue';
  const bgColor = isBlue ? 'bg-[#EDECFF]' : 'bg-[#DDFFE5]';
  const textColor = isBlue ? 'text-[#4B3FFF]' : 'text-[#3FCB62]';
  const arrowSrc = isBlue ? '/images/arrow-blue.svg' : '/images/arrow-green.svg';
  
  return (
    <div className="flex-shrink-0 w-[303.56px] h-[48px] bg-white rounded-[16px] border border-[#F0F0F0] px-4 py-2 rotate-0 md:rotate-5 hover:rotate-0  hover:shadow-lg hover:z-50 transition-all duration-300 cursor-pointer relative">
      <div className="flex items-center justify-between h-full gap-2">
        {/* Left side - Logo and Name - Fixed width */}
        <div className="flex items-center gap-2 min-w-0 flex-1">
          <div className="text-xl flex-shrink-0">{logo}</div>
          <h3 className="font-inter font-semibold text-sm text-gray-900 truncate">
            {name}
          </h3>
        </div>

        {/* Right side - Metric badge - Fixed width */}
        <div
          className={`flex items-center ${bgColor} rounded-[45px] ${textColor} w-[134px] flex-shrink-0 justify-center`}
          style={{
            paddingTop: "4.05px",
            paddingRight: "8.11px",
            paddingBottom: "4.05px",
            paddingLeft: "8.11px",
            gap: "6.08px",
          }}
        >
          <Image 
            src={arrowSrc} 
            alt="" 
            width={16} 
            height={16} 
            className="flex-shrink-0" 
          />
          <span className="text-sm font-bold whitespace-nowrap">
            {metricValue}
          </span>
          <span className="text-xs font-medium whitespace-nowrap">
            {metric}
          </span>
        </div>
      </div>
    </div>
  );
}

export const PublicationsCarousel = memo(function PublicationsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const positionRef = useRef(0);
  const isPausedRef = useRef(false);
  
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const speed = 0.5; // pixels per frame
    let cardWidth = 0;

    const animate = () => {
      if (!isPausedRef.current && scrollContainer) {
        // Calculate card width on first run
        if (cardWidth === 0) {
          const firstCard = scrollContainer.querySelector('.publication-card');
          if (firstCard) {
            cardWidth = firstCard.getBoundingClientRect().width + 12; // width + margin
          }
        }

        positionRef.current -= speed;
        
        // Reset position after moving one full set (6 cards)
        const resetPoint = -(cardWidth * PUBLICATIONS.length);
        if (positionRef.current <= resetPoint) {
          positionRef.current = 0;
        }
        
        scrollContainer.style.transform = `translateX(${positionRef.current}px)`;
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Desktop uses CSS animation (keeping it simple for desktop)
  const triplePublications = [...PUBLICATIONS, ...PUBLICATIONS, ...PUBLICATIONS];
  
  return (
    <div 
      className="relative w-full h-full pointer-events-auto group"
      onMouseEnter={() => { isPausedRef.current = true; }}
      onMouseLeave={() => { isPausedRef.current = false; }}
    >
      {/* Desktop: Vertical scroll with mask fade */}
      <div 
        className="hidden lg:block absolute right-10 h-full pointer-events-auto overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)'
        }}
      >
        <div className="animate-scroll-up-continuous will-change-transform pointer-events-auto group-hover:pause block">
          {triplePublications.map((pub, index) => (
            <div key={`${pub.id}-${index}`} className="mb-6 pointer-events-auto">
              <PublicationCard {...pub} />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile/Tablet: JavaScript-driven horizontal scroll */}
      <div 
        className="lg:hidden w-full h-full overflow-hidden py-4 pointer-events-auto"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)'
        }}
      >
        <div ref={scrollRef} className="flex will-change-transform pointer-events-auto">
          {[...PUBLICATIONS, ...PUBLICATIONS].map((pub, index) => (
            <div key={`${pub.id}-${index}`} className="mr-3 flex-shrink-0 pointer-events-auto publication-card">
              <PublicationCard {...pub} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});
