# Landing Page Template - AI Agent Guide

This guide helps AI agents understand and use the landing page template to create beautiful, animated landing pages quickly.

---

## 📁 Project Structure

```
src/
├── lib/
│   └── animations.ts          # Animation presets and utilities
├── components/
│   ├── ui/                    # 56+ shadcn/ui components
│   └── sections/              # Landing page sections
│       ├── navbar.tsx         # Navigation bar
│       ├── hero-section.tsx   # Hero/header section
│       ├── features-section.tsx   # Feature grid
│       ├── steps-section.tsx      # How it works/steps
│       ├── testimonials-section.tsx  # Customer reviews
│       ├── pricing-section.tsx    # Pricing tiers
│       ├── faq-section.tsx        # FAQ accordion
│       ├── cta-section.tsx        # Call-to-action
│       └── footer.tsx             # Footer links
└── pages/
    └── landing-page.tsx       # Complete example
```

---

## 🎨 Available Sections

### 1. **Navbar**
Sticky navigation bar with mobile menu.

```tsx
import { Navbar } from "@/components/sections/navbar";

<Navbar
  brandName="YourBrand"
  links={[
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
  ]}
  ctaButton={{ text: "Get Started", href: "#signup" }}
/>
```

### 2. **Hero Section**
Large header with title, description, CTA buttons, and optional image.

```tsx
import { HeroSection } from "@/components/sections/hero-section";

<HeroSection
  badge="New Release"
  title="Your Amazing Product"
  description="A compelling description that converts visitors."
  primaryCta={{ text: "Get Started", href: "#pricing" }}
  secondaryCta={{ text: "Learn More", href: "#about" }}
  image="https://example.com/hero-image.jpg"
/>
```

**Animations:**
- Staggered fade-in for badge, title, description, buttons
- Smooth slide-up for hero image
- Gradient background with blur effect

### 3. **Features Section**
Grid layout showcasing features with icons.

```tsx
import { FeaturesSection } from "@/components/sections/features-section";
import { Zap, Shield, Rocket } from "lucide-react";

<FeaturesSection
  badge="Features"
  title="Why choose us?"
  description="Everything you need in one place."
  features={[
    {
      icon: Zap,
      title: "Fast Performance",
      description: "Lightning-fast load times.",
    },
    {
      icon: Shield,
      title: "Secure",
      description: "Enterprise-grade security.",
    },
    // Add more features...
  ]}
/>
```

**Animations:**
- Staggered card reveal on scroll
- Hover effects on cards
- Icons from lucide-react

### 4. **Steps Section**
Sequential process/how-it-works display.

```tsx
import { StepsSection } from "@/components/sections/steps-section";
import { Search, Code, Rocket } from "lucide-react";

<StepsSection
  badge="How It Works"
  title="Get started in 3 steps"
  description="It's easier than you think."
  alternating={true}  // Zigzag layout
  steps={[
    {
      icon: Search,
      title: "Step 1: Discover",
      description: "Find what you need.",
    },
    // Add more steps...
  ]}
/>
```

**Animations:**
- Alternating left/right slide-in animations
- Numbered badges with icon circles
- Responsive layout (stacked on mobile)

### 5. **Testimonials Section**
Customer reviews with avatars and ratings.

```tsx
import { TestimonialsSection } from "@/components/sections/testimonials-section";

<TestimonialsSection
  badge="Testimonials"
  title="Loved by customers"
  testimonials={[
    {
      name: "John Doe",
      role: "CEO",
      company: "TechCorp",
      avatar: "https://example.com/avatar.jpg",
      rating: 5,
      content: "This product is amazing!",
    },
    // Add more testimonials...
  ]}
/>
```

**Animations:**
- Staggered card animations
- Star rating display
- Avatar with fallback initials

### 6. **Pricing Section**
Pricing tiers with features and CTAs.

```tsx
import { PricingSection } from "@/components/sections/pricing-section";

<PricingSection
  badge="Pricing"
  title="Choose your plan"
  pricingTiers={[
    {
      name: "Starter",
      price: "$0",
      period: "month",
      description: "Perfect for individuals",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
      ],
      cta: { text: "Get Started", href: "#signup" },
      popular: false,
    },
    {
      name: "Pro",
      price: "$29",
      period: "month",
      description: "For professionals",
      features: [
        "Everything in Starter",
        "Advanced feature 1",
        "Advanced feature 2",
      ],
      cta: { text: "Start Trial", href: "#signup" },
      popular: true,  // Highlights this tier
    },
    // Add more tiers...
  ]}
/>
```

