import React, { useState } from "react";
import { Toolbar, Button } from "@sistent/sistent";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SettingsIcon from "@mui/icons-material/Settings";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import ShareIcon from "@mui/icons-material/Share";
import RefreshIcon from "@mui/icons-material/Refresh";

const ToolbarDemo = ({ type }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("More");
  const [selectedIcon, setSelectedIcon] = useState(<MoreVertIcon />);
  const [selectionType, setSelectionType] = useState("text");

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);
  const handleOptionClick = (option, icon) => {
    setSelectedOption(option);
    setSelectedIcon(icon);
    setDropdownOpen(false);
  };

  const getDropdownStyle = () => ({
    position: "absolute",
    right: 0,
    top: "100%",
    backgroundColor: "white",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    borderRadius: "4px",
    overflow: "hidden",
    zIndex: 1000,
    border: "1px solid #eee",
  });

  const dropdownItem = {
    padding: "8px 16px",
    cursor: "pointer",
    minWidth: "120px",
    transition: "background-color 0.2s",
    whiteSpace: "nowrap",
    color: "black",
  };

  const options = [
    { name: "Delete", icon: <DeleteIcon /> },
    { name: "Download", icon: <FileDownloadIcon /> },
    { name: "Share", icon: <ShareIcon /> }
  ];

  if (type === "basic") {
      return (
        <Toolbar>
            <Button>Home</Button>
            <Button>Profile</Button>
            <Button>Settings</Button>
        </Toolbar>
      );
  }

  if (type === "standard") {
    return (
        <Toolbar>
            <Button><AddIcon /></Button>
            <Button><EditIcon /></Button>
            <Button><DeleteIcon /></Button>
        </Toolbar>
    );
  }

  if (type === "navigation") {
    return (
        <Toolbar>
            <Button><ArrowBackIcon /></Button>
            <Button><HomeIcon /></Button>
            <Button><ArrowForwardIcon /></Button>
            <Button><RefreshIcon /></Button>
        </Toolbar>
    );
  }

  if (type === "dropdown") {
    return (
        <Toolbar>
            <Button><AddIcon /></Button>
            <Button><EditIcon /></Button>
            <div style={{ position: "relative", marginLeft: "auto" }}>
                <Button onClick={toggleDropdown}>
                {selectedOption === "More" ? (
                    <>More <MoreVertIcon style={{ marginLeft: "4px" }} /></>
                ) : (
                    <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    {selectedIcon}
                    {selectedOption}
                    </div>
                )}
                </Button>
                {dropdownOpen && (
                <div style={getDropdownStyle()}>
                    {options.map(
                    (option, index) => (
                        <div
                        key={index}
                        style={{
                            ...dropdownItem,
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                        }}
                        onClick={() => handleOptionClick(option.name, option.icon)}
                        >
                        {React.cloneElement(option.icon, { fontSize: "small" })}
                        {option.name}
                        </div>
                    )
                    )}
                </div>
                )}
            </div>
        </Toolbar>
    );
  }
  
  if (type === "search") {
      return (
        <Toolbar>
            <div style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid",
            borderRadius: "4px",
            padding: "0 8px",
            flex: 1,
            maxWidth: "300px"
            }}
            >
            <SearchIcon style={{ marginRight: "8px" }} />
            <div style={{
                height: "32px",
                lineHeight: "32px",
            }}
            >Search...
            </div>
            </div>
            <div style={{ marginLeft: "auto" }}>
            <Button><SettingsIcon /></Button>
            </div>
        </Toolbar>
      );
  }

  if (type === "fixed") {
      return (
        <div style={{ height: "300px", position: "relative", overflow: "hidden", width: "100%", border: "1px solid #ccc" }}>
            <Toolbar fixed>
                <Button><HomeIcon /></Button>
                <Button><SearchIcon /></Button>
                <Button><SettingsIcon /></Button>
            </Toolbar>
            <div style={{ height: "240px", overflowY: "auto", padding: "16px", marginTop: "64px" }}>
                <div style={{ height: "300px" }}>
                <p><strong>Sistent Toolbar:</strong> The Sistent toolbar provides users with quick access to essential navigation and settings, ensuring a seamless experience across the application.</p>
                <p>With a fixed position, the toolbar remains visible as you scroll, making key actions always accessible.</p>
                <p>Use the Home icon to return to the dashboard, the Search icon to find resources, and the Settings icon to customize your preferences.</p>
                <p>Sistent is designed for clarity, accessibility, and ease of use, helping users stay productive and focused.</p>
                </div>
            </div>
        </div>
      );
  }

  if (type === "contextual") {
      return (
        <Toolbar>
            <div style={{
                display: "flex",
                borderRight: "1px solid",
                marginRight: "8px",
                paddingRight: "8px"
            }}
            >
                <Button onClick={() => setSelectionType("text")}>Text</Button>
                <Button onClick={() => setSelectionType("image")}>Image</Button>
            </div>

            {selectionType === "text" ? (
                <>
                <Button>Font</Button>
                <Button>Size</Button>
                <Button>Text Color</Button>
                </>
            ) : (
                <>
                <Button>Crop</Button>
                <Button>Replace Image</Button>
                <Button>Size</Button>
                </>
            )}
        </Toolbar>
      );
  }

  if (type === "top") {
    return (
        <div style={{
            border: "1px solid",
            borderRadius: "4px",
            width: "100%",
            maxWidth: "500px",
            margin: "0 auto"
        }}
        >
            <Toolbar style={{ borderBottom: "1px solid" }}>
            <Button><HomeIcon /></Button>
            <Button><SearchIcon /></Button>
            <div style={{ marginLeft: "auto" }}>
                <Button><SettingsIcon /></Button>
            </div>
            </Toolbar>
            <div style={{ padding: "20px", textAlign: "center" }}>
            Content Area
            </div>
        </div>
    );
  }

  if (type === "bottom") {
    return (
        <div style={{
            border: "1px solid",
            borderRadius: "4px",
            width: "100%",
            maxWidth: "500px",
            margin: "0 auto"
        }}
        >
            <div style={{ padding: "20px", textAlign: "center" }}>
            Content Area
            </div>
            <Toolbar style={{ borderTop: "1px solid" }}>
            <Button><HomeIcon /></Button>
            <Button><SearchIcon /></Button>
            <Button><AddIcon /></Button>
            <Button><SettingsIcon /></Button>
            </Toolbar>
        </div>
    );
  }
  
  if (type === "dense") {
      return (
        <Toolbar variant="dense">
            <Button><HomeIcon /></Button>
            <Button><SearchIcon /></Button>
            <Button><SettingsIcon /></Button>
        </Toolbar>
      );
  }

  if (type === "action") {
      return (
        <Toolbar>
            <Button><AddIcon /></Button>
            <Button><EditIcon /></Button>
            <Button><DeleteIcon /></Button>
            <div style={{ marginLeft: "auto" }}>
                <Button><MoreVertIcon /></Button>
            </div>
        </Toolbar>
      );
  }

  return null;
};

export default ToolbarDemo;
