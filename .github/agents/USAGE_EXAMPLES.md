# Custom Agent Usage Examples

This document provides practical examples of how to use Layer5's custom GitHub Copilot agents.

## blog-writer Agent

The `blog-writer` agent is an expert in creating high-quality blog posts for the Layer5 website.

**Note:** This agent automatically uses the most powerful AI model available and creates content specifically tailored for platform engineers, DevOps engineers, SREs, IT administrators, Kubernetes operators, cloud native developers, open source contributors, solution architects, enterprise architects, and developers.

### Basic Usage

To use the blog-writer agent, mention it in your GitHub Copilot chat:

```
@blog-writer Create a blog post about [topic]
```

### Example Prompts

#### 1. Feature Announcement

```
@blog-writer Create a blog post announcing the new Meshery design validation 
features. The post should explain what design validation is, why it's important, 
how to use it, and include examples. Target audience: platform engineers and 
DevOps teams.
```

**What the agent will do:**
- Create properly structured MDX file with frontmatter
- Select "Meshery" category and relevant tags
- Include BlockQuote with user testimonial or key benefit
- Add CTA directing readers to try Meshery
- Include cross-links to Meshery docs, Kanvas, and catalog
- Optimize title and description for SEO
- Suggest image placement for feature screenshots

#### 2. Tutorial Blog Post

```
@blog-writer Write a tutorial blog post on "Getting Started with Kanvas: 
Your First Design". Include step-by-step instructions with screenshots, 
common pitfalls to avoid, and tips for success. Mark it as a resource.
```

**What the agent will do:**
- Set `resource: true` for resources collection
- Structure content with clear H2/H3 headings for each step
- Use `<div class="tip">` boxes for pro tips
- Add multiple cross-links to related documentation
- Include CTA to join Layer5 Slack for help
- Optimize for tutorial-related keywords
- Follow the tutorial content pattern with introduction, steps, and conclusion

#### 3. Community Spotlight

```
@blog-writer Create a "Meet the Maintainer" blog post for [Name], a Meshery 
maintainer. Include their background, contributions, favorite features, 
and advice for newcomers. Use the Meet the Maintainer style.
```

**What the agent will do:**
- Use "Meet The Maintainer" tag
- Select "Community" or "Open Source" category
- Import MeetTheMaintainer style component
- Structure with personal intro, Q&A format, and conclusion
- Add BlockQuote with impactful quote from the maintainer
- Link to maintainer's community profile
- Include CTA to join community and contribute
- Add maintainer photo with proper styling

#### 4. Technical Deep Dive

```
@blog-writer Write a deep-dive blog post comparing different service mesh 
architectures. Include pros/cons, use cases, and when to choose each approach. 
Target: technical decision-makers.
```

**What the agent will do:**
- Select "Service Mesh" category and related tags
- Create comparison sections with clear structure
- Use BlockQuoteAlt for key insights
- Add links to related service mesh resources
- Include technical diagrams (with placeholder notes)
- Mark as `resource: true`
- Optimize for comparison and decision-making keywords
- Add CTA to explore Meshery for service mesh management

#### 5. Event Recap

```
@blog-writer Create a blog post recapping Layer5's presence at KubeCon NA 2024. 
Include highlights, talks given, booth activity, community meetups, and 
key takeaways.
```

**What the agent will do:**
- Use "Events" category and "KubeCon" tag
- Include event photos (with placeholders)
- Add BlockQuote with attendee feedback
- Link to talk recordings and slides
- Cross-link to relevant Layer5 projects
- CTA for upcoming events and community involvement
- SEO optimize for event name and year

#### 6. How-To Guide

```
@blog-writer Create a how-to guide for importing Helm charts into Kanvas 
and converting them to visual designs. Include troubleshooting section.
```

**What the agent will do:**
- Set `resource: true`
- Use "Kanvas" category
- Structure with prerequisites, steps, troubleshooting
- Add `<div class="note">` for important callouts
- Include code examples with proper formatting
- Link to Helm and Kanvas documentation
- Add screenshots for each step (with placeholders)
- CTA to try it in Kanvas

### Advanced Usage

#### Specify Multiple Requirements

```
@blog-writer Create a blog post about Meshery's new OPA policy features. 
Requirements:
- Target: Security and compliance teams
- Include code examples of policy definitions
- Add comparison with manual policy management
- Mark as resource
- Feature it (featured: true)
- Include at least 2 CTAs
- Link to policy documentation and getting started guide
```

#### Request Specific Style Elements

