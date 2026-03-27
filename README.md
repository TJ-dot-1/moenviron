# Moenviron Platform

<p align="center">
  <a href="https://nextjs.org"><img src="https://img.shields.io/badge/Next.js-16.2.1-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js"></a>
  <a href="https://react.dev"><img src="https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React"></a>
  <a href="https://www.typescriptlang.org"><img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"></a>
  <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"></a>
  <a href="https://greensock.com/gsap"><img src="https://img.shields.io/badge/GSAP-3.14.2-88CE02?style=for-the-badge&logo=greensock&logoColor=black" alt="GSAP"></a>
  <img src="https://img.shields.io/badge/License-2026-orange?style=for-the-badge" alt="License">
</p>

<p align="center">
  <strong>Redefining Textile Waste into Circular Value</strong>
</p>

<p align="center">
  Moenviron builds scalable solutions to transform post-consumer textiles into reusable, recyclable, and traceable resources—bridging global supply chains and Africa's growing circular economy.
</p>

---

## 📋 Table of Contents

- [About](#about)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Features](#features)
- [Getting Started](#getting-started)
- [Development Commands](#development-commands)
- [Project Layout](#project-layout)
- [Key Components](#key-components)
- [License](#license)

---

## About

Moenviron is a circular textile platform dedicated to solving the global textile waste crisis. The platform implements a comprehensive approach that:

1. **Recovers** post-consumer textile waste from various sources
2. **Sorts** garments by quality and market demand
3. **Redistributes** high-quality items to second-hand markets
4. **Recycles** non-reusable textiles into new materials

The platform specifically highlights Africa's critical role in the global circular economy, positioning itself within African markets to build more structured, transparent, and scalable circular solutions.

---

## 🛠 Tech Stack

| Category | Technology |
|----------|------------|
| Framework | [Next.js](https://nextjs.org) 16.2.1 |
| UI Library | [React](https://react.dev) 19.2.4 |
| Styling | [Tailwind CSS](https://tailwindcss.com) 4 |
| Animations | [GSAP](https://greensock.com/gsap/) 3.14.2 |
| Motion | [Framer Motion](https://www.framer.com/motion/) 12.38.0 |
| Icons | [Lucide React](https://lucide.dev), [React Icons](https://react-icons.github.io/react-icons/) |
| Language | [TypeScript](https://www.typescriptlang.org/) 5 |

---

## 📂 Project Structure

```
nextjs-app/
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles and Tailwind config
│   │   ├── layout.tsx       # Root layout with metadata
│   │   └── page.tsx         # Main landing page
│   └── components/
│       ├── Navbar.tsx       # Navigation with mobile menu
│       ├── Hero.tsx         # Hero section with animated visual
│       ├── Problem.tsx      # Problem statement section
│       ├── Solution.tsx     # Solution pillars section
│       ├── HowItWorks.tsx   # Process steps section
│       ├── Africa.tsx       # Africa's role section
│       ├── Alignment.tsx    # Global frameworks alignment
│       ├── CTA.tsx          # Call to action section
│       └── Footer.tsx       # Footer component
├── public/
│   └── *.svg                # Static assets
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript config
├── next.config.ts           # Next.js config
└── tailwind.config.*        # Tailwind CSS config
```

---

## ✨ Features

### Core Sections

1. **Hero Section** - Animated circular visual displaying the textile flow cycle (Collection → Sorting → Recycling → Reuse)

2. **Problem Statement** - Highlights the broken textile waste system with three key challenges:
   - Growing demand for affordable clothing
   - Underdeveloped waste management systems
   - Lost resources instead of reuse

3. **Solution** - Three-pillar approach:
   - Textile Recovery & Sourcing
   - Reuse & Redistribution
   - Circular Processing (Next Phase)

4. **How It Works** - Five-step process:
   1. Collection
   2. Sorting & Quality
   3. Reuse First
   4. Recycling Pathways
   5. Market Integration

5. **Africa's Role** - Emphasizes Africa's critical position in the global circular economy

6. **Global Alignment** - Aligned with:
   - EU Strategy for Sustainable and Circular Textiles
   - Emerging global frameworks for textile reuse and recycling
   - Cross-border circular value chains

7. **Call to Action** - Partnership opportunities

### Technical Features

- GSAP-powered scroll-triggered animations
- Responsive design for mobile, tablet, and desktop
- Animated marquee for framework tags
- Interactive hover states with smooth transitions
- Mobile-responsive navigation with hamburger menu

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

```bash
# Navigate to project directory
cd nextjs-app

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📜 Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 🖥 Project Layout

The platform consists of a single-page landing design with the following component hierarchy:

```
RootLayout
└── Home (page.tsx)
    ├── Navbar
    ├── Hero
    ├── Problem
    ├── Solution
    ├── HowItWorks
    ├── Africa
    ├── Alignment
    ├── CTA
    └── Footer
```

---

## 📄 License

&copy; 2026 Moenviron. All rights reserved.

---

## 🌐 Connect

- **Website**: [moenviron.com](#)
- **Email**: contact@moenviron.com

---

<p align="center">
  Built with ❤️ for a sustainable textile future
</p>
