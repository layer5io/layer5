import React, { useState } from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { SistentLayout } from "../../sistent-layout";
import { Col, Row } from "../../../../../reusecore/Layout";
import Button from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

import {  styled,  Table, TableContainer, TableCell, TableRow, TableHead, TableBody, SistentThemeProvider, CustomTooltip, Box, } from "@sistent/sistent";
import { copyToClipboard } from "../../../../../components/CodeBlock/copy-to-clipboard.js";

const brandColors = [
  { tokenName: "keppel-70", token: "theme.palette.brand.default", name: "Keppel", hex: "#DAf3EB" },
  { tokenName: "keppel-60", token: "theme.palette.brand.hover", name: "Keppel", hex: "#93E5D1" },
  { tokenName: "keppel-50", token: "theme.palette.brand.pressed", name: "Keppel", hex: "#41CCB3" },
  { tokenName: "keppel-40", token: "theme.palette.brand.secondary", name: "Keppel", hex: "#00B39F" },
  { tokenName: "keppel-30", token: "theme.palette.brand.tertiary", name: "Keppel", hex: "#007763" },
  { tokenName: "keppel-20", token: "theme.palette.keppel[20]", name: "Keppel", hex: "#006651" },
  { tokenName: "keppel-10", token: "theme.palette.keppel[10]", name: "Keppel", hex: "#00403F" },
  { tokenName: "caribbean-70", token: "theme.palette.caribbean[70]", name: "Caribbean", hex: "#E6FFF6" },
  { tokenName: "caribbean-50", token: "theme.palette.caribbean[50]", name: "Caribbean", hex: "#78FAD3" },
  { tokenName: "caribbean-60", token: "theme.palette.caribbean[60]", name: "Caribbean", hex: "#A3FFE0" },
  { tokenName: "caribbean-40", token: "theme.palette.caribbean[40]", name: "Caribbean", hex: "#00D3A9" },
  { tokenName: "caribbean-30", token: "theme.palette.caribbean[30]", name: "Caribbean", hex: "#00AD90" },
  { tokenName: "caribbean-20", token: "theme.palette.caribbean[20]", name: "Caribbean", hex: "#006157" },
  { tokenName: "caribbean-10", token: "theme.palette.caribbean[10]", name: "Caribbean", hex: "#003B37" },
  { tokenName: "saffron-70", token: "theme.palette.saffron[70]", name: "Saffron", hex: "#FFFEE6" },
  { tokenName: "saffron-60", token: "theme.palette.saffron[60]", name: "Saffron", hex: "#FFFBBD" },
  { tokenName: "saffron-50", token: "theme.palette.saffron[50]", name: "Saffron", hex: "#FFEB6B" },
  { tokenName: "saffron-40", token: "theme.palette.saffron[40]", name: "Saffron", hex: "#EBC017" },
  { tokenName: "saffron-30", token: "theme.palette.saffron[30]", name: "Saffron", hex: "#C4990A" },
  { tokenName: "saffron-20", token: "theme.palette.saffron[20]", name: "Saffron", hex: "#785400" },
  { tokenName: "saffron-10", token: "theme.palette.saffron[10]", name: "Saffron", hex: "#523600" }
];

