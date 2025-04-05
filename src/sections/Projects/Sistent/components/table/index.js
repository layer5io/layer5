import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  SistentThemeProvider,
} from "@layer5/sistent";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
import { Row } from "../../../../../reusecore/Layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

// Sample table data
const tableData = [
  { id: 1, name: "John Doe", age: 25, role: "Developer" },
  { id: 2, name: "Jane Smith", age: 28, role: "Designer" },
  { id: 3, name: "Sam Wilson", age: 30, role: "Manager" },
];

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
          The <code>Table</code> component in the Sistent design system is a wrapper
          around MUI’s Table components, offering consistent styling and structure
          aligned with Layer5’s UI philosophy. It helps developers display structured
          data in a clean, responsive, and accessible way with minimal effort.
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
          <p>A simple table displaying structured data with column headers and rows.</p>

          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <TableContainer className="border border-gray-200 rounded shadow-md overflow-auto">
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Age</TableCell>
                      <TableCell>Role</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {tableData.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.age}</TableCell>
                        <TableCell>{row.role}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </SistentThemeProvider>
          </Row>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentTable;
