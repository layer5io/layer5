import React from "react";
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
} from "@sistent/sistent";
import CopyValue from "../../../../../components/CopyValue";

// Table data
const primitiveTokens = [
  {
    token: "typeset-1",
    size: "64px/4rem",
    lineHeight: "80px/5rem",
    sample: "Aa",
  },
  {
    token: "typeset-2",
    size: "52px/3.25rem",
    lineHeight: "64px/4rem",
    sample: "Aa",
  },
  {
    token: "typeset-3",
    size: "32px/2rem",
    lineHeight: "40px/2.5rem",
    sample: "Aa",
  },
  {
    token: "typeset-4",
    size: "24px/1.5rem",
    lineHeight: "36px/2.25rem",
    sample: "Aa",
  },
  {
    token: "typeset-5",
    size: "16px/1rem",
    lineHeight: "28px/1.75rem",
    sample: "Aa",
  },
  {
    token: "typeset-6",
    size: "14px/0.875rem",
    lineHeight: "24px/1.5rem",
    sample: "Aa",
  },
  {
    token: "typeset-7",
    size: "12px/0.75rem",
    lineHeight: "16px/1rem",
    sample: "Aa",
  },
];
const semanticTokens = [
  {
    token: "text-h1-bold",
    desktop: {
      typeface: "Qanelas Soft",
      size: "52px / 3.25rem",
      lineHeight: "64px / 4rem",
      weight: "Bold / 700",
      category: "Heading",
      case: "Sentence case",
    },
    mobile: {
      typeface: "Qanelas Soft",
      size: "32px / 2rem",
      lineHeight: "40px / 2.5rem",
      weight: "Bold / 700",
      category: "Heading",
      case: "Sentence case",
    },
    sample: "Aa",
  },
  {
    token: "text-h2-medium",
    desktop: {
      typeface: "Qanelas Soft",
      size: "32px / 2rem",
      lineHeight: "40px / 2.5rem",
      weight: "Medium / 500",
      category: "Sub-heading",
      case: "Title case",
    },
    mobile: {
      typeface: "Qanelas Soft",
      size: "24px / 1.5rem",
      lineHeight: "36px / 2.25rem",
      weight: "Medium / 500",
      category: "Sub-heading",
      case: "Title case",
    },
    sample: "Aa",
  },
  {
    token: "text-h3-medium/bold",
    desktop: {
      typeface: "Qanelas Soft",
      size: "24px / 1.5rem",
      lineHeight: "36px / 2.25rem",
      weight: "Medium / 500",
      category: "Sub-heading",
      case: "Title case",
    },
    mobile: {
      typeface: "Qanelas Soft",
      size: "16px / 1rem",
      lineHeight: "28px / 1.75rem",
      weight: "Bold / 700",
      category: "Sub-heading",
      case: "Sentence case",
    },
    sample: "Aa",
  },
  {
    token: "text-b1-regular",
    desktop: {
      typeface: "Open Sans",
      size: "16px / 1rem",
      lineHeight: "28px / 1.75rem",
      weight: "Regular / 400",
      category: "Body",
      case: "Sentence case",
    },
    mobile: {
      typeface: "Open Sans",
      size: "16px / 1rem",
      lineHeight: "28px / 1.75rem",
      weight: "Regular / 400",
      category: "Body",
      case: "Sentence case",
    },
    sample: "Aa",
  },
  {
    token: "text-b2-semibold",
    desktop: {
      typeface: "Open Sans",
      size: "16px / 1rem",
      lineHeight: "28px / 1.75rem",
      weight: "Semi-bold / 600",
      category: "Body",
      case: "Sentence case",
    },
    mobile: {
      typeface: "Open Sans",
      size: "16px / 1rem",
      lineHeight: "28px / 1.75rem",
      weight: "Semi-bold / 600",
      category: "Body",
      case: "Sentence case",
    },
    sample: "Aa",
  },

  {
    token: "text-b3-regular",
    desktop: {
      typeface: "Open Sans",
      size: "14px / 0.875rem",
      lineHeight: "24px / 1.5rem",
      weight: "Regular / 400",
      category: "Body",
      case: "Sentence case",
    },
    mobile: {
      typeface: "Open Sans",
      size: "14px / 0.875rem",
      lineHeight: "24px / 1.5rem",
      weight: "Regular / 400",
      category: "Body",
      case: "Sentence case",
    },
    sample: "Aa",
  },
  {
    token: "text-l1-bold",
    desktop: {
      typeface: "Qanelas Soft",
      size: "12px / 0.75rem",
      lineHeight: "16px / 1rem",
      weight: "Bold / 700",
      category: "Label",
      case: "Sentence case",
    },
    mobile: {
      typeface: "Qanelas Soft",
      size: "12px / 0.75rem",
      lineHeight: "16px / 1rem",
      weight: "Bold / 700",
      category: "Label",
      case: "Sentence case",
    },
    sample: "Aa",
  },
  {
    token: "text-l2-regular",
    desktop: {
      typeface: "Open Sans",
      size: "12px / 0.75rem",
      lineHeight: "24px / 1.5rem",
      weight: "Regular / 400",
      category: "Label",
      case: "Sentence case",
    },
    mobile: {
      typeface: "Open Sans",
      size: "12px / 0.75rem",
      lineHeight: "24px / 1.5rem",
      weight: "Regular / 400",
      category: "Label",
      case: "Sentence case",
    },
    sample: "Aa",
  },
  {
    token: "text-c1-regular",
    desktop: {
      typeface: "Consolas",
      size: "12px / 0.75rem",
      lineHeight: "24px / 1.5rem",
      weight: "Regular / 400",
      category: "Code",
      case: "Sentence case",
    },
    mobile: {
      typeface: "Consolas",
      size: "12px / 0.75rem",
      lineHeight: "24px / 1.5rem",
      weight: "Regular / 400",
      category: "Code",
      case: "Sentence case",
    },
    sample: "aa",
  },
  {
    token: "text-c2-regular",
    desktop: {
      typeface: "Consolas",
      size: "16px / 1rem",
      lineHeight: "28px / 1.75rem",
      weight: "Regular / 400",
      category: "Code",
      case: "Sentence case",
    },
    mobile: {
      typeface: "Consolas",
      size: "16px / 1rem",
      lineHeight: "28px / 1.75rem",
      weight: "Regular / 400",
      category: "Code",
      case: "Sentence case",
    },
    sample: "aa",
  },
];