const greyscaleColors = [
  { tokenName: "charcoal-110", token: "theme.palette.charcoal[110]", name: "Charcoal", hex: "#525252" },
  { tokenName: "charcoal-100", token: "theme.palette.charcoal[100]", name: "Charcoal", hex: "#FDFDFD" },
  { tokenName: "charcoal-90", token: "theme.palette.charcoal[90]", name: "Charcoal", hex: "#EAEDEE" },
  { tokenName: "charcoal-80", token: "theme.palette.charcoal[80]", name: "Charcoal", hex: "#D2D8DA" },
  { tokenName: "charcoal-70", token: "theme.palette.charcoal[70]", name: "Charcoal", hex: "#B1B9BC" },
  { tokenName: "charcoal-60", token: "theme.palette.charcoal[60]", name: "Charcoal", hex: "#8C999E" },
  { tokenName: "charcoal-50", token: "theme.palette.charcoal[50]", name: "Charcoal", hex: "#647176" },
  { tokenName: "charcoal-40", token: "theme.palette.charcoal[40]", name: "Charcoal", hex: "#3C494F" },
  { tokenName: "charcoal-30", token: "theme.palette.charcoal[30]", name: "Charcoal", hex: "#28353A" },
  { tokenName: "charcoal-20", token: "theme.palette.charcoal[20]", name: "Charcoal", hex: "#142126" },
  { tokenName: "charcoal-10", token: "theme.palette.charcoal[10]", name: "Charcoal", hex: "#000D12" },
  { tokenName: "accent_grey-90", token: "theme.palette.accentGrey[90]", name: "Accent Grey", hex: "#E8EFF3" },
  { tokenName: "accent_grey-80", token: "theme.palette.accentGrey[80]", name: "Accent Grey", hex: "#C9DBE3" },
  { tokenName: "accent_grey-70", token: "theme.palette.accentGrey[70]", name: "Accent Grey", hex: "#ABBDC5" },
  { tokenName: "accent_grey-60", token: "theme.palette.accentGrey[60]", name: "Accent Grey", hex: "#8D9FA7" },
  { tokenName: "accent_grey-50", token: "theme.palette.accentGrey[50]", name: "Accent Grey", hex: "#6F8189" },
  { tokenName: "accent_grey-40", token: "theme.palette.accentGrey[40]", name: "Accent Grey", hex: "#51636B" },
  { tokenName: "accent_grey-30", token: "theme.palette.accentGrey[30]", name: "Accent Grey", hex: "#3D4F57" },
  { tokenName: "accent_grey-20", token: "theme.palette.accentGrey[20]", name: "Accent Grey", hex: "#293B43" },
  { tokenName: "accent_grey-10", token: "theme.palette.accentGrey[10]", name: "Accent Grey", hex: "#15272F" }
];


const functionColors = [
  { tokenName: "blue-70", token: "theme.palette.blue[70]", name: "Blue", hex: "#F0FBFF" },
  { tokenName: "blue-60", token: "theme.palette.blue[60]", name: "Blue", hex: "#9EDDFF" },
  { tokenName: "blue-50", token: "theme.palette.blue[50]", name: "Blue", hex: "#75CAFF" },
  { tokenName: "blue-40", token: "theme.palette.blue[40]", name: "Blue", hex: "#2196F3" },
  { tokenName: "blue-30", token: "theme.palette.blue[30]", name: "Blue", hex: "#1272CC" },
  { tokenName: "blue-20", token: "theme.palette.blue[20]", name: "Blue", hex: "#0754A6" },
  { tokenName: "blue-10", token: "theme.palette.blue[10]", name: "Blue", hex: "#003980" },
  { tokenName: "green-70", token: "theme.palette.green[70]", name: "Green", hex: "#EFFCED" },
  { tokenName: "green-60", token: "theme.palette.green[60]", name: "Green", hex: "#B2E3AF" },
  { tokenName: "green-50", token: "theme.palette.green[50]", name: "Green", hex: "#5BC95B" },
  { tokenName: "green-40", token: "theme.palette.green[40]", name: "Green", hex: "#36BC3B" },
  { tokenName: "green-30", token: "theme.palette.green[30]", name: "Green", hex: "#15701E" },
  { tokenName: "green-20", token: "theme.palette.green[20]", name: "Green", hex: "#0A4A13" },
  { tokenName: "green-10", token: "theme.palette.green[10]", name: "Green", hex: "#05340A" },
  { tokenName: "yellow-70", token: "theme.palette.yellow[70]", name: "Yellow", hex: "#FFFCE6" },
  { tokenName: "yellow-60", token: "theme.palette.yellow[60]", name: "Yellow", hex: "#FFE57D" },
  { tokenName: "yellow-50", token: "theme.palette.yellow[50]", name: "Yellow", hex: "#FFC72B" },
  { tokenName: "yellow-40", token: "theme.palette.yellow[40]", name: "Yellow", hex: "#FFB302" },
  { tokenName: "yellow-30", token: "theme.palette.yellow[30]", name: "Yellow", hex: "#D99100" },
  { tokenName: "yellow-20", token: "theme.palette.yellow[20]", name: "Yellow", hex: "#8C5400" },
  { tokenName: "yellow-10", token: "theme.palette.yellow[10]", name: "Yellow", hex: "#663A00" },
  { tokenName: "red-70", token: "theme.palette.red[70]", name: "Red", hex: "#F2E3DA" },
  { tokenName: "red-60", token: "theme.palette.red[60]", name: "Red", hex: "#E6B093" },
  { tokenName: "red-50", token: "theme.palette.red[50]", name: "Red", hex: "#BF471F" },
  { tokenName: "red-40", token: "theme.palette.red[40]", name: "Red", hex: "#F91313" },
  { tokenName: "red-30", token: "theme.palette.red[30]", name: "Red", hex: "#B32700" },
  { tokenName: "red-20", token: "theme.palette.red[20]", name: "Red", hex: "#8C1A00" },
  { tokenName: "red-10", token: "theme.palette.red[10]", name: "Red", hex: "#660F00" }

];

