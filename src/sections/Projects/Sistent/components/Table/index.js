
import React from "react";
import { SistentLayout } from "../../sistent-layout";
import TabButton from "../../../../../reusecore/Button";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { ResponsiveDataTable, SistentThemeProvider } from "@layer5/sistent";
import { basicColumns, basicData, basicOptions, customColumns, customData, options } from "./table-column";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
import { useState } from "react";

export const DataTable = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();
  const [tableCols, updateCols] = useState(basicColumns);
  const [customTableCols, updateCustomCols] = useState(customColumns);
  return (
    <SistentLayout title="Table">
      <div className="content">
        <a id="Identity">
          <h2>Table</h2>
        </a>
        <p>
            Datatables is a responsive datatables component. It comes with features like filtering, resizable columns, view/hide columns, draggable columns, search, export to CSV download, printing, selectable rows, expandable rows, pagination, and sorting. On top of the ability to customize styling on most views, there are three responsive modes "vertical", "standard", and "simple" for mobile/tablet devices.
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
          {/* <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/modal/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/modal/guidance")
            }
            title="Guidance"
          /> */}
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
            Tables display information in a way that's easy to scan, so that users can look for patterns and insights. They can be embedded in primary content, such as cards. They can include:

            - A corresponding visualization
            - Tools to query and manipulate data
            - Controls for adjusting the visualization

          </p>
          <h3>Basic</h3>
          <p>
            A simple example of a table with three columns: Name, Type, and Description.
          </p>
          <SistentThemeProvider  initialMode={isDark ? "dark" : "light"} >
            <ResponsiveDataTable
              columns={basicColumns}
              data={basicData}
              options={basicOptions}
              tableCols={tableCols}
              updateCols={updateCols}
            />
          </SistentThemeProvider>

          <h3>Sorting and Columns Visibility</h3>
          <p>
            A table with customized columns. Here data can be sorted and filtered.
            This example demonstrates the use of Checkbox and clickable rows for selection, with a custom Toolbar.
          </p>
          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <ResponsiveDataTable
              columns={customColumns}
              data={customData}
              options={options}
              tableCols={customTableCols}
              updateCols={updateCustomCols}
            />
          </SistentThemeProvider>

        </div>
      </div>
    </SistentLayout>
  );
};

