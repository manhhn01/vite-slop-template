# Vite Slop Template - AI Agent Guide

**🤖 This document is specifically designed for AI coding assistants.**

This guide provides development guidelines for AI agents working with this Vite + React + TypeScript starter template.

> **📖 For detailed landing page documentation, refer to [LANDING_PAGE_GUIDE.md](./LANDING_PAGE_GUIDE.md)**

---

## Project Overview

**Tech Stack:**
- **Build Tool:** Vite 7
- **Framework:** React 19 with TypeScript
- **Styling:** Tailwind CSS v4 with CSS variables
- **Components:** shadcn/ui (New York style) + Radix UI primitives
- **Forms:** React Hook Form + Zod validation
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Theme:** next-themes (dark/light mode)

**Project Structure:**
```
src/
├── components/
│   ├── ui/              # shadcn/ui components (auto-generated)
│   └── sections/        # Landing page section components
│       ├── navbar.tsx
│       ├── hero-section.tsx
│       ├── features-section.tsx
│       ├── steps-section.tsx
│       ├── testimonials-section.tsx
│       ├── pricing-section.tsx
│       ├── faq-section.tsx
│       ├── cta-section.tsx
│       ├── footer.tsx
│       └── index.ts     # Centralized exports
├── lib/
│   ├── utils.ts         # Utility functions (cn helper)
│   └── animations.ts    # Framer Motion animation presets
├── hooks/               # Custom React hooks
├── pages/
│   └── landing-page.tsx # Complete landing page example
├── assets/              # Static assets
├── App.tsx              # Main app component
├── main.tsx             # Entry point
└── index.css            # Global styles + Tailwind
```

---

## Development Standards

### 1. TypeScript Best Practices

**Always use TypeScript:**
- Define explicit types for component props
- Use type inference for state and variables when obvious
- Prefer `interface` for component props, `type` for unions
- Enable strict mode compliance

**Example:**
```typescript
interface UserCardProps {
  name: string;
  email: string;
  role?: 'admin' | 'user';
  onDelete?: () => void;
}

export function UserCard({ name, email, role = 'user', onDelete }: UserCardProps) {
  // Component implementation
}
```

### 2. Component Patterns

**File Organization:**
- One component per file
- Name file same as component: `UserCard.tsx`
- Co-locate related types in the same file
- Keep UI components in `src/components/ui/`
- Feature components go in `src/components/`

**Component Structure:**
```typescript
// 1. Imports
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// 2. Types
interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// 3. Component
export function Component({ className, children }: ComponentProps) {
  // 4. Hooks
  const [state, setState] = useState(false);

  // 5. Handlers
  const handleClick = () => {
    setState(!state);
  };

  // 6. Render
  return (
    <div className={cn('default-classes', className)}>
      {children}
      <Button onClick={handleClick}>Toggle</Button>
    </div>
  );
}
```

### 3. Styling with Tailwind

**Use the `cn()` utility for conditional classes:**
```typescript
import { cn } from '@/lib/utils';

<div className={cn(
  'base-classes',
  isActive && 'active-classes',
  error && 'error-classes',
  className
)} />
```

**Follow Tailwind CSS v4 conventions:**
- Use CSS variables defined in `index.css`
- Leverage semantic color tokens: `bg-background`, `text-foreground`, `border-border`
- Use responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
- Prefer composition over custom CSS

### 4. shadcn/ui Component Usage

**Adding new components:**
```bash
npx shadcn@latest add [component-name]
```

**Using components:**
```typescript
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>
    <Button variant="outline">Click me</Button>
  </CardContent>
</Card>
```

**Component variants:**
- Most shadcn components accept `variant` and `size` props
- Check component source in `src/components/ui/` for available variants
- Use className to override or extend styles

### 5. Form Handling

**Use React Hook Form + Zod:**
```typescript
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const formSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

type FormData = z.infer<typeof formSchema>;

export function LoginForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="you@example.com" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
```

### 6. Custom Hooks

**Location:** `src/hooks/`

**Naming:** Always prefix with `use`

**Example:**
```typescript
// src/hooks/use-debounce.ts
import { useEffect, useState } from 'react';

export function useDebounce<T>(value: T, delay: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}
```

### 7. Path Aliases

**Use path aliases for imports:**
```typescript
// Good
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useDebounce } from '@/hooks/use-debounce';

// Bad
import { Button } from '../../../components/ui/button';
```

**Available aliases:**
- `@/components` -> `src/components`
- `@/lib` -> `src/lib`
- `@/hooks` -> `src/hooks`
- `@/pages` -> `src/pages`
- `@/ui` -> `src/components/ui`

---

## Common Patterns

### Theme Toggle

```typescript
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
```

### Data Fetching with State

```typescript
import { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
}

export function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}
```

### Dialog Pattern

```typescript
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export function UserDialog() {
  const [open, setOpen] = useState(false);

  const handleSubmit = () => {
    // Handle form submission
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
        </DialogHeader>
        {/* Dialog content */}
        <Button onClick={handleSubmit}>Submit</Button>
      </DialogContent>
    </Dialog>
  );
}
```

