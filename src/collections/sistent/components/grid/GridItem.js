import React from "react";
import { Box } from "@sistent/sistent";

const GridItem = ({ children, sx = {} }) => (
  <Box
    sx={{
      p: 1,
      backgroundColor: "primary.main",
      color: "primary.contrastText",
      textAlign: "center",
      borderRadius: 1,
      ...sx,
    }}
  >
    {children}
  </Box>
);

export default GridItem;