const backgroundColors = [
  {
    "tokenName": "background-default",
    "token": "theme.palette.background.default",
    "Alias_of": "charcoal-10",
    "hex": "#000D12",
    "role": "This is the default background color for any desired page."
  },
  {
    "tokenName": "background-secondary",
    "token": "theme.palette.background.secondary",
    "Alias_of": "accent_grey-10",
    "hex": "#15272F",
    "role": "First level surface color which is used to establish prominence and layer hierarchy."
  },
  {
    "tokenName": "background-tertiary",
    "token": "theme.palette.background.tertiary",
    "Alias_of": "accent_grey-30",
    "hex": "#3D4F57",
    "role": "Second level surface color which is used to establish prominence and layer hierarchy."
  },
  {
    "tokenName": "background-hover",
    "token": "theme.palette.background.hover",
    "Alias_of": "charcoal-20",
    "hex": "#142126",
    "role": "Color for surface hover interactions."
  },
  {
    "tokenName": "background-supplementary",
    "token": "theme.palette.background.supplementary",
    "Alias_of": "accent_grey-40",
    "hex": "#51636B",
    "role": "Alternative color for both themes. Sample use case in tooltip component."
  },
  {
    "tokenName": "background-blur-heavy",
    "token": "theme.palette.background.blur.heavy",
    "Alias_of": "accent_grey-10, 80%",
    "hex": "#15272F",
    "role": "Low opacity colors used to estabish prominence and layer hierarchy. Use for modals and overlays and along with blur shadow"
  },
  {
    "tokenName": "background-blur-light",
    "token": "theme.palette.background.blur.light",
    "Alias_of": "accent_grey-10, 50%",
    "hex": "#15272F",
    "role": "A variation of the low opacity colors used for modals and overlays."
  },
  {
    "tokenName": "background-inverse",
    "token": "theme.palette.background.inverse",
    "Alias_of": "accent_grey-90",
    "hex": "#E7EFF3",
    "role": "Background color for areas that will include each theme experience."
  },
  {
    "tokenName": "background-brand-default",
    "token": "theme.palette.background.brand.default",
    "Alias_of": "keppel-40",
    "hex": "#00B39F",
    "role": "Color for interface elements relating to the brand."
  },
  {
    "tokenName": "background-brand-hover",
    "token": "theme.palette.background.brand.hover",
    "Alias_of": "keppel-50",
    "hex": "#41CCB3",
    "role": "Color for surface hover interactions relating to the brand."
  },
  {
    "tokenName": "background-brand-disabled",
    "token": "theme.palette.background.brand.disabled",
    "Alias_of": "charcoal-20",
    "hex": "#00B39F",
    "role": "Color for disabled interface elements relating to the brand."
  },
  {
    "tokenName": "background-brand-pressed",
    "token": "theme.palette.background.brand.pressed",
    "Alias_of": "keppel-60",
    "hex": "#93E6D1",
    "role": "Color for pressed surface interactions relating to the brand."
  },
  {
    "tokenName": "background-brand-secondary",
    "token": "theme.palette.background.brand.secondary",
    "Alias_of": "keppel-20",
    "hex": "#006661",
    "role": "First level brand surface color which is used to establish prominence and layer hierarchy."
  },
  {
    "tokenName": "background-brand-tertiary",
    "token": "theme.palette.background.brand.tertiary",
    "Alias_of": "keppel-10",
    "hex": "#00403F",
    "role": "Second level brand surface color which is used to establish prominence and layer hierarchy."
  },
  {
    "tokenName": "background-graphics-default",
    "token": "theme.palette.background.graphics.default",
    "Alias_of": "carbon-40",
    "hex": "#00D3A9",
    "role": "Color for interface elements like visuals and illustrations."
  },
  {
    "tokenName": "background-cta-default",
    "token": "theme.palette.background.cta.default",
    "Alias_of": "saffron-40",
    "hex": "#EBC017",
    "role": "Color for interface elements relating to calls to action."
  },
  {
    "tokenName": "background-cta-hover",
    "token": "theme.palette.background.cta.hover",
    "Alias_of": "saffron-50",
    "hex": "#FFEB6B",
    "role": "Color for surface hover interactions relating to calls to action."
  },
  {
    "tokenName": "background-cta-pressed",
    "token": "theme.palette.background.cta.pressed",
    "Alias_of": "saffron-60",
    "hex": "#FFFBBD",
    "role": "Color for pressed surface interactions relating to calls to action."
  },
  {
    "tokenName": "background-cta-secondary",
    "token": "theme.palette.background.cta.secondary",
    "Alias_of": "saffron-20",
    "hex": "#785400",
    "role": "First level cta surface color which is used to establish prominence and layer hierarchy."
  },
  {
    "tokenName": "background-cta-tertiary",
    "token": "theme.palette.background.cta.tertiary",
    "Alias_of": "saffron-10",
    "hex": "#523600",
    "role": "Second level cta surface color which is used to establish prominence and layer hierarchy."
  },
  {
    "tokenName": "background-info-default",
    "token": "theme.palette.background.info.default",
    "Alias_of": "blue-40",
    "hex": "#1E77FC",
    "role": "Color for interface elements relating to notifications and information."
  },
  {
    "tokenName": "background-info-hover",
    "token": "theme.palette.background.info.hover",
    "Alias_of": "blue-50",
    "hex": "#4797FF",
    "role": "Color for surface hover interactions relating to notifications and information."
  },
  {
    "tokenName": "background-info-pressed",
    "token": "theme.palette.background.info.pressed",
    "Alias_of": "blue-60",
    "hex": "#99CCFF",
    "role": "Color for pressed surface interactions relating to notifications and information."
  },
  {
    "tokenName": "background-info-secondary",
    "token": "theme.palette.background.info.secondary",
    "Alias_of": "blue-20",
    "hex": "#043DB0",
    "role": "First level information surface color which is used to establish prominence and layer hierarchy."
  },
  {
    "tokenName": "background-info-tertiary",
    "token": "theme.palette.background.info.tertiary",
    "Alias_of": "blue-10",
    "hex": "#001B63",
    "role": "Second level information surface color which is used to establish prominence and layer hierarchy."
  },
  {
    "tokenName": "background-success-default",
    "token": "theme.palette.background.success.default",
    "Alias_of": "green-40",
    "hex": "#36BC3B",
    "role": "Color for interface elements relating to success."
  },
  {
    "tokenName": "background-success-hover",
    "token": "theme.palette.background.success.hover",
    "Alias_of": "green-50",
    "hex": "#5BC95B",
    "role": "Color for surface hover interactions relating to success."
  },
  {
    "tokenName": "background-success-pressed",
    "token": "theme.palette.background.success.pressed",
    "Alias_of": "green-60",
    "hex": "#B2E3AF",
    "role": "Color for pressed surface interactions relating to success."
  },
  {
    "tokenName": "background-success-secondary",
    "token": "theme.palette.background.success.secondary",
    "Alias_of": "green-20",
    "hex": "#0A4A13",
    "role": "First level success surface color which is used to establish prominence and layer hierarchy."
  },
  {
    "tokenName": "background-success-tertiary",
    "token": "theme.palette.background.success.tertiary",
    "Alias_of": "green-10",
    "hex": "#05240A",
    "role": "Second level success surface color which is used to establish prominence and layer hierarchy."
  },
  {
    "tokenName": "background-warning-default",
    "token": "theme.palette.background.warning.default",
    "Alias_of": "yellow-40",
    "hex": "#FFB302",
    "role": "Color for interface elements relating to warnings."
  },
  {
    "tokenName": "background-warning-hover",
    "token": "theme.palette.background.warning.hover",
    "Alias_of": "yellow-50",
    "hex": "#FFC72B",
    "role": "Color for surface hover interactions relating to warnings."
  },
  {
    "tokenName": "background-warning-pressed",
    "token": "theme.palette.background.warning.pressed",
    "Alias_of": "yellow-60",
    "hex": "#FFE7D",
    "role": "Color for pressed surface interactions relating to warnings."
  },
  {
    "tokenName": "background-warning-secondary",
    "token": "theme.palette.background.warning.secondary",
    "Alias_of": "yellow-20",
    "hex": "#8C5400",
    "role": "First level warning surface color which is used to establish prominence and layer hierarchy."
  },
  {
    "tokenName": "background-warning-tertiary",
    "token": "theme.palette.background.warning.tertiary",
    "Alias_of": "yellow-10",
    "hex": "#663A00",
    "role": "Second level warning surface color which is used to establish prominence and layer hierarchy."
  },
  {
    "tokenName": "background-error-default",
    "token": "theme.palette.background.error.default",
    "Alias_of": "red-40",
    "hex": "#FF385C",
    "role": "Color for interface elements relating to errors and destructive actions."
  },
  {
    "tokenName": "background-error-hover",
    "token": "theme.palette.background.error.hover",
    "Alias_of": "red-50",
    "hex": "#FF6179",
    "role": "Color for surface hover interactions relating to errors."
  },
  {
    "tokenName": "background-error-pressed",
    "token": "theme.palette.background.error.pressed",
    "Alias_of": "red-60",
    "hex": "#FFB3B9",
    "role": "Color for pressed surface interactions relating to errors."
  },
  {
    "tokenName": "background-error-secondary",
    "token": "theme.palette.background.error.secondary",
    "Alias_of": "red-20",
    "hex": "#8C0A2F",
    "role": "First level error surface color which is used to establish prominence and layer hierarchy."
  },
  {
    "tokenName": "background-error-tertiary",
    "token": "theme.palette.background.error.tertiary",
    "Alias_of": "red-10",
    "hex": "#660624",
    "role": "Second level error surface color which is used to establish prominence and layer hierarchy."
  }
];

