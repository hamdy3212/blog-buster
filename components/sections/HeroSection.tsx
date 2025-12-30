"use client";

import { memo } from "react";
import { Container } from "@/components/ui/Container";
import Image from "next/image";
import { BACKGROUND_CIRCLES } from "./HeroSection.constants";
import { BackgroundCircle } from "./BackgroundCircle";
import { useEmailForm } from "@/hooks/useEmailForm";

export function HeroSection() {
  const { email, setEmail, isSubmitting, handleSubmit } = useEmailForm();

  return (
    <section
      className="relative py-12 sm:py-20 lg:py-28 bg-white overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background decorations - Hidden on mobile for better performance */}
      <div className="hidden lg:block" aria-hidden="true">
        {BACKGROUND_CIRCLES.map((circle, index) => (
          <BackgroundCircle key={index} {...circle} />
        ))}
      </div>

      <Container size="lg">
        <div className="text-center mx-auto max-w-5xl px-4 sm:px-6">
          {/* Badge */}
          <div className="inline-flex items-center justify-center bg-white/80 backdrop-blur-sm mb-6 sm:mb-8 lg:mb-9 mx-auto w-full max-w-[371px] h-[38px] px-1 md:px-4 py-2 rounded-full border border-[#E0E0EB] gap-2 shadow-[0px_4px_24px_-4px_rgba(80,61,245,0.15)]">
            <Image
              src="/images/shine-icon.png"
              alt=""
              width={16}
              height={16}
              quality={90}
              loading="eager"
              className="flex-shrink-0"
              style={{ width: 'auto', height: 'auto' }}
            />
            <span className="text-gray-700 font-inter text-[11px] lg:text-[14px] font-medium leading-tight text-center">
              Programmatic SEO without code or developers
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-gray-900 font-plus-jakarta font-bold text-[20px] lg:text-[48px] leading-[1.3] sm:leading-[1.3] text-center mb-4 sm:mb-5 lg:mb-6 px-2">
            Attract long-tail traffic {" "}
            <br />
            <span className="bg-gradient-to-r from-[#5048E5] to-[#8B63E9] bg-clip-text text-transparent">
              with SEO pages at scale
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-[12px] lg:text-[18px] text-[#65758B] mb-8 sm:mb-10 lg:mb-12 max-w-2xl mx-auto leading-relaxed font-inter px-2">
            Create one template, add your data, and generate thousands of SEO
            pages automatically to capture inbound leads at scale.
          </p>

          {/* Email form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mb-5 sm:mb-6 max-w-[620px] mx-auto"
            aria-label="Email signup form"
            noValidate
          >
            <label htmlFor="email-input" className="sr-only">
              Email address
            </label>
            <input
              id="email-input"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
              required
              aria-required="true"
              className="w-full sm:flex-1 h-10 sm:h-12 px-4 sm:px-6 border-2 border-[#503DF533] rounded-xl font-inter text-sm sm:text-base font-normal leading-5 sm:leading-6 text-gray-700 placeholder:text-[#737373B2] focus:outline-none focus:border-[#503DF5] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
              className="w-full sm:w-auto sm:min-w-[196px] h-10 sm:h-12 px-5 sm:px-8 text-white font-semibold text-sm sm:text-base rounded-xl bg-gradient-to-r from-[#5048E5] to-[#8B63E9] hover:opacity-90 active:scale-95 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_10px_40px_-10px_rgba(80,72,229,0.2)]"
            >
              {isSubmitting ? "Submitting..." : "Get Early Access"}
            </button>
          </form>

          {/* Social proof */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 pt-2 px-2">
            <Image
              src="/images/flower-icon-left.png"
              alt=""
              width={16}
              height={16}
              quality={90}
              loading="lazy"
              className="flex-shrink-0"
              style={{ width: 'auto', height: 'auto' }}
            />
            <p className="text-[#6C7393] text-center font-inter text-[12px] font-medium">
              The world&apos;s top companies are doing programmatic SEO.
              We&apos;ll get you started!
            </p>
            <Image
              src="/images/flower-icon.png"
              alt=""
              width={16}
              height={16}
              quality={90}
              loading="lazy"
              className="flex-shrink-0"
              style={{ width: 'auto', height: 'auto' }}
            />
          </div>

          {/* Hero Visual - Now visible on mobile with better responsive sizing */}
          <div className="mt-8 sm:mt-12 lg:mt-[100px] w-full px-4 sm:px-0">
            <Image
              src="/images/template-visualization.png"
              alt="Programmatic SEO page template showing dynamic variables that generate infinite page variations including Finance in Houston, Healthcare in Austin, Technology in Dallas, and 788+ more variations"
              width={1200}
              height={675}
              quality={75}
              loading="eager"
              fetchPriority="high"
              className="w-full h-auto object-contain rounded-md sm:rounded-xl lg:rounded-2xl shadow-md sm:shadow-xl lg:shadow-2xl"
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 85vw, 1200px"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
