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
    <section className="relative py-20 sm:py-28 lg:py-36 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

      <Container size="lg">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div 
            className="inline-flex items-center bg-white/80 mb-[36px]"
            style={{
              width: '371px',
              height: '38px',
              borderRadius: '9999px',
              border: '1px solid #E0E0EB',
              padding: '8px 16px',
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
              className="text-gray-700"
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
            className="text-gray-900 mb-6"
            style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontWeight: 700,
              fontSize: "48px",
              lineHeight: "62px",
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
          <form onSubmit={handleSubmit} className="flex items-center justify-center gap-3 mb-6">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
              required
              style={{
                width: '400px',
                height: '48px',
                borderRadius: '12px',
                padding: '0 24px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                color: '#737373B2',
                
              }}
              className="border focus:border-[#503DF5] transition-colors"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="text-white font-semibold hover:opacity-90 transition-all duration-300 cursor-pointer" 
              style={{
                background: 'linear-gradient(96.18deg, #5048E5 0%, #8B63E9 100%)',
                boxShadow: '0px 10px 40px -10px #5048E533',
                width: '196px',
                height: '48px',
                borderRadius: '12px',
                padding: '0 32px',
              }}
            >
              {isSubmitting ? "Submitting..." : "Get Early Access"}
            </button>
          </form>
          {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
          {/* Social proof */}
          <div className="flex items-center justify-center gap-3">
            <Image
              src="/images/flower-icon-left.png"
              alt="Social proof icon"
              width={20}
              height={20}
              quality={100}
              className="flex-shrink-0"
            />
            <p
              className="text-[#6C7393]"
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
              alt="Social proof icon"
              width={20}
              height={20}
              quality={100}
              className="flex-shrink-0"
            />
          </div>

          <Image
            src="/images/template-visualization.png"
            alt="Programmatic SEO page template showing dynamic variables that generate infinite page variations including Finance in Houston, Healthcare in Austin, Technology in Dallas, and 788+ more variations"
            width={1920}
            height={1080}
            quality={95}
            priority
            className="w-full h-full object-contain mt-[100px]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
          />
        </div>
      </Container>
    </section>
  );
}
