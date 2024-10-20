import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import { SistentThemeProvider, Link } from "@layer5/sistent";
import { CodeBlock } from "./code-block";
// import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";
import { SistentLayout } from "../../sistent-layout";

import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const codes = [
  `<SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
    <Link
      href="Your Link"
      style={{
        textDecoration: "none",
        border: "1px solid black",
        padding: "6px",
        marginLeft: "10px",
      }}
    >
      Simple Link
    </Link>
  </SistentThemeProvider>`,

  `<SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
    <Link
      href="Your Path"
      style={{
        textDecoration: "none",
        border: "1px solid blue",
        color: "blue",
        padding: "6px",
        marginLeft: "10px",
      }}
    >
      Customized Link 1
    </Link>
  </SistentThemeProvider>`,

  `<SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
  <Link
    href="Your Path"
    style={{
      textDecoration: "underline",
      color: "blue",
      padding: "6px",
      marginLeft: "10px",
    }}
  >
    Underlined Link 
  </Link>
</SistentThemeProvider>
`,

  ` <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
      <Link
        href="Your Path"
        style={{
          textDecoration: "none",
          color: "green",
          fontWeight: "bold",
          fontSize: "16px",
          padding: "6px",
          marginLeft: "10px",
          borderBottom: "2px dashed green",
        }}
      >
        Customized Link
      </Link>
    </SistentThemeProvider>`,

    ` <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
      <Link
        href="/path-to-file.zip"
        download="file.zip"
        style={{
          color: "blue",
          fontWeight: "bold",
          fontSize: "16px",
          padding: "6px",
          marginLeft: "10px",
          borderBottom: "2px solid blue",
        }}
      >
        Download File
      </Link>
    </SistentThemeProvider>`,

    ` <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
      <Link
        href="https://your-link.com" 
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: "underline",
          color: "blue",
          padding: "6px",
          marginLeft: "10px",
        }}
      >
        Visit Secure Link
      </Link>
    </SistentThemeProvider>`
];

export const LinkCode = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="Link" >
      <div className="content">
        <a id="Identity">
          <h2>Link</h2>
        </a>
        <p>
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
            onClick={() => navigate("/projects/sistent/identity/color/code")}
            title="Code"
          />
        </div>
        <div className="main-content">
          <p>
          Links are fundamental components in web navigation, allowing users to move between different pages or resources. Their design and implementation are crucial for creating a seamless browsing experience.
          </p>
          <a id="Simple Link">
            <h2>Simple Link</h2>
          </a>
          <p>The link can be presented in a simple format, primarily as underlined text that serves as a gateway to navigate users to other pages or resources, without any prominent styling or buttons attached to it.</p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Link
                  href="your path"
                  style={{
                    textDecoration: "none",
                    border: "1px solid black",
                    padding: "6px",
                    marginLeft: "10px",
                  }}
                >
                  Simple Link
                </Link>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="simple-link" code={codes[0]} />
          </div>
          <a id="Customized Links">
            <h2>Customized Links</h2>
          </a>
          <p>
          Customized Links enhance user experience by adapting their design and behavior to match the app’s theme. They can include personalized styles, hover effects, or icons, ensuring both visual consistency and improved usability across the website.
          </p>

          <h3>Colored Link</h3>
          <p>
          Colored Links can help draw attention to key areas of a page. They are styled with custom colors to stand out and indicate their importance, enhancing navigation and usability.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Link href="Your Path"
                  style={{
                    textDecoration: "none",
                    border: "1px solid blue",
                    color: "blue",
                    padding: "6px",
                    marginLeft: "10px",
                  }}
                >
                  Colored Link
                </Link>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="Colored-link" code={codes[1]} />
          </div>

          <h3>Underlined Link</h3>
          <p>
            Underlined Links, often referred to as ghost buttons, are styled primarily with text without any fills or borders. They utilize specific text styling and color to signify different states, making them easily identifiable and enhancing user navigation.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Link
                  href="Your Path"
                  style={{
                    textDecoration: "underline",
                    color: "blue",
                    padding: "6px",
                    border: "1px solid blue",
                    marginLeft: "10px",
                  }}
                >
                 Underlined Link
                </Link>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="underlined-link" code={codes[2]} />
          </div>

          <h3>Customized Link </h3>
          <p>
            Customized Links allow for distinct text styles and presentations that can enhance the user experience. By leveraging different styling properties, these links can be tailored to fit the design aesthetics of your application while maintaining functionality.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Link
                  href="Your Path"
                  style={{
                    textDecoration: "none",
                    color: "green",
                    fontWeight: "bold",
                    fontSize: "16px",
                    padding: "6px",
                    marginLeft: "10px",
                    borderBottom: "2px dashed green",
                  }}
                >
                  Customized Link
                </Link>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="customized-link" code={codes[3]} />
          </div>

          <h3>Download Link</h3>
          <p>
          Download Links are essential when you want to provide users with downloadable content such as files, PDFs, or documents. These links can be styled to clearly indicate a download action to the user.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Link
                  href="/path-to-file.zip"
                  download="file.zip"
                  style={{
                    textDecoration: "none",
                    color: "blue",
                    fontWeight: "bold",
                    fontSize: "16px",
                    padding: "6px",
                    marginLeft: "10px",
                    borderBottom: "2px solid blue",
                  }}
                >
                  Download File
                </Link>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="download-link" code={codes[4]} />
          </div>

          <a id="Security Considerations">
            <h2>Security Considerations</h2>
          </a>
          <p>
          When utilizing links we should use them with the target="_blank" attribute, it's essential to implement rel="noopener" or rel="noreferrer" to enhance security and user privacy
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Link
                  href="https://your-link.com" // Replace with the actual link
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "underline",
                    color: "blue",
                    padding: "6px",
                    marginLeft: "10px",
                  }}
                >
                  Visit Secure Link
                </Link>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="secure_links" code={codes[5]} />
          </div>
        </div>
      </div>
    </SistentLayout>
  );
};
