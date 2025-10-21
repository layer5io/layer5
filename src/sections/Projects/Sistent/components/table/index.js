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

  // Sample data for demonstration
  const sampleData = [
    {
      id: 1,
      name: "John Doe",
      role: "Software Engineer",
      location: "New York",
      startDate: "2023-01-15",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Product Manager",
      location: "San Francisco",
      startDate: "2022-08-22",
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "Designer",
      location: "Austin",
      startDate: "2023-03-10",
    },
    {
      id: 4,
      name: "Sarah Wilson",
      role: "Data Scientist",
      location: "Seattle",
      startDate: "2022-11-05",
    },
  ];

  const sampleColumns = [
    {
      name: "id",
      label: "ID",
      options: {
        filter: false,
        sort: true,
        searchable: false,
      },
    },
    {
      name: "name",
      label: "Name",
      options: {
        filter: true,
        sort: true,
        searchable: true,
      },
    },
    {
      name: "role",
      label: "Role",
      options: {
        filter: true,
        sort: true,
        searchable: true,
      },
    },
    {
      name: "location",
      label: "Location",
      options: {
        filter: true,
        sort: true,
        searchable: true,
      },
    },
    {
      name: "startDate",
      label: "Start Date",
      options: {
        filter: false,
        sort: true,
        searchable: false,
      },
    },
  ];

  // Responsive column configuration
  const sampleColViews = [
    ["id", "xs"],
    ["name", "xs"],
    ["role", "sm"],
    ["location", "md"],
    ["startDate", "lg"],
  ];

  const [sampleTableCols, updateSampleCols] = useState(sampleColumns);
  const [sampleColumnVisibility] = useState(() => {
    const initialVisibility = {};
    sampleColumns.forEach((col) => {
      initialVisibility[col.name] = true;
    });
    return initialVisibility;
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
            className={
              location.pathname === "/projects/sistent/components/table"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/table")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/table/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/table/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/table/code"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/table/code")}
            title="Code"
          />
        </div>
        <div className="main-content">
          <p>
            Tables organize and display data in rows and columns, making it easy
            for users to scan, compare, and analyze information efficiently.
          </p>
          <a id="Types">
            <h2>Types</h2>
          </a>
          <p>
            Tables come in different variants to accommodate various data
            presentation needs and interface requirements.
          </p>
          <h3>Basic Table</h3>
          <p>
            A simple table displays data in rows and columns with minimal
            styling, perfect for straightforward data presentation.
          </p>
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
          <a id="Features">
            <h2>Features</h2>
          </a>
          <p>
            Tables support various features to enhance data interaction and user
            experience.
          </p>
          <h3>Sorting</h3>
          <p>
            Enable column sorting to allow users to organize data in ascending
            or descending order based on column values.
          </p>
          <h3>Filtering</h3>
          <p>
            Built-in search and filtering capabilities help users quickly find
            specific data within large datasets.
          </p>
          <h3>Pagination</h3>
          <p>
            Pagination controls manage large datasets by dividing content into
            manageable chunks with navigation controls.
          </p>
          <a id="Accessibility">
            <h2>Accessibility</h2>
          </a>
          <p>
            Tables include accessibility features to ensure they're usable by
            all users, including those with assistive technologies.
          </p>
          <h3>Essential Properties</h3>
          <ul>
            <li>
              <strong>Keyboard navigation:</strong> Full keyboard support for
              navigating table content
            </li>
            <li>
              <strong>Screen reader support:</strong> Proper table structure
              with headers and labels
            </li>
            <li>
              <strong>Focus management:</strong> Clear focus indicators for
              interactive elements
            </li>
            <li>
              <strong>ARIA labels:</strong> Descriptive labels for complex table
              functionality
            </li>
          </ul>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentTable;
