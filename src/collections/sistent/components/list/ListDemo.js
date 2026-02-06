import React, { useState } from "react";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Collapse, Checkbox } from "@sistent/sistent";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const ListDemo = ({ type }) => {
  // Nested List State
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const toggleOpen1 = () => setOpen1((prev) => !prev);
  const toggleOpen2 = () => setOpen2((prev) => !prev);

  // Checkbox List State
  const [checked, setChecked] = useState([0]);
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  if (type === "nested") {
    return (
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Layer5 Main Section
          </ListSubheader>
        }
      >
        <ListItemButton onClick={toggleOpen1}>
          <ListItemText primary="Layer5 Main Item 1" />
          {open1 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open1} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Layer5 Sub Item 1.1" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Layer5 Sub Item 1.2" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton onClick={toggleOpen2}>
          <ListItemText primary="Layer5 Main Item 2" />
          {open2 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Layer5 Sub Item 2.1" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Layer5 Sub Item 2.2" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    );
  }

  if (type === "checkbox") {
    return (
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {[0, 1, 2, 3].map((value) => {
          const labelId = `checkbox-list-label-${value}`;
          return (
            <ListItem
              key={value}
              secondaryAction={
                <Checkbox
                  edge="end"
                  onChange={handleToggle(value)}
                  checked={checked.indexOf(value) !== -1}
                  inputProps={{ "aria-labelledby": labelId }}
                />
              }
              disablePadding
            >
              <ListItemButton onClick={handleToggle(value)}>
                <ListItemText id={labelId} primary={`Layer5 Sistent Item ${value + 1}`} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    );
  }

  return null;
};

export default ListDemo;
