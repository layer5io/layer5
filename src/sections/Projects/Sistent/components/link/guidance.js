import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { Row } from "../../../../../reusecore/Layout";
import { SistentThemeProvider, Link, ExternalLinkIcon } from "@layer5/sistent";
import { SistentLayout } from "../../sistent-layout";

import TabButton from "../../../../../reusecore/Button";
import StyledButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const LinkGuidancePage = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="Link">
      <div className="content">
        <a id="Identity">
          <h2>Link</h2>
        </a>
        <p>
          A link component is a navigational element that directs users to
          another page or section within an application.
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
              location.pathname === "/projects/sistent/components/link/guidance"
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
            Links are fundamental components in web navigation, allowing users
            to move between different pages or resources. Their design and
            implementation are crucial for creating a seamless browsing
            experience.
          </p>
          <a id="Function">
            <h2>Function</h2>
          </a>
          <p>Links too have a lot many functions as:</p>
          <h3>Navigation Links</h3>
          <p>
            These links help users navigate through a website, directing them to
            important sections or related content. They should be easily
            accessible and clearly labeled to enhance usability.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Link
                href="https://layer5.io/projects/sistent/components/link/guidance" // Specify the path you want to navigate to
                style={{
                  marginLeft: "10px",
                  textDecoration: "none",
                  color: "green", // Change color based on the theme
                  padding: "6px",
                }}
              >
                Navigate to Layer 5
              </Link>
            </SistentThemeProvider>
          </Row>
          <h3>Call to Action (CTA) Links</h3>
          <p>
            CTA links encourage users to take specific actions, such as signing
            up for a newsletter or downloading a resource. They should stand out
            visually to attract user attention and drive engagement.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <StyledButton
                $primary
                $url=""
                className="button"
                $external={false}
              >
                <Link
                  href="https://layer5.io/projects/sistent/components/link/guidance" // Specify the path you want to navigate to
                  style={{
                    marginLeft: "10px",
                    textDecoration: "none",
                    padding: "6px",
                  }}
                >
                  Get Started
                </Link>
              </StyledButton>
            </SistentThemeProvider>
          </Row>
          <h3>External Links</h3>
          <p>
            These links direct users to external websites. It’s important to
            provide clear indicators (like icons or different styles) that these
            links lead to external content, which helps users manage their
            navigation expectations.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Link
                href="https://layer5.io/projects/sistent/components/link/guidance"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginLeft: "10px",
                  textDecoration: "none",
                  padding: "6px",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.textDecoration = "underline")
                }
                onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
              >
                Visit External Resource <ExternalLinkIcon />
              </Link>
            </SistentThemeProvider>
          </Row>

          <a id="Labeling">
            <h2>Labeling</h2>
          </a>
          <p>
            Link labels are vital for communicating the action associated with
            the link. Labels should be concise, informative, and use
            action-oriented language (e.g., "Download Report," "Learn More") to
            guide users effectively.
          </p>
          <h3>Case Style</h3>
          <p>
            Consistency in the case style of link text improves readability and
            enhances the overall aesthetic of the website. Using a uniform
            style, such as sentence case or title case, contributes to a more
            professional appearance.
          </p>
          <h3>Font Weight</h3>
          <p>
            The weight of the font in link text can signify importance and
            attract user attention. A bolder font can indicate a primary action,
            while a lighter font may denote secondary options. Legibility is
            essential for ensuring that links are easy to read.
          </p>
          <h3>Text Decoration</h3>
          <p>
            Links typically use underlines to distinguish them from regular
            text. However, it’s important to maintain the underline for
            accessibility and usability, as users often associate underlined
            text with clickable links. Consider hover effects to provide visual
            feedback.
          </p>
        </div>
      </div>
    </SistentLayout>
  );
};

export default LinkGuidancePage;
