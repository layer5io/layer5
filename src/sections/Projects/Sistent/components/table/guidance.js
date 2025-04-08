import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import {
  SistentThemeProvider,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
} from "@layer5/sistent";
import { SistentLayout } from "../../sistent-layout";
import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const TableGuidance = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="Table">
      <div className="content">
        <a id="Identity">
          <h2>Table</h2>
        </a>
        <p>
          The <code>Table</code> component from the Sistent design system helps structure and display tabular data with accessibility and consistent styling in mind. It wraps MUI’s native table components to provide an enhanced and theme-friendly experience.
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

          <p>Here’s a breakdown of each component used to construct a table:</p>

          <ul>
            <li>
              <strong>TableContainer</strong>: Acts as a wrapper around the entire table. Useful for scrollability and border rounding.
            </li>
            <li>
              <strong>Table</strong>: The root element that holds all rows and columns.
            </li>
            <li>
              <strong>TableHead</strong>: Defines the header section of the table. Usually contains one <code>TableRow</code> with multiple <code>TableCell</code> elements as headers.
            </li>
            <li>
              <strong>TableBody</strong>: Wraps all the dynamic content (rows of data). It follows the <code>TableHead</code>.
            </li>
            <li>
              <strong>TableRow</strong>: Represents a single row inside either the head or body. It holds <code>TableCell</code> components.
            </li>
            <li>
              <strong>TableCell</strong>: The actual data cell. Used inside both <code>TableRow</code> in the head and body.
            </li>
          </ul>

          <p>Below is a simple example of how these components come together:</p>

          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <TableContainer className="overflow-x-auto shadow rounded border border-gray-200 my-6">
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>City</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>John Doe</TableCell>
                    <TableCell>28</TableCell>
                    <TableCell>New York</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Jane Smith</TableCell>
                    <TableCell>34</TableCell>
                    <TableCell>London</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </SistentThemeProvider>

          <p>
            You can customize the layout by applying conditional styles, using responsive wrappers,
            or enhancing interactivity with row click handlers, sort functionality, etc.
          </p>
        </div>
      </div>
    </SistentLayout>
  );
};

export default TableGuidance;
