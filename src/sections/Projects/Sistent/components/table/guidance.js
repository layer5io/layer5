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
            Tables should be used when you need to display structured data in
            rows and columns, making it easy to compare and analyze information.
          </p>

          <h3>When to Use Tables</h3>
          <ul>
            <li>
              <strong>Structured data:</strong> Displaying data with clear
              relationships between columns
            </li>
            <li>
              <strong>Comparison needs:</strong> When users need to compare
              values across multiple entries
            </li>
            <li>
              <strong>Large datasets:</strong> Managing and displaying
              substantial amounts of data
            </li>
          </ul>

          <h3>When to Avoid Tables</h3>
          <ul>
            <li>
              <strong>Simple lists:</strong> Use basic lists for single-column
              data
            </li>
            <li>
              <strong>Layout purposes:</strong> Never use tables for page layout
              structure
            </li>
            <li>
              <strong>Complex hierarchies:</strong> Consider tree views for
              nested data
            </li>
          </ul>

          <a id="Design Guidelines">
            <h2>Design Guidelines</h2>
          </a>

          <h3>Data Organization</h3>
          <ul>
            <li>
              <strong>Logical column order:</strong> Arrange columns in order of
              importance or workflow
            </li>
            <li>
              <strong>Consistent data types:</strong> Keep similar data types in
              the same column
            </li>
            <li>
              <strong>Clear headers:</strong> Use descriptive, concise column
              headers
            </li>
          </ul>

          <h3>Visual Design</h3>
          <ul>
            <li>
              <strong>Adequate spacing:</strong> Provide sufficient padding for
              readability
            </li>
            <li>
              <strong>Row separation:</strong> Use alternating colors or borders
              for clarity
            </li>
            <li>
              <strong>Alignment:</strong> Align text left, numbers right, and
              center for icons
            </li>
          </ul>

          <a id="Accessibility Best Practices">
            <h2>Accessibility Best Practices</h2>
          </a>

          <h3>Essential Requirements</h3>
          <ul>
            <li>
              <strong>Table headers:</strong> Always provide proper table
              headers using th elements
            </li>
            <li>
              <strong>Caption text:</strong> Include descriptive captions for
              complex tables
            </li>
            <li>
              <strong>Keyboard navigation:</strong> Ensure full keyboard
              accessibility for all features
            </li>
          </ul>

          <a id="Performance Considerations">
            <h2>Performance Considerations</h2>
          </a>

          <p>
            For large datasets, implement pagination, virtual scrolling, or lazy
            loading to maintain optimal performance.
          </p>

          <a id="Props">
            <h2>Props</h2>
          </a>
          <p>
            The ResponsiveDataTable component accepts various props to customize
            functionality and appearance:
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
                  <td>The data to display in the table (objects with named properties or arrays)</td>
                </tr>
                <tr>
                  <td>columns</td>
                  <td>MUIDataTableColumn[]</td>
                  <td>-</td>
                  <td>Column definitions with name, label, and options properties</td>
                </tr>
                <tr>
                  <td>options</td>
                  <td>MUIDataTableOptions</td>
                  <td>{}</td>
                  <td>Configuration options for table behavior (search, filter, pagination, etc.)</td>
                </tr>
                <tr>
                  <td>rowsPerPageOptions</td>
                  <td>number[]</td>
                  <td>[10, 25, 50, 100]</td>
                  <td>Available options for rows per page dropdown</td>
                </tr>
                <tr>
                  <td>colViews</td>
                  <td>ColView[]</td>
                  <td>-</td>
                  <td>Responsive column visibility settings</td>
                </tr>
                <tr>
                  <td>tableCols</td>
                  <td>MUIDataTableColumn[]</td>
                  <td>-</td>
                  <td>Current table columns state</td>
                </tr>
                <tr>
                  <td>updateCols</td>
                  <td>function</td>
                  <td>-</td>
                  <td>Callback function to update table columns</td>
                </tr>
                <tr>
                  <td>columnVisibility</td>
                  <td>Record&lt;string, boolean&gt;</td>
                  <td>-</td>
                  <td>Controls which columns are visible on different screen sizes</td>
                </tr>
              </tbody>
            </table>
          </div>

          <a id="Best Practices">
            <h2>Best Practices</h2>
          </a>
          <ul>
            <li>
              <strong>Consistent formatting:</strong> Maintain consistent data
              formatting within columns
            </li>
            <li>
              <strong>Progressive disclosure:</strong> Show essential columns
              first, allow users to reveal more
            </li>
            <li>
              <strong>Loading states:</strong> Provide clear loading indicators
              for data fetching
            </li>
            <li>
              <strong>Error handling:</strong> Display helpful error messages
              when data fails to load
            </li>
            <li>
              <strong>Empty states:</strong> Show meaningful messages when no
              data is available
            </li>
          </ul>
        </div>
      </div>
    </SistentLayout>
  );
};

export default TableGuidance;
