import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { ThemeProvider } from "styled-components";
import Code from "./src/components/CodeBlock";
import CTA_ImageOnly from "./src/components/Call-To-Actions/CTA_ImageOnly";
import CTA_FullWidth from "./src/components/Call-To-Actions/CTA_FullWidth";
import CTA_Bottom from "./src/components/Call-To-Actions/CTA_Bottom";
import { ContextWrapper } from "./context-wrapper";
import SimpleReactLightbox from "simple-react-lightbox";
import theme from "./src/theme/app";

// Custom image component for better CLS scores
const OptimizedImage = props => {
  return (
    <div style={{ width: "100%", height: "auto", aspectRatio: props.aspectRatio || "16/9", overflow: "hidden" }}>
      <img
        {...props}
        width={props.width || "100%"}
        height={props.height || "auto"}
        style={{
          objectFit: props.objectFit || "cover",
          aspectRatio: props.aspectRatio || "16/9",
          ...props.style
        }}
        loading="lazy"
        alt={props.alt || "Blog content image"}
      />
    </div>
  );
};

// Import Material UI components conditionally for SSR
const MaterialComponents = typeof window !== "undefined"
  ? require("./src/components/MaterialComponents")
  : {
    // Provide SSR-safe stubs for Material UI components
    Card: () => null,
    CardContent: () => null,
    CardActions: () => null,
    Typography: () => null,
    Divider: () => null,
    Box: () => null,
    Container: () => null,
    Grid: () => null,
    Paper: () => null,
    Button: () => null
  };

const components = {
  pre: ({ children: { props } }) => {
    if (props.mdxType === "code") {
      return (
        <Code
          codeString={props.children.trim()}
          language={
            props.className && props.className.replace("language-", "")
          }
          {...props}
        />
      );
    }
  },
  img: OptimizedImage,
  CTA_ImageOnly,
  CTA_FullWidth,
  CTA_Bottom,
  wrapper: ({ children }) => (
    <SimpleReactLightbox>
      <MDXProvider components={components}>{children}</MDXProvider>
    </SimpleReactLightbox>
  ),
  // Material-UI Components with SSR safety
  Card: MaterialComponents.Card,
  CardContent: MaterialComponents.CardContent,
  CardActions: MaterialComponents.CardActions,
  Typography: MaterialComponents.Typography,
  Divider: MaterialComponents.Divider,
  Box: MaterialComponents.Box,
  Container: MaterialComponents.Container,
  Grid: MaterialComponents.Grid,
  Paper: MaterialComponents.Paper,
  Button: MaterialComponents.Button
};

import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "./src/utils/createEmotionCache";

// Create emotion cache for SSR
const createCache = typeof window !== "undefined" ? createEmotionCache : () => {
  return {
    key: "mui-style",
    prepend: true
  };
};

export const wrapRootElement = ({ element }) => (
  <CacheProvider value={createCache()}>
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <ContextWrapper>
          <MDXProvider components={components}>
            {element}
          </MDXProvider>
        </ContextWrapper>
      </ThemeProvider>
    </MUIThemeProvider>
  </CacheProvider>
);