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
  Paper
} from "@mui/material";
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
        <p>
          The `Table` component provides a structured and easily readable format
          for displaying data. It supports different layouts, styles, and
          interactivity for a seamless user experience.
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
        <div className="main-content">
          <a id="Basic Usage">
            <h2>Basic Usage</h2>
          </a>
          <p>A simple table displaying structured data with column headers and rows.</p>

          <Row $Hcenter className="image-container">
            <TableContainer component={Paper}>
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
          </Row>

          {/* Striped Table */}
          <a id="Striped Rows">
            <h2>Striped Rows</h2>
          </a>
          <p>Alternating row colors enhance readability in tables with lots of data.</p>

          <Row $Hcenter className="image-container">
            <TableContainer component={Paper}>
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
                  {tableData.map((row, index) => (
                    <TableRow key={row.id} sx={{ backgroundColor: index % 2 ? "#f5f5f5" : "inherit" }}>
                      <TableCell>{row.id}</TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.age}</TableCell>
                      <TableCell>{row.role}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Row>

          {/* Table with Bordered Cells */}
          <a id="Bordered Table">
            <h2>Bordered Table</h2>
          </a>
          <p>A bordered table enhances clarity by separating rows and columns.</p>

          <Row $Hcenter className="image-container">
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ border: "1px solid black" }}>ID</TableCell>
                    <TableCell sx={{ border: "1px solid black" }}>Name</TableCell>
                    <TableCell sx={{ border: "1px solid black" }}>Age</TableCell>
                    <TableCell sx={{ border: "1px solid black" }}>Role</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tableData.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell sx={{ border: "1px solid black" }}>{row.id}</TableCell>
                      <TableCell sx={{ border: "1px solid black" }}>{row.name}</TableCell>
                      <TableCell sx={{ border: "1px solid black" }}>{row.age}</TableCell>
                      <TableCell sx={{ border: "1px solid black" }}>{row.role}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Row>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentTable;
