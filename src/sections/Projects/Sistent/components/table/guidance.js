import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import {
  SistentThemeProvider,
  ResponsiveDataTable
} from "@layer5/sistent";
import { SistentLayout } from "../../sistent-layout";
import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const TableGuidance = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  // Sample columns and data for the example
  const columns = [
    { name: "name", label: "Name" },
    { name: "age", label: "Age" },
    { name: "city", label: "City" }
  ];

  const data = [
    ["John Doe", "28", "New York"],
    ["Jane Smith", "34", "London"]
  ];

  const columnVisibility = {
    name: true,
    age: true,
    city: true
  };

  return (
    <SistentLayout title="Table">
      <div className="content">
        <a id="Identity">
          <h2>Table</h2>
        </a>
        <p>
          The <code>ResponsiveDataTable</code> component from the Sistent design system provides a powerful solution for displaying tabular data with built-in responsiveness, sorting, filtering, and pagination capabilities. It's designed to display data in a way that adapts to different screen sizes while maintaining accessibility and consistent styling.
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

        <div className="main-content">
          <a id="BasicTable">
            <h2>How to Use</h2>
          </a>

          <p>Here's a breakdown of the key properties of the ResponsiveDataTable component:</p>

          <ul>
            <li>
              <strong>columns</strong>: An array of column configurations. Each column object requires a name and label property, and can have additional options for customization.
            </li>
            <li>
              <strong>data</strong>: A 2D array containing the table data. Each inner array represents a row of data.
            </li>
            <li>
              <strong>columnVisibility</strong>: An object mapping column names to boolean values to control which columns are displayed.
            </li>
            <li>
              <strong>options</strong>: Additional configuration options for the table, such as pagination settings, row selection, and display options.
            </li>
            <li>
              <strong>rowsPerPageOptions</strong>: An array of numbers to set the options for rows per page in the pagination.
            </li>
          </ul>

          <p>Below is a simple example of how to use the ResponsiveDataTable component:</p>

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

          <p>
            You can customize your table by setting additional options, creating custom cell renderers,
            adding action columns, implementing custom filtering, and more, based on your specific requirements.
          </p>
        </div>
      </div>
    </SistentLayout>
  );
};

export default TableGuidance;