const TypographyPreviewBox = styled("div")(
  ({ theme, size, lineHeight, weight, caseStyle, typeface }) => ({
    fontSize: size,
    lineHeight: lineHeight,
    fontWeight: weight,
    fontFamily: typeface || "inherit",
    textTransform:
      caseStyle === "uppercase"
        ? "uppercase"
        : caseStyle === "lowercase"
          ? "lowercase"
          : caseStyle === "capitalize"
            ? "capitalize"
            : "none",
    border: `1px solid ${theme.palette.text.primary}`,
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.background.paper,
    width: "80px",
    height: "80px",
    boxSizing: "border-box",
    overflow: "hidden",
    color: theme.palette.text.primary,
    minWidth: "80px",
    minHeight: "80px",
  }),
);

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.background.default,
  },
  "&:nth-of-type(even)": {
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
  height: "60px",
  verticalAlign: "middle",
}));

const StyledHeaderCell = styled(StyledTableCell)(() => ({
  fontWeight: 600,
}));

const TypographyCode = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();
  return (
    <SistentLayout title="Typography">
      <div className="content">
        <a id="Identity">
          <h2>Typography</h2>
        </a>
        <p>
          Most of the information that is present in a user interface for the
          purpose of passing information across is represented via typography.
          Correct typography structure and appropriate application is important
          in all interfaces.
        </p>
        <div className="filterBtns">
          <Button
            className={
              location.pathname === "/projects/sistent/identity/typography"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/identity/typography")}
            title="Overview"
          />
          <Button
            className={
              location.pathname ===
              "/projects/sistent/identity/typography/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/identity/typography/guidance")
            }
            title="Guidance"
          />
          <Button
            className={
              location.pathname === "/projects/sistent/identity/typography/code"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/identity/typography/code")
            }
            title="Code"
          />
        </div>
        <div className="main-content">
          <p>
            The different fonts are referenced using unique token names to
            achieve uniform application of the texts in different use cases
            across multiple platforms. These tokens, just like the color, are
            split into primitive and semantic categories.
          </p>
          <a id="Primitive Category">
            <h2>Primitive Category</h2>
          </a>
          <p>
            This category refers to the seven sizes that were chosen as typesets
            from the major third ratio. They form the foundation for all the
            other fonts generated and used across the typography system. Since
            these tokens lack complete styling however, they are should not be
            used directly in designs and as such do not have any roles ascribed
            to them. However, if a new role emerges and the need for a new token
            arises, these typesets, serve as the reference size for any new font
            to be created.
          </p>

          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <Row className="table-container" $Hcenter>
              <Col md={12} sx={{ px: 0 }}>
                <StyledTableContainer>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <StyledHeaderCell>Token</StyledHeaderCell>
                        <StyledHeaderCell>Size</StyledHeaderCell>
                        <StyledHeaderCell>Line Height</StyledHeaderCell>
                        <StyledHeaderCell>Preview</StyledHeaderCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {primitiveTokens.map((t) => (
                        <StyledTableRow key={t.token}>
                          <StyledTableCell>
                            <CopyValue copyValue={t.token} />
                          </StyledTableCell>
                          <StyledTableCell>{t.size}</StyledTableCell>
                          <StyledTableCell>{t.lineHeight}</StyledTableCell>
                          <StyledTableCell align="center">
                            <TypographyPreviewBox
                              size={t.size.split("/")[0]}
                              lineHeight={t.lineHeight.split("/")[0]}
                              weight="500"
                              typeface="Qanelas Soft"
                            >
                              {t.sample}
                            </TypographyPreviewBox>
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </StyledTableContainer>
              </Col>
            </Row>
          </SistentThemeProvider>

          <a id="Semantic Category">
            <h2>Semantic Category</h2>
          </a>
          <p>
            The fonts in this category have specifications that make them
            suitable for certain use cases either across all platforms or in any
            given platform.
          </p>

          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <Row className="table-container" $Hcenter>
              <Col md={12} sx={{ px: 0 }}>
                <StyledTableContainer>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <StyledHeaderCell>Token</StyledHeaderCell>
                        <StyledHeaderCell>Desktop</StyledHeaderCell>
                        <StyledHeaderCell>Preview</StyledHeaderCell>
                        <StyledHeaderCell>Mobile</StyledHeaderCell>
                        <StyledHeaderCell>Preview</StyledHeaderCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {semanticTokens.map((t) => (
                        <StyledTableRow key={t.token}>
                          <StyledTableCell>
                            <CopyValue copyValue={t.token} />
                          </StyledTableCell>
                          <StyledTableCell>
                            <strong>Typeface:</strong> {t.desktop.typeface}
                            <br />
                            <strong>Size:</strong> {t.desktop.size}
                            <br />
                            <strong>Line Height:</strong> {t.desktop.lineHeight}
                            <br />
                            <strong>Weight:</strong> {t.desktop.weight}
                            <br />
                            <strong>Category:</strong> {t.desktop.category}
                            <br />
                            <strong>Case Style:</strong> {t.desktop.case}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            <TypographyPreviewBox
                              size={t.desktop.size.split("/")[0]}
                              lineHeight={t.desktop.lineHeight.split("/")[0]}
                              weight={
                                t.desktop.weight.includes("Bold")
                                  ? "700"
                                  : t.desktop.weight.includes("Semi-bold")
                                    ? "600"
                                    : t.desktop.weight.includes("Medium")
                                      ? "500"
                                      : "400"
                              }
                              typeface={t.desktop.typeface}
                              caseStyle={
                                t.desktop.case
                                  .toLowerCase()
                                  .includes("uppercase")
                                  ? "uppercase"
                                  : "none"
                              }
                            >
                              {t.sample}
                            </TypographyPreviewBox>
                          </StyledTableCell>
                          <StyledTableCell>
                            <strong>Typeface:</strong> {t.mobile.typeface}
                            <br />
                            <strong>Size:</strong> {t.mobile.size}
                            <br />
                            <strong>Line Height:</strong> {t.mobile.lineHeight}
                            <br />
                            <strong>Weight:</strong> {t.mobile.weight}
                            <br />
                            <strong>Category:</strong> {t.mobile.category}
                            <br />
                            <strong>Case Style:</strong> {t.mobile.case}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            <TypographyPreviewBox
                              size={t.mobile.size.split("/")[0]}
                              lineHeight={t.mobile.lineHeight.split("/")[0]}
                              weight={
                                t.mobile.weight.includes("Bold")
                                  ? "700"
                                  : t.mobile.weight.includes("Semi-bold")
                                    ? "600"
                                    : t.mobile.weight.includes("Medium")
                                      ? "500"
                                      : "400"
                              }
                              typeface={t.mobile.typeface}
                              caseStyle={
                                t.mobile.case
                                  .toLowerCase()
                                  .includes("uppercase")
                                  ? "uppercase"
                                  : "none"
                              }
                            >
                              {t.sample}
                            </TypographyPreviewBox>
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </StyledTableContainer>
              </Col>
            </Row>
          </SistentThemeProvider>
        </div>
      </div>
    </SistentLayout>
  );
};

export default TypographyCode;
