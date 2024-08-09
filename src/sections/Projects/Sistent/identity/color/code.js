import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import BrandColors from "../../../../../assets/images/app/projects/sistent/brand-colors-table.png";
import GreyscaleColors from "../../../../../assets/images/app/projects/sistent/greyscale-colors-table.png";
import BgColors from "../../../../../assets/images/app/projects/sistent/bg-colors-table.png";
import FunctionColors from "../../../../../assets/images/app/projects/sistent/function-colors-table.png";
import TextColors from "../../../../../assets/images/app/projects/sistent/text-colors-table.png";
import BorderColors from "../../../../../assets/images/app/projects/sistent/border-colors-table.png";
import ComponentColors from "../../../../../assets/images/app/projects/sistent/components-table.png";
import BrandColorsDark from "../../../../../assets/images/app/projects/sistent/brand-colors-table-dark.png";
import GreyscaleColorsDark from "../../../../../assets/images/app/projects/sistent/greyscale-colors-table-dark.png";
import BgColorsDark from "../../../../../assets/images/app/projects/sistent/bg-colors-table-dark.png";
import FunctionColorsDark from "../../../../../assets/images/app/projects/sistent/function-colors-table-dark.png";
import TextColorsDark from "../../../../../assets/images/app/projects/sistent/text-colors-table-dark.png";
import BorderColorsDark from "../../../../../assets/images/app/projects/sistent/border-colors-table-dark.png";
import ComponentColorsDark from "../../../../../assets/images/app/projects/sistent/components-table-dark.png";

