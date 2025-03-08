# Image Mapping for Buffopotamus Website

This document maps the current image files in `src/assets/` to their uses across the website, and lists additional images needed.

## Current Images and Their Uses

| Source Filename | Used On | Purpose | Implementation |
|-----------------|---------|---------|----------------|
| `act1..jpg` | Story Page | Act 1 illustration | Used in the story page for Act 1: Identity Crisis section |
| `act2..jpg` | Story Page | Act 2 illustration | Used in the story page for Act 2: Journey of Discovery section |
| `act3..jpg` | Story Page | Act 3 illustration | Used in the story page for Act 3: Crisis and Purpose section |
| `act4..jpg` | Story Page | Act 4 illustration | Used in the story page for Act 4: Resolution and Acceptance section |
| `hero.jpg` | Home Page | Hero background | Used as background for the top hero section with gradient overlay |
| `magestic_buf.jpg` | Home Page | Main feature image | Featured prominently on the home page below the hero section |
| `borerland..jpg` | About Page | Main feature image | Used as the main illustration on the About page |
| `comparison..jpg` | About Page | Species comparison | Used in the Origin Story section to illustrate the comparison between parent species |
| `buffalo_territory..jpg` | Not currently used | Buffalo habitat | Could be used in gallery or facts section |
| `hippopotamus_home..jpg` | Not currently used | Hippopotamus habitat | Could be used in gallery or facts section |
| `biffs_home..jpg` | Not currently used | Buffopotamus habitat | Could be used in gallery or facts section |
| `action..jpg` | Not currently used | Action shot | Could be used in gallery or story section |

## Image Integration Details

### Story Page

The story page now uses actual images for each act instead of colored placeholders. Images are loaded using Astro's `Image` component for optimization:

```astro
<div class="story-image">
  {entry.data.act === 'act1' ? (
    <Image src={act1Image} alt={entry.data.imageAlt} class="story-act-image" />
  ) : entry.data.act === 'act2' ? (
    <Image src={act2Image} alt={entry.data.imageAlt} class="story-act-image" />
  ) : entry.data.act === 'act3' ? (
    <Image src={act3Image} alt={entry.data.imageAlt} class="story-act-image" />
  ) : (
    <Image src={act4Image} alt={entry.data.imageAlt} class="story-act-image" />
  )}
</div>
```

### Home Page

The home page uses:
1. The `hero.jpg` as a background image with a gradient overlay in CSS
2. The `magestic_buf.jpg` as the main feature image below the hero section

```astro
<style>
  .hero {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('/src/assets/hero.jpg');
    background-size: cover;
    background-position: center;
    color: white;
  }
</style>
```

And:

```astro
<div class="feature-image">
  <Image 
    src={buffopotamusImage} 
    alt="Majestic Buffopotamus standing proudly in its natural habitat"
    width={1200}
    height={600}
    class="feature-hero-image"
  />
</div>
```

### About Page

The about page uses:
1. The `borerland..jpg` image as the main feature at the top
2. The `comparison..jpg` image in the origin story section

```astro
<div class="feature-image">
  <Image 
    src={buffoBorderlandImage} 
    alt="The Buffopotamus in its natural borderland habitat"
    width={1200}
    height={600}
    class="about-hero-image"
  />
</div>
```

And:

```astro
<div style="margin: 2rem 0;">
  <Image 
    src={buffoComparisonImage} 
    alt="Comparison of Buffopotamus with its parent species"
    width={800}
    height={400}
    class="comparison-image"
  />
</div>
```

## Naming Convention Improvements

Some of the current filenames have unusual formatting (`act1..jpg` with double dots, etc.). For more consistent file management, a more structured naming convention is being implemented for future images, as documented in the README files in each image directory and in the `missing_images.md` document.

## Public vs Src Image Management

- Images in `/src/assets/` are processed by Astro's build system and can be optimized through the `Image` component
- Images in `/public/images/` are served directly and should be used for larger, high-resolution versions
  
For production use, more images will be added to the appropriate directories following the naming conventions in the respective README files.
