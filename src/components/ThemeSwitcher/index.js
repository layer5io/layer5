import React, { useState, useContext } from "react";
import Switch from "react-switch";
import {IoMdSunny, IoMdMoon} from "react-icons/io";
import { ThemeManagerContext } from "gatsby-styled-components-dark-mode";

const ThemeSwitcher = () => {
  const [checked, setChecked] = useState(false);
  const themeContext = useContext(ThemeManagerContext);

  const handleChange = (checked) => {
    setChecked(checked);
    themeContext.toggleDark();
  };
  
  return (
    <Switch 
      onChange={handleChange} 
      checked={themeContext.themeSetting.toLocaleLowerCase(), checked} 
      onColor="#00b39f"
      checkedIcon={<IoMdSunny style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        fontSize: 25,
        paddingLeft: 5,
      }}/>} 
      uncheckedIcon={<IoMdMoon style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        fontSize: 25,
        paddingLeft: 5,
      }}/>}/>
  );
};

export default ThemeSwitcher;