**Animations:**
- Staggered card reveal
- Popular tier highlighted with badge
- Checkmark icons for features

### 7. **FAQ Section**
Accordion-based FAQ section.

```tsx
import { FaqSection } from "@/components/sections/faq-section";

<FaqSection
  badge="FAQ"
  title="Frequently Asked Questions"
  faqs={[
    {
      question: "How does it work?",
      answer: "It's simple and intuitive...",
    },
    // Add more FAQs...
  ]}
/>
```

**Animations:**
- Fade-in on scroll
- Smooth accordion expand/collapse
- Hover effects

### 8. **CTA Section**
Final call-to-action with gradient background.

```tsx
import { CtaSection } from "@/components/sections/cta-section";

<CtaSection
  title="Ready to get started?"
  description="Join thousands of happy customers today."
  primaryCta={{ text: "Sign Up Free", href: "#signup" }}
  secondaryCta={{ text: "Contact Sales", href: "#contact" }}
/>
```

**Animations:**
- Staggered text and button reveal
- Gradient background with decorative blur
- High contrast for visibility

### 9. **Footer**
Comprehensive footer with links and social media.

```tsx
import { Footer } from "@/components/sections/footer";

<Footer
  companyName="YourBrand"
  description="Building the future of web."
  columns={[
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
      ],
    },
    // Add more columns...
  ]}
  socialLinks={{
    github: "https://github.com/yourbrand",
    twitter: "https://twitter.com/yourbrand",
    linkedin: "https://linkedin.com/company/yourbrand",
  }}
/>
```

---

## 🎬 Animation System

### Animation Presets (`src/lib/animations.ts`)

Import animation variants for consistent animations:

```tsx
import {
  fadeIn,
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  scaleInUp,
  slideInLeft,
  slideInRight,
  slideInUp,
  slideInDown,
  staggerContainer,
  staggerItem,
  blur,
  rotate,
  transitions,
  viewportOptions,
} from "@/lib/animations";
```

### Basic Animation Usage

```tsx
import { motion } from "framer-motion";
import { fadeInUp, transitions, viewportOptions } from "@/lib/animations";

<motion.div
  variants={fadeInUp}
  initial="hidden"
  whileInView="visible"
  viewport={viewportOptions}
  transition={transitions.default}
>
  Content
</motion.div>
```

### Stagger Animation (for lists)

```tsx
<motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={viewportOptions}
>
  {items.map((item) => (
    <motion.div key={item.id} variants={staggerItem}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

### Custom Animation

```tsx
<motion.div
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
  Custom animated content
</motion.div>
```

### Transition Presets

- `transitions.default` - Standard 0.5s ease-out
- `transitions.smooth` - Slow 0.8s with custom easing
- `transitions.spring` - Bouncy spring animation
- `transitions.bouncy` - More pronounced spring
- `transitions.fast` - Quick 0.3s
- `transitions.slow` - Slow 1s

---

## 🎯 Quick Start for AI Agents

### Creating a New Landing Page

1. **Copy the example:**
   ```tsx
   // src/pages/my-landing-page.tsx
   import { LandingPage } from "@/pages/landing-page";
   ```

2. **Customize data objects:**
   - Modify text content in data objects
   - Change icons from `lucide-react`
   - Update links and CTAs
   - Replace images

3. **Adjust sections:**
   - Reorder sections by changing import order
   - Remove unwanted sections
   - Duplicate sections if needed

4. **Update styling:**
   - Use Tailwind classes for colors
   - Modify spacing with margin/padding classes
   - Adjust responsive breakpoints (sm:, md:, lg:, xl:)

### Example: Customize Hero Section

```tsx
const heroData = {
  badge: "🚀 Version 3.0 is Live",
  title: "Revolutionary AI-Powered Analytics",
  description: "Transform your data into actionable insights with cutting-edge machine learning.",
  primaryCta: { text: "Start Free Trial", href: "/signup" },
  secondaryCta: { text: "Book a Demo", href: "/demo" },
  image: "https://your-cdn.com/dashboard-preview.png",
};

