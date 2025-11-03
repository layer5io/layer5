import React, { useState } from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import { ResponsiveDataTable, SistentThemeProvider } from "@sistent/sistent";
import { CodeBlock } from "../button/code-block";
import { SistentLayout } from "../../sistent-layout";

import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const codes = [
  `  <SistentThemeProvider>
    <ResponsiveDataTable
      data={basicData}
      columns={columns}
      options={basicOptions}
      colViews={colViews}
      tableCols={tableCols}
      updateCols={updateCols}
      columnVisibility={columnVisibility}
    />
  </SistentThemeProvider>`,
  `  <SistentThemeProvider>
    <ResponsiveDataTable
      data={employeeData}
      columns={columns}
      options={featuredOptions}
      colViews={colViews}
      tableCols={tableCols}
      updateCols={updateCols}
      columnVisibility={columnVisibility}
    />
  </SistentThemeProvider>`,
  `  <SistentThemeProvider>
    <ResponsiveDataTable
      data={employeeData}
      columns={columns}
      options={paginatedOptions}
      colViews={colViews}
      tableCols={tableCols}
      updateCols={updateCols}
      columnVisibility={columnVisibility}
    />
  </SistentThemeProvider>`,
];

const TableCode = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  // Sample data
  const basicData = [
    {
      id: 1,
      name: "John Doe",
      role: "Software Engineer",
      location: "New York",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Product Manager",
      location: "San Francisco",
    },
    { id: 3, name: "Mike Johnson", role: "Designer", location: "Austin" },
  ];

  const employeeData = [
    {
      id: 1,
      name: "Alice Brown",
      role: "Senior Developer",
      location: "Seattle",
      startDate: "2020-03-15",
    },
    {
      id: 2,
      name: "Bob Wilson",
      role: "Data Analyst",
      location: "Portland",
      startDate: "2021-07-22",
    },
    {
      id: 3,
      name: "Carol Davis",
      role: "UX Designer",
      location: "Denver",
      startDate: "2022-01-10",
    },
    {
      id: 4,
      name: "David Miller",
      role: "DevOps Engineer",
      location: "Chicago",
      startDate: "2019-11-08",
    },
    {
      id: 5,
      name: "Emma Wilson",
      role: "Marketing Lead",
      location: "Miami",
      startDate: "2021-05-12",
    },
    {
      id: 6,
      name: "Frank Taylor",
      role: "Sales Manager",
      location: "Dallas",
      startDate: "2020-09-18",
    },
    {
      id: 7,
      name: "Grace Lee",
      role: "HR Specialist",
      location: "Boston",
      startDate: "2022-02-28",
    },
  ];

  // Column definitions
  const columns = [
    {
      name: "id",
      label: "ID",
      options: { filter: false, sort: true, searchable: false },
    },
    {
      name: "name",
      label: "Name",
      options: { filter: true, sort: true, searchable: true },
    },
    {
      name: "role",
      label: "Role",
      options: { filter: true, sort: true, searchable: true },
    },
    {
      name: "location",
      label: "Location",
      options: { filter: true, sort: true, searchable: true },
    },
    {
      name: "startDate",
      label: "Start Date",
      options: {
        filter: false,
        sort: true,
        searchable: false,
        sortDescFirst: true,
      },
    },
  ];

  // Separate column configs for different tables
  const basicColumns = columns.slice(0, 4);
  const employeeColumns = columns;

  // Responsive configurations
  const basicColViews = [
    ["id", "xs"],
    ["name", "xs"],
    ["role", "sm"],
    ["location", "md"],
  ];
  const employeeColViews = [...basicColViews, ["startDate", "lg"]];

  // State management
  const [tableCols, updateCols] = useState(columns);
  const [columnVisibility] = useState(() => {
    const visibility = {};
    columns.forEach((col) => {
      visibility[col.name] = true;
    });
    return visibility;
  });

  // Table options
  const commonOptions = {
    elevation: 0,
    print: false,
    download: false,
    viewColumns: false,
  };

  const basicOptions = {
    ...commonOptions,
    search: false,
    filter: false,
    responsive: "simple",
    selectableRows: "none",
  };

  const featuredOptions = {
    ...commonOptions,
    search: true,
    filter: true,
    responsive: "standard",
    selectableRows: "multiple",
    pagination: true,
    rowsPerPage: 5,
    rowsPerPageOptions: [5, 10, 25],
  };

  const paginatedOptions = {
    ...commonOptions,
    search: true,
    filter: true,
    responsive: "standard",
    selectableRows: "none",
    pagination: true,
    rowsPerPage: 3,
    rowsPerPageOptions: [3, 5, 10],
  };

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
          <p>
            ResponsiveDataTable provides a powerful way to display and interact
            with tabular data, offering built-in features for enhanced user
            experience.
          </p>
          <a id="Basic Table">
            <h2>Basic Table</h2>
          </a>
          <p>
            A simple table displays data in rows and columns with minimal
            configuration required.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <ResponsiveDataTable
                  data={basicData}
                  columns={basicColumns}
                  options={basicOptions}
                  colViews={basicColViews}
                  tableCols={tableCols}
                  updateCols={updateCols}
                  columnVisibility={columnVisibility}
                />
              </SistentThemeProvider>
            </div>
            <CodeBlock name="basic-table" code={codes[0]} />
          </div>

          <a id="Table with Features">
            <h2>Table with Features</h2>
          </a>
          <p>
            Enhanced table with multiple selection, search, filtering, and
            sorting capabilities enabled.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <ResponsiveDataTable
                  data={employeeData}
                  columns={employeeColumns}
                  options={featuredOptions}
                  colViews={employeeColViews}
                  tableCols={tableCols}
                  updateCols={updateCols}
                  columnVisibility={columnVisibility}
                />
              </SistentThemeProvider>
            </div>
            <CodeBlock name="advanced-table" code={codes[1]} />
          </div>

          <a id="Pagination and Search">
            <h2>Pagination and Search</h2>
          </a>
          <p>
            Tables can handle large datasets efficiently with built-in
            pagination and search functionality.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <ResponsiveDataTable
                  data={employeeData}
                  columns={employeeColumns}
                  options={paginatedOptions}
                  colViews={employeeColViews}
                  tableCols={tableCols}
                  updateCols={updateCols}
                  columnVisibility={columnVisibility}
                />
              </SistentThemeProvider>
            </div>
            <CodeBlock name="pagination-search" code={codes[2]} />
          </div>
        </div>
      </div>
    </SistentLayout>
  );
};

export default TableCode;
