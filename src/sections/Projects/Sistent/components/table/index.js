import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import {
  ResponsiveDataTable,
  SistentThemeProvider,
} from "@layer5/sistent";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
import { Row } from "../../../../../reusecore/Layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

// Sample table data and columns configuration
const columns = [
  { name: "id", label: "ID" },
  { name: "name", label: "Name" },
  { name: "age", label: "Age" },
  { name: "role", label: "Role" }
];

const data = [
  ["1", "John Doe", "25", "Developer"],
  ["2", "Jane Smith", "28", "Designer"],
  ["3", "Sam Wilson", "30", "Manager"]
];

const columnVisibility = {
  id: true,
  name: true,
  age: true,
  role: true
};

const SistentTable = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="Table">
      <div className="content">
        <a id="Identity">
          <h2>Table</h2>
        </a>

        {/* 🔰 Introduction to Sistent Table */}
        <p>
          The <code>ResponsiveDataTable</code> component in the Sistent design system provides
          a powerful solution for displaying tabular data with built-in responsiveness,
          sorting, filtering, and pagination capabilities. It's designed to display structured
          data in a clean, accessible way that adapts to different screen sizes.
        </p>

        {/* Navigation Tabs */}
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/table" ? "active" : ""
            }
            onClick={() => navigate("/projects/sistent/components/table")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/table/guidance" ? "active" : ""
            }
            onClick={() => navigate("/projects/sistent/components/table/guidance")}
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/table/code" ? "active" : ""
            }
            onClick={() => navigate("/projects/sistent/components/table/code")}
            title="Code"
          />
        </div>

        {/* Basic Table */}
        <div className="main-content">
          <a id="Basic Usage">
            <h2>Basic Usage</h2>
          </a>
          <p>A responsive data table displaying structured data with built-in features.</p>

          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <ResponsiveDataTable
                columns={columns}
                data={data}
                columnVisibility={columnVisibility}
                options={{
                  elevation: 0,
                  responsive: "standard"
                }}
              />
            </SistentThemeProvider>
          </Row>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentTable;