<HeroSection {...heroData} />
```

---

## 🎨 Styling Guide

### Color System

The template uses CSS variables for theming. Customize in `src/index.css`:

```css
:root {
  --background: /* Main background */
  --foreground: /* Main text */
  --primary: /* Brand color */
  --primary-foreground: /* Text on primary */
  --secondary: /* Secondary elements */
  --muted: /* Muted backgrounds */
  --accent: /* Accent highlights */
  --border: /* Border colors */
}
```

### Common Tailwind Patterns

```tsx
// Container with max-width and padding
<div className="container mx-auto px-4">

// Responsive grid
<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

// Centered text section
<div className="mx-auto max-w-2xl text-center">

// Button with hover
<button className="px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">

// Card with hover effect
<div className="p-6 rounded-lg border-2 transition-all hover:border-primary/50 hover:shadow-lg">
```

---

## 🔧 Common Modifications

### Adding a New Feature

```tsx
const newFeature = {
  icon: YourIcon, // from lucide-react
  title: "New Feature",
  description: "Description of the feature",
};

// Add to features array
features.push(newFeature);
```

### Changing Icons

```tsx
// Import new icons
import { Heart, Star, Sparkles } from "lucide-react";

// Use in your data
const feature = {
  icon: Heart, // Changed icon
  title: "Loved by Users",
  description: "...",
};
```

### Adjusting Animation Speed

```tsx
// Faster animation
transition={{ duration: 0.3 }}

// Slower animation
transition={{ duration: 1.2 }}

// Spring animation
transition={{ type: "spring", stiffness: 100 }}
```

### Removing a Section

Simply don't include it in your landing page:

```tsx
// Before
<HeroSection {...heroData} />
<FeaturesSection {...featuresData} />
<StepsSection {...stepsData} />

// After (removed steps)
<HeroSection {...heroData} />
<FeaturesSection {...featuresData} />
```

---

## 📱 Responsive Design

All sections are responsive by default:

- **Mobile (< 640px):** Single column, stacked layout
- **Tablet (640px - 1024px):** 2 columns for grids
- **Desktop (> 1024px):** 3 columns for grids, full layout

### Testing Responsiveness

```bash
npm run dev
# Open localhost:5173 and resize browser
```

---

## ✅ Best Practices

1. **Keep it Simple:** Don't overcrowd sections with too much content
2. **Consistent Spacing:** Use consistent padding/margin values
3. **Clear CTAs:** Make call-to-action buttons obvious and actionable
4. **Quality Images:** Use high-quality, optimized images
5. **Readable Text:** Ensure good contrast and legible font sizes
6. **Mobile First:** Test on mobile devices first
7. **Performance:** Optimize images and avoid heavy animations
8. **Accessibility:** Use semantic HTML and ARIA labels

---

## 🚀 Deployment

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

The output will be in the `dist/` directory, ready to deploy to any static hosting service.

---

## 🛠️ Troubleshooting

### Animations not working
- Ensure Framer Motion is imported: `import { motion } from "framer-motion"`
- Check viewport options are set
- Verify animation variants are imported

### Styling issues
- Check Tailwind classes are spelled correctly
- Ensure `src/index.css` imports Tailwind
- Run `npm run dev` to rebuild styles

### Type errors
- Import types from component files
- Ensure all required props are provided
- Check `tsconfig.json` is configured correctly

---

## 📚 Additional Resources

- **Framer Motion Docs:** https://www.framer.com/motion/
- **Tailwind CSS Docs:** https://tailwindcss.com/docs
- **shadcn/ui Docs:** https://ui.shadcn.com
- **Lucide Icons:** https://lucide.dev/icons/
- **React Docs:** https://react.dev

---

## 💡 Tips for AI Agents

1. **Read component comments:** Each component has AI-specific instructions
2. **Use type definitions:** TypeScript interfaces show required props
3. **Copy and modify:** Start with the example and customize
4. **Test incrementally:** Make small changes and test
5. **Use animation presets:** Don't reinvent animations
6. **Leverage shadcn/ui:** 56+ components are available
7. **Think mobile-first:** Always consider responsive design
8. **Optimize images:** Use appropriate image sizes and formats

---

## 🎉 Ready to Build!

You now have everything you need to create stunning landing pages. Start by importing sections, customizing data objects, and arranging them in your desired order.

Happy building! 🚀
