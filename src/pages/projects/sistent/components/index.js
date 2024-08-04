import React from "react";
import SistentComponents from "../../../../sections/Projects/Sistent/components";
import { ResponsiveDataTable  }  from '@layer5/sistent';

// Define some sample columns
const columns = [
  { id: 'name', label: 'Name', minWidth: 100 },
  { id: 'code', label: 'ISO Code', minWidth: 70 },
  { id: 'population', label: 'Population', minWidth: 100, align: 'right' },
  { id: 'size', label: 'Size (km²)', minWidth: 100, align: 'right' },
  { id: 'density', label: 'Density', minWidth: 100, align: 'right' },
];

// Sample data to display
const data = [
  ['India', 'IN', '1,366,417,754', '3,287,263', '464'],
  ['China', 'CN', '1,398,715,000', '9,596,961', '146'],
  ['United States', 'US', '331,883,986', '9,525,067', '35'],
  ['Indonesia', 'ID', '267,026,366', '1,904,569', '140'],
  ['Pakistan', 'PK', '216,565,318', '881,913', '245'],
];

const columnVisibility = {
  name: true,
  code: true,
  population: true,
  size: true,
  density: true,
};

const SistentComponentsPage = () => {
  
  return(
    <>
        <SistentComponents />
        <ResponsiveDataTable
          data={data}
          columns={columns}
          columnVisibility={columnVisibility}
          updateCols={updateColumns}
        />
    </>
  );
};

export default SistentComponentsPage;
