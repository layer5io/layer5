import React, { useState } from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { Pagination, SistentThemeProvider } from "@layer5/sistent";
import { SistentLayout } from "../../sistent-layout";
import { CodeBlock } from "../button/code-block";
import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const codes = [
  // Basic pagination
  `
    <Pagination 
      count={10} 
      page={1} 
      onChange={(event, page) => handleChange(page)} 
    />
  `,
  // Pagination with size variants
  `
    <Pagination size="small" count={10} />
    <Pagination size="medium" count={10} />
    <Pagination size="large" count={10} />
  `,
  // Pagination with custom styling
  `
    <Pagination
      count={10}
      color="primary"
      variant="outlined"
      shape="rounded"
    />
  `,
  // Pagination with an outline
  `
    <Pagination
      count={10}
      variant="outlined"
      color="secondary"
    />
  `,
];

const PaginationCode = () => {
  const { isDark } = useStyledDarkMode();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

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
          {/* Basic Pagination */}
          <a id="Basic Pagination">
            <h3>Basic Pagination</h3>
          </a>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Pagination
                  count={10}
                  page={currentPage}
                  onChange={handlePageChange}
                />
              </SistentThemeProvider>
            </div>
            <CodeBlock name="basic-pagination" code={codes[0]} />
          </div>

          {/* Pagination Sizes */}
          <a id="Sizes">
            <h3>Pagination Sizes</h3>
          </a>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <Pagination size="small" count={10} />
                  <Pagination size="medium" count={10} />
                  <Pagination size="large" count={10} />
                </div>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="pagination-sizes" code={codes[1]} />
          </div>

          {/* Custom Styling */}
          <a id="Styling">
            <h3>Custom Styling</h3>
          </a>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Pagination
                  count={10}
                  color="primary"
                  variant="outlined"
                  shape="rounded"
                />
              </SistentThemeProvider>
            </div>
            <CodeBlock name="styled-pagination" code={codes[2]} />
          </div>

          {/* Pagination with Outline */}
          <a id="Outline">
            <h3>Pagination with Outline</h3>
          </a>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Pagination
                  count={10}
                  variant="outlined"
                  color="secondary"
                />
              </SistentThemeProvider>
            </div>
            <CodeBlock name="pagination-outline" code={codes[3]} />
          </div>
        </div>
      </div>
    </SistentLayout>
  );
};

export default PaginationCode;