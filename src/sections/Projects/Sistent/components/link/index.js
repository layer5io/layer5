import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import { SistentThemeProvider, Link } from "@layer5/sistent";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
import { Row } from "../../../../../reusecore/Layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const SistentLink = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="Link" >
      <div className="content">
        <a id="Identity">
          <h2>Link</h2>
        </a>
        <p>
        A link component is a navigational element that directs users to another page or section within an application.

        </p>
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/link"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/link")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/link/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/link/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/link/code"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/link/code")}
            title="Code"
          />
        </div>
        <div className="main-content">
          <p>
            Links are essential and integral components of an interface. They are primarily used for navigation, guiding users to the next step in a journey or redirecting them to relevant sections or pages. Links can be paired with other elements to create cohesive designs, enhancing the digital experience by providing smooth transitions and interaction cues.
          </p>
          <a id="Types of Links">
            <h2>Types of Links</h2>
          </a>
          <p>
          Links in an interface serve as vital elements for navigation and interaction. Multiple types of links are available to establish hierarchy, provide visual prominence, and enhance flexibility, guiding users towards their goals efficiently. With distinct styling and behaviors, links can help streamline user flows and create a cohesive user experience.
          </p>
          <h3>Simple Links</h3>
          <p>
          Basic anchor links with customizable colors and typography styles that inherit properties from the Typography component. This allows flexibility in styling with options like various text sizes or variants.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Link
                href="https://layer5.io/"
                style={{
                  marginLeft: "10px",
                  padding: "6px",
                }}
              >
                Simple Link
              </Link>
            </SistentThemeProvider>
          </Row>

          <h3>Customized Links</h3>
          <p>
            The links can be customized in the below mentioned way
          </p>
          <h4>1. Color</h4>
          <p>Nomally the color of Sistent Link is green , but on adding styling properties, You can customize link colors with predefined values such as primary, secondary, error, success, warning, info, or inherit existing text colors like Blue, Red.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Link
                href="https://layer5.io/"
                style={{
                  marginLeft: "10px",
                  textDecoration: "none",
                  color: "blue",
                  padding: "6px",
                }}
              >
                Customized Link 1
              </Link>
            </SistentThemeProvider>
          </Row>

          <h4>2. Underlining</h4>
          <p>
            Also known as ghost buttons, text buttons are mostly just what the
            name implies; they are buttons without fills or borders which might
            just have a specific text styling and color to denote different
            states for easier identification.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Link
                href="https://layer5.io/"
                style={{
                  marginLeft: "10px",
                  textDecoration: "underline",
                  padding: "6px",
                }}
              >
              Customized Link 2
              </Link>

            </SistentThemeProvider>
          </Row>

          <h4>3. Variants</h4>
          <p>
          Links can have various text styles using the different styling property
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Link
                href="https://layer5.io/"
                style={{
                  marginLeft: "10px",
                  textDecoration: "underline",
                  color: "blue",
                  padding: "6px",
                  border: "2px solid green",
                }}
                variant="body1"
              >
                Customized Link 3
              </Link>
            </SistentThemeProvider>
          </Row>

          <a id="Security">
            <h2>Security</h2>
          </a>
          <p>
              When using <code>target="_blank"</code> with links, it's crucial to include
            <code>rel="noopener"</code> or <code>rel="noreferrer"</code> for security reasons:
          </p>
          <ul>
            <li><strong>Prevent Access:</strong> <code>rel="noopener"</code> prevents the new page from accessing the
              <code>window.opener</code> property, securing your original page from potential malicious redirects.</li>
            <li><strong>Avoid Referer Leakage:</strong> <code>rel="noreferrer"</code> not only blocks the new page's
              access to your original page but also stops the Referer header from being sent, protecting user privacy.</li>
            <li><strong>Security Risk Mitigation:</strong> Using these attributes reduces the risk of phishing attacks
              and ensures that your site maintains control over its navigation and data.</li>
          </ul>
          <p>
              By following these practices, you can enhance the security of your web application and protect your users.
          </p>


          <a id="Optimization">
            <h2>Optimized Rendering of Links Using</h2>
          </a>

          <p>
          useMemo is a React hook that helps optimize the rendering of link components by memorizing computed values, which prevents unnecessary re-renders.
          </p>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentLink;
