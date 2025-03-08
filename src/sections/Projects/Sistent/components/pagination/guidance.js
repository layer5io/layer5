import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { Row } from "../../../../../reusecore/Layout";
import { SistentThemeProvider, Pagination } from "@layer5/sistent";
import { SistentLayout } from "../../sistent-layout";
import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const PaginationGuidance = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="Pagination">
      <div className="content">
        <a id="Identity">
          <h2>Pagination</h2>
        </a>
        <p>
          The Pagination component helps users navigate through multiple pages
          of content. It provides a clear interface for moving between pages and
          understanding the current position within a larger dataset.
        </p>

        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/pagination"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/pagination")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/pagination/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/pagination/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/pagination/code"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/pagination/code")
            }
            title="Code"
          />
        </div>

        <div className="main-content">
          <a id="Usage Guidelines">
            <h2>Usage Guidelines</h2>
          </a>

          <h3>When to Use</h3>
          <p>
            Pagination should be used when displaying large datasets that need
            to be broken into manageable chunks. It helps users navigate through
            multiple pages of content and is beneficial when content needs to be
            loaded incrementally to improve performance.
          </p>

          <h3>Best Practices</h3>
          <p>
            To ensure a smooth user experience, it’s important to keep page
            sizes consistent throughout the interface. The current page number
            and total pages should be displayed clearly. Adequate spacing
            between page numbers should be ensured to improve readability. It’s
            also crucial to provide clear visual feedback for the current page.
            For large page ranges, consider using ellipsis (...) to represent
            skipped pages.
          </p>

          <h3>Accessibility</h3>
          <p>
            To make pagination more accessible, ensure that ARIA labels are used
            to identify the pagination controls. Keyboard navigation should be
            properly supported to allow users to navigate through the pages
            easily. It’s important to provide clear visual indicators for focus
            states and maintain adequate color contrast for all states to ensure
            readability.
          </p>

          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Pagination
                count={10}
                defaultPage={1}
                aria-label="Pagination navigation"
              />
            </SistentThemeProvider>
          </Row>
        </div>
      </div>
    </SistentLayout>
  );
};

export default PaginationGuidance;