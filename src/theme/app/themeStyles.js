const lighttheme = {
  black: "#000000",
  white: "#ffffff",
  offWhiteColor: "#FAFAFA",
  navigatorColor: "#FFFFFF",
  text: "#000000",
  textRevert: "#FFFFFF",
  bodyRevert: "#000000",
  body: "#FFFFFF",
  backgroundColor: "#eeeeee",
  // charcoal
  primaryColor: "#3c494f",

  // silver chalice (light gray)
  primaryLightColor: "#b3b3b3",

  // keppel (dark green)
  primaryLightColorTwo: "#00d3a9",
  keppelColor: "#00d3a9",

  // caribbean green (light green)
  secondaryColor: "#00b39f",
  caribbeanGreenColor: "#00d3a9",
  secondaryLightColorTwo: "#F3FFFD",

  // lighter gray
  secondaryLightColor: "#FAFAFA",

  // dark jungle green
  tertiaryColor: "#1e2117",
  darkJungleGreenColor: "#1e2117",
  darkJungleGreenHalfColor: "rgba(30, 33, 23, .5)",

  // Teal Blue
  tertiaryColorTwo: "#477E96",
  tealColor: "#477E96",
  tealLightColor: "#66B6D9",

  headingColor: "#111111",

  // light slate gray (medium gray)
  textColor: "#000000",
  shadowColor: "rgb(0 0 0 0.05)",

  // platinum (light gray)
  shadowLightColor: "#E6E6E6",

  // charcoal
  menuColor: "#3c494f",

  // caribbean green (light green)
  menuHoverColor: "#00b39f",
  linkColor: "#00b39f",

  // saffron (dark yellow)
  highlightColor: "#EBC017",
  saffronColor: "#EBC017",

  // flax (light yellow)
  highlightLightColor: "#EAD07D",
  saffronLightColor: "#EAD07D",

  // Shadow Sizes
  projectPageShadowsize: "10px",
  projectShadowsize: "30px",

  //Brightness
  siteLinkBrightness: "0.5",

  //Invert Colors in dark theme(Usually for svg)
  invertColor: "none",
  meshInterfaceLogoFilter: "none",
  mapBackground: "none%",
  //Elevation Color(Used in Cards Mostly)
  elevationColor: "#FFFFFF",

  //selection color(used when text is selected)
  selectionColor: "#3c494f",

  //color transition pairings for dark/light theme switch
  //naming convention is darktheme color first and lighttheme color second
  //example: if you want the color to go from white in darktheme to green in lighttheme, choose the color pairing "whiteToGreen" and it would go in your styled component as: "color: ${(props) => props.theme.whiteToGreen}"

  blackToWhite: "#FFFFFF",
  blackToWhiteFive: "rgb(255 255 255 0.5)",
  blackToWhiteOne: "rgb(255 255 255 0.1)",
  blackToWhiteSeven: "rgb(255 255 255 0.7)",
  greenBrightToGreen: "#00B39F",
  greenBrightToGreyTint: "#F0F0F0",
  greenToBlack: "#000000",
  greenToGreenDark: "#3C494F",
  greenToGreenFive: "rgb(0 179 159 0.5)",
  greyDarkShades: "#1E2117",
  greyDarkToBlack: "#000000",
  greyDarkToGreen: "#00B39F",
  greyDarkToGreyLight: "#B3B3B3",
  greyDarkToGreyTint: "#F0F0F0",
  greyDarkToWhite: "#FFFFFF",
  greyLightToGrey: "#737373",
  greyTintToGreenDark: "#3C494F",
  greyTintToGrey: "#737373",
  greyToGreyDark: "#404040",
  greyToGreyLight: "#B3B3B3",
  whiteToBlack: "#000000",
  whiteToBlackFive: "rgb(0 0 0 0.5)",
  whiteToBlackOne: "rgb(0 0 0 0.1)",
  whiteToBlackSeven: "rgb(0 0 0 0.7)",
  whiteToGreenDark: "#3C494F",
  whiteToGrey: "#737373",
  whiteToGreyLight: "#B3B3B3",

  //DarkTheme
  DarkTheme: false,

};
export const darktheme = {
  black: "#000000",
  white: "#ffffff",
  offWhiteColor: "#FAFAFA",
  navigatorColor: "#000000",
  body: "#212121",
  textRevert: "#000000",
  text: "#ffffff",
  bodyRevert: "#ffffff",
  toggleBorder: "#6B8096",
  background: "#999",
  backgroundColor: "rgb(33,33,33)",

  // white
  primaryColor: "#FFFFFF",

  // silver chalice (light gray)
  primaryLightColor: "#2C2C2C",

  // keppel (dark green)
  primaryLightColorTwo: "#2C2C2C",
  keppelColor: "#00d3a9",

  // caribbean green (light green)
  secondaryColor: "#00b39f",
  caribbeanGreenColor: "#00d3a9",
  secondaryLightColorTwo: "#212121",

  // lighter gray
  secondaryLightColor: "#000000",

  // dark jungle green
  tertiaryColor: "#FFFFFF",
  darkJungleGreenColor: "#1e2117",
  darkJungleGreenHalfColor: "rgba(30, 33, 23, .5)",

  // Teal Blue
  tertiaryColorTwo: "#477E96",

  headingColor: "#000000",

  // light slate gray (medium gray)
  textColor: "#000000",
  shadowColor: "rgba(255, 255, 255, 0.05)",

  // platinum (light gray)
  shadowLightColor: "#E6E6E6",

  // charcoal
  menuColor: "#ffffff",
  // 00D3A9
  // caribbean green (light green)
  menuHoverColor: "#00D3A9",
  linkColor: "#00D3A9",

  // saffron (dark yellow)
  highlightColor: "#EBC017",
  saffronColor: "#EBC017",

  // flax (light yellow)
  highlightLightColor: "#EAD07D",
  saffronLightColor: "#EAD07D",

  // Shadow Sizes
  projectPageShadowsize: "5px",
  projectShadowsize: "5px",

  //Brightness
  siteLinkBrightness: "1.0",

  //Invert Colors in dark theme(Usually for svg)
  invertColor: "invert(100%)",
  meshInterfaceLogoFilter: "90%",
  mapBackground: "93%",

  //Elevation Color(Used in Cards Mostly)
  elevationColor: "#212121",

  //selection color(used when text is selected)
  selectionColor: "#3c494f",

  //Active color (when a button is active)
  activeColor: "#3c494f",

  //color transition pairings for dark/light theme switch
  //naming convention is darktheme color first and lighttheme color second
  //example: if you want the color to go from white in darktheme to green in lighttheme, choose the color pairing "whiteToGreen" and it would go in your styled component as: "color: ${(props) => props.theme.whiteToGreen}"

  blackToWhite: "#000000",
  blackToWhiteFive: "rgb(0 0 0 0.5)",
  blackToWhiteOne: "rgb(0 0 0 0.1)",
  blackToWhiteSeven: "rgb(0 0 0 0.7)",
  greenBrightToGreen: "#00D3A9",
  greenBrightToGreyTint: "#00D3A9",
  greenToBlack: "#00B39F",
  greenToGreenDark: "#00B39F",
  greenToGreenFive: "#00D3A9",
  greyDarkShades: "#404040",
  greyDarkToBlack: "#404040",
  greyDarkToGreen: "#404040",
  greyDarkToGreyLight: "#404040",
  greyDarkToGreyTint: "#404040",
  greyDarkToWhite: "#404040",
  greyLightToGrey: "#B3B3B3",
  greyTintToGreenDark: "#F0F0F0",
  greyTintToGrey: "#F0F0F0",
  greyToGreyDark: "#737373",
  greyToGreyLight: "#737373",
  whiteToBlack: "#FFFFFF",
  whiteToBlackFive: "rgb(255 255 255 0.5)",
  whiteToBlackOne: "rgb(255 255 255 0.1)",
  whiteToBlackSeven: "rgb(255 255 255 0.7)",
  whiteToGreenDark: "#FFFFFF",
  whiteToGrey: "#FFFFFF",
  whiteToGreyLight: "#FFFFFF",

  //DarkTheme
  DarkTheme: true,


};


export default lighttheme;