const textColors = [
  { "tokenName": "text-default", "token": "theme.palette.text.default", "Alias_of": "charcoal-100", "hex": "#fdfdfd", "role": "Default text color." },
  { "tokenName": "text-secondary", "token": "theme.palette.text.secondary", "Alias_of": "charcoal-80", "hex": "#d2d8da", "role": "First level text color to indicate lower prominence and establish visual hierarchy." },
  { "tokenName": "text-tertiary", "token": "theme.palette.text.tertiary", "Alias_of": "charcoal-60", "hex": "#8c999e", "role": "Second level text color to indicate lower prominence and establish visual hierarchy." },
  { "tokenName": "text-inverse", "token": "theme.palette.text.inverse", "Alias_of": "charcoal-10", "hex": "#000d12", "role": "This text color is the polar opposite of the default text color in any theme." },
  { "tokenName": "text-disabled", "token": "theme.palette.text.disabled", "Alias_of": "charcoal-50", "hex": "#647176", "role": "This text color is the polar opposite of the default text color in any theme." },
  { "tokenName": "text-constant-white", "token": "theme.palette.text.constant.white", "Alias_of": "charcoal-100", "hex": "#fdfdfd", "role": "This text color remains constant across both themes and is used on surfaces that don’t change as themes change." },
  { "tokenName": "text-brand", "token": "theme.palette.text.brand", "Alias_of": "keppel-40", "hex": "#00b39f", "role": "Color for text relating to the brand." },
  { "tokenName": "text-info", "token": "theme.palette.text.info", "Alias_of": "blue-40", "hex": "#2196f3", "role": "Color for text relating to notifications and information." },
  { "tokenName": "text-success", "token": "theme.palette.text.success", "Alias_of": "green-40", "hex": "#36bc3b", "role": "Color for text relating to success." },
  { "tokenName": "text-warning", "token": "theme.palette.text.warning", "Alias_of": "yellow-40", "hex": "#f0d053", "role": "Color for text relating to warnings." },
  { "tokenName": "text-error", "token": "theme.palette.text.error", "Alias_of": "red-40", "hex": "#f91313", "role": "Color for text relating to errors and destructive actions." },
];
const borderColors = [
  { tokenName: "border-default", token: "theme.palette.border.default", Alias_of: "accent_grey-10", hex: "#15272f", "role": "Default border color for interface elements." },
  { tokenName: "border-brand", token: "theme.palette.border.brand", Alias_of: "keppel-40", hex: "#00b39f", "role": "Border color for elements relating to the brand." },
  { tokenName: "border-normal", token: "theme.palette.border.normal", Alias_of: "accent_grey-30", hex: "#3d4f57", "role": "First level border color to establish prominence and visual hierarchy." },
  { tokenName: "border-strong", token: "theme.palette.border.strong", Alias_of: "accent_grey-60", hex: "#8d9fa7", "role": "Second level border color to establish prominence and visual hierarchy." },
];