### Animated Component (Framer Motion)

```typescript
import { motion } from 'framer-motion';

export function FadeIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
```

---

## Landing Page Components

This template includes a complete set of landing page section components optimized for AI agents to quickly create beautiful, animated landing pages.

> **📚 IMPORTANT:** For comprehensive landing page documentation including detailed component APIs, animation system guides, customization examples, and AI agent-specific instructions, **refer to [LANDING_PAGE_GUIDE.md](./LANDING_PAGE_GUIDE.md)**

### Available Landing Page Sections

**9 Pre-built Sections:**

1. **Navbar** - Responsive navigation with mobile menu
2. **Hero Section** - Eye-catching header with CTA buttons and optional image
3. **Features Section** - Grid layout showcasing features with icons
4. **Steps Section** - "How It Works" process with numbered steps
5. **Testimonials Section** - Customer reviews with avatars and ratings
6. **Pricing Section** - Pricing tiers with feature lists and CTAs
7. **FAQ Section** - Accordion-based frequently asked questions
8. **CTA Section** - Final call-to-action with gradient background
9. **Footer** - Comprehensive footer with links and social media

### Quick Start: Creating a Landing Page

```typescript
import {
  Navbar,
  HeroSection,
  FeaturesSection,
  PricingSection,
  Footer,
} from "@/components/sections";
import { Zap, Shield, Rocket } from "lucide-react";

export function MyLandingPage() {
  return (
    <div>
      <Navbar
        brandName="MyBrand"
        links={[
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
        ]}
        ctaButton={{ text: "Get Started", href: "#signup" }}
      />

      <HeroSection
        title="Build Something Amazing"
        description="The best solution for your needs."
        primaryCta={{ text: "Get Started", href: "#pricing" }}
        secondaryCta={{ text: "Learn More", href: "#about" }}
        image="https://example.com/hero.jpg"
      />

      <FeaturesSection
        title="Why Choose Us"
        features={[
          {
            icon: Zap,
            title: "Fast",
            description: "Lightning-fast performance",
          },
          {
            icon: Shield,
            title: "Secure",
            description: "Bank-level security",
          },
          {
            icon: Rocket,
            title: "Scalable",
            description: "Grows with your business",
          },
        ]}
      />

      <Footer
        companyName="MyBrand"
        columns={[
          {
            title: "Product",
            links: [
              { label: "Features", href: "#features" },
              { label: "Pricing", href: "#pricing" },
            ],
          },
        ]}
        socialLinks={{
          github: "https://github.com/mycompany",
          twitter: "https://twitter.com/mycompany",
        }}
      />
    </div>
  );
}
```

### Animation System

The template includes a comprehensive animation system with pre-built variants and utilities.

**Import animation presets:**
```typescript
import {
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  slideInLeft,
  slideInRight,
  staggerContainer,
  staggerItem,
  transitions,
  viewportOptions,
} from "@/lib/animations";
```

**Basic animation usage:**
```typescript
import { motion } from "framer-motion";
import { fadeInUp, transitions, viewportOptions } from "@/lib/animations";

<motion.div
  variants={fadeInUp}
  initial="hidden"
  whileInView="visible"
  viewport={viewportOptions}
  transition={transitions.default}
>
  Animated content
</motion.div>
```

**Stagger animation for lists:**
```typescript
import { motion } from "framer-motion";
import { staggerContainer, staggerItem, viewportOptions } from "@/lib/animations";

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

**Transition presets:**
- `transitions.default` - Standard 0.5s ease-out
- `transitions.smooth` - Slow 0.8s with custom bezier curve
- `transitions.spring` - Bouncy spring animation
- `transitions.bouncy` - More pronounced spring effect
- `transitions.fast` - Quick 0.3s
- `transitions.slow` - Slow 1s

### Component Props Reference

**Hero Section:**
```typescript
interface HeroSectionProps {
  badge?: string;
  title: string;
  description: string;
  primaryCta: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
  image?: string;
}
```

**Features Section:**
```typescript
interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeaturesSectionProps {
  badge?: string;
  title: string;
  description?: string;
  features: Feature[];
}
```

**Pricing Section:**
```typescript
interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: { text: string; href: string };
  popular?: boolean;
}

interface PricingSectionProps {
  badge?: string;
  title: string;
  description?: string;
  pricingTiers: PricingTier[];
}
```

### Landing Page Best Practices

**DO:**
- Use descriptive, action-oriented CTA text
- Include social proof (testimonials, user counts)
- Keep sections focused on one main idea
- Use high-quality, optimized images
- Ensure mobile-responsive design
- Add clear value propositions
- Use consistent spacing and typography
- Implement smooth scroll animations

**DON'T:**
- Overcrowd sections with too much content
- Use generic stock photos
- Mix too many different animation styles
- Forget to test on mobile devices
- Use hard-to-read fonts or low contrast
- Skip accessibility features (alt text, ARIA labels)
- Use auto-playing videos or animations

### Complete Example Reference

See `src/pages/landing-page.tsx` for a complete, fully-featured landing page example with:
- Sample data for all sections
- Icon usage examples
- Proper section ordering
- Responsive design patterns

### Detailed Documentation

> **⚡ AI Agents: Always refer to [LANDING_PAGE_GUIDE.md](./LANDING_PAGE_GUIDE.md) when working with landing pages**

The landing page guide includes:
- 📋 Detailed component API reference for all 9 sections
- 🎬 Complete animation system guide with presets
- 🎨 Styling and customization examples
- 🔧 Common modifications and troubleshooting
- 🤖 AI agent-specific instructions and tips
- 🚀 Quick start templates and patterns

---

## Component Templates

### Feature Component Template

```typescript
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface FeatureComponentProps {
  title: string;
  description?: string;
  className?: string;
  onAction?: () => void;
}

