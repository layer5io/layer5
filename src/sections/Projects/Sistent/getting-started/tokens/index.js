import React from "react";
import { Container } from "../../../../../reusecore/Layout";
import SistentWrapper from "../../sistent.style";
import TOC from "../../../../../components/SistentNavigation";
import IntraPage from "../../../../../components/handbook-navigation/intra-page";
import SistentPagination from "../../../../../components/SistentNavigation/pagination";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
import { CodeBlock } from "../../components/button/code-block";
import { SistentThemeProvider } from "@sistent/sistent";
import { Box, Typography, Card, Alert } from "@sistent/sistent";

const contents = [
  { id: 0, link: "#overview", text: "Overview" },
  { id: 1, link: "#accessing-tokens", text: "Accessing Tokens" },
  { id: 2, link: "#color-system", text: "Color System" },
  { id: 3, link: "#typography", text: "Typography" },
  { id: 4, link: "#spacing", text: "Spacing" },
  { id: 5, link: "#examples", text: "Examples" }
];

const codeExamples = {
  basicAccess: `import { useTheme } from "@sistent/sistent";

function MyComponent() {
  const theme = useTheme();
  
  return (
    <div style={{
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      padding: theme.spacing(2)
    }}>
      Using Sistent design tokens
    </div>
  );
}`,

  colors: `// Primary brand colors
theme.palette.primary.main      // Layer5 Green
theme.palette.secondary.main    // Layer5 Orange

// Semantic colors
theme.palette.error.main        // Error red
theme.palette.success.main      // Success green
theme.palette.warning.main      // Warning orange
theme.palette.info.main         // Info blue

// Background and text
theme.palette.background.default
theme.palette.text.primary`,

  typography: `// Typography scale
theme.typography.h1             // Large headings
theme.typography.h6             // Small headings
theme.typography.body1          // Primary body text
theme.typography.body2          // Secondary body text

// Font properties
theme.typography.fontFamily     // Primary font
theme.typography.fontWeightBold // Font weights`,

  spacing: `// 8px-based spacing system
theme.spacing(1)    // 8px
theme.spacing(2)    // 16px
theme.spacing(3)    // 24px
theme.spacing(4)    // 32px

// Usage in components
<Box sx={{ p: 2, mb: 3 }}>
  {/* padding: 16px, margin-bottom: 24px */}
</Box>`,

  practicalExample: `import { styled, Card, Typography } from "@sistent/sistent";

const ProductCard = styled(Card)(({ theme }) => ({
  // Background and borders using color tokens
  backgroundColor: theme.palette.background.paper,
  border: \`1px solid \${theme.palette.divider}\`,
  borderRadius: theme.shape.borderRadius,
  
  // Consistent spacing using spacing tokens
  padding: theme.spacing(3),
  marginBottom: theme.spacing(2),
  
  // Typography tokens for text hierarchy
  '& .product-title': {
    ...theme.typography.h5,
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
  },
  
  '& .product-description': {
    ...theme.typography.body1,
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(2),
    lineHeight: 1.6,
  },
  
  '& .product-price': {
    ...theme.typography.h6,
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightBold,
  },
  
  // Interactive states with color tokens
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
    transform: 'translateY(-2px)',
    transition: 'all 0.2s ease-in-out',
  },
  
  // Responsive spacing
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(4),
  },
}));

// Usage example
function ProductShowcase({ products }) {
  return (
    <div style={{ gap: theme.spacing(2) }}>
      {products.map(product => (
        <ProductCard key={product.id}>
          <div className="product-title">{product.name}</div>
          <div className="product-description">{product.description}</div>
          <div className="product-price">\`$\`{product.price}</div>
        </ProductCard>
      ))}
    </div>
  );
}`
};

