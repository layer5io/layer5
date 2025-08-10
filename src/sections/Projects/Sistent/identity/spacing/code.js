import React, { useState } from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { SistentLayout } from "../../sistent-layout";
import { Col, Row } from "../../../../../reusecore/Layout";
import Button from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

import {
  styled,
  Table,
  TableContainer,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  SistentThemeProvider,
  CustomTooltip,
  Box,
} from "@sistent/sistent";
import { copyToClipboard } from "../../../../../components/CodeBlock/copy-to-clipboard.js";


// Table data
const spacingTokens = [
  { token: "spacing-00", px: "0px (8 × 0)", rem: "0rem", size: 0 },
  { token: "spacing-01", px: "2px (8 × 0.25)", rem: "0.125rem", size: 2 },
  { token: "spacing-02", px: "4px (8 × 0.5)", rem: "0.25rem", size: 4 },
  { token: "spacing-03", px: "8px (8 × 1)", rem: "0.5rem", size: 8 },
  { token: "spacing-04", px: "16px (8 × 2)", rem: "1rem", size: 16 },
  { token: "spacing-05", px: "24px (8 × 3)", rem: "1.5rem", size: 24 },
  { token: "spacing-06", px: "32px (8 × 4)", rem: "2rem", size: 32 },
  { token: "spacing-07", px: "40px (8 × 5)", rem: "2.5rem", size: 40 },
  { token: "spacing-08", px: "48px (8 × 6)", rem: "3rem", size: 48 },
  { token: "spacing-09", px: "56px (8 × 7)", rem: "3.5rem", size: 56 },
  { token: "spacing-10", px: "64px (8 × 8)", rem: "4rem", size: 64 },
  { token: "spacing-11", px: "72px (8 × 9)", rem: "4.5rem", size: 72 },
  { token: "spacing-12", px: "80px (8 × 10)", rem: "5rem", size: 80 },
];

const CopyCell = ({ value }) => {
  const [copyText, setCopyText] = useState("Copy");

  const handleCopy = async () => {
    await copyToClipboard(value);
    setCopyText("Copied");
    setTimeout(() => setCopyText("Copy"), 1000);
  };

  return (
    <CustomTooltip
      title={copyText === "Copied" ? "Copied" : "Copy"}
      enterDelay={800}
      leaveDelay={10}
      placement="right"
    >
      <Box
        sx={{
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          cursor: "pointer",
          padding: "2px 4px",
          borderRadius: "3px",
          transition: "background-color 0.2s ease",
          "&:hover": {
            backgroundColor: (theme) =>
              theme.palette.action?.hover || "rgba(0, 0, 0, 0.04)",
          },
        }}
        onClick={handleCopy}
      >
        <span>{value}</span>
      </Box>
    </CustomTooltip>
  );
};

const SpacingVisualBox = styled("div")(({ theme, size }) => ({
  backgroundColor: theme.palette.brand?.default || "#00B39F",
  width: size === 0 ? "0px" : `${Math.max(size, 4)}px`,
  height: "20px",
  borderRadius: "4px",
  border: size === 0 ? "none" : `1px solid ${theme.palette.divider}`,
  minWidth: size === 0 ? "0px" : "4px",
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-child(odd)": {
    backgroundColor: theme.palette.background.default,
  },
  "&:nth-child(even)": {
    backgroundColor: theme.palette.background.secondary,
  },
}));

const StyledTableContainer = styled(TableContainer)(() => ({
  width: "100%",
  backgroundColor: "transparent",
  boxShadow: "none",
  padding: 0,
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: "0.975rem",
  padding: "0.75rem",
  borderBottom: `1px solid ${theme.palette.divider}`,
  borderRadius: "4px",
}));

const StyledHeaderCell = styled(StyledTableCell)(() => ({
  fontWeight: 600,
}));

const SpacingCode = () => {
  const { isDark } = useStyledDarkMode();
  const location = useLocation();

  return (
    <SistentLayout title="Spacing">
      <div className="content">
        <a id="Identity">
          <h2>Spacing</h2>
        </a>
        <p>
          Space is the unseen component in designed solutions that enables
          clear, concise, and consistent arrangement of interface elements
          across a screen.
        </p>

        <div className="filterBtns">
          <Button
            className={
              location.pathname === "/projects/sistent/identity/spacing"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/identity/spacing")}
            title="Overview"
          />
          <Button
            className={
              location.pathname ===
              "/projects/sistent/identity/spacing/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/identity/spacing/guidance")
            }
            title="Guidance"
          />
          <Button
            className={
              location.pathname === "/projects/sistent/identity/spacing/code"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/identity/spacing/code")}
            title="Code"
          />
        </div>

        <div className="main-content">
          <p>
            The spacing system uses standardized tokens to ensure consistent
            spatial relationships across all interface elements. These tokens
            are based on an 8-pixel grid system with additional fractional
            values for fine-grained control.
          </p>

          <a id="Spacing Tokens">
            <h2>Spacing Tokens</h2>
          </a>

          <p>
            Spacing tokens provide a systematic approach to managing space in
            your designs. Built on multiples of 8 pixels, these tokens ensure
            visual harmony and consistency across all components and layouts.
            The system includes half-step (4px) and quarter-step (2px) values
            for precise spacing requirements.
          </p>

          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <Row className="table-container" $Hcenter>
              <Col md={12} sx={{ px: 0 }}>
                <StyledTableContainer>
                  <Table size="small" aria-label="spacing-tokens">
                    <TableHead>
                      <TableRow>
                        <StyledHeaderCell>Token</StyledHeaderCell>
                        <StyledHeaderCell>Pixel Value</StyledHeaderCell>
                        <StyledHeaderCell>REM Value</StyledHeaderCell>
                        <StyledHeaderCell align="center">Visual</StyledHeaderCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {spacingTokens.map((spacing) => (
                        <StyledTableRow key={spacing.token}>
                          <StyledTableCell sx={{ fontFamily: "monospace" }}>
                            <CopyCell value={spacing.token} />
                          </StyledTableCell>
                          <StyledTableCell>
                            <CopyCell value={spacing.px} />
                          </StyledTableCell>
                          <StyledTableCell>
                            <CopyCell value={spacing.rem} />
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            <SpacingVisualBox size={spacing.size} />
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </StyledTableContainer>
              </Col>
            </Row>
          </SistentThemeProvider>

          <a id="Implementation">
            <h2>Implementation</h2>
          </a>
          <p>
            These spacing tokens can be applied across three primary contexts:
            inset (padding), stack (vertical spacing), and inline (horizontal
            spacing). Each token maintains the 8-pixel grid relationship to
            ensure consistent alignment and visual rhythm throughout your
            interface.
          </p>
          <p>
            When implementing spacing in code, reference these tokens by their
            semantic names rather than hardcoded pixel values. This approach
            maintains design system consistency and makes future updates more
            manageable across your entire application.
          </p>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SpacingCode;