```
@blog-writer Write a blog post about cloud native best practices. 
Style requirements:
- Use BlockquoteAlt for the main thesis
- Include 3 images: header, architecture diagram, results chart
- Add CTA_FullWidth in the middle of content
- Use intro div for the opening paragraph
- Link to at least 5 existing Layer5 resources
```

#### Content Series

```
@blog-writer Create the first post in a 3-part series about Kubernetes 
security patterns. This post covers "Securing Pod Communication". 
Include series introduction and links to upcoming posts (as placeholders).
```

### Tips for Best Results

1. **Be Specific About Topic**: The more detail you provide, the better the output
2. **Specify Target Audience**: Helps agent choose appropriate tone and depth
3. **Mention Related Content**: If you know of related blog posts, mention them
4. **Request Specific Components**: Ask for BlockQuotes, CTAs, or specific styling
5. **Provide Context**: If it's part of a series or related to an event, mention it
6. **Review and Refine**: The agent provides a strong foundation; review and customize

### What the Agent Handles Automatically

- ✅ Proper frontmatter with all required fields
- ✅ Import statements for components
- ✅ BlogWrapper structure
- ✅ Existing tag and category selection
- ✅ At least one graphic
- ✅ At least one CTA
- ✅ BlockQuote usage where appropriate
- ✅ Cross-page links to relevant content
- ✅ SEO optimization (title, description, URL)
- ✅ Proper MDX syntax
- ✅ Image placeholders with descriptive notes
- ✅ Resource collection consideration

### What You Should Review

- 📝 Technical accuracy of content
- 📝 Appropriateness of selected tags/categories
- 📝 Quality and relevance of cross-links
- 📝 Image placeholder descriptions (for actual image creation)
- 📝 CTA destinations and messaging
- 📝 Overall tone and voice
- 📝 Code examples (if any)
- 📝 SEO title and description effectiveness

### Common Scenarios

#### Quick Announcement
```
@blog-writer Quick announcement post: Meshery v0.7.0 is released with 
new features X, Y, Z. Keep it concise, 300-400 words.
```

#### Long-Form Content
```
@blog-writer Comprehensive guide to service mesh observability using 
Meshery. Target length: 2000+ words. Include multiple sections, 
examples, and best practices.
```

#### Update Existing Post
```
@blog-writer Review the blog post at [path] and update it with 
information about the new features released in 2024. Maintain the 
existing style and structure.
```

### Troubleshooting

**Issue**: Agent doesn't use existing tags
- **Solution**: Explicitly mention "use existing tags when possible"

**Issue**: Content is too technical/not technical enough
- **Solution**: Specify target audience expertise level

**Issue**: Missing required component
- **Solution**: Explicitly request it: "include a BlockQuote" or "add a CTA"

**Issue**: Wrong category selected
- **Solution**: Specify the category: "use the Meshery category"

## Creating Custom Prompts

You can create reusable prompt templates for common blog post types:

### Template: Feature Release
```
@blog-writer Create a blog post announcing [Feature Name] for [Product].

Details:
- What: [Brief description]
- Why: [Problem it solves]
- How: [How to use it]
- Target: [Audience]
- Category: [Category name]
- Tags: [Specific tags]

Include:
- BlockQuote with user benefit
- Code example or usage demonstration  
- CTA to try the feature
- Links to docs and getting started guide
```

### Template: Community Content
```
@blog-writer Create a community-focused blog post about [Topic].

Style:
- Welcoming, friendly tone
- Emphasis on collaboration and contribution
- Category: Community
- Tags: Community, Open Source

Include:
- Stories from community members (as BlockQuotes)
- Multiple links to community resources (Slack, meetings, GitHub)
- CTA to join Layer5 community
- Images of community events or contributors
```

## Best Practices

1. **Start Simple**: Begin with a basic prompt, then iterate
2. **Provide Context**: The agent works better with more information
3. **Review Output**: Always review and customize the generated content
4. **Iterate**: If something isn't right, refine your prompt and try again
5. **Save Good Prompts**: Keep a library of prompts that work well for you
6. **Leverage Examples**: Point to existing blog posts as examples of style

## Getting Help

If you need help with the blog-writer agent:

1. Check this examples document
2. Review `.github/agents/README.md`
3. Look at existing blog posts in `/src/collections/blog/`
4. Ask in the Layer5 Slack #documentation channel
5. Refer to the blog template: `/src/collections/blog/blog-template/index.mdx`

## Contributing Examples

If you discover a particularly useful prompt pattern, please add it to this document via pull request!
