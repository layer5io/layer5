import React, { useState } from "react";
import { Drawer, Button, List, ListItem, Box, Typography, Divider } from "@sistent/sistent";

const DrawerDemo = ({ type = "temporary", anchor = "left" }) => {
  const [open, setOpen] = useState(false);
  const [anchorState, setAnchorState] = useState({
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

  const listContent = (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={() => setOpen(false)}
      onKeyDown={() => setOpen(false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text) => (
          <ListItem button key={text}>
            <Typography>{text}</Typography>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text) => (
          <ListItem button key={text}>
            <Typography>{text}</Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  if (type === "anchors") {
    return (
      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
        {["left", "right", "top", "bottom"].map((anchorDir) => (
          <React.Fragment key={anchorDir}>
            <Button
              onClick={toggleAnchor(anchorDir, true)}
              variant="contained"
              label={anchorDir}
            />
            <Drawer
              anchor={anchorDir}
              open={anchorState[anchorDir]}
              onClose={toggleAnchor(anchorDir, false)}
            >
              <Box
                 sx={{ width: anchorDir === "top" || anchorDir === "bottom" ? "auto" : 250 }}
                 role="presentation"
                 onClick={toggleAnchor(anchorDir, false)}
                 onKeyDown={toggleAnchor(anchorDir, false)}
              >
                  <List>
                    {["Inbox", "Starred", "Send email", "Drafts"].map((text) => (
                      <ListItem button key={text}>
                        <Typography>{text}</Typography>
                      </ListItem>
                    ))}
                  </List>
              </Box>
            </Drawer>
          </React.Fragment>
        ))}
      </Box>
    );
  }

  if (type === "persistent") {
    return (
      <Box sx={{ display: "flex", width: '100%', minHeight: '300px', border: '1px solid #ddd', overflow: 'hidden', position: 'relative' }}>
        <Drawer
          variant="persistent"
          anchor="left"
          open={open}
          sx={{
            width: open ? 240 : 0,
            transition: 'width 0.2s',
            flexShrink: 0,
            '& .MuiDrawer-paper': {
               position: 'absolute',
               width: 240,
               boxSizing: 'border-box',
               height: '100%',
            },
          }}
        >
          <Box sx={{ width: 240, p: 2 }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                 <Button onClick={() => setOpen(false)} variant="text" label="X" />
            </div>
            <List>
              {["Inbox", "Starred", "Send email"].map((text) => (
                <ListItem button key={text}>
                  <Typography>{text}</Typography>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3, transition: 'margin 0.2s', marginLeft: 0 }}>
          <Button
            onClick={() => setOpen(!open)}
            variant="contained"
            label={open ? "Close Drawer" : "Open Drawer"}
            sx={{ mb: 2 }}
          />
          <Typography>Main content area.</Typography>
        </Box>
      </Box>
    );
  }

    if (type === "permanent") {
    return (
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
              position: "relative", // Important for demo inside box
            },
          }}
        >
          <Box sx={{ overflow: "auto", p: 2 }}>
            <List>
              {["Inbox", "Starred", "Send email", "Drafts"].map((text) => (
                <ListItem button key={text}>
                  <Typography>{text}</Typography>
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              {["All mail", "Trash", "Spam"].map((text) => (
                <ListItem button key={text}>
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
    );
  }

  // Temporary (Default)
  return (
    <>
      <Button onClick={() => setOpen(true)} variant="contained" label={`Open ${anchor} Drawer`} />
      <Drawer
        anchor={anchor}
        open={open}
        onClose={() => setOpen(false)}
      >
        {listContent}
      </Drawer>
    </>
  );
};

export default DrawerDemo;
