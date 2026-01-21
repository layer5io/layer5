import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import { SistentThemeProvider, Drawer, Button, List, ListItem, Box, Divider, Typography} from "@sistent/sistent";
import { CodeBlock } from "../button/code-block";
import { SistentLayout } from "../../sistent-layout";
import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const codes = [
  `<SistentThemeProvider>
  <Button onClick={() => setOpen(true)} variant="contained" label="Open drawer" />
  <Drawer open={open} onClose={() => setOpen(false)}>
    <Box sx={{ width: 250 }} role="presentation" onClick={() => setOpen(false)}>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text) => (
          <ListItem key={text}>
            <Typography>{text}</Typography>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text) => (
          <ListItem key={text}>
            <Typography>{text}</Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  </Drawer>
</SistentThemeProvider>`,

  `<SistentThemeProvider>
  {['left', 'right', 'top', 'bottom'].map((anchor) => (
    <React.Fragment key={anchor}>
      <Button 
        onClick={() => setState({ ...state, [anchor]: true })} 
        variant="contained" 
        label={anchor} 
      />
      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={() => setState({ ...state, [anchor]: false })}
      >
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={() => setState({ ...state, [anchor]: false })}
        >
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text) => (
              <ListItem key={text}>
                <Typography>{text}</Typography>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text) => (
              <ListItem key={text}>
                <Typography>{text}</Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </React.Fragment>
  ))}
</SistentThemeProvider>`,

  `<SistentThemeProvider>
  <Box sx={{ display: 'flex' }}>
    <Button
      onClick={() => setOpen(!open)}
      variant="contained"
      label={open ? 'Close' : 'Open'}
    />
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
    >
      <Box sx={{ width: 240, p: 2 }}>
        <List>
          {['Inbox', 'Starred', 'Send email'].map((text) => (
            <ListItem key={text}>
              <Typography>{text}</Typography>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Typography>Main Content</Typography>
    </Box>
  </Box>
</SistentThemeProvider>`,

  `<SistentThemeProvider>
  <Box sx={{ display: 'flex' }}>
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
        },
      }}
    >
      <Box sx={{ overflow: 'auto', p: 2 }}>
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text) => (
            <ListItem key={text}>
              <Typography>{text}</Typography>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text) => (
            <ListItem key={text}>
              <Typography>{text}</Typography>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Typography>Page content goes here</Typography>
    </Box>
  </Box>
</SistentThemeProvider>`,
];

const DrawerCode = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();
  const [tempOpen, setTempOpen] = React.useState(false);
  const [persistentOpen, setPersistentOpen] = React.useState(false);
  const [anchorState, setAnchorState] = React.useState({
    left: false,
    right: false,
    top: false,
    bottom: false,
  });
  const toggleAnchor = (anchor, open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setAnchorState({ ...anchorState, [anchor]: open });
  };

  const anchorList = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleAnchor(anchor, false)}
      onKeyDown={toggleAnchor(anchor, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text) => (
          <ListItem key={text}>
            <Typography>{text}</Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <SistentLayout title="Drawer">
      <div className="content">
        <a id="Code">
          <h2>Drawer</h2>
        </a>
        <p>
          Code examples demonstrating different drawer variants and use cases.
        </p>

        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/drawer"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/drawer")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/drawer/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/drawer/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/drawer/code"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/drawer/code")}
            title="Code"
          />
        </div>

        <div className="main-content">
          <div className="showcase">
            <h3>Temporary Drawer</h3>
            <p>Opens on top of content, closes when clicking outside or selecting an item.</p>
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Button
                  onClick={() => setTempOpen(true)}
                  variant="contained"
                  label="Open drawer"
                />
                <Drawer open={tempOpen} onClose={() => setTempOpen(false)}>
                  <Box sx={{ width: 250 }} role="presentation" onClick={() => setTempOpen(false)}>
                    <List>
                      <ListItem><Typography>Inbox</Typography></ListItem>
                      <ListItem><Typography>Starred</Typography></ListItem>
                      <ListItem><Typography>Send email</Typography></ListItem>
                    </List>
                  </Box>
                </Drawer>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="drawer-temporary" code={codes[0]} />
          </div>

          <div className="showcase">
            <h3>Anchor Positions</h3>
            <p>Drawers can slide in from any edge: left, right, top, or bottom.</p>
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                  {["left", "right", "top", "bottom"].map((anchor) => (
                    <React.Fragment key={anchor}>
                      <Button
                        onClick={toggleAnchor(anchor, true)}
                        variant="contained"
                        label={anchor}
                      />
                      <Drawer
                        anchor={anchor}
                        open={anchorState[anchor]}
                        onClose={toggleAnchor(anchor, false)}
                      >
                        {anchorList(anchor)}
                      </Drawer>
                    </React.Fragment>
                  ))}
                </Box>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="drawer-anchors" code={codes[1]} />
          </div>

          <div className="showcase">
            <h3>Persistent Drawer</h3>
            <p>Sits alongside content, can be toggled open/closed, and maintains state.</p>
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Box sx={{ display: "flex" }}>
                  <Button
                    onClick={() => setPersistentOpen(!persistentOpen)}
                    variant="contained"
                    label={persistentOpen ? "Close" : "Open"}
                  />
                  <Drawer
                    variant="persistent"
                    anchor="left"
                    open={persistentOpen}
                  >
                    <Box sx={{ width: 240, p: 2 }}>
                      <List>
                        <ListItem><Typography>Inbox</Typography></ListItem>
                        <ListItem><Typography>Starred</Typography></ListItem>
                      </List>
                    </Box>
                  </Drawer>
                </Box>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="drawer-persistent" code={codes[2]} />
          </div>

          <div className="showcase">
            <h3>Permanent Drawer</h3>
            <p>Always visible drawer pinned to the side. Ideal for desktop applications with consistent navigation.</p>
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Box sx={{ display: "flex", height: 300, border: "1px solid #ddd" }}>
                  <Drawer
                    variant="permanent"
                    anchor="left"
                    sx={{
                      width: 240,
                      flexShrink: 0,
                      "& .MuiDrawer-paper": {
                        width: 240,
                        boxSizing: "border-box",
                        position: "relative",
                      },
                    }}
                  >
                    <Box sx={{ overflow: "auto", p: 2 }}>
                      <List>
                        {["Inbox", "Starred", "Send email", "Drafts"].map((text) => (
                          <ListItem key={text}>
                            <Typography>{text}</Typography>
                          </ListItem>
                        ))}
                      </List>
                      <Divider />
                      <List>
                        {["All mail", "Trash", "Spam"].map((text) => (
                          <ListItem key={text}>
                            <Typography>{text}</Typography>
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  </Drawer>
                  <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Typography>Page content goes here</Typography>
                  </Box>
                </Box>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="drawer-permanent" code={codes[3]} />
          </div>
        </div>
      </div>
    </SistentLayout>
  );
};

export default DrawerCode;