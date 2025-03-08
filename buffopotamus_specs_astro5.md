# Buffopotamus Website Specifications (Astro 5 Implementation)

## Overview
The Buffopotamus website will be a dedicated digital platform showcasing the fictional hybrid creature - a cross between a buffalo and a hippopotamus. The site will feature a compelling story about the Buffopotamus and display visually striking images of this unique creature. The site will be built with Astro 5, leveraging its modern features for optimal performance and developer experience.

## Technology Stack

### Astro 5 Framework
- Utilize Astro 5 for its content-focused approach and performance benefits
- Leverage Content Layer for managing all site content
- Use Server Islands for dynamic components where needed
- Implement responsive image handling with experimental image features
- Utilize SVG components for icons and visual elements

### Site Architecture
- Static-first approach with prerendering by default
- On-demand rendering for any dynamic components
- Content stored in content collections for type safety
- Clean separation of content and presentation

## Website Structure

### Home Page
- Hero section with a prominent image of the Buffopotamus (using optimized responsive images)
- Brief introduction to the concept
- Navigation to other sections using Astro components
- Call-to-action to explore the story

### About the Buffopotamus
- Detailed description of the creature
- Physical characteristics with responsive images
- Habitat and behavior
- Origin story summary

### The Story
- Full narrative about the Buffopotamus stored in Content Collections
- Chapter or section divisions using Astro's content management
- Accompanying illustrations at key story points with optimized images
- View transitions between story sections for smooth navigation

### Gallery
- Collection of Buffopotamus images using Astro's Image component
- Different angles and scenarios with responsive images
- Captions explaining each image stored in Content Collections
- Interactive elements (lightbox, carousel) using client-side islands

### Fun Facts
- Interesting tidbits about the Buffopotamus stored in Content Collections
- Comparison with real buffalo and hippopotamus
- Infographics or visual representations using SVG components
- Interactive elements using client islands when needed

### Contact/About
- Information about the project
- Credits for story and images
- Contact form with client-side validation

## Content Management

### Astro Content Layer
- Store all website content in typed Content Collections
- Organize content by sections (story, facts, gallery descriptions, etc.)
- Define schemas for type-safety across all content
- Enable easy content updates and additions

```typescript
// Example content collection configuration
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Story collection for narrative content
const story = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/story" }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
  }),
});

// Facts collection for fun facts and comparisons
const facts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/facts" }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['habitat', 'physical', 'behavior', 'comparison']),
    icon: z.string().optional(),
  }),
});

export const collections = { story, facts };
```

## Design Elements

### Color Palette
- Primary: Earth tones reflecting natural habitat (browns, greens)
- Secondary: Water-inspired blues and teals (representing the hippopotamus aspect)
- Accent: Warm highlights (oranges, soft yellows) for emphasis
- Defined in CSS variables for consistent usage

### Typography
- Headings: Bold, slightly playful font that conveys character
- Body: Clean, readable serif or sans-serif
- Accent: Handwritten-style font for quotes or special callouts
- Web fonts optimized for performance with fallbacks

### Visual Style
- Natural, slightly whimsical illustrations
- Balance between realism and stylized representation
- Consistent visual language throughout the site
- Responsive design for all device sizes

### UI Elements
- Custom navigation that reflects the theme
- Unique buttons and interactive elements
- Subtle animations for engagement
- Consistent hover and active states
- SVG components for icons and decorative elements

## Technical Implementation

### Astro Components
- Create reusable components for common UI elements
- Implement layouts for consistent page structure
- Use slots for flexible content placement
- Create specialized components for story navigation, gallery items, etc.

### Responsive Images
- Use Astro's experimental responsive image features
- Implement proper srcset and sizes attributes
- Optimize images for different device sizes and resolutions
- Enable image cropping where appropriate

```astro
---
import { Image } from "astro:assets";
import buffopotamusImage from "../assets/buffopotamus.jpg";
---

<Image 
  src={buffopotamusImage} 
  width={800} 
  height={600} 
  layout="responsive" 
  alt="Biff the Buffopotamus standing majestically by the river" 
/>
```

