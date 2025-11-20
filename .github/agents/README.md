# Layer5 Custom GitHub Copilot Agents

This directory contains custom agent configurations for GitHub Copilot. These agents provide specialized expertise for specific tasks within the Layer5 repository.

## Available Agents

### blog-writer

**Purpose:** Create high-quality blog posts for the Layer5 website

**Configuration:** Always uses the most powerful AI model available

**Target Audience:** Content tailored for platform engineers, DevOps engineers, SREs, IT administrators, Kubernetes operators, cloud native developers, open source contributors, solution architects, enterprise architects, and developers

**Specializes in:**
- Cloud native topics (Kubernetes, service mesh, platform engineering)
- Meshery and Kanvas features
- Community content and announcements
- Open source best practices
- Technical content for engineering practitioners

**Key Capabilities:**
- Uses the official blog template structure
- Selects appropriate existing tags and categories (weighted preference)
- Includes required graphics and images
- Adds Call-to-Action (CTA) components
- Uses BlockQuote components for emphasis
- Adds extensive cross-page hyperlinks to existing content
- Optimizes for SEO (URL, title, description, keywords)
- Considers posts for `/resources` collection inclusion
- Follows Layer5 writing style and tone
- Addresses real-world challenges faced by platform teams

**When to Use:**
- Creating new blog posts about Layer5 projects
- Writing technical tutorials and how-to guides
- Crafting community announcements
- Developing content for Meet the Maintainer series
- Publishing event coverage or recaps
- Creating content for technical practitioners and architects

**Example Usage with GitHub Copilot:**
```
@blog-writer Create a blog post about the new Meshery catalog features, 
including information about design patterns and how users can contribute 
their own patterns to the catalog.
```

## How Custom Agents Work

Custom agents are specialized configurations that give GitHub Copilot deep expertise in specific areas. They include:

1. **Domain Knowledge:** Understanding of Layer5's projects, style, and conventions
2. **Structural Templates:** Knowledge of required file formats and structures
3. **Best Practices:** Built-in guidelines for quality and consistency
4. **Component Library:** Awareness of available React components and styles

## Agent Configuration Format

Each agent is defined in a YAML file with the following structure:

```yaml
name: agent-name
description: |
  Brief description of what the agent does
  (must start with "Custom agent:" for proper recognition)

instructions: |
  Detailed instructions and guidelines for the agent
  Includes templates, examples, and requirements
```

## Adding New Custom Agents

To add a new custom agent:

1. Create a new YAML file in this directory (`.github/agents/`)
2. Follow the naming convention: `agent-name.yml`
3. Include a clear name and description (starting with "Custom agent:")
4. Provide comprehensive instructions with examples
5. Test the agent with GitHub Copilot
6. Update this README with the new agent information

## Guidelines for Agent Instructions

When creating agent instructions:

- **Be Specific:** Include exact file paths, naming conventions, and requirements
- **Provide Examples:** Show complete examples of expected output
- **List Options:** Enumerate available choices (tags, categories, components)
- **Include Constraints:** Specify what must be included and what should be avoided
- **Reference Existing Code:** Point to template files and examples in the repository
- **Consider Edge Cases:** Address common scenarios and special situations

## Benefits of Custom Agents

- **Consistency:** Ensures all outputs follow established patterns
- **Efficiency:** Reduces time spent on boilerplate and formatting
- **Quality:** Incorporates best practices automatically
- **Onboarding:** Helps new contributors understand standards quickly
- **Maintenance:** Centralizes knowledge that might otherwise be scattered

## Troubleshooting

If a custom agent isn't working as expected:

1. Verify YAML syntax: `python3 -c "import yaml; yaml.safe_load(open('agent-file.yml'))"`
2. Check that description starts with "Custom agent:"
3. Ensure instructions are clear and comprehensive
4. Test with simple prompts first
5. Gradually add complexity to your requests

## Resources

- [GitHub Copilot Documentation](https://docs.github.com/copilot)
- [Layer5 Contributing Guidelines](../../CONTRIBUTING.md)
- [Layer5 Blog Template](../../src/collections/blog/blog-template/index.mdx)
- [Layer5 AGENTS.md](../../AGENTS.md)

## Maintenance

Custom agents should be reviewed and updated when:
- Blog post structure changes
- New components are added to the design system
- Tag/category lists are significantly updated
- Writing style guidelines evolve
- Community feedback suggests improvements

Last updated: 2024-11-20