const componentColors = [
  { tokenName: "icon-default", token: "theme.palette.icon.default", Alias_of: "accent_grey-10", hex: "#15272f", role: "Default color for icon component in a design." },
  { tokenName: "icon-secondary", token: "theme.palette.icon.secondary", Alias_of: "charcoal-80", hex: "#d2d8da", role: "Default color for icon component in a design." },
  { tokenName: "icon-brand", token: "theme.palette.icon.secondary", Alias_of: "keppel-40", hex: "#00b39f", role: "Default color for any icon relating to the brand." },
  { tokenName: "icon-inverse", token: "theme.palette.icon.inverse", Alias_of: "charcoal-10", hex: "#00012", role: "This icon color is the polar opposite of the default icon color in any theme." },
  { tokenName: "icon-weather", token: "theme.palette.icon.weather", Alias_of: "saffron-40", hex: "#3d4f57", role: "Deafult color for any icon representing theme switching." },
  { tokenName: "icon-disabled", token: "theme.palette.icon.disabled", Alias_of: "charcoal-50", hex: "#647176", role: "Color for icon components." },
];


const CopyColor = ({ hex , token }) => {
  const [copyText, setCopyText] = useState("Copy");
  const [showCopy, setShowCopy] = useState(false);

  const handleCopy = async () => {
    await copyToClipboard(hex || token);
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
        onMouseEnter={() => setShowCopy(true)}
        onMouseLeave={() => setShowCopy(false)}
        onClick={handleCopy}
      >
        <span>{hex || token }</span>
      </Box>
    </CustomTooltip>
  );
};