### SVG Components
- Use Astro's experimental SVG components
- Create custom icons for UI elements
- Implement infographics and visual elements
- Enable dynamic styling through props

```astro
---
import BuffoIcon from '../assets/icons/buffopotamus.svg';
---

<BuffoIcon width={50} height={50} fill="var(--color-earth-brown)" />
```

### Environment Variables
- Use Astro's type-safe environment variables
- Configure API keys and other sensitive data securely
- Define client and server variables appropriately

```typescript
// Example environment variable configuration
import { defineEnvironment, defineSecret } from 'astro:env';

export default defineEnvironment({
  // Public variables accessible in client
  PUBLIC_SITE_URL: {
    description: 'The public URL of the site',
    default: 'https://buffopotamus.example.com',
  },
  // Server-only secret variables
  FORM_SUBMISSION_KEY: defineSecret({
    description: 'API key for form submission service',
    required: true,
  }),
});
```

### Performance Optimization
- Utilize Astro's static-first approach for optimal loading
- Implement view transitions for smooth navigation
- Use deferred loading for non-critical components
- Optimize images and assets for fast loading
- Implement efficient CSS with minimal JS

### Accessibility
- Semantic HTML structure through Astro components
- Alt text for all images with proper descriptions
- Keyboard navigation support
- ARIA attributes where appropriate
- WCAG 2.1 AA compliance where possible

### Browser Compatibility
- Support for modern browsers (Chrome, Firefox, Safari, Edge)
- Graceful degradation for older browsers
- Progressive enhancement for newer features

## Content Requirements

### Story Development
- Compelling narrative with beginning, middle, and end
- Character development for the Buffopotamus
- Environmental or conservation themes if appropriate
- Engaging writing style accessible to a general audience
- Structured in Markdown for easy editing

### Image Generation
- Consistent representation of the Buffopotamus across all images
- Variety of scenes and situations
- High-quality resolution suitable for web display
- Consistent artistic style
- Multiple sizes for responsive display

## Project Structure

```
buffopotamus/
├── README.md
├── astro.config.mjs         # Astro configuration
├── package.json
├── public/                  # Static assets
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── components/          # Reusable Astro components
│   │   ├── Button.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── ImageGallery.astro
│   │   └── StoryNavigation.astro
│   ├── content/             # Content collections
│   │   ├── story/           # Story chapters in Markdown
│   │   ├── facts/           # Fun facts in Markdown
│   │   └── config.ts        # Content collection configuration
│   ├── layouts/             # Page layouts
│   │   ├── BaseLayout.astro
│   │   └── StoryLayout.astro
│   ├── pages/               # Page routes
│   │   ├── index.astro      # Home page
│   │   ├── about.astro
│   │   ├── story.astro
│   │   ├── gallery.astro
│   │   ├── fun-facts.astro
│   │   └── contact.astro
│   ├── styles/              # Global styles
│   │   └── global.css
│   ├── assets/              # Images and SVGs
│   │   ├── images/
│   │   └── icons/
│   └── env.d.ts             # Environment variable types
└── tsconfig.json            # TypeScript configuration
```

## Implementation Plan

### Phase 1: Project Setup and Design System
- Initialize Astro 5 project
- Configure content collections for story and facts
- Set up component structure and layouts
- Create design system with colors, typography, and base components
- Implement responsive image handling

### Phase 2: Content Development
- Develop the complete Buffopotamus story in Markdown
- Structure content collections
- Create initial placeholder images
- Develop infographics and visual elements as SVG components

### Phase 3: Core Development
- Implement all page routes
- Build reusable components
- Create interactive elements using client islands
- Optimize for performance and accessibility

### Phase 4: Image Integration
- Generate final Buffopotamus images
- Optimize images for different device sizes
- Implement gallery with lightbox functionality
- Ensure all images have proper alt text

### Phase 5: Testing and Refinement
- Test across devices and browsers
- Perform accessibility audit
- Optimize performance
- Refine content and user experience

### Phase 6: Launch and Monitoring
- Final quality assurance
- Deploy to production
- Set up analytics
- Plan for content updates
