import React, { useState } from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { SistentThemeProvider, Pagination, Box } from "@layer5/sistent";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
import { Row } from "../../../../../reusecore/Layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const SistentPagination = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
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
          <p>
            Pagination is an essential element for navigating large datasets or
            multiple pages of information. It enables users to move between
            pages in a user-friendly and intuitive manner. Pagination helps to
            split large content into smaller sections to improve the overall
            user experience.
          </p>

          <a id="Basic Usage">
            <h2>Basic Usage</h2>
          </a>
          <p>
            Basic pagination allows users to navigate through numbered pages.
            The current page is highlighted, and users can click on page numbers
            or arrows to move between pages.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Pagination count={10} page={page} onChange={handleChange} />
            </SistentThemeProvider>
          </Row>

          <a id="Variants">
            <h2>Variants</h2>
          </a>
          <p>
            The Pagination component supports multiple variants to match your
            design needs, including outlined, text, and contained styles. These
            variants provide flexibility in integrating the component into your
            layout while maintaining a consistent visual appearance.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Pagination count={10} variant="outlined" />
                <Pagination count={10} variant="text" />
              </Box>
            </SistentThemeProvider>
          </Row>

          <a id="Sizes">
            <h2>Sizes</h2>
          </a>
          <p>
            The Pagination component can also be customized in terms of size to
            suit different use cases. For smaller screens, compact pagination
            may be preferred, while larger pagination can be used for better
            visibility on larger screens.
          </p>
          <h3>Large</h3>
          <p>
            A larger pagination component that enhances visibility and
            interaction on larger displays.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Pagination
                count={10}
                size="large"
                page={page}
                onChange={handleChange}
              />
            </SistentThemeProvider>
          </Row>

          <h3>Medium</h3>
          <p>
            A medium-sized pagination component that balances compactness and
            visibility.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Pagination
                count={10}
                size="medium"
                page={page}
                onChange={handleChange}
              />
            </SistentThemeProvider>
          </Row>

          <h3>Small</h3>
          <p>
            A smaller pagination component suitable for compact designs or when
            screen real estate is limited.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Pagination
                count={10}
                size="small"
                page={page}
                onChange={handleChange}
              />
            </SistentThemeProvider>
          </Row>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentPagination;