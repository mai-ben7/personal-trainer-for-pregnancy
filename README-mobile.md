# FitMama - Mobile Development Guide

## Overview
This document outlines the mobile-first responsive design implementation for the FitMama Next.js application, ensuring optimal user experience across all device sizes from 320px to 1920px+.

## Breakpoints & Responsive Strategy

### Screen Breakpoints
```css
xs: 380px    /* Small phones */
sm: 640px    /* Large phones */
md: 768px    /* Tablets */
lg: 1024px   /* Small laptops */
xl: 1280px   /* Large laptops */
2xl: 1536px  /* Desktops */
```

### Container System
- **Default**: `mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 safe-x`
- **Responsive**: Uses Tailwind's container utilities with custom breakpoints
- **Safe Areas**: iOS notch support with `safe-x` and `safe-y` classes

## Responsive Typography

### Fluid Type Classes
```css
.text-responsive-h1    /* clamp(1.75rem,6vw,3.5rem) */
.text-responsive-h2    /* clamp(1.5rem,5vw,3rem) */
.text-responsive-h3    /* clamp(1.25rem,4vw,2.25rem) */
.text-responsive-body  /* clamp(0.95rem,2.3vw,1.125rem) */
.text-responsive-subtitle /* clamp(1.125rem,2.6vw,1.75rem) */
```

### Usage
- **Headlines**: Use `text-responsive-h1`, `text-responsive-h2`, etc.
- **Body Text**: Use `text-responsive-body` for main content
- **Subheadings**: Use `text-responsive-subtitle` for secondary text

## Grid & Layout Patterns

### Responsive Grids
```css
.grid-responsive      /* grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 */
.grid-responsive-2   /* grid-cols-1 sm:grid-cols-2 */
```

### Spacing System
- **Gaps**: `gap-4 sm:gap-6 lg:gap-8`
- **Padding**: `p-4 sm:p-6 lg:p-8`
- **Margins**: `mb-6 sm:mb-8 lg:mb-12`

### Layout Rules
1. **Mobile First**: Start with single column layouts
2. **Stack on Mobile**: Use `order-1 lg:order-2` for content reordering
3. **Touch Friendly**: Minimum 44px touch targets with `touch-target` class

## Motion & Performance

### Reduced Motion Support
- **Hook**: `useReduceMotionOrSmall()` from `@/lib/useReducedMotionOrSmall`
- **Auto-disable**: Motion disabled on screens < 768px
- **User Preference**: Respects `prefers-reduced-motion: reduce`

### Motion Variants
```typescript
const fadeInUp = reduceMotion ? {} : {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}
```

### Performance Optimizations
- **Lazy Loading**: Heavy animations only on larger screens
- **Content Visibility**: `content-visibility: auto` for long sections
- **Reduced Motion**: Static fallbacks for mobile devices

## Component-Specific Guidelines

### Navigation
- **Mobile**: Full-screen drawer with hamburger menu
- **Desktop**: Horizontal navigation bar
- **Touch Targets**: Minimum 44px × 44px for all interactive elements
- **Safe Areas**: Uses `safe-x` for iOS notch support

### Hero Section
- **3D Elements**: Preserved on desktop, simplified on mobile
- **Floating Elements**: Hidden on small screens (`hidden md:block`)
- **Text Scaling**: Responsive typography with clamp values
- **Image Handling**: Aspect ratio preservation with responsive sizing

### Forms & Modals
- **Touch Friendly**: All inputs minimum 44px height
- **Safe Areas**: Modal positioning respects device safe areas
- **Responsive Padding**: `p-4 sm:p-6` for form containers
- **Button Sizing**: Minimum touch target compliance

### Cards & Grids
- **Minimum Heights**: `min-h-[160px]` for feature cards
- **Responsive Icons**: `w-6 h-6 sm:w-8 sm:h-8` sizing
- **Touch Targets**: All interactive elements meet accessibility standards

## Accessibility Features

### Touch Targets
- **Minimum Size**: 44px × 44px for all interactive elements
- **Class**: Use `touch-target` utility class
- **Spacing**: Adequate spacing between touch targets

### Focus Management
- **Keyboard Navigation**: Proper focus rings and tab order
- **Screen Readers**: ARIA labels and semantic HTML
- **Color Contrast**: AA compliance for all text sizes

### RTL Support
- **Direction**: `dir="rtl"` on HTML element
- **Layout**: Proper RTL layout maintained across all breakpoints
- **Text**: Hebrew text properly aligned and readable

## CSS Utilities

### Safe Area Helpers
```css
.safe-x {
  padding-left: max(1rem, env(safe-area-inset-left));
  padding-right: max(1rem, env(safe-area-inset-right));
}

.safe-y {
  padding-top: max(0.75rem, env(safe-area-inset-top));
  padding-bottom: max(0.75rem, env(safe-area-inset-bottom));
}
```

### Touch Target Utilities
```css
.touch-target {
  min-height: 44px;
  min-width: 44px;
}
```

### Container Utilities
```css
.container-responsive {
  @apply mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 safe-x;
}
```

## Testing Checklist

### Responsiveness
- [ ] No horizontal scroll at 320px
- [ ] Content readable on all screen sizes
- [ ] Touch targets ≥ 44px on mobile
- [ ] Proper spacing on all breakpoints

### Performance
- [ ] Motion disabled on small screens
- [ ] Reduced motion preference respected
- [ ] Images optimized for viewport
- [ ] Smooth scrolling on all devices

### Accessibility
- [ ] Touch targets meet standards
- [ ] Keyboard navigation works
- [ ] Screen reader compatibility
- [ ] Color contrast compliance

### RTL Support
- [ ] Layout correct in all components
- [ ] Text alignment proper
- [ ] Navigation direction correct
- [ ] Form elements properly aligned

## Browser Support

### Mobile Browsers
- **iOS Safari**: 14+ (safe area support)
- **Chrome Mobile**: 90+
- **Firefox Mobile**: 88+
- **Samsung Internet**: 14+

### Desktop Browsers
- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

## Performance Targets

### Lighthouse Scores
- **Mobile Performance**: ≥ 85
- **Accessibility**: ≥ 95
- **Best Practices**: ≥ 90
- **SEO**: ≥ 90

### Core Web Vitals
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1

## Development Notes

### Key Files Modified
1. **`tailwind.config.js`** - Added responsive breakpoints and container utilities
2. **`app/globals.css`** - Added responsive utilities and safe area helpers
3. **`lib/useReducedMotionOrSmall.ts`** - New hook for motion control
4. **`app/layout.tsx`** - Added viewport meta and safe area support
5. **`app/page.tsx`** - Full responsive implementation
6. **`components/MobileNav.tsx`** - Mobile-first navigation
7. **`components/ContactFormModal.tsx`** - Responsive form modal
8. **`components/PricingCard.tsx`** - Responsive pricing cards
9. **`components/VideoModal.tsx`** - Responsive video modal

### Best Practices Applied
- **Mobile First**: Design for mobile, enhance for desktop
- **Progressive Enhancement**: Core functionality works without JavaScript
- **Performance First**: Optimize for mobile performance
- **Accessibility**: WCAG 2.1 AA compliance
- **Touch Friendly**: Proper touch target sizing and spacing

### Future Enhancements
- **PWA Support**: Service worker and offline functionality
- **Advanced Animations**: Intersection Observer for scroll-triggered animations
- **Performance Monitoring**: Real User Monitoring (RUM) integration
- **A/B Testing**: Mobile-specific optimization testing
