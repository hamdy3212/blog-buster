"use client";

import { useState, FormEvent } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import Image from "next/image";

export function HeroSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Handle submission logic here
    console.log("Email submitted:", email);
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <section className="relative py-10 sm:py-28 lg:py-25 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

      <Container size="lg">
        <div className="text-center max-w-4xl mx-auto px-4">
          {/* Badge */}
          <div 
            className="inline-flex items-center bg-white/80 mb-9 mx-auto w-full max-w-[371px] px-4 py-2"
            style={{
              height: '38px',
              borderRadius: '9999px',
              border: '1px solid #E0E0EB',
              gap: '8px',
              boxShadow: '0px 4px 24px -4px #503DF526',
              backdropFilter: 'blur(4px)',
            }}
          >
            <Image
              src="/images/shine-icon.png"
              alt="Social proof icon"
              width={20}
              height={20}
              quality={100}
              className="flex-shrink-0"
            />
            <span
              className="text-gray-700 truncate"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "20px",
              }}
            >
              Programmatic SEO without code or developers
            </span>
          </div>

          {/* Main heading */}
          <h1
            className="text-gray-900 mb-6 px-4"
            style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontWeight: 700,
              fontSize: "clamp(32px, 5vw, 48px)",
              lineHeight: "1.3",
              textAlign: "center",
            }}
          >
            Attract long-tail traffic
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                background:
                  "linear-gradient(96.18deg, #5048E5 0%, #8B63E9 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              with SEO pages at scale
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-[#65758B] mb-10 max-w-3xl mx-auto leading-relaxed">
            Create one template, add your data, and generate thousands of SEO
            pages automatically to capture inbound leads at scale.
          </p>

          {/* Email form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6 px-4">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
              required
              className="w-full sm:w-[400px] h-12 px-6 border-2 border-[#503DF533] rounded-xl font-inter text-base font-normal leading-6 text-gray-700 placeholder:text-[#737373B2] focus:outline-none focus:border-[#503DF5] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-[196px] h-12 px-8 text-white font-semibold rounded-xl hover:opacity-90 active:scale-95 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_10px_40px_-10px_rgba(80,72,229,0.2)]"
              style={{
                background: 'linear-gradient(96.18deg, #5048E5 0%, #8B63E9 100%)',
              }}
            >
              {isSubmitting ? "Submitting..." : "Get Early Access"}
            </button>
          </form>
          {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
          {/* Social proof */}
          <div className="flex items-center justify-center gap-3 px-4">
            <Image
              src="/images/flower-icon-left.png"
              alt="Social proof decoration"
              width={20}
              height={20}
              quality={100}
              className="flex-shrink-0 "
            />
            <p
              className="text-[#6C7393] text-center"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "20px",
              }}
            >
              The world top companies are doing programmatic SEO. We&apos;ll get
              you started!
            </p>
            <Image
              src="/images/flower-icon.png"
              alt="Social proof decoration"
              width={20}
              height={20}
              quality={100}
              className="flex-shrink-0 "
            />
          </div>

          <Image
            src="/images/template-visualization.png"
            alt="Programmatic SEO page template showing dynamic variables that generate infinite page variations including Finance in Houston, Healthcare in Austin, Technology in Dallas, and 788+ more variations"
            width={1920}
            height={1080}
            quality={95}
            priority
            className="w-full h-full object-contain mt-[100px] hidden lg:block"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
          />
        </div>
      </Container>
    </section>
  );
}
