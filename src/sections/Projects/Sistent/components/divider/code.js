import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
import { SistentThemeProvider, Divider, Box, List, ListItem, ListItemText, Chip, Stack } from "@sistent/sistent";
import { CodeBlock } from "../button/code-block";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const codes = [
  `<SistentThemeProvider>
  <Box sx={{ width: "100%", maxWidth: 360 }}>
    <Divider />
  </Box>
</SistentThemeProvider>`,
  `<SistentThemeProvider>
  <Box sx={{ width: "100%", maxWidth: 360 }}>
    <Divider variant="fullWidth" />
    <Divider variant="inset" />
    <Divider variant="middle" />
  </Box>
</SistentThemeProvider>`,
  `<SistentThemeProvider>
  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
    <span>Left</span>
    <Divider orientation="vertical" flexItem />
    <span>Center</span>
    <Divider orientation="vertical" flexItem />
    <span>Right</span>
  </Box>
</SistentThemeProvider>`,
  `<SistentThemeProvider>
  <Box sx={{ width: "100%", maxWidth: 360 }}>
    <Divider>CENTER</Divider>
    <Divider textAlign="left">LEFT</Divider>
    <Divider textAlign="right">RIGHT</Divider>
    <Divider>
      <Chip label="Chip" size="small" />
    </Divider>
  </Box>
</SistentThemeProvider>`,
  `<SistentThemeProvider>
  <List sx={{ width: "100%", maxWidth: 360 }}>
    <ListItem>
      <ListItemText primary="Inbox" />
    </ListItem>
    <Divider component="li" />
    <ListItem>
      <ListItemText primary="Drafts" />
    </ListItem>
    <Divider component="li" />
    <ListItem>
      <ListItemText primary="Trash" />
    </ListItem>
  </List>
</SistentThemeProvider>`,
  `<SistentThemeProvider>
  <Stack spacing={2} sx={{ width: "100%", maxWidth: 360 }}>
    <Box sx={{ p: 2 }}>Section 1</Box>
    <Divider />
    <Box sx={{ p: 2 }}>Section 2</Box>
    <Divider />
    <Box sx={{ p: 2 }}>Section 3</Box>
  </Stack>
</SistentThemeProvider>`,
  `<SistentThemeProvider>
  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
    <Box sx={{ p: 1 }}>Bold</Box>
    <Box sx={{ p: 1 }}>Italic</Box>
    <Divider orientation="vertical" variant="middle" flexItem />
    <Box sx={{ p: 1 }}>Left</Box>
    <Box sx={{ p: 1 }}>Center</Box>
    <Box sx={{ p: 1 }}>Right</Box>
  </Box>
</SistentThemeProvider>`,
];

const DividerCode = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="Divider">
      <div className="content">
        <a id="Identity">
          <h2>Divider</h2>
        </a>
        <p>
          The <code>Divider</code> component renders a thin line that separates content within lists, layouts, and sections, providing a subtle way to reinforce visual hierarchy.
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
            onClick={() => navigate("/projects/sistent/components/divider/code")}
            title="Code"
          />
        </div>
        <div className="main-content">
          <p>
            The Divider component is a thin, subtle line for separating content in your interface.
          </p>

          <a id="Basic-Divider">
            <h2>Basic Divider</h2>
          </a>
          <p>
            By default, the Divider renders as a full-width horizontal line.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Box sx={{ width: "100%", maxWidth: 360 }}>
                  <Divider />
                </Box>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="basic-divider" code={codes[0]} />
          </div>

          <a id="Variants">
            <h2>Variants</h2>
          </a>
          <p>
            The Divider supports three variants: <code>fullWidth</code> (default), <code>inset</code>, and <code>middle</code>.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Box sx={{ width: "100%", maxWidth: 360 }}>
                  <Box sx={{ mb: 2 }}>Full Width:</Box>
                  <Divider variant="fullWidth" />
                  <Box sx={{ my: 2 }}>Inset:</Box>
                  <Divider variant="inset" />
                  <Box sx={{ my: 2 }}>Middle:</Box>
                  <Divider variant="middle" />
                </Box>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="divider-variants" code={codes[1]} />
          </div>

          <a id="Vertical-Divider">
            <h2>Vertical Divider</h2>
          </a>
          <p>
            Use <code>orientation="vertical"</code> to render a vertical divider. The <code>flexItem</code> prop ensures proper height in flex containers.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <span>Left</span>
                  <Divider orientation="vertical" flexItem />
                  <span>Center</span>
                  <Divider orientation="vertical" flexItem />
                  <span>Right</span>
                </Box>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="vertical-divider" code={codes[2]} />
          </div>

          <a id="Divider-with-Text">
            <h2>Divider with Text</h2>
          </a>
          <p>
            You can render text or other elements within the divider using children. Use <code>textAlign</code> to control alignment.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Box sx={{ width: "100%", maxWidth: 360 }}>
                  <Divider>CENTER</Divider>
                  <Box sx={{ my: 2 }} />
                  <Divider textAlign="left">LEFT</Divider>
                  <Box sx={{ my: 2 }} />
                  <Divider textAlign="right">RIGHT</Divider>
                  <Box sx={{ my: 2 }} />
                  <Divider>
                    <Chip label="Chip" size="small" />
                  </Divider>
                </Box>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="divider-with-text" code={codes[3]} />
          </div>

          <a id="List-Divider">
            <h2>List Divider</h2>
          </a>
          <p>
            When using dividers in lists, set <code>component="li"</code> to ensure valid HTML structure.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
                  <ListItem>
                    <ListItemText primary="Inbox" />
                  </ListItem>
                  <Divider component="li" />
                  <ListItem>
                    <ListItemText primary="Drafts" />
                  </ListItem>
                  <Divider component="li" />
                  <ListItem>
                    <ListItemText primary="Trash" />
                  </ListItem>
                </List>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="list-divider" code={codes[4]} />
          </div>

          <a id="Section-Separators">
            <h2>Section Separators</h2>
          </a>
          <p>
            Use dividers to separate distinct sections in a layout, combined with proper spacing.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Stack spacing={2} sx={{ width: "100%", maxWidth: 360 }}>
                  <Box sx={{ p: 2, bgcolor: "background.paper" }}>Section 1</Box>
                  <Divider />
                  <Box sx={{ p: 2, bgcolor: "background.paper" }}>Section 2</Box>
                  <Divider />
                  <Box sx={{ p: 2, bgcolor: "background.paper" }}>Section 3</Box>
                </Stack>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="section-dividers" code={codes[5]} />
          </div>

          <a id="Icon-Grouping">
            <h2>Icon Grouping</h2>
          </a>
          <p>
            Use vertical dividers with the <code>middle</code> variant to group related actions in toolbars.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Box sx={{ p: 1 }}>Bold</Box>
                  <Box sx={{ p: 1 }}>Italic</Box>
                  <Divider orientation="vertical" variant="middle" flexItem />
                  <Box sx={{ p: 1 }}>Left</Box>
                  <Box sx={{ p: 1 }}>Center</Box>
                  <Box sx={{ p: 1 }}>Right</Box>
                </Box>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="icon-grouping" code={codes[6]} />
          </div>
        </div>
      </div>
    </SistentLayout>
  );
};

export default DividerCode;
