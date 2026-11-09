### What is the use of this CTA:
The **Card** component is used to display a Card with title,date, external links etc

### How to use the CTA:
Using `<Card frontmatter={frontmatter} fields={fields} />` will render the CTA 

```
const frontmatter = {
    title: "Your Title",
    date: "2024-01-14",
    author: "John Doe",
    type: "Blog Post",
    thumbnail: "./meshery-contrib-stats.webp",
    darkthumbnail: "./meshery-contrib-stats.webp",
    eurl: "https://external-link.com"
  };

  const fields = {
    slug: "/your-page-slug"
  };
```

```
<Card frontmatter={frontmatter} fields={fields} />
```