import { useLocation } from "@reach/router";
import { navigate } from "gatsby";
import React from "react";

import {
  Box,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemText,
  SistentThemeProvider,
  styled,
} from "@layer5/sistent";

import TabButton from "../../../../../reusecore/Button";
import { Row } from "../../../../../reusecore/Layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
import { SistentLayout } from "../../sistent-layout";

import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";

const style = {
  py: 0,
  width: "100%",
  maxWidth: 360,
  borderRadius: 2,
  border: "1px solid",
  borderColor: "divider",
  backgroundColor: "background.paper",
};

const Root = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  "& > :not(style) ~ :not(style)": {
    marginTop: theme.spacing(2),
  },
}));

const content = (
  <p style={{ color: "white" }}>
    {"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
  </p>
);

const SistentDivider = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="Divider">
      <div className="content">
        <a id="Identity">
          <h2>Divider</h2>
        </a>
        <p>
          The Divider component adds a subtle line to separate content sections,
          supporting horizontal/vertical orientation and customizable alignment
          for text or icons. Ideal for enhancing layout clarity.
        </p>
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/divider"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/divider")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/divider/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/divider/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/divider/code"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/divider/code")
            }
            title="Code"
          />
        </div>
        <div className="main-content">
          <p>
            The Divider component provides a simple line to visually separate
            content sections, enhancing readability and hierarchy in layouts. It
            supports customization options such as orientation (horizontal or
            vertical), variants (fullWidth, inset, and middle), and flexible
            alignment of text or icons. Perfect for cleanly segmenting elements
            in lists, cards, or flex containers, the Divider is accessible and
            can be styled to fit various design needs.
          </p>
          <a id="Different Ways to Use Divider">
            <h2>Ways to use Divider Component</h2>
          </a>
          <p>Here are ways to use the Divider component effectively:</p>
          <ul>
            <li>
              <strong>Section Separation</strong>: Use to divide sections in
              forms, articles, or settings pages to improve readability.
            </li>
            <li>
              <strong>Orientation Options</strong>: Set <code>orientation</code>{" "}
              to <code>horizontal</code> (default) or <code>vertical</code> for
              versatile layouts.
            </li>
            <li>
              <strong>List Item Separators</strong>: Insert between list items
              using <code>variant="inset"</code> for a more subtle divider.
            </li>
            <li>
              <strong>Text Alignment</strong>: Wrap text using{" "}
              <code>textAlign="left"</code>, <code>center</code>, or{" "}
              <code>right</code> for labeled dividers.
            </li>
            <li>
              <strong>In Flex Containers</strong>: With <code>flexItem</code>,
              the Divider integrates seamlessly in flex layouts.
            </li>
            <li>
              <strong>Chip Integration</strong>: Place chips within dividers to
              label or categorize content.
            </li>
          </ul>
          <a id="Variants">
            <h3>1. Variants</h3>
          </a>
          <p>
            The Divider component supports three variants: fullWidth (default),
            inset, and middle.
          </p>
          <h4>Variants of the Divider Component</h4>
          <ul>
            <li>
              <strong>Full Width:</strong> The default variant that spans the
              entire width of its container.
            </li>
            <li>
              <strong>Inset:</strong> Creates an indented Divider for a nested
              appearance, useful for lists.
            </li>
            <li>
              <strong>Middle:</strong> Renders the Divider in the center,
              allowing content to be placed above and below it.
            </li>
          </ul>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <List sx={style}>
                <ListItem>
                  <ListItemText primary="Full width variant below" />
                </ListItem>
                <Divider component="li" />
                <ListItem>
                  <ListItemText primary="Inset variant below" />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemText primary="Middle variant below" />
                </ListItem>
                <Divider variant="middle" component="li" />
                <ListItem>
                  <ListItemText primary="List item" />
                </ListItem>
              </List>
            </SistentThemeProvider>
          </Row>
          <a id="Flex item">
            <h3>2. Flex item</h3>
          </a>
          <p>
            The <code>flexItem</code> prop allows the Divider to function
            properly within a flex container, ensuring it aligns with other flex
            items seamlessly.
          </p>

          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 2,
                  bgcolor: "background.paper",
                  color: "text.secondary",
                  "& svg": {
                    m: 1,
                  },
                }}
              >
                <FormatBoldIcon />
                <Divider orientation="vertical" variant="middle" flexItem />
                <FormatItalicIcon />
              </Box>
            </SistentThemeProvider>
          </Row>
          <a id="Orientation">
            <h3>3. Orientation</h3>
          </a>
          <p>
            The Divider component supports two orientations: horizontal and
            vertical. Each orientation serves different layout needs and
            enhances the visual structure of your content.
          </p>
          <div>
            <h3>Horizontal:</h3>
            <p>
              This is the default orientation of the Divider. It is used to
              separate content sections horizontally, making it ideal for
              creating clear distinctions between different blocks of
              information, such as headings and paragraphs or between card
              elements. A horizontal divider typically spans the full width of
              its container, effectively guiding the user eye through the
              layout.
            </p>

            <h3>Vertical:</h3>
            <p>
              The vertical orientation is useful in scenarios where you want to
              separate items or components side by side, such as in a flex
              container or sidebar. This orientation helps to create visual
              breaks between closely related elements, enhancing readability and
              organization. A vertical divider can be particularly effective in
              navigation menus or grouped items where you want to maintain a
              compact layout.
            </p>
          </div>

          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 1,
                  bgcolor: "background.paper",
                  color: "text.secondary",
                  "& svg": {
                    m: 1,
                  },
                }}
              >
                <FormatAlignLeftIcon />
                <FormatAlignCenterIcon />
                <FormatAlignRightIcon />
                <Divider orientation="vertical" flexItem />
                <FormatBoldIcon />
              </Box>
            </SistentThemeProvider>
          </Row>
          <a id="With children">
            <h3>4. With children</h3>
          </a>
          <p>
            Use the <code>textAlign</code> prop to align elements that are
            wrapped by the Divider.
          </p>

          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Root>
                {content}
                <Divider>CENTER</Divider>
                {content}
                <Divider textAlign="left">LEFT</Divider>
                {content}
                <Divider textAlign="right">RIGHT</Divider>
                {content}
                <Divider>
                  <Chip label="Chip" size="small" />
                </Divider>
                {content}
              </Root>
            </SistentThemeProvider>
          </Row>

          <a id="Accessibility">
            <h3>Accessibility</h3>
          </a>
          <p>
            Due to its implicit role of separator, the Divider, which is a
            <code>`hr`</code> element, will be announced by screen readers as a
            "Horizontal Splitter" (or vertical, if you're using the orientation
            prop). If you're using it as a purely stylistic element, we
            recommend setting aria-hidden="true" which will make screen readers
            bypass it.
          </p>
          <br />
          <p>
            If you're using the Divider to wrap other elements, such as text or
            chips, we recommend changing its rendered element to a plain
            <code> `div`</code>
            using the component prop, and setting role="presentation". This
            ensures that it's not announced by screen readers while still
            preserving the semantics of the elements inside it.
          </p>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentDivider;
