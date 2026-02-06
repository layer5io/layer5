import React from "react";
import { ToggleButton, ToggleButtonGroup, Box } from "@sistent/sistent";

const ToggleButtonDemo = ({ type }) => {
  const [formats, setFormats] = React.useState(() => ["bold"]);
  const [alignment, setAlignment] = React.useState("left");

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };
  
  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  const formatButtons = [
    <ToggleButton key="bold" value="bold">Bold</ToggleButton>,
    <ToggleButton key="italic" value="italic">Italic</ToggleButton>,
    <ToggleButton key="underline" value="underline">Underline</ToggleButton>,
  ];

  if (type === "basic") {
    return (
      <ToggleButtonGroup
        value={formats}
        onChange={handleFormat}
        aria-label="text formatting"
      >
        {formatButtons}
      </ToggleButtonGroup>
    );
  }

  if (type === "exclusive") {
    return (
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        <ToggleButton value="left">Left</ToggleButton>
        <ToggleButton value="center">Center</ToggleButton>
        <ToggleButton value="right">Right</ToggleButton>
      </ToggleButtonGroup>
    );
  }

  if (type === "vertical") {
    return (
      <ToggleButtonGroup
        orientation="vertical"
        value={formats}
        onChange={handleFormat}
        aria-label="text formatting"
      >
        {formatButtons}
      </ToggleButtonGroup>
    );
  }
  
  if (type === "sizes") {
      return (
        <Box
            sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            "& > *": {
                m: 1,
            },
            }}
        >
            <ToggleButtonGroup
            size="small"
            value={formats}
            onChange={handleFormat}
            aria-label="text formatting"
            >
            {formatButtons}
            </ToggleButtonGroup>
            <ToggleButtonGroup
            size="medium"
            value={formats}
            onChange={handleFormat}
            aria-label="text formatting"
            >
            {formatButtons}
            </ToggleButtonGroup>
            <ToggleButtonGroup
            size="large"
            value={formats}
            onChange={handleFormat}
            aria-label="text formatting"
            >
            {formatButtons}
            </ToggleButtonGroup>
        </Box>
      );
  }
  
  if (type === "disabled") {
      return (
        <ToggleButtonGroup
        disabled
        value={formats}
        onChange={handleFormat}
        aria-label="text formatting"
        >
        {formatButtons}
        </ToggleButtonGroup>
      );
  }
  
  if (type === "colors") {
      return (
        <Box
        sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            "& > *": {
            m: 1,
            },
        }}
        >
        <ToggleButtonGroup
            color="primary"
            value={formats}
            onChange={handleFormat}
            aria-label="text formatting"
        >
            {formatButtons}
        </ToggleButtonGroup>
        <ToggleButtonGroup
            color="secondary"
            value={formats}
            onChange={handleFormat}
            aria-label="text formatting"
        >
            {formatButtons}
        </ToggleButtonGroup>
        </Box>
      );
  }

  return null;
};

export default ToggleButtonDemo;
