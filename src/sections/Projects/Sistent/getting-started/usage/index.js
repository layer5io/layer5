import React from "react";
import { Container } from "../../../../../reusecore/Layout";
import SistentWrapper from "../../sistent.style";
import TOC from "../../../../../components/SistentNavigation";
import IntraPage from "../../../../../components/handbook-navigation/intra-page";
import SistentPagination from "../../../../../components/SistentNavigation/pagination";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
import { CodeBlock } from "../../components/button/code-block";
import { SistentThemeProvider } from "@sistent/sistent";
import { Button, TextField, Card, CardContent, Typography, Alert } from "@sistent/sistent";

const contents = [
  { id: 0, link: "#overview", text: "Overview" },
  { id: 1, link: "#theme-provider", text: "Theme Provider" },
  { id: 2, link: "#component-examples", text: "Component Examples" },
  { id: 3, link: "#advanced-usage", text: "Advanced Usage" },
  { id: 4, link: "#best-practices", text: "Best Practices" }
];

const codeExamples = {
  basicUsage: `import { SistentThemeProvider } from "@sistent/sistent";
import { Button } from "@sistent/sistent";

function App() {
  return (
    <SistentThemeProvider>
      <Button variant="contained" color="primary">
        Hello Sistent!
      </Button>
    </SistentThemeProvider>
  );
}`,

  themeProvider: `import { SistentThemeProvider } from "@sistent/sistent";

function App() {
  return (
    <SistentThemeProvider 
      initialMode="dark" // "light" | "dark" | "system"
    >
      {/* Your app components go here */}
      <YourAppContent />
    </SistentThemeProvider>
  );
}`,

  buttonVariants: `import { Button, Stack } from "@sistent/sistent";

function ButtonExamples() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" color="primary">
        Contained
      </Button>
      <Button variant="outlined" color="secondary">
        Outlined
      </Button>
      <Button variant="text">
        Text Button
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
    </Stack>
  );
}`,

  formExample: `import React, { useState } from "react";
import { 
  Card, 
  CardContent, 
  Typography, 
  TextField, 
  Button,
  Stack,
  Box
} from "@sistent/sistent";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (field) => (e) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  return (
    <Card sx={{ maxWidth: 500, mx: 'auto', p: 2 }}>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          Get in Touch
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Fill out the form below and we'll get back to you soon.
        </Typography>
        
        <Box component="form" onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField 
              label="Full Name" 
              variant="outlined" 
              fullWidth
              required
              value={formData.name}
              onChange={handleChange('name')}
            />
            <TextField 
              label="Email Address" 
              type="email"
              variant="outlined" 
              fullWidth
              required
              value={formData.email}
              onChange={handleChange('email')}
            />
            <TextField 
              label="Message"
              multiline
              rows={4}
              variant="outlined" 
              fullWidth
              value={formData.message}
              onChange={handleChange('message')}
            />
            <Button 
              type="submit"
              variant="contained" 
              color="primary"
              size="large"
              fullWidth
            >
              Send Message
            </Button>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
}`,

  themeCustomization: `import { 
  SistentThemeProvider, 
  Button, 
  useTheme,
  createTheme 
} from "@sistent/sistent";

// Custom theme configuration
const customTheme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      dark: '#115293',
      light: '#42a5f5',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
  },
});

function ThemedButton() {
  const theme = useTheme();
  
  return (
    <Button 
      variant="contained"
      sx={{ 
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        '&:hover': {
          backgroundColor: theme.palette.primary.dark,
        },
        borderRadius: 2,
        textTransform: 'none',
      }}
    >
      Custom Themed Button
    </Button>
  );
}

function App() {
  return (
    <SistentThemeProvider theme={customTheme}>
      <ThemedButton />
    </SistentThemeProvider>
  );
}`,

  importStrategies: `// ✅ Recommended: Individual component imports
import { Button } from "@sistent/sistent";
import { TextField } from "@sistent/sistent";
import { Card, CardContent } from "@sistent/sistent";

// ✅ Also good: Grouped imports for related components
import { 
  Typography,
  Box,
  Stack,
  Container
} from "@sistent/sistent";

// ❌ Avoid: Importing everything (increases bundle size)
import * as Sistent from "@sistent/sistent";`,

  iconUsage: `import { 
  Button, 
  IconButton, 
  Stack,
  Tooltip
} from "@sistent/sistent";
import { 
  Search as SearchIcon,
  Menu as MenuIcon,
  Download as DownloadIcon,
  Favorite as FavoriteIcon
} from "@sistent/sistent";

function IconExamples() {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      {/* Button with start icon */}
      <Button 
        startIcon={<SearchIcon />} 
        variant="contained"
      >
        Search
      </Button>
      
      {/* Button with end icon */}
      <Button 
        endIcon={<DownloadIcon />} 
        variant="outlined"
      >
        Download
      </Button>
      
      {/* Icon-only buttons */}
      <Tooltip title="Menu">
        <IconButton aria-label="menu" size="large">
          <MenuIcon />
        </IconButton>
      </Tooltip>
      
      <Tooltip title="Add to favorites">
        <IconButton aria-label="favorite" color="secondary">
          <FavoriteIcon />
        </IconButton>
      </Tooltip>
    </Stack>
  );
}`,

  responsiveUsage: `import { 
  Card, 
  CardContent, 
  Typography,
  Box
} from "@sistent/sistent";

function ResponsiveGrid() {
  return (
    <Box sx={{ p: 2 }}>
      <div style={{ 
        display: "grid", 
        gap: "16px",
        gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))"
      }}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Responsive Card 1
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This card adapts to different screen sizes automatically.
            </Typography>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Responsive Card 2
            </Typography>
            <Typography variant="body2" color="text.secondary">
              On mobile, cards stack vertically for better readability.
            </Typography>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Responsive Card 3
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Grid system provides flexible layouts across all devices.
            </Typography>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Responsive Card 4
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Design system ensures visual unity.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </Box>
  );
}`
};