const PreviewBox = styled("div")(({ theme, bgcolor }) => ({
  backgroundColor: bgcolor,
  width: "2.6rem",
  height: "2.6rem",
  borderRadius: "6px",
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: "inset 0 0 3px rgba(0,0,0,0.15)",
  margin: "0 auto",

}));


const PreviewTextBox = styled("p")(({ theme, tokenName }) => {
  const colorsMap = {
    "text-default": theme.palette.text.default,
    "text-secondary": theme.palette.text.warning,
    "text-tertiary": theme.palette.text.tertiary,
    "text-inverse": theme.palette.text.inverse,
    "text-disabled": theme.palette.text.disabled,
    "text-constant-white": theme.palette.text.constant?.white,
    "text-brand": theme.palette.text.brand,
    "text-info": theme.palette.text.info,
    "text-success": theme.palette.text.success,
    "text-warning": theme.palette.text.warning,
    "text-error": theme.palette.text.error,
  };

  const resolvedColors = colorsMap[tokenName] ;

  return {
    color: resolvedColors,
    width: "2.6rem",
    height: "2.6rem",
    borderRadius: "6px",
    boxShadow: "inset 0 0 3px rgba(0,0,0,0.15)",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1rem",
    fontWeight: "bold",
    backgroundColor: theme.palette.background.tertiary,
  };
});

const PreviewBorderBox = styled("div")(({ theme , tokenName }) => {
  const bordeMap = {
    "border-default": theme.palette.border.default,
    "border-brand": theme.palette.border.brand,
    "border-normal": theme.palette.border.normal,
    "border-strong": theme.palette.border.strong,
  };

  const resolvedColors = bordeMap[tokenName] ;

  return {
    backgroundColor: "transparent",
    width: "2.6rem",
    height: "2.6rem",
    borderRadius: "6px",
    border: `1px solid ${resolvedColors}`,
    boxShadow: "inset 0 0 3px rgba(0,0,0,0.15)",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1rem",
    fontWeight: "bold",
    color: resolvedColors,
  };
});

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

