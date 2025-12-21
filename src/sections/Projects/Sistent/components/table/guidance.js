import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { SistentLayout } from "../../sistent-layout";

import TabButton from "../../../../../reusecore/Button";

// FIXED 👇
import { alpha, useTheme } from "@mui/material/styles";

const TableGuidance = () => {
  const location = useLocation();

  // FIXED 👇 properly access MUI theme
  const theme = useTheme();
  theme.alpha = (color, opacity) => alpha(color, opacity);

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

          <a id="Usage Guidelines">
            <h2>Usage Guidelines</h2>
          </a>
          <p>
            Tables should be used when you need to display structured data in
            rows and columns, making it easy to compare and analyze information.
          </p>

          <h3>When to Use Tables</h3>
          <ul>
            <li><strong>Structured data:</strong> Clear row-column format</li>
            <li><strong>Comparison:</strong> Compare column values easily</li>
            <li><strong>Large datasets:</strong> Display lots of entries</li>
          </ul>

          <h3>When to Avoid Tables</h3>
          <ul>
            <li><strong>Simple lists:</strong> Use lists instead</li>
            <li><strong>Page layout:</strong> Do NOT use tables</li>
            <li><strong>Nested data:</strong> Consider tree view</li>
          </ul>

          <a id="Design Guidelines">
            <h2>Design Guidelines</h2>
          </a>

          <h3>Data Organization</h3>
          <ul>
            <li>Order columns logically</li>
            <li>Use consistent data types</li>
            <li>Label headers clearly</li>
          </ul>

          <h3>Visual Design</h3>
          <ul>
            <li>Adequate spacing/padding</li>
            <li>Row separation for readability</li>
            <li>Correct alignment for text/numbers</li>
          </ul>

          <a id="Accessibility Best Practices">
            <h2>Accessibility Best Practices</h2>
          </a>
          <ul>
            <li>Provide table headers always</li>
            <li>Use captions for complex tables</li>
            <li>Ensure keyboard navigation</li>
          </ul>

          <a id="Performance Considerations">
            <h2>Performance Considerations</h2>
          </a>
          <p>
            Use pagination and lazy loading for large datasets.
          </p>

          <a id="Props">
            <h2>Props</h2>
          </a>
          <p>
            ResponsiveDataTable accepts props for customization:
          </p>

          <div className="table-container">
            <table className="props-table">
              <thead>
                <tr>
                  <th>Prop</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>data</td>
                  <td>object[] | string[][]</td>
                  <td>-</td>
                  <td>Data source</td>
                </tr>
                <tr>
                  <td>columns</td>
                  <td>MUIDataTableColumn[]</td>
                  <td>-</td>
                  <td>Column definitions</td>
                </tr>
                <tr>
                  <td>options</td>
                  <td>MUIDataTableOptions</td>
                  <td>{}</td>
                  <td>Config settings</td>
                </tr>
                <tr>
                  <td>rowsPerPageOptions</td>
                  <td>number[]</td>
                  <td>[10,25,50,100]</td>
                  <td>Pagination options</td>
                </tr>
                <tr>
                  <td>colViews</td>
                  <td>ColView[]</td>
                  <td>-</td>
                  <td>Responsive column visibility</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </SistentLayout>
  );
};

export default TableGuidance;
