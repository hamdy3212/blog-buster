# Blog Buster

A modern landing page for programmatic SEO at scale, built with Next.js 16, React 19, and Tailwind CSS 4.

## 🚀 Features

- **Next.js 16** with App Router and Turbopack
- **React 19** with Server Components
- **Tailwind CSS 4** for styling
- **TypeScript** for type safety
- **Custom Toast Notifications** - Built from scratch without dependencies
- **Optimized Performance** - LCP <2.5s on mobile
- **SEO Optimized** - Comprehensive metadata, JSON-LD, Open Graph
- **Accessibility** - ARIA labels, semantic HTML, keyboard navigation
- **Responsive Design** - Mobile-first approach

## 📦 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🏗️ Project Structure

```
blog-buster/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with SEO metadata
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/
│   ├── sections/          # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── BacklinksCTASection.tsx
│   │   └── BackgroundCircle.tsx
│   └── ui/                # Reusable UI components
│       ├── Container.tsx
│       ├── Toast.tsx
│       └── ToastContainer.tsx
├── context/
│   └── ToastContext.tsx   # Toast notification provider
├── hooks/
│   └── useEmailForm.ts    # Email form logic
└── lib/
    └── constants.ts       # Application constants
```

## 🎨 Tech Stack

- **Framework:** Next.js 16.1.1
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **Fonts:** Inter & Plus Jakarta Sans (Google Fonts)
- **Deployment:** Vercel

## 🔧 Configuration

### Environment Variables

No environment variables required for basic setup. For production:

- Update `metadataBase` in `app/layout.tsx` with your domain
- Add Open Graph image at `/public/images/og-image.png` (1200x630px)

### Image Optimization

Images are configured for optimal performance:
- AVIF primary format, WebP fallback
- Responsive sizing with proper `sizes` attribute
- Lazy loading for below-fold images
- fetchPriority="high" for LCP images

## 📊 Performance

- **Lighthouse Score:** 95-100 (Performance)
- **LCP:** <2.5s
- **FID:** <100ms
- **CLS:** <0.1

## 🚀 Deploy on Vercel

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new).

### Quick Deploy

1. Push your code to GitHub/GitLab/Bitbucket
2. Import your repository on [Vercel](https://vercel.com/new)
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy"

### Manual Deploy with CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 🔐 Security

- Custom security headers configured
- X-Frame-Options, X-Content-Type-Options
- Referrer-Policy, Permissions-Policy
- SVG safety with CSP

## 📝 License

This project is private and proprietary.
