import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { SistentLayout } from "../../sistent-layout";

import TabButton from "../../../../../reusecore/Button";

const TableGuidance = () => {
  const location = useLocation();

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
            Tables should be used when structured data must be displayed in rows
            and columns, making comparison and scanning easy.
          </p>

          <h3>When to Use Tables</h3>
          <ul>
            <li>To display structured data</li>
            <li>For comparing values across rows/columns</li>
            <li>When handling large datasets</li>
          </ul>

          <h3>When to Avoid Tables</h3>
          <ul>
            <li>For simple list-style content</li>
            <li>As a layout tool</li>
            <li>For deeply nested hierarchical data</li>
          </ul>

          <a id="Design Guidelines">
            <h2>Design Guidelines</h2>
          </a>

          <h3>Data Organization</h3>
          <ul>
            <li>Logical column ordering</li>
            <li>Consistent data types per column</li>
            <li>Clear, concise headers</li>
          </ul>

          <h3>Accessibility Best Practices</h3>
          <ul>
            <li>Provide table headers</li>
            <li>Include captions for complex tables</li>
            <li>Support keyboard navigation</li>
          </ul>

          <a id="Props">
            <h2>Props</h2>
          </a>
          <p>The ResponsiveDataTable accepts props for customization:</p>

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
                  <td>Table source data</td>
                </tr>
                <tr>
                  <td>columns</td>
                  <td>MUIDataTableColumn[]</td>
                  <td>-</td>
                  <td>Column configuration</td>
                </tr>
                <tr>
                  <td>options</td>
                  <td>MUIDataTableOptions</td>
                  <td>{}</td>
                  <td>Behavior configuration</td>
                </tr>
                <tr>
                  <td>rowsPerPageOptions</td>
                  <td>number[]</td>
                  <td>[10,25,50,100]</td>
                  <td>Pagination settings</td>
                </tr>
                <tr>
                  <td>colViews</td>
                  <td>ColView[]</td>
                  <td>-</td>
                  <td>Responsive visibility settings</td>
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
