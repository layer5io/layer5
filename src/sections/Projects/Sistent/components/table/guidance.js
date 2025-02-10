import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { Row } from "../../../../../reusecore/Layout";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  TableSortLabel,
  TablePagination,
  TableFooter,
  TableRowColumn
} from "@mui/material"; // Imported from MUI
import { SistentThemeProvider } from "@layer5/sistent"; // Only this from Sistent
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
          <h2>Table Component</h2>
        </a>
        <p>
          The `Table` component is a structured way to display data in rows and columns.
          It supports multiple variations like striped rows, bordered tables, and responsiveness.
        </p>
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
            <h2>Basic Table</h2>
          </a>
          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <TableContainer>
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

          <h3>Striped Rows</h3>
          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Product</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Stock</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Laptop</TableCell>
                    <TableCell>$1200</TableCell>
                    <TableCell>Available</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Phone</TableCell>
                    <TableCell>$700</TableCell>
                    <TableCell>Out of Stock</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </SistentThemeProvider>

          <h3>Bordered Table</h3>
          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <TableContainer>
              <Table sx={{ border: "1px solid #ccc" }}>
                <TableHead>
                  <TableRow>
                    <TableCell>Employee</TableCell>
                    <TableCell>Department</TableCell>
                    <TableCell>Salary</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Alice Johnson</TableCell>
                    <TableCell>Engineering</TableCell>
                    <TableCell>$95,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Bob Williams</TableCell>
                    <TableCell>Marketing</TableCell>
                    <TableCell>$85,000</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </SistentThemeProvider>

          <h3>Responsive Table</h3>
          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Country</TableCell>
                    <TableCell>Capital</TableCell>
                    <TableCell>Population</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>USA</TableCell>
                    <TableCell>Washington, D.C.</TableCell>
                    <TableCell>331M</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>India</TableCell>
                    <TableCell>New Delhi</TableCell>
                    <TableCell>1.4B</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </SistentThemeProvider>

          <h3>Customization Options</h3>

          <h4>Size Variations</h4>
          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Small Table</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Compact Row</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </SistentThemeProvider>

          <h4>Color Variations</h4>
          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <TableContainer>
              <Table sx={{ backgroundColor: "primary.main", color: "white" }}>
                <TableHead>
                  <TableRow>
                    <TableCell>Primary Color Table</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Styled with primary theme</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </SistentThemeProvider>

          <h4>Alignment</h4>
          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Left Aligned</TableCell>
                    <TableCell align="center">Center Aligned</TableCell>
                    <TableCell align="right">Right Aligned</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell align="left">Left</TableCell>
                    <TableCell align="center">Center</TableCell>
                    <TableCell align="right">Right</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </SistentThemeProvider>

        </div>
      </div>
    </SistentLayout>
  );
};

export default TableGuidance;
