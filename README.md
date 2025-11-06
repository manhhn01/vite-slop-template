# 🚀 Vite Landing Page Template

A modern, production-ready landing page template built with **React 19**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Framer Motion**. Perfect for creating beautiful, animated landing pages quickly.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)
![React](https://img.shields.io/badge/React-19-61dafb)
![Vite](https://img.shields.io/badge/Vite-7-646cff)

---

## ✨ Features

- 🎨 **56+ Pre-built UI Components** - shadcn/ui components ready to use
- 🎬 **Smooth Animations** - Framer Motion powered animations
- 📱 **Fully Responsive** - Mobile-first design approach
- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 🎯 **TypeScript** - Type-safe development
- 🌙 **Dark Mode Support** - Built-in theme switching
- 🧩 **Modular Components** - Easy to customize and extend
- 🤖 **AI-Friendly** - Optimized for AI agent usage

---

## 📦 What's Included

### Landing Page Sections

- **Navbar** - Responsive navigation with mobile menu
- **Hero Section** - Eye-catching header with CTA buttons
- **Features Section** - Showcase key features in a grid
- **Steps Section** - Explain your process step-by-step
- **Testimonials Section** - Display customer reviews
- **Pricing Section** - Present pricing tiers clearly
- **FAQ Section** - Answer common questions with accordions
- **CTA Section** - Final conversion call-to-action
- **Footer** - Comprehensive footer with links

### Animation System

Pre-configured animation presets:
- Fade animations (in, up, down, left, right)
- Scale animations
- Slide animations
- Stagger animations for lists
- Custom transition presets

### Tech Stack

- **Framework:** React 19.1 with TypeScript 5.9
- **Build Tool:** Vite 7.1
- **Styling:** Tailwind CSS v4.1 with CSS variables
- **UI Components:** shadcn/ui (56+ components)
- **Animations:** Framer Motion 12.23
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod validation
- **Charts:** Recharts
- **Theme:** next-themes for dark mode

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or pnpm package manager

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd vite-slop-template

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the landing page.

---

## 📖 Documentation

### For AI Agents

See **[LANDING_PAGE_GUIDE.md](./LANDING_PAGE_GUIDE.md)** for comprehensive AI agent instructions including:
- Component API reference
- Animation system guide
- Code examples
- Best practices
- Troubleshooting

### For Developers

See **[AGENTS.md](./AGENTS.md)** for development guidelines including:
- Code standards
- Component patterns
- TypeScript conventions
- Styling guidelines

---

## 🎨 Customization

### 1. Edit the Landing Page

The main landing page is located at `src/pages/landing-page.tsx`. Customize it by modifying the data objects:

```tsx
const heroData = {
  badge: "Your Badge",
  title: "Your Title",
  description: "Your description",
  primaryCta: { text: "Get Started", href: "#pricing" },
  secondaryCta: { text: "Learn More", href: "#about" },
  image: "your-image-url.jpg",
};
```

### 2. Choose Your Sections

Import only the sections you need:

```tsx
import {
  Navbar,
  HeroSection,
  FeaturesSection,
  PricingSection,
  Footer,
} from "@/components/sections";

<Navbar {...navbarData} />
<HeroSection {...heroData} />
<FeaturesSection {...featuresData} />
<PricingSection {...pricingData} />
<Footer {...footerData} />
```

### 3. Customize Colors

Edit `src/index.css` to change the color scheme:

```css
:root {
  --primary: /* Your primary color */;
  --secondary: /* Your secondary color */;
  /* ... more variables */
}
```

### 4. Add Custom Animations

Use the animation presets from `src/lib/animations.ts`:

```tsx
import { fadeInUp, transitions } from "@/lib/animations";

<motion.div
  variants={fadeInUp}
  initial="hidden"
  whileInView="visible"
  transition={transitions.smooth}
>
  Your content
</motion.div>
```

---

## 🏗️ Project Structure

```
vite-slop-template/
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn/ui components (56+)
│   │   └── sections/        # Landing page sections
│   │       ├── navbar.tsx
│   │       ├── hero-section.tsx
│   │       ├── features-section.tsx
│   │       ├── steps-section.tsx
│   │       ├── testimonials-section.tsx
│   │       ├── pricing-section.tsx
│   │       ├── faq-section.tsx
│   │       ├── cta-section.tsx
│   │       ├── footer.tsx
│   │       └── index.ts
│   ├── lib/
│   │   ├── animations.ts    # Animation presets
│   │   └── utils.ts         # Utility functions
│   ├── hooks/
│   │   └── use-mobile.ts
│   ├── pages/
│   │   └── landing-page.tsx # Complete example
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── LANDING_PAGE_GUIDE.md    # AI Agent guide
├── AGENTS.md                # Developer guide
├── package.json
├── vite.config.ts
└── tsconfig.json
```

---

## 🛠️ Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

---

## 📱 Responsive Breakpoints

- **Mobile:** < 640px (sm)
- **Tablet:** 640px - 1024px (md, lg)
- **Desktop:** > 1024px (xl, 2xl)

All components are fully responsive and tested across devices.

---

## 🎯 Use Cases

Perfect for:
- SaaS landing pages
- Product launches
- Marketing campaigns
- Portfolio showcases
- Event promotions
- Agency websites
- Startup MVPs

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com) - Beautiful UI components
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [Lucide](https://lucide.dev) - Icon library
- [Vite](https://vitejs.dev) - Next generation frontend tooling

---

## 📞 Support

- 📖 [Documentation](./LANDING_PAGE_GUIDE.md)
- 💬 [GitHub Issues](https://github.com/your-username/vite-slop-template/issues)
- 🐦 [Twitter](https://twitter.com/your-handle)

---

## 🌟 Show Your Support

Give a ⭐️ if this project helped you!

---

**Happy Building! 🚀**