const ColorCode = () => {
  const { isDark } = useStyledDarkMode();
  const location = useLocation();
  return (
    <SistentLayout title="Color">
      <div className="content">
        <a id="Identity">
          <h2>Color</h2>
        </a>

        <p>
          Colors when accurately applied can be a potent tool that enables
          designers and developers to implement solutions with speed and
          efficiency. Here are a couple of things to keep in mind.
        </p>
        <div className="filterBtns">
          <Button
            className={
              location.pathname === "/projects/sistent/identity/color"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/identity/color")}
            title="Overview"
          />
          <Button
            className={
              location.pathname === "/projects/sistent/identity/color/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/identity/color/guidance")
            }
            title="Guidance"
          />
          <Button
            className={
              location.pathname === "/projects/sistent/identity/color/code"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/identity/color/code")}
            title="Code"
          />
        </div>
        <div className="main-content">
          <p>
            These colors have been structured into tokens that represent
            specific values. These tokens will be arranged in a package to
            enable referencing and importing it into editor files for use. The
            tokens are grouped into categories to represent the ones that are
            directly usable in designs and those that are to be aliased by
            tokens used in designs. This makes for proper structure and
            consistent usage of color across all proposed and implemented
            designs. The only exception for usage of primitive tokens might be
            when applying color to illustrations.
          </p>
          <a id="Primitive Category">
            <h2>Primitive Category</h2>
          </a>
          <p>
            Since this category will not be used directly in designs, it does
            not have any role descriptions.
          </p>
          <h3>Brand Colors</h3>
          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>

            <Row className="table-container" $Hcenter>
              <Col md={12} sx={{ px: 0 }}>
                <StyledTableContainer >
                  <Table size="small" aria-label="brand-colors">
                    <TableHead>
                      <TableRow >
                        <StyledHeaderCell>Token Name</StyledHeaderCell>
                        <StyledHeaderCell>Name</StyledHeaderCell>
                        <StyledHeaderCell>Hex Code</StyledHeaderCell>
                        <StyledHeaderCell>Sistent Token</StyledHeaderCell>
                        <StyledHeaderCell align="center">Preview</StyledHeaderCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {brandColors.map((col) => (
                        <StyledTableRow key={col.tokenName}>
                          <StyledTableCell>{col.tokenName}</StyledTableCell>
                          <StyledTableCell>{col.name}</StyledTableCell>
                          <StyledTableCell>{col.hex}</StyledTableCell>
                          <StyledTableCell sx={{ fontFamily: "monospace" }}>
                            <CopyColor hex={col.token} />
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            <PreviewBox bgcolor={col.hex} />
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </StyledTableContainer>
              </Col>
            </Row>
          </SistentThemeProvider>

          {/* Greyscale Colors */}
          <h3>Greyscale Colors</h3>
          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <Row className="table-container" $Hcenter>
              <Col md={12} sx={{ px: 0 }}>
                <StyledTableContainer>
                  <Table size="small" aria-label="greyscale-colors">
                    <TableHead>
                      <TableRow >
                        <StyledHeaderCell>Token Name</StyledHeaderCell>
                        <StyledHeaderCell>Name</StyledHeaderCell>
                        <StyledHeaderCell>Hex Code</StyledHeaderCell>
                        <StyledHeaderCell>Sistent Token</StyledHeaderCell>
                        <StyledHeaderCell align="center">Preview</StyledHeaderCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {greyscaleColors.map((col) => (
                        <StyledTableRow key={col.tokenName}>
                          <StyledTableCell>{col.tokenName}</StyledTableCell>
                          <StyledTableCell>{col.name}</StyledTableCell>
                          <StyledTableCell>{col.hex}</StyledTableCell>
                          <StyledTableCell sx={{ fontFamily: "monospace" }}>
                            <CopyColor hex={col.token} />
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            <PreviewBox bgcolor={col.hex} />
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </StyledTableContainer>
              </Col>
            </Row>
          </SistentThemeProvider>

          {/* FunctionColors */}
          <h3>Function Colors</h3>

          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <Row className="table-container" $Hcenter>
              <Col md={12} sx={{ px: 0 }}>
                <StyledTableContainer>
                  <Table size="small" aria-label="function-colors">
                    <TableHead>
                      <TableRow >
                        <StyledHeaderCell>Token Name</StyledHeaderCell>
                        <StyledHeaderCell>Name</StyledHeaderCell>
                        <StyledHeaderCell>Hex Code</StyledHeaderCell>
                        <StyledHeaderCell>Sistent Token</StyledHeaderCell>
                        <StyledHeaderCell align="center">Preview</StyledHeaderCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {functionColors.map((col) => (
                        <StyledTableRow key={col.tokenName}>
                          <StyledTableCell>{col.tokenName}</StyledTableCell>
                          <StyledTableCell>{col.name}</StyledTableCell>
                          <StyledTableCell>{col.hex}</StyledTableCell>
                          <StyledTableCell sx={{ fontFamily: "monospace" }}>
                            <CopyColor hex={col.token} />
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            <PreviewBox bgcolor={col.hex} />
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
            The semantic category has been sub-categorized into background,
            text, brand, border, and functions. Possibility for a few more
            categories exists as the need arises.
          </p>
          <h3>Background Colors</h3>
          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <Row className="table-container" $Hcenter>
              <Col md={12} sx={{ px: 0 }}>
                <StyledTableContainer>
                  <Table size="small" aria-label="background-colors">
                    <TableHead>
                      <TableRow >
                        <StyledHeaderCell>Token Name</StyledHeaderCell>
                        <StyledHeaderCell>Alias Of</StyledHeaderCell>
                        <StyledHeaderCell>Hex Code</StyledHeaderCell>
                        <StyledHeaderCell>Sistent Token</StyledHeaderCell>
                        <StyledHeaderCell align="center">Preview</StyledHeaderCell>
                        <StyledHeaderCell>Role</StyledHeaderCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {backgroundColors.map((col) => (
                        <StyledTableRow key={col.tokenName}>
                          <StyledTableCell>{col.tokenName}</StyledTableCell>
                          <StyledTableCell>{col.Alias_of}</StyledTableCell>
                          <StyledTableCell>{col.hex}</StyledTableCell>
                          <StyledTableCell sx={{ fontFamily: "monospace" }}>
                            <CopyColor hex={col.token} />
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            <PreviewBox bgcolor={col.hex} />
                          </StyledTableCell>
                          <StyledTableCell >
                            {col.role}
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </StyledTableContainer>
              </Col>
            </Row>
          </SistentThemeProvider>

          <h3>Text Colors</h3>
          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <Row className="table-container" $Hcenter>
              <Col md={12} sx={{ px: 0 }}>
                <StyledTableContainer>
                  <Table size="small" aria-label="brand-colors">
                    <TableHead>
                      <TableRow >
                        <StyledHeaderCell>Token Name</StyledHeaderCell>
                        <StyledHeaderCell>Alias Of</StyledHeaderCell>
                        <StyledHeaderCell>Hex Code</StyledHeaderCell>
                        <StyledHeaderCell>Sistent Token</StyledHeaderCell>
                        <StyledHeaderCell align="center">Preview</StyledHeaderCell>
                        <StyledHeaderCell>Role</StyledHeaderCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {textColors.map((col) => (
                        <StyledTableRow key={col.tokenName}>
                          <StyledTableCell>{col.tokenName}</StyledTableCell>
                          <StyledTableCell>{col.Alias_of}</StyledTableCell>
                          <StyledTableCell>{col.hex}</StyledTableCell>
                          <StyledTableCell sx={{ fontFamily: "monospace" }}>
                            <CopyColor hex={col.token} />
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            <PreviewTextBox tokenName={col.tokenName} >Aa</PreviewTextBox>
                          </StyledTableCell>
                          <StyledTableCell>
                            {col.role}
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </StyledTableContainer>
              </Col>
            </Row>
          </SistentThemeProvider>

          <h3>Border Colors</h3>
          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <Row className="table-container" $Hcenter>
              <Col md={12} sx={{ px: 0 }}>
                <StyledTableContainer>
                  <Table size="small" aria-label="border-colors">
                    <TableHead>
                      <TableRow >
                        <StyledHeaderCell>Token Name</StyledHeaderCell>
                        <StyledHeaderCell>Alias Of</StyledHeaderCell>
                        <StyledHeaderCell>Hex Code</StyledHeaderCell>
                        <StyledHeaderCell>Sistent Token</StyledHeaderCell>
                        <StyledHeaderCell align="center">Preview</StyledHeaderCell>
                        <StyledHeaderCell>Role</StyledHeaderCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {borderColors.map((col) => (
                        <StyledTableRow key={col.tokenName}>
                          <StyledTableCell>{col.tokenName}</StyledTableCell>
                          <StyledTableCell>{col.Alias_of}</StyledTableCell>
                          <StyledTableCell>{col.hex}</StyledTableCell>
                          <StyledTableCell sx={{ fontFamily: "monospace" }}>
                            <CopyColor hex={col.token} />
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            <PreviewBorderBox tokenName={col.tokenName} />
                          </StyledTableCell>
                          <StyledTableCell>
                            {col.role}
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </StyledTableContainer>
              </Col>
            </Row>
          </SistentThemeProvider>


          <h3>Component Colors</h3>
          <p>
            Tokens here are component specific and must be used only for the
            component that they are referencing.
          </p>
          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <Row className="table-container" $Hcenter>
              <Col md={12} sx={{ px: 0 }}>
                <StyledTableContainer>
                  <Table size="small" aria-label="component-colors">
                    <TableHead>
                      <TableRow >
                        <StyledHeaderCell>Token Name</StyledHeaderCell>
                        <StyledHeaderCell>Alias Of</StyledHeaderCell>
                        <StyledHeaderCell>Hex Code</StyledHeaderCell>
                        <StyledHeaderCell>Sistent Token</StyledHeaderCell>
                        <StyledHeaderCell align="center">Preview</StyledHeaderCell>
                        <StyledHeaderCell>Role</StyledHeaderCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {componentColors.map((col) => (
                        <StyledTableRow key={col.tokenName}>
                          <StyledTableCell>{col.tokenName}</StyledTableCell>
                          <StyledTableCell>{col.Alias_of}</StyledTableCell>
                          <StyledTableCell>{col.hex}</StyledTableCell>
                          <StyledTableCell sx={{ fontFamily: "monospace" }}>
                            <CopyColor hex={col.token} />
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            <PreviewBox bgcolor={col.hex} />
                          </StyledTableCell>
                          <StyledTableCell >
                            {col.role}
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

export default ColorCode;
