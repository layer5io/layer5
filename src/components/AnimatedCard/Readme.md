# AnimatedCard Component

## What is the use of this component:
The **AnimatedCard** component is an enhanced version of the Card component that provides beautiful glassmorphism effects, floating animations, database schema visualizations, and wave background effects. It's designed to create visually interactive card displays while maintaining full backward compatibility with the existing Card component.

## How to use the AnimatedCard:
Using `<AnimatedCard frontmatter={frontmatter} fields={fields} />` will render an animated card with the same data structure as the original Card component.

### Basic Usage

```jsx
const frontmatter = {
    title: "Your Title",
    date: "2024-01-14",
    author: "John Doe",
    type: "Blog Post",
    description: "Your card description",
    thumbnail: "./meshery-contrib-stats.webp",
    darkthumbnail: "./meshery-contrib-stats.webp",
    eurl: "https://external-link.com",
    tags: ["AWS", "Azure", "GCP"]
};

const fields = {
    slug: "/your-page-slug"
};
```

```jsx
<AnimatedCard frontmatter={frontmatter} fields={fields} />
```

## Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `frontmatter` | Object | `{}` | Content data (title, description, date, author, etc.) |
| `fields` | Object | `null` | Navigation data (slug for internal links) |
| `useOriginalLayout` | Boolean | `false` | Layout mode selector (whether to fallback to something similar to card component) |
| `showVisualizer` | Boolean | `false` | Enable wave background animation |
| `showSchemaPreview` | Boolean | `false` | Enable database schema visualization mockup |

## Layout Modes

### Safe Mode (`useOriginalLayout={true}`)
**Recommended for production and existing card replacements**

```jsx
<AnimatedCard 
  frontmatter={frontmatter} 
  fields={fields}
  useOriginalLayout={true}
  showVisualizer={false}
/>
```



### New Design Mode (`useOriginalLayout={false}`)
**For new sections and modern UI experiences**

```jsx
<AnimatedCard 
  frontmatter={frontmatter} 
  fields={fields}
  useOriginalLayout={false}
  showSchemaPreview={true}
  showVisualizer={false}
/>
```



## Wave Visualizer - Performance Considerations

### ⚠️ IMPORTANT: Memory and Performance Warning

The `showVisualizer` prop creates a **resource-intensive wave animation** that should be used sparingly:

**Each visualizer instance creates:**
- 🖥️ **Full-screen canvas** element (covers entire viewport)
- 📊 **24 wave calculations** running at 60fps (8 waves × 3 calculations each)
- 🔄 **Continuous animation loop** using requestAnimationFrame
- 💾 **Significant memory usage** for real-time rendering

### Best Practices for Wave Visualizer

#### ✅ **Recommended Usage**
```jsx
// Good: Only one visualizer per page
<section className="hero">
  <AnimatedCard showVisualizer={true} />     {/* Hero card only */}
</section>

<section className="content">
  <AnimatedCard showVisualizer={false} />    {/* Other cards */}
  <AnimatedCard showVisualizer={false} />    {/* Other cards */}
</section>
```

#### ❌ **Avoid Multiple Visualizers**
```jsx
// Bad: Multiple visualizers cause performance issues
<AnimatedCard showVisualizer={true} />   // Canvas 1: 24 calculations
<AnimatedCard showVisualizer={true} />   // Canvas 2: 24 calculations  
<AnimatedCard showVisualizer={true} />   // Canvas 3: 24 calculations
// Total: 72 wave calculations + 3 animation loops = Lag/stuttering
```

#### 📊 **Performance Impact**
- **1 visualizer:** Smooth performance
- **2 visualizers:** Noticeable performance impact
- **3+ visualizers:** Significant lag, especially on mobile devices

### Recommended Patterns

#### **Hero Section Only**
```jsx
<AnimatedCard 
  frontmatter={heroContent}
  showVisualizer={true}      // Only for main feature
  showSchemaPreview={true}
  useOriginalLayout={false}
/>
```

#### **Conditional Visualizer**
```jsx
// Only first card gets visualizer
{posts.map((post, index) => (
  <AnimatedCard 
    key={post.id}
    frontmatter={post.frontmatter}
    fields={post.fields}
    showVisualizer={index === 0}      // First card only
    showSchemaPreview={index === 0}   // First card only
  />
))}
```

#### **RelatedPosts Integration**
```jsx
<AnimatedCard 
  frontmatter={post.frontmatter} 
  fields={post.fields}
  useOriginalLayout={true}       // Safe for existing layouts
  showVisualizer={false}         // Never in carousels/lists
  showSchemaPreview={false}      // Keep it lightweight
/>
```

## Usage Examples

### 1. **Drop-in Replacement (Safe)**
```jsx
// Replace existing Card with animated version
<AnimatedCard 
  frontmatter={frontmatter} 
  fields={fields}
  useOriginalLayout={true}
/>
```

### 2. **Infrastructure Showcase**
```jsx
<AnimatedCard 
  frontmatter={{
    title: "Model your infrastructure",
    description: "Design, optimize and maintain your infrastructure with Kanvas' intelligent inference."
  }}
  useOriginalLayout={false}
  showSchemaPreview={true}
  showVisualizer={true}    // Use sparingly!
/>
```

### 3. **Blog Post Card**
```jsx
<AnimatedCard 
  frontmatter={{
    title: "Building Cloud Infrastructure",
    description: "Learn modern cloud architecture patterns",
    date: "Jan 15, 2024",
    author: "Jane Developer",
    thumbnail: { publicURL: "/blog-image.jpg" }
  }}
  fields={{ slug: "/blog/cloud-infrastructure" }}
  useOriginalLayout={false}
  showSchemaPreview={false}
  showVisualizer={false}
/>
```

### 4. **Performance-Optimized Grid**
```jsx
<div className="card-grid">
  {posts.map((post, index) => (
    <AnimatedCard 
      key={post.id}
      frontmatter={post.frontmatter}
      fields={post.fields}
      useOriginalLayout={true}          // Consistent with existing design
      showVisualizer={false}            // No performance impact
      showSchemaPreview={index === 0}   // Only featured card
    />
  ))}
</div>
```

## Migration Guide

### From Card to AnimatedCard

**Step 1: Safe Migration**
```jsx
// Before
<Card frontmatter={frontmatter} fields={fields} />

// After (safe replacement)
<AnimatedCard 
  frontmatter={frontmatter} 
  fields={fields}
  useOriginalLayout={true}
/>
```

**Step 2: Enhanced Features** (optional)
```jsx
<AnimatedCard 
  frontmatter={frontmatter} 
  fields={fields}
  useOriginalLayout={false}
  showSchemaPreview={true}
  showVisualizer={false}    // Start without visualizer
/>
```



---

**💡 Pro Tip:** Start with `useOriginalLayout={true}` for safe adoption, then gradually introduce new design features in specific sections where visual impact is most important.