const SistentUsage = () => {
  const { isDark } = useStyledDarkMode();

  return (
    <SistentWrapper>
      <div className="page-header-section">
        <h1>Usage Guide</h1>
      </div>

      <TOC />
      <div className="page-section">
        <Container className="components-container">
          <div className="content">
            <a id="overview">
              <h2>Overview</h2>
            </a>
            <section>
              <p>
                After installing Sistent, you can immediately start using components in your React application.
                The most important step is wrapping your application with the
                <code> SistentThemeProvider </code>
                 to ensure all components have access to the theme context.
              </p>

              <Alert severity="info" sx={{ my: 2 }}>
                <strong>Prerequisites:</strong> Ensure you have React 16.8+ and have installed Sistent using
                <code style={{ margin: "0 4px" }}>npm install @sistent/sistent</code>
              </Alert>

              <h3>Quick Start Example</h3>
              <p>
                Here's the minimal setup to get started with Sistent:
              </p>

              <div className="showcase">
                <div className="items">
                  <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                    <Button variant="contained" color="primary">
                      Hello Sistent!
                    </Button>
                  </SistentThemeProvider>
                </div>
                <CodeBlock name="basic-usage" code={codeExamples.basicUsage} />
              </div>
            </section>

            {/* Theme Provider Section */}
            <h2>Theme Provider Setup</h2>
            <section id="theme-provider">
              <p>
                The <code>SistentThemeProvider</code> is the foundation of your Sistent application.
                It provides theme context, manages color modes, and ensures consistent styling across all components.
              </p>

              <h3>Theme Configuration</h3>
              <p>
                Configure your theme provider with various options:
              </p>

              <div className="showcase">
                <CodeBlock name="Theme-provider" code={codeExamples.themeProvider} />
              </div>

              <div className="parameter-table">
                <h4>Theme Provider Props</h4>
                <table>
                  <thead>
                    <tr>
                      <th>Prop</th>
                      <th>Type</th>
                      <th>Default</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>initialMode</code></td>
                      <td><code>"light" | "dark" | "system"</code></td>
                      <td><code>"system"</code></td>
                      <td>Sets the initial color mode</td>
                    </tr>
                    <tr>
                      <td><code>theme</code></td>
                      <td><code>Theme</code></td>
                      <td>Default theme</td>
                      <td>Custom theme object</td>
                    </tr>
                    <tr>
                      <td><code>children</code></td>
                      <td><code>ReactNode</code></td>
                      <td>-</td>
                      <td>Your application components</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <Alert severity="warning" sx={{ my: 3 }}>
                <strong>Important:</strong> Place the <code>SistentThemeProvider</code> at the root of your
                component tree, typically in your <code>App.js</code> or <code>index.js</code> file.
              </Alert>
            </section>

            {/* Component Examples Section */}
            <section id="component-examples">
              <h2>Component Examples</h2>
              <p>
                Explore practical examples of Sistent components with different configurations and use cases.
              </p>

              <h3>Button Variations</h3>
              <p>
                Sistent provides multiple button variants, colors, and sizes to fit different design needs:
              </p>

              <div className="showcase">
                <div className="items">
                  <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
                      <Button variant="contained" color="primary">Contained</Button>
                      <Button variant="outlined" color="secondary">Outlined</Button>
                      <Button variant="text">Text Button</Button>
                      <Button variant="contained" disabled>Disabled</Button>
                    </div>
                  </SistentThemeProvider>
                </div>
                <CodeBlock name="button-variants" code={codeExamples.buttonVariants} />
              </div>

              <h3>Interactive Form Example</h3>
              <p>
                A complete form example showcasing multiple components working together:
              </p>

              <div className="showcase">
                <div className="items">
                  <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                    <Card sx={{ maxWidth: 500, mx: "auto" }}>
                      <CardContent>
                        <Typography variant="h5" component="h2" gutterBottom>
                          Get in Touch
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                          Fill out the form below and we'll get back to you soon.
                        </Typography>
                        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                          <TextField
                            label="Full Name"
                            variant="outlined"
                            fullWidth
                            size="small"
                          />
                          <TextField
                            label="Email Address"
                            type="email"
                            variant="outlined"
                            fullWidth
                            size="small"
                          />
                          <TextField
                            label="Message"
                            multiline
                            rows={3}
                            variant="outlined"
                            fullWidth
                            size="small"
                          />
                          <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{ mt: 1 }}
                          >
                            Send Message
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </SistentThemeProvider>
                </div>
                <CodeBlock name="form-example" code={codeExamples.formExample} />
              </div>
            </section>

            {/* Advanced Usage Section */}
            <h2>Advanced Usage</h2>
            <section id="advanced-usage">

              <h3>Theme Customization</h3>
              <p>
                Create custom themes and use the theme hook for advanced styling:
              </p>

              <div className="showcase">
                <CodeBlock name="theme-customization" code={codeExamples.themeCustomization} />
              </div>

              <h3>Import Strategies</h3>
              <p>
                Optimize your bundle size with smart import strategies:
              </p>

              <div className="showcase">
                <CodeBlock name="import-strategies" code={codeExamples.importStrategies} />
              </div>

              <h3>Working with Icons</h3>
              <p>
                Integrate Sistent's comprehensive icon library:
              </p>

              <div className="showcase">
                <div className="items">
                  <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                    <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
                      <Button startIcon="🔍" variant="contained">Search</Button>
                      <Button endIcon="📥" variant="outlined">Download</Button>
                      <Button variant="text">Menu ☰</Button>
                      <Button variant="contained" color="secondary">❤️</Button>
                    </div>
                  </SistentThemeProvider>
                </div>
                <CodeBlock name="icon-usage" code={codeExamples.iconUsage} />
              </div>

              <h3>Responsive Design</h3>
              <p>
                Build responsive layouts with Sistent's grid system and breakpoint utilities:
              </p>
              <div className="showcase">
                <div className="items">
                  <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                    <div style={{ padding: "16px", backgroundColor: isDark ? "#1a1a1a" : "#f5f5f5", borderRadius: "8px" }}>
                      <div style={{ display: "grid", gap: "16px", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))" }}>
                        <Card>
                          <CardContent>
                            <Typography variant="h6" gutterBottom>
                              Responsive Card 1
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              This card adapts to different screen sizes automatically.
                            </Typography>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent>
                            <Typography variant="h6" gutterBottom>
                              Responsive Card 2
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              On mobile, cards stack vertically for better readability.
                            </Typography>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent>
                            <Typography variant="h6" gutterBottom>
                              Responsive Card 3
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Grid system provides flexible layouts across all devices.
                            </Typography>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent>
                            <Typography variant="h6" gutterBottom>
                              Responsive Card 4
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Design system ensures visual unity.
                            </Typography>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </SistentThemeProvider>
                </div>
                <CodeBlock name="responsive-usage" code={codeExamples.responsiveUsage} />
              </div>
            </section>
            {/* Best Practices Section */}
            <h2>Best Practices</h2>
            <section id="best-practices">
              <ul>
                <li>
                  <strong>Theme Provider:</strong> Always wrap your application root with <code>SistentThemeProvider</code>.
                  Place it as high as possible in your component tree to ensure all components
                  have access to the theme context.
                </li>

                <li>
                  <strong>Import Optimization:</strong> Import only the components you need to keep your bundle size minimal.
                  Use individual imports or group related components together rather than
                  importing everything.
                </li>

                <li>
                  <strong>Consistent Design:</strong> Use consistent component variants, colors, and sizing throughout your application.
                  Create reusable component wrappers for commonly used patterns.
                </li>

                <li>
                  <strong>Mobile-First:</strong> Leverage Sistent's responsive utilities and breakpoints to create mobile-first
                  designs. Test your components across different screen sizes.
                </li>

                <li>
                  <strong>Accessibility:</strong> Take advantage of Sistent's built-in accessibility features. Always provide
                  proper labels, ARIA attributes, and ensure adequate color contrast.
                </li>

                <li>
                  <strong>Theme Customization:</strong> Use design tokens and theme customization for styling rather than overriding
                  CSS directly. This ensures consistency and easier maintenance.
                </li>
              </ul>

              <Alert severity="success" sx={{ my: 3 }}>
                <strong>Pro Tip:</strong> Create a custom hook to manage commonly used theme values
                and component configurations across your application.
              </Alert>
            </section>
          </div>
          <SistentPagination />
        </Container>
        <IntraPage contents={contents} />
      </div>
    </SistentWrapper>
  );
};

export default SistentUsage;