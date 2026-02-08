import React, { useState } from "react";
import { Pagination, Box } from "@sistent/sistent";

const PaginationDemo = ({ type }) => {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  if (type === "basic") {
    return <Pagination count={10} page={page} onChange={handleChange} />;
  }

  if (type === "sizes") {
    return (
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Pagination size="small" count={10} />
        <Pagination size="medium" count={10} />
        <Pagination size="large" count={10} />
      </Box>
    );
  }

  if (type === "variants") {
    return (
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Pagination count={10} variant="outlined" />
        <Pagination count={10} variant="text" />
      </Box>
    );
  }

  if (type === "styling") {
    return (
      <Pagination
        count={10}
        color="primary"
        variant="outlined"
        shape="rounded"
      />
    );
  }

  if (type === "outline") {
    return (
      <Pagination
        count={10}
        variant="outlined"
        color="secondary"
      />
    );
  }

  // Generic controlled wrapper if needed, default to basic
  return <Pagination count={10} page={page} onChange={handleChange} />;
};

export default PaginationDemo;