export function FeatureComponent({
  title,
  description,
  className,
  onAction,
}: FeatureComponentProps) {
  const [state, setState] = useState(false);

  const handleClick = () => {
    setState(!state);
    onAction?.();
  };

  return (
    <Card className={cn('w-full', className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {description && <p className="text-muted-foreground mb-4">{description}</p>}
        <Button onClick={handleClick} variant={state ? 'default' : 'outline'}>
          {state ? 'Active' : 'Inactive'}
        </Button>
      </CardContent>
    </Card>
  );
}
```

### Page Layout Template

```typescript
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PageLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  className?: string;
}

export function PageLayout({ children, title, description, className }: PageLayoutProps) {
  return (
    <div className={cn('container mx-auto py-8 px-4', className)}>
      {(title || description) && (
        <div className="mb-8">
          {title && <h1 className="text-4xl font-bold mb-2">{title}</h1>}
          {description && <p className="text-muted-foreground text-lg">{description}</p>}
        </div>
      )}
      <div>{children}</div>
    </div>
  );
}
```

---

## Development Workflow

### Commands

```bash
# Start dev server (http://localhost:5173)
npm run dev

# Type check
npx tsc --noEmit

# Lint code
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview

# Add shadcn component
npx shadcn@latest add button
```

### Adding a New Feature

1. **Plan the component structure**
   - Identify required UI components
   - Define props interface
   - Consider state management needs

2. **Create component files**
   - Add to `src/components/` for features
   - Use shadcn/ui components from `src/components/ui/`

3. **Implement with TypeScript**
   - Define types first
   - Use existing patterns
   - Leverage path aliases

4. **Style with Tailwind**
   - Use semantic tokens
   - Apply the `cn()` utility
   - Keep responsive design in mind

5. **Test in dev mode**
   - Check hot module replacement
   - Verify TypeScript types
   - Test responsive behavior

---

## Best Practices

### DO

- Use TypeScript for all files
- Leverage path aliases (`@/`)
- Use the `cn()` utility for className merging
- Follow shadcn/ui component patterns
- Keep components small and focused
- Use semantic HTML elements
- Implement proper error boundaries
- Validate forms with Zod
- Use CSS variables for theming
- Write accessible components (ARIA labels)

### DON'T

- Mix CSS Modules with Tailwind
- Inline complex logic in JSX
- Ignore TypeScript errors
- Hardcode colors (use Tailwind tokens)
- Create deeply nested components
- Skip prop validation
- Forget responsive design
- Override shadcn styles unnecessarily
- Use `any` type
- Ignore ESLint warnings

---

## Troubleshooting

### Common Issues

**Import errors with path aliases:**
- Check `vite.config.ts` alias configuration
- Ensure `tsconfig.json` paths are correct
- Restart TypeScript server in editor

**Tailwind classes not applying:**
- Check `index.css` imports
- Verify Tailwind plugin in `vite.config.ts`
- Clear cache and restart dev server

**shadcn component styling issues:**
- Check CSS variables in `index.css`
- Verify component was added with correct config
- Review `components.json` settings

**Type errors:**
- Run `npx tsc --noEmit` to see all errors
- Check imported types from dependencies
- Ensure React types are installed

---

## Quick Reference

### Essential shadcn Components

```typescript
// Layout
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';

// Forms
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Select } from '@/components/ui/select';

// Overlays
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Popover, PopoverContent } from '@/components/ui/popover';
import { Tooltip, TooltipContent } from '@/components/ui/tooltip';

// Feedback
import { Alert, AlertDescription } from '@/components/ui/alert';
import { toast } from 'sonner';
```

### Color Tokens

```css
/* Background */
bg-background, bg-foreground
bg-card, bg-popover
bg-primary, bg-secondary
bg-muted, bg-accent

/* Text */
text-foreground, text-muted-foreground
text-primary, text-secondary
text-destructive

/* Border */
border-border, border-input
```

---

## Architecture Principles

1. **Component Composition**: Build complex UIs from small, reusable components
2. **Type Safety**: Use TypeScript to catch errors at compile time
3. **Separation of Concerns**: Keep logic, styles, and markup organized
4. **Accessibility First**: Ensure components are keyboard and screen-reader friendly
5. **Performance**: Leverage React 19 features and Vite's fast HMR
6. **Consistency**: Follow established patterns and naming conventions

---

**Last Updated:** 2025-11-06
**Template Version:** 2.0.0 (Landing Page Edition)