import { SistentLayout } from "../../sistent-layout";
import { Col, Row } from "../../../../../reusecore/Layout";
import Button from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const ColorCode = () => {
  const { isDark } = useStyledDarkMode();
  const location = useLocation();
  const getColorColumns = (isPlusRole) => {
    if (isPlusRole) {
      return ["Token", "Value", "Description"];
    }
    return ["Token", "Value"];
  };
  const colorData = [
    {
      token: "keppel-70",
      value: { name: "Keppel", hex: "#daf3eb", swatchClass: "keppel-70" },
    },
    {
      token: "keppel-60",
      value: { name: "Keppel", hex: "#93E6D1", swatchClass: "keppel-60" },
    },
    {
      token: "keppel-50",
      value: { name: "Keppel", hex: "#41CCB3", swatchClass: "keppel-50" },
    },
    {
      token: "keppel-40",
      value: { name: "Keppel", hex: "#00B39F", swatchClass: "keppel-40" },
    },
    {
      token: "keppel-30",
      value: { name: "Keppel", hex: "#007763", swatchClass: "keppel-30" },
    },
    {
      token: "keppel-20",
      value: { name: "Keppel", hex: "#006661", swatchClass: "keppel-20" },
    },
    {
      token: "keppel-10",
      value: { name: "Keppel", hex: "#00403F", swatchClass: "keppel-10" },
    },
    {
      token: "caribbean-70",
      value: { name: "Caribbean", hex: "#E6FFF6", swatchClass: "caribbean-70" },
    },
    {
      token: "caribbean-60",
      value: { name: "Caribbean", hex: "#A3FFE0", swatchClass: "caribbean-60" },
    },
    {
      token: "caribbean-50",
      value: { name: "Caribbean", hex: "#78FAD3", swatchClass: "caribbean-50" },
    },
    {
      token: "caribbean-40",
      value: { name: "Caribbean", hex: "#00D3A9", swatchClass: "caribbean-40" },
    },
    {
      token: "caribbean-30",
      value: { name: "Caribbean", hex: "#00AD90", swatchClass: "caribbean-30" },
    },
    {
      token: "caribbean-20",
      value: { name: "Caribbean", hex: "#006157", swatchClass: "caribbean-20" },
    },
    {
      token: "caribbean-10",
      value: { name: "Caribbean", hex: "#003B37", swatchClass: "caribbean-10" },
    },
    {
      token: "saffron-70",
      value: { name: "Saffron", hex: "#FFFEE6", swatchClass: "saffron-70" },
    },
    {
      token: "saffron-60",
      value: { name: "Saffron", hex: "#FFFBBD", swatchClass: "saffron-60" },
    },
    {
      token: "saffron-50",
      value: { name: "Saffron", hex: "#FFEB6B", swatchClass: "saffron-50" },
    },
    {
      token: "saffron-40",
      value: { name: "Saffron", hex: "#EBC017", swatchClass: "saffron-40" },
    },
    {
      token: "saffron-30",
      value: { name: "Saffron", hex: "#C4990A", swatchClass: "saffron-30" },
    },
    {
      token: "saffron-20",
      value: { name: "Saffron", hex: "#785400", swatchClass: "saffron-20" },
    },
    {
      token: "saffron-10",
      value: { name: "Saffron", hex: "#523600", swatchClass: "saffron-10" },
    },
  ];
  const GreyscaleColorData = [
    {
      token: "charcoal-100",
      value: { name: "Charcoal", hex: "#fdfdfd", swatchClass: "charcoal-100" },
    },
    {
      token: "charcoal-90",
      value: { name: "Charcoal", hex: "#EAEDEE", swatchClass: "charcoal-90" },
    },
    {
      token: "charcoal-80",
      value: { name: "Charcoal", hex: "#D2D8DA", swatchClass: "charcoal-80" },
    },
    {
      token: "charcoal-70",
      value: { name: "Charcoal", hex: "#B1B9BC", swatchClass: "charcoal-70" },
    },
    {
      token: "charcoal-60",
      value: { name: "Charcoal", hex: "#8C999E", swatchClass: "charcoal-60" },
    },
    {
      token: "charcoal-50",
      value: { name: "Charcoal", hex: "#647176", swatchClass: "charcoal-50" },
    },
    {
      token: "charcoal-40",
      value: { name: "Charcoal", hex: "#3C494E", swatchClass: "charcoal-40" },
    },
    {
      token: "charcoal-30",
      value: { name: "Charcoal", hex: "#28353A", swatchClass: "charcoal-30" },
    },
    {
      token: "charcoal-20",
      value: { name: "Charcoal", hex: "#142126", swatchClass: "charcoal-20" },
    },
    {
      token: "charcoal-10",
      value: { name: "Charcoal", hex: "#000D12", swatchClass: "charcoal-10" },
    },
    {
      token: "accent_grey-90",
      value: {
        name: "Accent Grey",
        hex: "#E7EFF3",
        swatchClass: "accent_grey-90",
      },
    },
    {
      token: "accent_grey-80",
      value: {
        name: "Accent Grey",
        hex: "#ABBDC5",
        swatchClass: "accent_grey-80",
      },
    },
    {
      token: "accent_grey-70",
      value: {
        name: "Accent Grey",
        hex: "#ABBDC5",
        swatchClass: "accent_grey-70",
      },
    },
    {
      token: "accent_grey-60",
      value: {
        name: "Accent Grey",
        hex: "#8D9FA7",
        swatchClass: "accent_grey-60",
      },
    },
    {
      token: "accent_grey-50",
      value: {
        name: "Accent Grey",
        hex: "#6F8189",
        swatchClass: "accent_grey-50",
      },
    },
    {
      token: "accent_grey-40",
      value: {
        name: "Accent Grey",
        hex: "#51636B",
        swatchClass: "accent_grey-40",
      },
    },
    {
      token: "accent_grey-30",
      value: {
        name: "Accent Grey",
        hex: "#3D4F57",
        swatchClass: "accent_grey-30",
      },
    },
    {
      token: "accent_grey-20",
      value: {
        name: "Accent Grey",
        hex: "#293B43",
        swatchClass: "accent_grey-20",
      },
    },
    {
      token: "accent_grey-10",
      value: {
        name: "Accent Grey",
        hex: "#15272F",
        swatchClass: "accent_grey-10",
      },
    },
  ];
  const FunctionColorData = [
    {
      token: "blue-70",
      value: { name: "Blue", hex: "#F0FBFF", swatchClass: "blue-70" },
    },
    {
      token: "blue-60",
      value: { name: "Blue", hex: "#9EDDFF", swatchClass: "blue-60" },
    },
    {
      token: "blue-50",
      value: { name: "Blue", hex: "#75CAFF", swatchClass: "blue-50" },
    },
    {
      token: "blue-40",
      value: { name: "Blue", hex: "#2196F3", swatchClass: "blue-40" },
    },
    {
      token: "blue-30",
      value: { name: "Blue", hex: "#1272CC", swatchClass: "blue-30" },
    },
    {
      token: "blue-20",
      value: { name: "Blue", hex: "#0754A6", swatchClass: "blue-20" },
    },
    {
      token: "blue-10",
      value: { name: "Blue", hex: "#003980", swatchClass: "blue-10" },
    },
    {
      token: "green-70",
      value: { name: "Green", hex: "#EFFCED", swatchClass: "green-70" },
    },
    {
      token: "green-60",
      value: { name: "Green", hex: "#B2E3AF", swatchClass: "green-60" },
    },
    {
      token: "green-50",
      value: { name: "Green", hex: "#5BC95B", swatchClass: "green-50" },
    },
    {
      token: "green-40",
      value: { name: "Green", hex: "#36BC3B", swatchClass: "green-40" },
    },
    {
      token: "green-30",
      value: { name: "Green", hex: "#15701E", swatchClass: "green-30" },
    },
    {
      token: "green-20",
      value: { name: "Green", hex: "#0A4A13", swatchClass: "green-20" },
    },
    {
      token: "green-10",
      value: { name: "Green", hex: "#05240A", swatchClass: "green-10" },
    },
    {
      token: "yellow-70",
      value: { name: "Yellow", hex: "#FFFBE6", swatchClass: "yellow-70" },
    },
    {
      token: "yellow-60",
      value: { name: "Yellow", hex: "#FFEFA6", swatchClass: "yellow-60" },
    },
    {
      token: "yellow-50",
      value: { name: "Yellow", hex: "#FFE37D", swatchClass: "yellow-50" },
    },
    {
      token: "yellow-40",
      value: { name: "Yellow", hex: "#F0D053", swatchClass: "yellow-40" },
    },
    {
      token: "yellow-30",
      value: { name: "Yellow", hex: "#F0A303", swatchClass: "yellow-30" },
    },
    {
      token: "yellow-20",
      value: { name: "Yellow", hex: "#C98300", swatchClass: "yellow-20" },
    },
    {
      token: "yellow-10",
      value: { name: "Yellow", hex: "#A36500", swatchClass: "yellow-10" },
    },
    {
      token: "red-70",
      value: { name: "Red", hex: "#F2E3DA", swatchClass: "red-70" },
    },
    {
      token: "red-60",
      value: { name: "Red", hex: "#E6B093", swatchClass: "red-60" },
    },
    {
      token: "red-50",
      value: { name: "Red", hex: "#BF471F", swatchClass: "red-50" },
    },
    {
      token: "red-40",
      value: { name: "Red", hex: "#F91313", swatchClass: "red-40" },
    },
    {
      token: "red-30",
      value: { name: "Red", hex: "#B32700", swatchClass: "red-30" },
    },
    {
      token: "red-20",
      value: { name: "Red", hex: "#8C1A00", swatchClass: "red-20" },
    },
    {
      token: "red-10",
      value: { name: "Red", hex: "#660F00", swatchClass: "red-10" },
    },
  ];
  const BackgroundColorData = [
    {
      token: "background-default",
      value: {
        name: "Alias - charcoal - 100",
        hex: "#fdfdfd",
        swatchClass: "background-default",
      },
      role: "This is the default background color for any designed page.",
    },
    {
      token: "background-default",
      value: {
        name: "Alias - charcoal-100",
        hex: "#fdfdfd",
        swatchClass: "background-default",
      },
      role: "This is the default background color for any designed page.",
    },
    {
      token: "background-secondary",
      value: {
        name: "Alias - accent_grey-90",
        hex: "#e7eff3",
        swatchClass: "background-secondary",
      },
      role: "First level surface color which is used to establish prominence and layer hierarchy.",
    },
    {
      token: "background-tertiary",
      value: {
        name: "Alias - accent grey-80",
        hex: "#c9dbe3",
        swatchClass: "background-tertiary",
      },
      role: "Second level surface color which is used to establish prominence and layer hierarchy.",
    },
    {
      token: "background-hover",
      value: {
        name: "Alias - charcoal-90",
        hex: "#EAEDEE",
        swatchClass: "background-hover",
      },
      role: "Color for surface hover interactions.",
    },
    {
      token: "background-supplementary",
      value: {
        name: "Alias - accent grey-40",
        hex: "#51636b",
        swatchClass: "background-supplementary",
      },
      role: "Alternative color that remains constant for both themes. Sample use case in tooltip component.",
    },
    {
      token: "background-surfaces",
      value: {
        name: "Alias - accent grey-100",
        hex: "#f6f8f8",
        swatchClass: "background-surfaces",
      },
      role: "For use on surfaces mostly in components across designs depending on the use case.",
    },
    {
      token: "background-blur-heavy",
      value: {
        name: "Alias - accent grey-90, 80%",
        hex: "#e7eff3",
        swatchClass: "background-blur-heavy",
      },
      role: "Low opacity color used to establish prominence and layer hierarchy. Use for modals and overlays and along with blur shadow.",
    },
    {
      token: "background-blur-light",
      value: {
        name: "Alias - accent grey-09, 20%",
        hex: "Holoff",
        swatchClass: "background-blur-light",
      },
      role: "A variation of the low opacity colors used for modals and overlays.",
    },
    {
      token: "background-inverse",
      value: {
        name: "Alias - charcoal-118",
        hex: "#000d12",
        swatchClass: "background-inverse",
      },
      role: "Background color for area that will include code snippets of consistent components.",
    },
    {
      token: "background-brand-default",
      value: {
        name: "Alias - keppel-40",
        hex: "#006396",
        swatchClass: "background-brand-default",
      },
      role: "Color for interface elements relating to the brand.",
    },
    {
      token: "background-brand-hover",
      value: {
        name: "Alias - keppel-50",
        hex: "#41ccb3",
        swatchClass: "background-brand-hover",
      },
      role: "Color for surface hover interactions relating to the brand.",
    },
    {
      token: "background-brand-disabled",
      value: {
        name: "Alias - charcoal-90",
        hex: "#eaedee",
        swatchClass: "background-brand-disabled",
      },
      role: "Color for disabled interface elements relating to the brand.",
    },
    {
      token: "background-brand-pressed",
      value: {
        name: "Alias - keppel-60",
        hex: "#eaedee",
        swatchClass: "background-brand-pressed",
      },
      role: "Color for pressed surface interactions.",
    },
    {
      token: "background-brand-secondary",
      value: {
        name: "Alias - keppel-50",
        hex: "#41ccb3",
        swatchClass: "background-brand-secondary",
      },
      role: "First level brand surface color which is used to establish prominence and layer hierarchy.",
    },
    {
      token: "background-brand-tertiary",
      value: {
        name: "Alias - keppel-70",
        hex: "#daf2eb",
        swatchClass: "background-brand-tertiary",
      },
      role: "Second level brand surface color which is used to establish prominence and layer hierarchy.",
    },
    {
      token: "background-graphics-default",
      value: {
        name: "Alias - caribbean-30",
        hex: "#00ad90",
        swatchClass: "background-graphics-default",
      },
      role: "Color for interface elements like visuals and graphics.",
    },
    {
      token: "background-cta-default",
      value: {
        name: "Alias - saffron-40",
        hex: "#ebc017",
        swatchClass: "background-cta-default",
      },
      role: "Color for interface elements relating to calls to action.",
    },
    {
      token: "background-cta-hover",
      value: {
        name: "Alias - saffron-50",
        hex: "#ffeb6b",
        swatchClass: "background-cta-hover",
      },
      role: "Color for surface hover interactions relating to calls to action.",
    },
    {
      token: "background-cta-pressed",
      value: {
        name: "Alias - saffron-60",
        hex: "#fffbbd",
        swatchClass: "background-cta-pressed",
      },
      role: "Color for pressed surface interactions relating to calls to action.",
    },
    {
      token: "background-cta-secondary",
      value: {
        name: "Alias - saffron-60",
        hex: "#fffbbd",
        swatchClass: "background-cta-secondary",
      },
      role: "First level CTA surface color which is used to establish prominence and layer hierarchy.",
    },
    {
      token: "background-cta-tertiary",
      value: {
        name: "Alias - saffron-70",
        hex: "#fffee6",
        swatchClass: "background-cta-tertiary",
      },
      role: "Second level CTA surface color which is used to establish prominence and layer hierarchy.",
    },
    {
      token: "background-info-default",
      value: {
        name: "Alias - blue-40",
        hex: "#2196f3",
        swatchClass: "background-info-default",
      },
      role: "Color for interface elements relating to notifications and information.",
    },
    {
      token: "background-info-hover",
      value: {
        name: "Alias - blue-20",
        hex: "#0754A6",
        swatchClass: "background-info-hover",
      },
      role: "Color for surface hover interactions relating to notifications and information.",
    },
    {
      token: "background-info-pressed",
      value: {
        name: "Alias - blue-10",
        hex: "#003980",
        swatchClass: "background-info-pressed",
      },
      role: "Color for pressed surface interactions relating to notifications and information.",
    },
    {
      token: "background-info-secondary",
      value: {
        name: "Alias - blue-60",
        hex: "#9Edfff",
        swatchClass: "background-info-secondary",
      },
      role: "First level information surface color which is used to establish prominence and layer hierarchy.",
    },
    {
      token: "background-info-tertiary",
      value: {
        name: "Alias - blue-70",
        hex: "#f0fbff",
        swatchClass: "background-info-tertiary",
      },
      role: "Second level information surface color which is used to establish prominence and layer hierarchy.",
    },
    {
      token: "background-success-default",
      value: {
        name: "Alias - green-30",
        hex: "#15701e",
        swatchClass: "background-success-default",
      },
      role: "Color for interface elements relating to success.",
    },
    {
      token: "background-success-hover",
      value: {
        name: "Alias - green-20",
        hex: "#0a4a13",
        swatchClass: "background-success-hover",
      },
      role: "Color for surface hover interactions relating to success.",
    },
    {
      token: "background-success-pressed",
      value: {
        name: "Alias - green-10",
        hex: "#05240a",
        swatchClass: "background-success-pressed",
      },
      role: "Color for pressed surface interactions relating to success.",
    },
    {
      token: "background-success-secondary",
      value: {
        name: "Alias - green-60",
        hex: "#b2e3af",
        swatchClass: "background-success-secondary",
      },
      role: "First level success surface color which is used to establish prominence and layer hierarchy.",
    },
    {
      token: "background-success-tertiary",
      value: {
        name: "Alias - green-70",
        hex: "#effced",
        swatchClass: "background-success-tertiary",
      },
      role: "Second level success surface color which is used to establish prominence and layer hierarchy.",
    },
    {
      token: "background-warning-default",
      value: {
        name: "Alias - yellow-30",
        hex: "#f0a303",
        swatchClass: "background-warning-default",
      },
      role: "Color for interface elements relating to warnings.",
    },
    {
      token: "background-warning-hover",
      value: {
        name: "Alias - yellow-20",
        hex: "#c98300",
        swatchClass: "background-warning-hover",
      },
      role: "Color for surface hover interactions relating to warnings.",
    },
    {
      token: "background-warning-pressed",
      value: {
        name: "Alias - yellow-10",
        hex: "#a36500",
        swatchClass: "background-warning-pressed",
      },
      role: "Color for pressed surface interactions relating to warnings.",
    },
    {
      token: "background-warning-secondary",
      value: {
        name: "Alias - yellow-60",
        hex: "#ffefa6",
        swatchClass: "background-warning-secondary",
      },
      role: "First level warning surface color which is used to establish prominence and layer hierarchy.",
    },
    {
      token: "background-warning-tertiary",
      value: {
        name: "Alias - yellow-70",
        hex: "#fffbe6",
        swatchClass: "background-warning-tertiary",
      },
      role: "Second level warning surface color which is used to establish prominence and layer hierarchy.",
    },
    {
      token: "background-error-default",
      value: {
        name: "Alias - red-30",
        hex: "#b32700",
        swatchClass: "background-error-default",
      },
      role: "Color for interface elements relating to errors and destructive actions.",
    },
    {
      token: "background-error-hover",
      value: {
        name: "Alias - red-20",
        hex: "#8c1a00",
        swatchClass: "background-error-hover",
      },
      role: "Color for surface hover interactions relating to errors.",
    },
    {
      token: "background-error-pressed",
      value: {
        name: "Alias - red-10",
        hex: "#660f00",
        swatchClass: "background-error-pressed",
      },
      role: "Color for pressed surface interactions relating to errors.",
    },
    {
      token: "background-error-secondary",
      value: {
        name: "Alias - red-60",
        hex: "#e6b093",
        swatchClass: "background-error-secondary",
      },
      role: "First level error surface color which is used to establish prominence and layer hierarchy.",
    },
    {
      token: "background-error-tertiary",
      value: {
        name: "Alias - red-70",
        hex: "#f2e3da",
        swatchClass: "background-error-tertiary",
      },
      role: "Second level error surface color which is used to establish prominence and layer hierarchy.",
    },
  ];
  const TextColors = [
    {
      token: "text-default",
      value: {
        name: "Alias - charcoal-10",
        hex: "#000d12",
        swatchClass: "text-default",
      },
      role: "Default text color.",
    },
    {
      token: "text-secondary",
      value: {
        name: "Alias - charcoal-40",
        hex: "#3c494e",
        swatchClass: "text-secondary",
      },
      role: "First level text color to indicate lower prominence and establish visual hierarchy.",
    },
    {
      token: "text-tertiary",
      value: {
        name: "Alias - charcoal-50",
        hex: "#647176",
        swatchClass: "text-tertiary",
      },
      role: "Second level text color to indicate lower prominence and establish visual hierarchy.",
    },
    {
      token: "text-inverse",
      value: {
        name: "Alias - charcoal-100",
        hex: "#fdfdfd",
        swatchClass: "text-inverse",
      },
      role: "This text color is the polar opposite of the default text color in any theme.",
    },
    {
      token: "text-disabled",
      value: {
        name: "Alias - charcoal-70",
        hex: "#b1b9bc",
        swatchClass: "text-disabled",
      },
      role: "This text color is the polar opposite of the default text color in any theme.",
    },
    {
      token: "text-constant-white",
      value: {
        name: "Alias - charcoal-100",
        hex: "#fdfdfd",
        swatchClass: "text-constant-white",
      },
      role: "This text color remains constant across both themes and is used on surfaces that don’t change as themes change.",
    },
    {
      token: "text-constant-black",
      value: {
        name: "Alias - charcoal-10",
        hex: "#000d12",
        swatchClass: "text-constant-black",
      },
      role: "This text color remains constant across both themes and is used on surfaces that don’t change as themes change.",
    },
    {
      token: "text-brand",
      value: {
        name: "Alias - keppel-40",
        hex: "#00b39f",
        swatchClass: "text-brand",
      },
      role: "Color for text relating to the brand.",
    },
    {
      token: "text-info",
      value: {
        name: "Alias - blue-40",
        hex: "#2196f3",
        swatchClass: "text-info",
      },
      role: "Color for text relating to notifications and information.",
    },
    {
      token: "text-success",
      value: {
        name: "Alias - green-30",
        hex: "#15701e",
        swatchClass: "text-success",
      },
      role: "Color for text relating to success.",
    },
    {
      token: "text-warning",
      value: {
        name: "Alias - yellow-30",
        hex: "#f0a303",
        swatchClass: "text-warning",
      },
      role: "Color for text relating to warnings.",
    },
    {
      token: "text-error",
      value: {
        name: "Alias - red-30",
        hex: "#b32700",
        swatchClass: "text-error",
      },
      role: "Color for text relating to errors and destructive actions.",
    },
  ];
  const BorderColors = [
    {
      token: "border-default",
      value: {
        name: "Alias charcoal-90",
        hex: "#eaedee",
        swatchClass: "border-default",
      },
      role: "Default border color for interface elements.",
    },
    {
      token: "border-brand",
      value: {
        name: "Alias keppel-40",
        hex: "#00b39f",
        swatchClass: "border-brand",
      },
      role: "Border color for elements relating to the brand.",
    },
    {
      token: "border-normal",
      value: {
        name: "Alias - charcoal-60",
        hex: "#8c999e",
        swatchClass: "border-normal",
      },
      role: "First level border color to establish prominence and visual hierarchy.",
    },
    {
      token: "border-strong",
      value: {
        name: "Alias - charcoal-30",
        hex: "#28353a",
        swatchClass: "border-strong",
      },
      role: "Second level border color to establish prominence and visual hierarchy.",
    },
  ];
  const ComponentColors = [
    {
      token: "icon-default",
      value: {
        name: "Alias - accent_grey-10",
        hex: "#15272f",
        swatchClass: "icon-default",
      },
      role: "Default color for any icon component in a design.",
    },
    {
      token: "icon-secondary",
      value: {
        name: "Alias - charcoal-40",
        hex: "#3c494e",
        swatchClass: "icon-secondary",
      },
      role: "Default color for any icon component in a design.",
    },
    {
      token: "icon-brand",
      value: {
        name: "Alias - keppel-40",
        hex: "#00b39f",
        swatchClass: "icon-brand",
      },
      role: "Default color for any icon relating to the brand.",
    },
    {
      token: "icon-inverse",
      value: {
        name: "Alias - charcoal-100",
        hex: "#fdfdfd",
        swatchClass: "icon-inverse",
      },
      role: "This icon color is the polar opposite of the default icon color in any theme.",
    },
    {
      token: "icon-weather",
      value: {
        name: "Alias - accent_grey-50",
        hex: "#6f8189",
        swatchClass: "icon-weather",
      },
      role: "Default color for any icon representing theme switching.",
    },
    {
      token: "icon-disabled",
      value: {
        name: "Alias - charcoal-70",
        hex: "#b1b9bc",
        swatchClass: "icon-disabled",
      },
      role: "Color for disabled icon components.",
    },
  ];
  const AdditionalColors = [
    {
      token: "background-neutral-default",
      value: {
        name: "Alias - charcoal-40",
        hex: "#3c494e",
        swatchClass: "background-neutral-default",
      },
      role: "Alternate brand token. Can be used as color for interface elements relating to the brand.",
    },
    {
      token: "background-neutral-hover",
      value: {
        name: "Alias - charcoal-30",
        hex: "#28353a",
        swatchClass: "background-neutral-hover",
      },
      role: "Alternate color for surface hover interactions relating to the brand.",
    },
    {
      token: "background-neutral-pressed",
      value: {
        name: "Alias - charcoal-20",
        hex: "#142126",
        swatchClass: "background-neutral-pressed",
      },
      role: "Alternate color for pressed surface interactions relating to the brand.",
    },
    {
      token: "background-constant-white",
      value: {
        name: "Alias - accent_grey-100",
        hex: "#f6f8f8",
        swatchClass: "background-constant-white",
      },
      role: "This background remains constant across themes and is used on exceptional cases as is determined by the context.",
    },
    {
      token: "background-constant-disabled",
      value: {
        name: "Alias - charcoal-70",
        hex: "#b1b9bc",
        swatchClass: "background-constant-disabled",
      },
      role: "This background remains constant across themes and is used to denote disabled states on cases as is determined by the context.",
    },
    {
      token: "icon-neutral-default",
      value: {
        name: "Alias - charcoal-40",
        hex: "#3c494e",
        swatchClass: "icon-neutral-default",
      },
      role: "Alternate color for any icon relating to the brand.",
    },
    {
      token: "icon-neutral-alt",
      value: {
        name: "Alias - charcoal-40",
        hex: "#3c494e",
        swatchClass: "icon-neutral-alt",
      },
      role: "Supplementary neutral color for any icon relating to the brand.",
    },
    {
      token: "border-neutral-default",
      value: {
        name: "Alias - charcoal-40",
        hex: "#3c494e",
        swatchClass: "border-neutral-default",
      },
      role: "Alternate border color for elements relating to the brand.",
    },
    {
      token: "border-neutral-alt",
      value: {
        name: "Alias - charcoal-40",
        hex: "#3c494e",
        swatchClass: "border-neutral-alt",
      },
      role: "Supplementary neutral color for border elements relating to the brand.",
    },
    {
      token: "text-neutral-default",
      value: {
        name: "Alias - charcoal-40",
        hex: "#3c494e",
        swatchClass: "text-neutral-default",
      },
      role: "Alternate color for text relating to the brand.",
    },
    {
      token: "text-neutral-alt",
      value: {
        name: "Alias - charcoal-40",
        hex: "#3c494e",
        swatchClass: "text-neutral-alt",
      },
      role: "Supplementary neutral color for text relating to the brand.",
    },
    {
      token: "text-constant-disabled",
      value: {
        name: "Alias - charcoal-50",
        hex: "#647176",
        swatchClass: "text-constant-disabled",
      },
      role: "This text color remains constant across both themes and is used to denote disabled states.",
    },
    {
      token: "text-disabled-alternative",
      value: {
        name: "Alias - charcoal-70",
        hex: "#b1b9bc",
        swatchClass: "text-disabled-alternative",
      },
      role: "This text color remains constant across both themes and is used to denote disabled states.",
    },
  ];
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
          <br></br>
          <div className="color-table">
            <table>
              <thead>
                <tr>
                  {getColorColumns(false).map((column, index) => (
                    <th className="color-th" key={index}>
                      <div className="color-col">{column}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {colorData.map((row, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "shades" : "light"}
                  >
                    <td>
                      <div className="key">
                        <div className="token-col2">{row.token}</div>
                      </div>
                    </td>
                    <td>
                      <div className="value">
                        <div className="hex-color">
                          <div className="color1">Name - {row.value.name}</div>
                          <div className="color2">
                            Hex Code - {row.value.hex}
                          </div>
                        </div>
                        <div
                          className="swatch"
                          style={{ backgroundColor: `${row.value.hex}` }}
                        ></div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <h3>Greyscale Colors</h3>
      <br></br>
      <div className="color-table">
        <table>
          <thead className="color-head">
            <tr className="color-row">
              {getColorColumns(false).map((column, index) => (
                <th className="color-th" key={index}>
                  <div className="color-col">{column}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {GreyscaleColorData.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? "shades" : "light"}>
                <td>
                  <div className="key">
                    <div className="token-col2">{row.token}</div>
                  </div>
                </td>
                <td>
                  <div className="value">
                    <div className="hex-color">
                      <div className="color1">Name - {row.value.name}</div>
                      <div className="color2">Hex Code - {row.value.hex}</div>
                    </div>
                    <div
                      className="swatch"
                      style={{ backgroundColor: `${row.value.hex}` }}
                    ></div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br></br>
      <h3>Function Colors</h3>
      <br></br>
      <div className="color-table">
        <table>
          <thead className="color-head">
            <tr className="color-row">
              {getColorColumns(false).map((column, index) => (
                <th className="color-th" key={index}>
                  <div className="color-col">{column}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {FunctionColorData.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? "shades" : "light"}>
                <td>
                  <div className="key">
                    <div className="token-col2">{row.token}</div>
                  </div>
                </td>
                <td>
                  <div className="value">
                    <div className="hex-color">
                      <div className="color1">Name - {row.value.name}</div>
                      <div className="color2">Hex Code - {row.value.hex}</div>
                    </div>
                    <div
                      className="swatch"
                      style={{ backgroundColor: `${row.value.hex}` }}
                    ></div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <hr></hr>
      <h2>Semantic Category</h2>
      <p>
        The semantic category has been sub-categorized into background, text,
        brand, border, and functions. Possibility for a few more categories
        exists as the need arises.
      </p>
      <h3>Background Colors</h3>
      <br></br>
      <div className="color-table plus-role">
        <table>
          <thead className="color-head">
            <tr className="color-row">
              {getColorColumns(true).map((column, index) => (
                <th className="color-th" key={index}>
                  <div className="color-col">{column}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {BackgroundColorData.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? "shades" : "light"}>
                <td>
                  <div className="key">
                    <div className="token-col2">{row.token}</div>
                  </div>
                </td>
                <td>
                  <div className="value">
                    <div className="hex-color">
                      <div className="color1">Name - {row.value.name}</div>
                      <div className="color2">Hex Code - {row.value.hex}</div>
                    </div>
                    <div
                      className="swatch"
                      style={{ backgroundColor: `${row.value.hex}` }}
                    ></div>
                  </div>
                </td>
                <td>
                  <div className="role">
                    <div className="role-description"> {row.role}</div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h3>Text Colors</h3>
      <p>Use this only for text input and content.</p>

      <br></br>
      <div className="color-table plus-role">
        <table>
          <thead className="color-head">
            <tr className="color-row">
              {getColorColumns(true).map((column, index) => (
                <th className="color-th" key={index}>
                  <div className="color-col">{column}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TextColors.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? "shades" : "light"}>
                <td>
                  <div className="key">
                    <div className="token-col2">{row.token}</div>
                  </div>
                </td>
                <td>
                  <div className="value">
                    <div className="hex-color">
                      <div className="color1">Name - {row.value.name}</div>
                      <div className="color2">Hex Code - {row.value.hex}</div>
                    </div>
                    <div
                      className="swatch text-colors"
                      style={{ color: `${row.value.hex}` }}
                    >
                      Aa
                    </div>
                  </div>
                </td>
                <td>
                  <div className="role">
                    <div className="role-description"> {row.role}</div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br></br>
      <h3>Border Colors</h3>
      <p>Use this only for lines and borders of interface elements.</p>

      <br></br>
      <div className="color-table plus-role">
        <table>
          <thead className="color-head">
            <tr className="color-row">
              {getColorColumns(true).map((column, index) => (
                <th className="color-th" key={index}>
                  <div className="color-col">{column}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {BorderColors.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? "shades" : "light"}>
                <td>
                  <div className="key">
                    <div className="token-col2">{row.token}</div>
                  </div>
                </td>
                <td>
                  <div className="value">
                    <div className="hex-color">
                      <div className="color1">Name - {row.value.name}</div>
                      <div className="color2">Hex Code - {row.value.hex}</div>
                    </div>
                    <div className="container">
                      <div
                        className="inner-box"
                        style={{ color: `${row.value.hex}` }}
                      ></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="role">
                    <div className="role-description"> {row.role}</div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br></br>
      <h3>Component Colors</h3>
      <p>
        Tokens here are component specific and must be used only for the
        component that they are referencing.
      </p>

      <br></br>
      <div className="color-table plus-role">
        <table>
          <thead className="color-head">
            <tr className="color-row">
              {getColorColumns(true).map((column, index) => (
                <th className="color-th" key={index}>
                  <div className="color-col">{column}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ComponentColors.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? "shades" : "light"}>
                <td>
                  <div className="key">
                    <div className="token-col2">{row.token}</div>
                  </div>
                </td>
                <td>
                  <div className="value">
                    <div className="hex-color">
                      <div className="color1">Name - {row.value.name}</div>
                      <div className="color2">Hex Code - {row.value.hex}</div>
                    </div>
                    <div
                      className="swatch"
                      style={{ backgroundColor: `${row.value.hex}` }}
                    ></div>
                  </div>
                </td>
                <td>
                  <div className="role">
                    <div className="role-description"> {row.role}</div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h3>Additional Colors</h3>
      <p>
        These colors have been added to improve brand theming and enhance color
        accessibility across websites and solutions, ensuring that accessibility
        standards and requirements are met. This is a neutral palette designed
        to serve as a brand palette for the light theme.
      </p>

      <br></br>
      <div className="color-table plus-role">
        <table>
          <thead className="color-head">
            <tr className="color-row">
              {getColorColumns(true).map((column, index) => (
                <th className="color-th" key={index}>
                  <div className="color-col">{column}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {AdditionalColors.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? "shades" : "light"}>
                <td>
                  <div className="key">
                    <div className="token-col2">{row.token}</div>
                  </div>
                </td>
                <td>
                  <div className="value">
                    <div className="hex-color">
                      <div className="color1">Name - {row.value.name}</div>
                      <div className="color2">Hex Code - {row.value.hex}</div>
                    </div>
                    <div
                      className="swatch"
                      style={{ backgroundColor: `${row.value.hex}` }}
                    ></div>
                  </div>
                </td>
                <td>
                  <div className="role">
                    <div className="role-description"> {row.role}</div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <hr></hr>
    </SistentLayout>
  );
};

export default ColorCode;
