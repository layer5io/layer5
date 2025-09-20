import React from "react";
import { Container } from "../../../../../reusecore/Layout";
import SistentWrapper from "../../sistent.style";
import TOC from "../../../../../components/SistentNavigation";
import IntraPage from "../../../../../components/handbook-navigation/intra-page";
import SistentPagination from "../../../../../components/SistentNavigation/pagination";
import { Link } from "gatsby";

const contents = [
  { id: 0, link: "#About Sistent", text: "About Sistent" },
  { id: 1, link: "#Key Features", text: "Key Features" },
  { id: 2, link: "#Brand Resources", text: "Brand Resources" }
];

const SistentAbout = () => {
  return (
    <SistentWrapper>
      <div className="page-header-section">
        <h1>About Sistent</h1>
      </div>
      <TOC />
      <div className="page-section">
        <Container>
          <div className="content">
            <a id="About Sistent">
              <h2>Overview</h2>
            </a>
            <p>
              Sistent is an open source design system that offers building blocks
              to create consistent, accessible, and user-friendly interfaces. It's
              aimed at developers who want to design applications aligned with the
              same brand and ensure a uniform user experience across different products.
            </p>
            <p>
              <b>
                Sistent provides a consistent user experience across any frontend
                software projects that choose to use it.
              </b>
            </p>
            <p>
              'Sistent' is a play on words to ensure that we have a{" "}
              <i>consistent</i> theme, components, design tokens, etc across all
              of the apps that will be using this library. Sistent is a design
              system that uses <b>MUI v5 components</b> with a{" "}
              <b>custom theme provider</b> instead of using the default theme
              from MUI v5.
            </p>
            <br/>
            <a id="Key Features">
              <h2>Key Features</h2>
            </a>
            <p>
              Sistent leverages Material UI libraries and provides a custom
              theme on top of it for a consistent look and feel. Key features include:
            </p>
            <ul>
              <li><strong>Consistent Design System:</strong> Unified components, icons, and design tokens across all Layer5 projects</li>
              <li><strong>Material UI Foundation:</strong> Built on top of MUI v5 with custom theming</li>
              <li><strong>Comprehensive Token System:</strong> Color, typography, and spacing tokens for consistent design</li>
              <li><strong>Accessibility First:</strong> Components designed with accessibility in mind</li>
              <li><strong>Large Icon Collection:</strong> Extensive collection of icons for various use cases</li>
              <li><strong>Theme Flexibility:</strong> Light and dark mode support with customizable themes</li>
            </ul>
            <br/>
            <a id="Brand Resources">
              <h2>Brand Resources</h2>
            </a>
            <p>
              Layer5 provides comprehensive brand resources to ensure consistent
              branding across all applications and materials:
            </p>
            <ul>
              <li><Link to="/brand/brand-guide.pdf">Brand Guide</Link> - Complete brand guidelines and usage instructions</li>
              <li><Link to="/brand">Logos and Brand Kits</Link> - Official logos, colors, and brand assets</li>
            </ul>
            <p>
              These resources work hand-in-hand with Sistent to maintain brand
              consistency across the entire Layer5 ecosystem.
            </p>
          </div>
          <SistentPagination />
        </Container>
        <IntraPage contents={contents} />
      </div>
    </SistentWrapper>
  );
};

export default SistentAbout;