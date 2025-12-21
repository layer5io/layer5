import React, { useState } from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import { SistentThemeProvider, ResponsiveDataTable } from "@sistent/sistent";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
import { Col, Row } from "../../../../../reusecore/Layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const SistentTable = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  const sampleData = [
    { id: 1, name: "John Doe", role: "Software Engineer", location: "New York", startDate: "2023-01-15" },
    { id: 2, name: "Jane Smith", role: "Product Manager", location: "San Francisco", startDate: "2022-08-22" },
    { id: 3, name: "Mike Johnson", role: "Designer", location: "Austin", startDate: "2023-03-10" },
    { id: 4, name: "Sarah Wilson", role: "Data Scientist", location: "Seattle", startDate: "2022-11-05" },
  ];

  const sampleColumns = [
    { name: "id", label: "ID", options: { filter: false, sort: true } },
    { name: "name", label: "Name", options: { filter: true, sort: true } },
    { name: "role", label: "Role", options: { filter: true, sort: true } },
    { name: "location", label: "Location", options: { filter: true, sort: true } },
    { name: "startDate", label: "Start Date", options: { sort: true } },
  ];

  const sampleColViews = [
    ["id", "xs"],
    ["name", "xs"],
    ["role", "sm"],
    ["location", "md"],
    ["startDate", "lg"],
  ];

  const [sampleTableCols, updateSampleCols] = useState(sampleColumns);

  const [sampleColumnVisibility] = useState(() => {
    const visible = {};
    sampleColumns.forEach((col) => (visible[col.name] = true));
    return visible;
  });

  const basicOptions = {
    responsive: "simple",
    selectableRows: "none",
    elevation: 0,
    search: false,
    filter: false,
    viewColumns: false,
    print: false,
    download: false,
  };

  return (
    <SistentLayout title="Table">
      <div className="content">
        <a id="Identity">
          <h2>Table</h2>
        </a>

        <p>
          Table components provide a flexible way to display tabular data with
          features like sorting, filtering, pagination, and responsive design.
        </p>

        <div className="filterBtns">
          <TabButton
            className={location.pathname === "/projects/sistent/components/table" ? "active" : ""}
            onClick={() => navigate("/projects/sistent/components/table")}
            title="Overview"
          />

          <TabButton
            className={location.pathname === "/projects/sistent/components/table/guidance" ? "active" : ""}
            onClick={() => navigate("/projects/sistent/components/table/guidance")}
            title="Guidance"
          />

          <TabButton
            className={location.pathname === "/projects/sistent/components/table/code" ? "active" : ""}
            onClick={() => navigate("/projects/sistent/components/table/code")}
            title="Code"
          />
        </div>

        <div className="main-content">
          <h3>Basic Table</h3>

          <Row $Hcenter className="image-container">
            <Col sm={12}>
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <ResponsiveDataTable
                  data={sampleData}
                  columns={sampleColumns}
                  options={basicOptions}
                  colViews={sampleColViews}
                  tableCols={sampleTableCols}
                  updateCols={updateSampleCols}
                  columnVisibility={sampleColumnVisibility}
                />
              </SistentThemeProvider>
            </Col>
          </Row>

          <h3>Responsive Table</h3>
          <p>
            Responsive tables adapt to different screen sizes, providing optimal
            viewing experience across devices.
          </p>

          <a id="Accessibility">
            <h2>Accessibility</h2>
          </a>

          <ul>
            <li>Keyboard navigation</li>
            <li>Screen reader support</li>
            <li>Focus indicators</li>
            <li>ARIA labels</li>
          </ul>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentTable;
