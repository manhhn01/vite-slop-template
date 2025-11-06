/**
 * Landing Page Example
 *
 * This is a complete landing page example showcasing all available sections.
 * AI agents can use this as a template to create custom landing pages.
 *
 * AI Agent Instructions:
 * 1. Import and arrange sections in desired order
 * 2. Customize data objects (features, testimonials, pricing, etc.)
 * 3. Add/remove sections as needed
 * 4. Modify text, colors, and styling via props and Tailwind classes
 * 5. All sections are fully responsive and animated
 */

import { Navbar } from "@/components/sections/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { StepsSection } from "@/components/sections/steps-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaSection } from "@/components/sections/cta-section";
import { Footer } from "@/components/sections/footer";
import {
  Zap,
  Shield,
  Sparkles,
  Rocket,
  Target,
  TrendingUp,
  Search,
  Code,
  Database,
} from "lucide-react";

export function LandingPage() {
  // ============================================================================
  // NAVBAR DATA
  // ============================================================================
  const navbarData = {
    brandName: "YourBrand",
    links: [
      { label: "Features", href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Pricing", href: "#pricing" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "FAQ", href: "#faq" },
    ],
    ctaButton: {
      text: "Get Started",
      href: "#pricing",
    },
  };

  // ============================================================================
  // HERO DATA
  // ============================================================================
  const heroData = {
    badge: "🎉 New Release v2.0",
    title: "Build Beautiful Landing Pages with AI",
    description:
      "Create stunning, conversion-optimized landing pages in minutes with our AI-powered template. Fully customizable, responsive, and built with modern web technologies.",
    primaryCta: {
      text: "Start Building",
      href: "#pricing",
    },
    secondaryCta: {
      text: "Watch Demo",
      href: "#demo",
    },
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&auto=format&fit=crop",
  };

  // ============================================================================
  // FEATURES DATA
  // ============================================================================
  const featuresData = {
    badge: "Features",
    title: "Everything you need to succeed",
    description:
      "Powerful features designed to help you create amazing landing pages faster than ever.",
    features: [
      {
        icon: Zap,
        title: "Lightning Fast",
        description:
          "Built with Vite and optimized for performance. Your pages load instantly, providing the best user experience.",
      },
      {
        icon: Sparkles,
        title: "Beautiful Animations",
        description:
          "Smooth, professional animations powered by Framer Motion. Make your landing pages come alive effortlessly.",
      },
      {
        icon: Shield,
        title: "Type Safe",
        description:
          "Built with TypeScript for maximum reliability. Catch errors before they reach production.",
      },
      {
        icon: Rocket,
        title: "Easy to Customize",
        description:
          "Modify any component to match your brand. Tailwind CSS makes styling a breeze.",
      },
      {
        icon: Target,
        title: "Conversion Focused",
        description:
          "Every section is designed with conversion optimization in mind. Turn visitors into customers.",
      },
      {
        icon: TrendingUp,
        title: "SEO Optimized",
        description:
          "Built with best practices for search engine optimization. Rank higher and get more traffic.",
      },
    ],
  };

  // ============================================================================
  // STEPS DATA
  // ============================================================================
  const stepsData = {
    badge: "How It Works",
    title: "Get started in 3 simple steps",
    description:
      "Follow our simple process to create your perfect landing page in minutes.",
    steps: [
      {
        icon: Search,
        title: "Choose Your Template",
        description:
          "Select from our collection of professionally designed landing page templates or start from scratch.",
      },
      {
        icon: Code,
        title: "Customize Everything",
        description:
          "Use our intuitive components to customize text, colors, images, and layout. No coding required.",
      },
      {
        icon: Database,
        title: "Launch & Grow",
        description:
          "Deploy your landing page with one click and watch your conversions grow. Track performance with built-in analytics.",
      },
    ],
  };

  // ============================================================================
  // TESTIMONIALS DATA
  // ============================================================================
  const testimonialsData = {
    badge: "Testimonials",
    title: "Loved by thousands of creators",
    description: "See what our customers have to say about their experience.",
    testimonials: [
      {
        name: "Sarah Johnson",
        role: "Marketing Director",
        company: "TechCorp",
        avatar: "https://i.pravatar.cc/150?img=1",
        rating: 5,
        content:
          "This template saved us weeks of development time. The animations are smooth and the components are incredibly easy to customize.",
      },
      {
        name: "Michael Chen",
        role: "Founder",
        company: "StartupXYZ",
        avatar: "https://i.pravatar.cc/150?img=2",
        rating: 5,
        content:
          "We've seen a 40% increase in conversions since switching to this landing page template. Absolutely worth every penny.",
      },
      {
        name: "Emily Rodriguez",
        role: "Product Manager",
        company: "InnovateLabs",
        avatar: "https://i.pravatar.cc/150?img=3",
        rating: 5,
        content:
          "The best landing page template I've ever used. Clean code, beautiful design, and excellent documentation.",
      },
    ],
  };

  // ============================================================================
  // PRICING DATA
  // ============================================================================
  const pricingData = {
    badge: "Pricing",
    title: "Choose the plan that's right for you",
    description:
      "Start for free, upgrade when you need more. All plans include core features.",
    pricingTiers: [
      {
        name: "Starter",
        price: "$0",
        period: "month",
        description: "Perfect for trying out our platform",
        features: [
          "1 landing page",
          "Basic components",
          "Community support",
          "Mobile responsive",
          "Basic analytics",
        ],
        cta: {
          text: "Get Started",
          href: "#signup",
        },
      },
      {
        name: "Professional",
        price: "$29",
        period: "month",
        description: "Best for growing businesses",
        features: [
          "Unlimited landing pages",
          "All premium components",
          "Priority support",
          "Custom domain",
          "Advanced analytics",
          "A/B testing",
          "Remove branding",
        ],
        cta: {
          text: "Start Free Trial",
          href: "#signup",
        },
        popular: true,
      },
      {
        name: "Enterprise",
        price: "$99",
        period: "month",
        description: "For large teams and agencies",
        features: [
          "Everything in Professional",
          "White-label solution",
          "Dedicated account manager",
          "Custom integrations",
          "SLA guarantee",
          "Team collaboration",
          "Advanced security",
        ],
        cta: {
          text: "Contact Sales",
          href: "#contact",
        },
      },
    ],
  };

  // ============================================================================
  // FAQ DATA
  // ============================================================================
  const faqData = {
    badge: "FAQ",
    title: "Frequently Asked Questions",
    description: "Have questions? We've got answers.",
    faqs: [
      {
        question: "What technologies are used in this template?",
        answer:
          "This template is built with React 19, TypeScript, Vite, Tailwind CSS, Framer Motion for animations, and shadcn/ui components. It's a modern, production-ready stack.",
      },
      {
        question: "Can I customize the design?",
        answer:
          "Absolutely! Every component is fully customizable. You can modify colors, typography, spacing, and layout using Tailwind CSS classes. The component-based architecture makes it easy to adapt to your brand.",
      },
      {
        question: "Is it responsive?",
        answer:
          "Yes, all components are fully responsive and tested on various devices. The template uses a mobile-first approach to ensure a great experience on all screen sizes.",
      },
      {
        question: "Do I need coding knowledge?",
        answer:
          "Basic knowledge of React and TypeScript is helpful, but not required. The template includes detailed documentation and examples. AI agents can also help you customize it without deep technical knowledge.",
      },
      {
        question: "What kind of support do you offer?",
        answer:
          "We offer community support for all users, priority email support for Professional plan users, and dedicated support for Enterprise customers. Documentation and video tutorials are available to everyone.",
      },
      {
        question: "Can I use this for commercial projects?",
        answer:
          "Yes! You can use this template for both personal and commercial projects. Check the license file for specific terms and conditions.",
      },
    ],
  };

  // ============================================================================
  // CTA DATA
  // ============================================================================
  const ctaData = {
    title: "Ready to build your landing page?",
    description:
      "Join thousands of creators who trust our template to power their landing pages. Start building today.",
    primaryCta: {
      text: "Get Started Now",
      href: "#pricing",
    },
    secondaryCta: {
      text: "View Documentation",
      href: "#docs",
    },
  };

  // ============================================================================
  // FOOTER DATA
  // ============================================================================
  const footerData = {
    companyName: "YourBrand",
    description:
      "Building beautiful landing pages with modern web technologies. Trusted by thousands of creators worldwide.",
    columns: [
      {
        title: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Documentation", href: "#docs" },
          { label: "Changelog", href: "#changelog" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About", href: "#about" },
          { label: "Blog", href: "#blog" },
          { label: "Careers", href: "#careers" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Community", href: "#community" },
          { label: "Tutorials", href: "#tutorials" },
          { label: "Support", href: "#support" },
          { label: "API", href: "#api" },
        ],
      },
    ],
    socialLinks: {
      github: "https://github.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      youtube: "https://youtube.com",
    },
  };

  // ============================================================================
  // RENDER
  // ============================================================================
  return (
    <div className="min-h-screen">
      <Navbar {...navbarData} />
      <main>
        <HeroSection {...heroData} />
        <FeaturesSection {...featuresData} />
        <StepsSection {...stepsData} />
        <TestimonialsSection {...testimonialsData} />
        <PricingSection {...pricingData} />
        <FaqSection {...faqData} />
        <CtaSection {...ctaData} />
      </main>
      <Footer {...footerData} />
    </div>
  );
}
