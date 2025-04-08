import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import {
  SistentThemeProvider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@layer5/sistent";
import { SistentLayout } from "../../sistent-layout";
import { CodeBlock } from "../button/code-block";
import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const codes = [
    // Basic Table
    `
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Column 1</TableCell>
              <TableCell>Column 2</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Row 1</TableCell>
              <TableCell>Data 1</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
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
        To use the Table component from Layer5's Sistent design system, you begin by wrapping your table inside the TableContainer, which provides scrollability and styling. Inside it, the Table acts as the root element that holds the structure. The TableHead defines the table headers using a TableRow filled with TableCell elements for each column title. The TableBody follows, containing the actual data rows. Each data row is created using a TableRow, with individual data values placed inside corresponding TableCell elements. This modular structure allows for clean, accessible, and themable table layouts that integrate seamlessly into your UI.
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
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Column 1</TableCell>
                    <TableCell>Column 2</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Row 1</TableCell>
                    <TableCell>Data 1</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </SistentThemeProvider>
          <CodeBlock name="basic-table" code={codes[0]} />
        </div>
      </div>
    </SistentLayout>
  );
};

export default TableCode;
