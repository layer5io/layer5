import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { SistentThemeProvider } from "@layer5/sistent";
import { SistentLayout } from "../../sistent-layout";
import { CodeBlock } from "../button/code-block";
import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const codes = [
  // Basic Table
  `
    <TableContainer component={Paper}>
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
  `,
  // Striped Rows Table
  `
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Column 1</TableCell>
            <TableCell>Column 2</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ backgroundColor: "#f0f0f0" }}>
            <TableCell>Row 1</TableCell>
            <TableCell>Data 1</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Row 2</TableCell>
            <TableCell>Data 2</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  `,
  // Responsive Table
  `
    <TableContainer component={Paper} sx={{ overflowX: "auto" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Column 1</TableCell>
            <TableCell>Column 2</TableCell>
            <TableCell>Column 3</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Row 1</TableCell>
            <TableCell>Data 1</TableCell>
            <TableCell>Data 2</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  `,
  // Customization Table
  `
    <TableContainer component={Paper}>
      <Table sx={{ fontSize: "18px", textAlign: "center" }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold", color: "red" }}>Custom Column 1</TableCell>
            <TableCell sx={{ fontWeight: "bold", color: "red" }}>Custom Column 2</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell sx={{ color: "green" }}>Row 1</TableCell>
            <TableCell sx={{ color: "purple" }}>Data 1</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  `,
];

const TableCode = () => {
  const { isDark } = useStyledDarkMode();
  const location = useLocation();

  return (
    <SistentLayout title="Table">
      <div className="content">
        <h2>Table</h2>
        <p>
          The `Table` component provides structured data representation in various styles, including basic, striped, bordered, responsive, and customizable options.
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
            <TableContainer component={Paper}>
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

        {/* Striped Table */}
        <h3>Striped Table</h3>
        <div className="showcase">
          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Column 1</TableCell>
                    <TableCell>Column 2</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow sx={{ backgroundColor: "#f0f0f0" }}>
                    <TableCell>Row 1</TableCell>
                    <TableCell>Data 1</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Row 2</TableCell>
                    <TableCell>Data 2</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </SistentThemeProvider>
          <CodeBlock name="striped-table" code={codes[1]} />
        </div>

        {/* Responsive Table */}
        <h3>Responsive Table</h3>
        <div className="showcase">
          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <TableContainer component={Paper} sx={{ overflowX: "auto" }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Column 1</TableCell>
                    <TableCell>Column 2</TableCell>
                    <TableCell>Column 3</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Row 1</TableCell>
                    <TableCell>Data 1</TableCell>
                    <TableCell>Data 2</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </SistentThemeProvider>
          <CodeBlock name="responsive-table" code={codes[2]} />
        </div>

        {/* Customization Table */}
        <h3>Customization Table</h3>
        <div className="showcase">
          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <TableContainer component={Paper}>
              <Table sx={{ fontSize: "18px", textAlign: "center" }}>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold", color: "red" }}>Custom Column 1</TableCell>
                    <TableCell sx={{ fontWeight: "bold", color: "red" }}>Custom Column 2</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell sx={{ color: "green" }}>Row 1</TableCell>
                    <TableCell sx={{ color: "purple" }}>Data 1</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </SistentThemeProvider>
          <CodeBlock name="customization-table" code={codes[3]} />
        </div>

      </div>
    </SistentLayout>
  );
};

export default TableCode;
