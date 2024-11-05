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
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
import { SistentLayout } from "../../sistent-layout";

import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";

import { CodeBlock } from "../button/code-block";

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

const codes = [
  `           <SistentThemeProvider>
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
              </SistentThemeProvider>`,

  ` <SistentThemeProvider>
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
`,
  `
            <SistentThemeProvider>
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
`,
  `         <SistentThemeProvider>
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
            </SistentThemeProvider>`,
];

export const DividerCode = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="Divider">
      <div className="content">
        <a id="Identity">
          <h2>Divider</h2>
        </a>
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
            The Divider component adds a subtle line to separate content
            sections, supporting horizontal/vertical orientation and
            customizable alignment for text or icons. Ideal for enhancing layout
            clarity.
          </p>
          <a id="Variant">
            <h2>Variant Example</h2>
          </a>
          <p>
            The Divider component supports three variants: fullWidth (default),
            inset, and middle.
          </p>
          <div className="showcase">
            <div className="items">
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
            </div>
            <CodeBlock name="variant-example" code={codes[0]} />
          </div>
          <a id="Flex item">
            <h2>Flex Item Example</h2>
          </a>
          <p>
            The <code>flexItem</code> prop allows the Divider to function
            properly within a flex container, ensuring it aligns with other flex
            items seamlessly.
          </p>
          <div className="showcase">
            <div className="items">
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
            </div>
            <CodeBlock name="flex-example" code={codes[1]} />
          </div>
          <a id="Orientation">
            <h2>Orientation Example</h2>
          </a>
          <p>
            The Divider component supports two orientations: horizontal and
            vertical. Each orientation serves different layout needs and
            enhances the visual structure of your content.
          </p>
          <div className="showcase">
            <div className="items">
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
            </div>
            <CodeBlock name="orientation-example" code={codes[2]} />
          </div>
          <a id="With children">
            <h2>With children Example</h2>
          </a>
          <p>
            The Divider component supports two orientations: horizontal and
            vertical. Each orientation serves different layout needs and
            enhances the visual structure of your content.
          </p>
          <div className="showcase">
            <div className="items">
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
            </div>
            <CodeBlock name="With-Children-example" code={codes[3]} />
          </div>
        </div>
      </div>
    </SistentLayout>
  );
};