const SistentTokens = () => {
  const { isDark } = useStyledDarkMode();

  return (
    <SistentWrapper>
      <div className="page-header-section">
        <h1>Design Tokens</h1>
      </div>
      <TOC />

      <div className="page-section">
        <Container>
          <div className="content">

            <a id="overview">
              <h2>Overview</h2>
            </a>
            <p>
              Design tokens are the foundation of Sistent's design system. They are named values that store
              visual design attributes like colors, spacing, and typography scales. Instead of hardcoding
              values like <code>#00B39F</code> or <code>16px</code>, you reference semantic tokens that
              automatically adapt to different themes and contexts.
            </p>

            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Alert severity="info" sx={{ my: 2 }}>
                <strong>Why tokens matter:</strong> They ensure visual consistency across Layer5 projects,
                enable automatic theming (light/dark mode), and make maintenance significantly easier.
              </Alert>
            </SistentThemeProvider>

            <a id="accessing-tokens">
              <h2>Accessing Tokens</h2>
            </a>
            <p>
              All design tokens are available through the theme object using the <code>useTheme</code> hook:
            </p>

            <div className="showcase">
              <CodeBlock name="basic-access" code={codeExamples.basicAccess} />
            </div>

            <a id="color-system">
              <h2>Color System</h2>
            </a>
            <p>
              Sistent uses Layer5's brand colors as the foundation, with additional semantic colors
              for UI states.
            </p>

            <div className="showcase">
              <div className="items">
                <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                  <Box display="grid" gridTemplateColumns="repeat(auto-fit, minmax(120px, 1fr))" gap={1} mb={2}>
                    <Box sx={{
                      bgcolor: "primary.main",
                      color: "primary.contrastText",
                      p: 1,
                      textAlign: "center",
                      fontSize: "12px",
                      fontWeight: "bold"
                    }}>
                      Primary
                    </Box>
                    <Box sx={{
                      bgcolor: "secondary.main",
                      color: "secondary.contrastText",
                      p: 1,
                      textAlign: "center",
                      fontSize: "12px",
                      fontWeight: "bold"
                    }}>
                      Secondary
                    </Box>
                    <Box sx={{
                      bgcolor: "error.main",
                      color: "error.contrastText",
                      p: 1,
                      textAlign: "center",
                      fontSize: "12px",
                      fontWeight: "bold"
                    }}>
                      Error
                    </Box>
                    <Box sx={{
                      bgcolor: "success.main",
                      color: "success.contrastText",
                      p: 1,
                      textAlign: "center",
                      fontSize: "12px",
                      fontWeight: "bold"
                    }}>
                      Success
                    </Box>
                  </Box>
                </SistentThemeProvider>
              </div>
              <CodeBlock name="colors" code={codeExamples.colors} />
            </div>

            <a id="typography">
              <h2>Typography</h2>
            </a>
            <p>
              Typography tokens provide consistent text styling across all components.
            </p>

            <div className="showcase">
              <div className="items">
                <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                  <Box>
                    <Typography variant="h1" gutterBottom>Heading 1</Typography>
                    <Typography variant="h3" gutterBottom>Heading 3</Typography>
                    <Typography variant="h6" gutterBottom>Heading 6</Typography>
                    <Typography variant="body1" gutterBottom>Body text primary</Typography>
                    <Typography variant="body2">Body text secondary</Typography>
                  </Box>
                </SistentThemeProvider>
              </div>
              <CodeBlock name="Typography" code={codeExamples.typography} />
            </div>

            <a id="spacing">
              <h2>Spacing</h2>
            </a>
            <p>
              Sistent uses an 8px-based spacing system. All spacing values are multiples of 8px
              for consistent layouts.
            </p>

            <div className="showcase">
              <div className="items">
                <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                  <Box>
                    {[1, 2, 3, 4, 6, 8].map((multiplier) => (
                      <Box key={multiplier} display="flex" alignItems="center" gap={2} mb={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, fontFamily: "monospace" }}>
                          spacing({multiplier})
                        </Typography>
                        <Box
                          sx={{
                            width: `${multiplier * 8}px`,
                            height: 20,
                            backgroundColor: "primary.main",
                            border: "1px solid",
                            borderColor: "divider"
                          }}
                        />
                        <Typography variant="body2" sx={{ fontFamily: "monospace", fontSize: "12px", color: "text.secondary" }}>
                          {multiplier * 8}px
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </SistentThemeProvider>
              </div>
              <CodeBlock name="Spacing" code={codeExamples.spacing} />
            </div>

            <a id="examples">
              <h2>Practical Examples</h2>
            </a>
            <p>
              Here's how to use multiple token categories together in real components:
            </p>

            <div className="showcase">
              <div className="items">
                <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                  <Card sx={{
                    p: 3,
                    mb: 2,
                    border: "1px solid",
                    borderColor: "divider",
                    "&:hover": {
                      bgcolor: "action.hover",
                      transform: "translateY(-2px)",
                      transition: "all 0.2s ease-in-out"
                    }
                  }}>
                    <Typography variant="h5" color="text.primary" gutterBottom fontWeight="medium">
                      Product Card
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 2, lineHeight: 1.6 }}>
                      A beautifully designed card component using Sistent design tokens for consistent styling and theming.
                    </Typography>
                    <Typography variant="h6" color="primary.main" fontWeight="bold">
                      $99.99
                    </Typography>
                  </Card>
                </SistentThemeProvider>
              </div>
              <CodeBlock name="practical-example" code={codeExamples.practicalExample} />
            </div>

            <h3>Implementation Guidelines</h3>
            <br/>
            <ul>
              <li>Always use tokens instead of hardcoded values for maintainable code</li>
              <li>Tokens automatically adapt to light/dark themes without additional configuration</li>
              <li>Use <code>useTheme()</code> hook to access all available design tokens</li>
              <li>Prefer semantic color names (primary, error) over specific hex values</li>
              <li>Follow the 8px spacing grid system for consistent visual rhythm</li>
              <li>Test components in both light and dark themes to ensure proper contrast</li>
            </ul>

          </div>
          <SistentPagination />
        </Container>
        <IntraPage contents={contents} />
      </div>
    </SistentWrapper>
  );
};

export default SistentTokens;