"use client";

import { memo } from "react";
import { Container } from "@/components/ui/Container";
import Image from "next/image";
import { BACKGROUND_CIRCLES } from "./HeroSection.constants";
import { BackgroundCircle } from "./BackgroundCircle";
import { useEmailForm } from "@/hooks/useEmailForm";

export function HeroSection() {
  const { email, setEmail, isSubmitting, error, handleSubmit } = useEmailForm();

  return (
    <section className="relative py-10 sm:py-28 lg:py-25 bg-white" aria-label="Hero section">
      {/* Background decorations - Hidden on mobile for better performance */}
      <div className="hidden lg:block" aria-hidden="true">
        {BACKGROUND_CIRCLES.map((circle, index) => (
          <BackgroundCircle key={index} {...circle} />
        ))}
      </div>

      <Container size="lg">
        <div className="text-center mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm mb-9 mx-auto w-full max-w-[371px] h-[38px] px-4 py-2 rounded-full border border-[#E0E0EB] gap-2 shadow-[0px_4px_24px_-4px_rgba(80,61,245,0.15)]">
            <Image
              src="/images/shine-icon.png"
              alt=""
              width={16}
              height={16}
              quality={100}
              fetchPriority="high"
              className="flex-shrink-0"
              aria-hidden="true"
            />
            <span className="text-gray-700 font-inter text-[12px] lg:text-[14px] font-medium">
              Programmatic SEO without code or developers
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-gray-900 font-plus-jakarta font-bold text-[clamp(32px,5vw,48px)] leading-[1.3] text-center mb-6 px-4">
            Attract long-tail traffic
            <br />
            <span className="bg-gradient-to-r from-[#5048E5] to-[#8B63E9] bg-clip-text text-transparent">
              with SEO pages at scale
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-[18px] text-[#65758B] mb-13 max-w-2xl mx-auto leading-relaxed font-inter">
            Create one template, add your data, and generate thousands of SEO
            pages automatically to capture inbound leads at scale.
          </p>

          {/* Email form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6 px-4"
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
              aria-invalid={error ? "true" : "false"}
              aria-describedby={error ? "email-error" : undefined}
              className="w-full sm:w-[400px] h-12 px-6 border-2 border-[#503DF533] rounded-xl font-inter text-base font-normal leading-6 text-gray-700 placeholder:text-[#737373B2] focus:outline-none focus:border-[#503DF5] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
              className="w-full sm:w-[196px] h-12 px-8 text-white font-semibold rounded-xl bg-gradient-to-r from-[#5048E5] to-[#8B63E9] hover:opacity-90 active:scale-95 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_10px_40px_-10px_rgba(80,72,229,0.2)]"
            >
              {isSubmitting ? "Submitting..." : "Get Early Access"}
            </button>
          </form>
          {error && (
            <p id="email-error" className="text-red-600 text-sm mb-4" role="alert">
              {error}
            </p>
          )}

          {/* Social proof */}
          <div className="flex items-center justify-center gap-3 px-4 pt-2">
            <Image
              src="/images/flower-icon-left.png"
              alt=""
              width={20}
              height={20}
              quality={100}
              fetchPriority="high"
              className="flex-shrink-0"
              aria-hidden="true"
            />
            <p className="text-[#6C7393] text-center font-inter text-sm font-medium leading-5">
              The world&apos;s top companies are doing programmatic SEO. We&apos;ll get
              you started!
            </p>
            <Image
              src="/images/flower-icon.png"
              alt=""
              width={20}
              height={20}
              quality={100}
              className="flex-shrink-0"
              aria-hidden="true"
            />
          </div>

          <Image
            src="/images/template-visualization.png"
            alt="Programmatic SEO page template showing dynamic variables that generate infinite page variations including Finance in Houston, Healthcare in Austin, Technology in Dallas, and 788+ more variations"
            width={1200}
            height={675}
            quality={85}
            priority
            fetchPriority="high"
            className="w-full h-auto object-contain mt-[100px] hidden lg:block"
            sizes="(max-width: 1024px) 100vw, 1200px"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
          />
        </div>
      </Container>
    </section>
  );
}
