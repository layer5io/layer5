
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
  shadowColor: "rgba(0, 0, 0, 0.05)",

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

  /* color transition pairings for dark/light theme switch. naming convention is darktheme color first and lighttheme color second. example: if you want the color to go from white in darktheme to green in lighttheme, choose the color pairing "whiteToGreen" and it would go in your styled component as: "color: ${(props) => props.theme.whiteToGreen}".
  Shades of the color are used after the color, so:
  "greyLightToGreyDark"
  For transitions involving rgb alpha channels, the number added to the color is the alpha setting.
  "greyLightToGreyDarkOne" (the "One" is equal to 0.1)
  */
  blackFiveToWhiteFive: "rgb(255 255 255 0.5)",
  blackOneToGrey: "#737373",
  blackOneToWhiteOne: "rgb(255 255 255 0.1)",
  blackSevenToWhiteSeven: "rgb(255 255 255 0.7)",
  blackToGreyDark: "#404040",
  blackToWhite: "#FFFFFF",
  boxShadowGreenBrightToBlackThree: "0px 0px 10px rgb(0 0 0 0.3)",
  boxShadowGreenToBlackThree: "0px 0px 10px rgb(0 0 0 0.3)",
  boxShadowGreytoBlackThree: "0px 0px 8px -2px rgb(0 0 0 0.3)",
  boxShadowGreytoBlackThree2: "0px 2px 16px rgb(0 0 0 0.3)",
  greenBrightToBlackFive: "rgb(0 0 0 0.5)",
  greenBrightToBlackOne: "rgb(0 0 0 0.1)",
  greenBrightToBlue: "#477E96",
  greenBrightToGreen: "#00B39F",
  greenBrightToGreyLight: "#B3B3B3",
  greenBrightToGreyTint: "#F0F0F0",
  greenDarkToGreyTint: "#F0F0F0",
  greenFullToBlackOne: "rgb(0 0 0 0.1)",
  greenShadeToGreenShade: "#00B39F",
  greenToBlack: "#000000",
  greenToGreenDark: "#3C494F",
  greenToGreenFive: "rgb(0 179 159 0.5)",
  greenToGreyLight: "#B3B3B3",
  greyDarkerOneToWhiteOne: "rgb(0 0 0 0.1)",
  greyDarkerToAquaLight: "#C9FCF6",
  greyDarkerToGoldenRod: "#FFF7D8",
  greyDarkerToGreenDark: "#3C494F",
  greyDarkerToGreenTint: "#F3FFFD",
  greyDarkerToGreyTint: "#F0F0F0",
  greyDarkerToLinear: "linear-gradient(122.25deg, #eee -2.45%, #fff 52.7%, #eee 96.5%)",
  greyDarkerToLinear2: "linear-gradient(123deg, white 60%, white 100%)",
  greyDarkerToWhite: "#FFFFFF",
  greyDarkShades: "#1E2117",
  greyDarkToBlack: "#000000",
  greyDarkToGreen: "#00B39F",
  greyDarkToGreyLight: "#B3B3B3",
  greyDarkToGreyTint: "#F0F0F0",
  greyDarkToWhite: "#FFFFFF",
  greyLightShadeToGreyLightShade: "#B3B3B3",
  greyLightToBlue: "#477E96",
  greyLightToGreenDark: "#3C494F",
  greyLightToGrey: "#737373",
  greyLightToGreyDark: "#404040",
  greyLightToGreyDarker: "#212121",
  greyShadeToGreyShade: "#A0A0A0",
  greyTintToGreenDark: "#3C494F",
  greyTintToGrey: "#737373",
  greyTintToGreyDarker: "#212121",
  greyToBlueFive: "rgb(71 126 150 0.5)",
  greytoGreenDark: "#3C494F",
  greyToGreyDark: "#404040",
  greyToGreyDarker: "#212121",
  greyToGreyLight: "#B3B3B3",
  greyToWhite: "#FFFFFF",
  linearToLinear: "linear-gradient(90deg, rgba(0, 179, 159, 0.7) 0%, rgba(217, 217, 217, 0) 99.34%)",
  linearToLinear2: "linear-gradient(61.3deg, rgba(0, 179, 159, 0.2) -26.19%, rgba(255, 255, 255, 0.2) 40.19%), linear-gradient(303.45deg, rgba(0, 179, 159, 0.2) 0%, rgba(255, 255, 255, 0.2) 37.23%), linear-gradient(360deg, #00B39F -108%, #FFFFFF 63.36%)",
  linearToWhite: "#FFFFFF",
  whiteFiveToBlackFive: "rgb(0 0 0 0.5)",
  whiteFiveToGrey: "#737373",
  whiteFiveToGreyLight: "#B3B3B3",
  whiteFullToBlackOne: "rgb(0 0 0 0.1)",
  whiteOneToBlackOne: "rgb(0 0 0 0.1)",
  whiteOneToLightGrey: "#F0F0F0",
  whiteSevenToBlackSeven: "rgb(0 0 0 0.7)",
  whiteToBlack: "#000000",
  whiteToGreenBright: "#00D3A9",
  whiteToGreenDark: "#3C494F",
  whiteToGrey: "#737373",
  whiteToGreyDarker: "#212121",
  whiteToGreyLight: "#B3B3B3",

  //DarkTheme
  DarkTheme: false,

};
export const darktheme = {
  black: "#000000",
  white: "#ffffff",
  offWhiteColor: "#FAFAFA",
  navigatorColor: "#000000",
  body: "#121212",
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
  secondaryLightColorTwo: "#121212",

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


  /* color transition pairings for dark/light theme switch. naming convention is darktheme color first and lighttheme color second. example: if you want the color to go from white in darktheme to green in lighttheme, choose the color pairing "whiteToGreen" and it would go in your styled component as: "color: ${(props) => props.theme.whiteToGreen}".
  Shades of the color are used after the color, so:
  "greyLightToGreyDark"
  For transitions involving rgb alpha channels, the number added to the color is the alpha setting.
  "greyLightToGreyDarkOne" (the "One" is equal to 0.1)
  */

  blackFiveToWhiteFive: "rgb(0 0 0 0.5)",
  blackOneToGrey: "rgb(0 0 0 0.1)",
  blackOneToWhiteOne: "rgb(0 0 0 0.1)",
  blackSevenToWhiteSeven: "rgb(0 0 0 0.7)",
  blackToGreyDark: "#000000",
  blackToWhite: "#000000",
  boxShadowGreenBrightToBlackThree: "0px 0px 10px #00D3A9",
  boxShadowGreenToBlackThree: "0px 0px 10px #00B39F",
  boxShadowGreytoBlackThree: "0px 0px 8px -2px #737373",
  boxShadowGreytoBlackThree2: "0px 2px 16px #737373",
  greenBrightToBlackFive: "#00D3A9",
  greenBrightToBlackOne: "#00D3A9",
  greenBrightToBlue: "#00D3A9",
  greenBrightToGreen: "#00D3A9",
  greenBrightToGreyLight: "#00D3A9",
  greenBrightToGreyTint: "#00D3A9",
  greenDarkToGreyTint: "#3C494F",
  greenFullToBlackOne: "#00B39F",
  greenShadeToGreenShade: "#009a89",
  greenToBlack: "#00B39F",
  greenToGreenDark: "#00B39F",
  greenToGreenFive: "#00D3A9",
  greenToGreyLight: "#00B39F",
  greyDarkerOneToWhiteOne: "rgb(21 21 21 0.1)",
  greyDarkerToAquaLight: "#212121",
  greyDarkerToGoldenRod: "#212121",
  greyDarkerToGreenDark: "#212121",
  greyDarkerToGreenTint: "#212121",
  greyDarkerToGreyTint: "#212121",
  greyDarkerToLinear: "#212121",
  greyDarkerToLinear2: "#212121",
  greyDarkerToWhite: "#212121",
  greyDarkShades: "#404040",
  greyDarkToBlack: "#404040",
  greyDarkToGreen: "#404040",
  greyDarkToGreyLight: "#404040",
  greyDarkToGreyTint: "#404040",
  greyDarkToWhite: "#404040",
  greyLightShadeToGreyLightShade: "#C8C8C8",
  greyLightToBlue: "#B3B3B3",
  greyLightToGreenDark: "#B3B3B3",
  greyLightToGrey: "#B3B3B3",
  greyLightToGreyDark: "#B3B3B3",
  greyLightToGreyDarker: "#B3B3B3",
  greyShadeToGreyShade: "#8C8C8C",
  greyTintToGreenDark: "#F0F0F0",
  greyTintToGrey: "#F0F0F0",
  greyTintToGreyDarker: "#F0F0F0",
  greyToBlueFive: "rgb(122 132 142 0.5)",
  greyToGreenDark: "#737373",
  greyToGreyDark: "#737373",
  greyToGreyDarker: "#737373",
  greyToGreyLight: "#737373",
  greyToWhite: "#737373",
  linearToLinear: "linear-gradient(89.99deg, rgba(0, 179, 159, 0.54) 10%, rgba(71, 126, 150, 0.26) 65.12%, rgba(18, 18, 18, 0.16) 90%)",
  linearToLinear2: "linear-gradient(61.3deg, rgba(0, 179, 159, 0.2) -26.19%, rgba(18, 18, 18, 0.2) 40.19%), linear-gradient(303.45deg, rgba(0, 179, 159, 0.2) 0%, rgba(18, 18, 18, 0.2) 37.23%), linear-gradient(360deg, #00B39F -11.84%, #121212 63.36%)",
  linearToWhite: "linear-gradient(to right, #666666, #444444)",
  whiteFiveToBlackFive: "rgb(255 255 255 0.5)",
  whiteFiveToGrey: "rgb(255 255 255 0.5)",
  whiteFiveToGreyLight: "rgb(255 255 255 0.5)",
  whiteFullToBlackOne: "#FFFFFF",
  whiteOneToBlackOne: "rgb(255 255 255 0.1)",
  whiteOneToLightGrey: "rgb(255 255 255 0.1)",
  whiteSevenToBlackSeven: "rgb(255 255 255 0.7)",
  whiteToBlack: "#FFFFFF",
  whiteToGreenBright: "#FFFFFF",
  whiteToGreenDark: "#FFFFFF",
  whiteToGrey: "#FFFFFF",
  whiteToGreyDarker: "#FFFFFF",
  whiteToGreyLight: "#FFFFFF",

  //comments
  //DarkTheme
  DarkTheme: true,


};


export default lighttheme;
