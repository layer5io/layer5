import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import {
  SistentThemeProvider,
  ResponsiveDataTable
} from "@layer5/sistent";
import { SistentLayout } from "../../sistent-layout";
import { CodeBlock } from "../button/code-block";
import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const codes = [
  // Basic Table
  `
      <ResponsiveDataTable
        columns={[
          { name: "column1", label: "Column 1" },
          { name: "column2", label: "Column 2" }
        ]}
        data={[
          ["Row 1", "Data 1"]
        ]}
        columnVisibility={{
          column1: true,
          column2: true
        }}
      />
    `
];

const TableCode = () => {
  const { isDark } = useStyledDarkMode();
  const location = useLocation();

  return (
    <SistentLayout title="Table">
      <div className="content">
        <a id="Identity">
          <h2>Table</h2>
        </a>
        <p>
          To use the ResponsiveDataTable component from Layer5's Sistent design system, you need to provide columns configuration, data, and column visibility settings. The columns configuration defines each column's display properties, while the data array contains the actual table content. The responsive table provides advanced features like sorting, pagination, and customizable cell rendering, creating a powerful and accessible data display solution that adapts to different screen sizes.
        </p>

        {/* Navigation Tabs */}
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

        {/* Basic Table */}
        <h3>Basic Table</h3>
        <div className="showcase">
          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <ResponsiveDataTable
              columns={[
                { name: "column1", label: "Column 1" },
                { name: "column2", label: "Column 2" }
              ]}
              data={[
                ["Row 1", "Data 1"]
              ]}
              columnVisibility={{
                column1: true,
                column2: true
              }}
            />
          </SistentThemeProvider>
          <CodeBlock name="basic-table" code={codes[0]} />
        </div>
      </div>
    </SistentLayout>
  );
};

export default TableCode;