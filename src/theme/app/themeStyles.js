
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
  blackFourToWhiteFour: "rgb(255 255 255 0.4)",
  blackOneToBlackZeroFive: "rgb(0 0 0 0.05)",
  blackOneToGrey: "#737373",
  blackOneToWhiteOne: "rgb(255 255 255 0.1)",
  blackSevenToWhiteSeven: "rgb(255 255 255 0.7)",
  blackToGreenDark: "#3C494F",
  blackToGreyDark: "#404040",
  blackToWhite: "#FFFFFF",
  boxShadowGreenBrightToBlackTwoFive: "rgb(0 0 0 0.25) 0px 0px 10px",
  boxShadowGreenToBlackThree: "0px 0px 10px rgb(0 0 0 0.3)",
  boxShadowGreytoBlackThree: "0px 0px 8px -2px rgb(0 0 0 0.3)",
  boxShadowGreytoBlackThree2: "0px 2px 16px rgb(0 0 0 0.3)",
  green00B39FToBlackFive: "rgb(0 0 0 0.5)",
  green00B39FToBlackFour: "rgb(0 0 0 0.4)",
  green00B39FToBlackOne: "rgb(0 0 0 0.1)",
  green00B39FToGreen3C494F: "#3C494F",
  green00B39FToGreyB3B3B3: "#B3B3B3",
  green00D3A9ToBlue477E96: "#477E96",
  green00D3A9ToGreen00B39F: "#00B39F",
  greenBrightToBlackFive: "rgb(0 0 0 0.5)",
  greenBrightToBlackOne: "rgb(0 0 0 0.1)",
  greenBrightToGreyLight: "#B3B3B3",
  greenBrightToGreyTint: "#F0F0F0",
  greenDarkToGreyTint: "#F0F0F0",
  greenShadeToGreenShade: "#00B39F",
  greenToBlack: "#000000",
  greenToGreenFive: "rgb(0 179 159 0.5)",
  grey050505ToGreyF1F2F1: "#F1F2F1",
  grey0E0E0EToGreen3C494F: "#3C494F",
  grey141414ToGreyF5F5F5: "#F5F5F5",
  grey141414ToGreyFAFAFA: "#FAFAFA",
  grey141714ToGreenEBFCF8: "#EBFCF8",
  grey151515OneToWhiteOne: "rgb(255 255 255 0.1)",
  grey212121OneToWhiteOne: "rgb(0 0 0 0.1)",
  grey212121ToAquaLight: "#C9FCF6",
  grey212121ToGoldenRod: "#FFF7D8",
  grey212121ToGreen1E2117: "#1E2117",
  grey212121ToGreenDark: "#3C494F",
  grey212121ToGreenTint: "#F3FFFD",
  grey212121ToGreyTint: "#F0F0F0",
  grey212121ToLinear: "linear-gradient(122.25deg, #eee -2.45%, #fff 52.7%, #eee 96.5%)",
  grey212121ToLinear2: "linear-gradient(123deg, white 60%, white 100%)",
  grey212121ToWhite: "#FFFFFF",
  grey232323ToGreyEEEEEE: "#EEEEEE",
  grey323232ToGreenF3FFFD: "#F3FFFD",
  grey3C3C3CToGreyF1F1F1: "#F1F1F1",
  grey8C8C8CToGreen1E2117: "#1E2117",
  grey8C8C8CToGreyA0A0A0: "#A0A0A0",
  greyC8C8C8ToGreen3C494F: "#3C494F",
  greyDarkShades: "#1E2117",
  greyDarkToBlack: "#000000",
  greyDarkToGreen: "#00B39F",
  greyDarkToGreyLight: "#B3B3B3",
  greyDarkToGreyTint: "#F0F0F0",
  greyDarkToWhite: "#FFFFFF",
  greyDCDCDCToGrey3B3B3B: "#3B3B3B",
  greyFiveToBlueFive: "rgb(71 126 150 0.5)",
  greyLightShadeToGreyLightShade: "#B3B3B3",
  greyLightToBlue: "#477E96",
  greyLightToGreenDark: "#3C494F",
  greyLightToGrey: "#737373",
  greyLightTogrey212121: "#212121",
  greyLightToGreyDark: "#404040",
  greyShadeToGreyShade: "#A0A0A0",
  greyTintToGreenDark: "#3C494F",
  greyTintToGrey: "#737373",
  greyTintTogrey212121: "#212121",
  greytoGreenDark: "#3C494F",
  greyTogrey212121: "#212121",
  greyToGreyDark: "#404040",
  greyToGreyLight: "#B3B3B3",
  greyToWhite: "#FFFFFF",
  linearToLinear: "linear-gradient(90deg, rgba(0, 179, 159, 0.7) 0%, rgba(217, 217, 217, 0) 99.34%)",
  linearToLinear2: "linear-gradient(61.3deg, rgba(0, 179, 159, 0.2) -26.19%, rgba(255, 255, 255, 0.2) 40.19%), linear-gradient(303.45deg, rgba(0, 179, 159, 0.2) 0%, rgba(255, 255, 255, 0.2) 37.23%), linear-gradient(360deg, #00B39F -108%, #FFFFFF 63.36%)",
  linearToWhite: "#FFFFFF",
  whiteEightToBlack: "#000000",
  whiteEightToBlackEight: "rgb(0 0 0 0.8)",
  whiteFiveToBlackFive: "rgb(0 0 0 0.5)",
  whiteFiveToBlackFour: "rgb(0 0 0 0.4)",
  whiteFiveToGrey: "#737373",
  whiteFiveToGreyLight: "#B3B3B3",
  whiteFourToGreyCECECE: "#CECECE",
  whiteNineToBlackOne: "rgb(0 0 0 0.1)",
  whiteOneFiveToBlackOneFive: "rgb(0 0 0 0.15)",
  whiteOneToBlackOne: "rgb(0 0 0 0.1)",
  whiteOneToGreyCECECE: "#CECECE",
  whiteOneToLightGrey: "#F0F0F0",
  whiteOneToWhiteShade: "rgba(240, 240, 240, 1)",
  whiteSevenFiveToBlackSevenFive: "rgb(0 0 0 0.75)",
  whiteSixFiveToBlackSixFive: "rgb(0 0 0 0.65)",
  whiteSixToBlackSix: "rgb(0 0 0 0.6)",
  whiteSixToGreenDark: "#3C494F",
  whiteToBlack: "#000000",
  whiteToGreen1E2117: "#1E2117",
  whiteToGreen3C494F: "#3C494F",
  whiteToGreenBright: "#00D3A9",
  whiteToGrey: "#737373",
  whiteToGrey212121: "#212121",
  whiteToGreyLight: "#B3B3B3",
  whiteZeroEightToBlackZeroEight: "rgb(0 0 0 0.08)",
  whiteZeroFiveToBlackZeroFive: "rgb(0 0 0 0.05)",
  whiteZeroThreeToBlackZeroOne: "rgb(0 0 0 0.01)",
  whiteZeroThreeToBlackZeroThree: "rgb(0 0 0 0.03)",

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
  blackFourToWhiteFour: "rgb(0 0 0 0.4)",
  blackOneToBlackZeroFive: "rgb(0 0 0 0.1)",
  blackOneToGrey: "rgb(0 0 0 0.1)",
  blackOneToWhiteOne: "rgb(0 0 0 0.1)",
  blackSevenToWhiteSeven: "rgb(0 0 0 0.7)",
  blackToGreenDark: "#000000",
  blackToGreyDark: "#000000",
  blackToWhite: "#000000",
  boxShadowGreenBrightToBlackTwoFive: "#00D3A9 0px 0px 10px",
  boxShadowGreenToBlackThree: "0px 0px 10px #00B39F",
  boxShadowGreytoBlackThree: "0px 0px 8px -2px #737373",
  boxShadowGreytoBlackThree2: "0px 2px 16px #737373",
  green00B39FToBlackFive: "#00B39F",
  green00B39FToBlackFour: "#00B39F",
  green00B39FToBlackOne: "#00B39F",
  green00B39FToGreen3C494F: "#00B39F",
  green00B39FToGreyB3B3B3: "#00B39F",
  green00D3A9ToBlue477E96: "#00D3A9",
  green00D3A9ToGreen00B39F: "#00D3A9",
  greenBrightToBlackFive: "#00D3A9",
  greenBrightToBlackOne: "#00D3A9",
  greenBrightToGreyLight: "#00D3A9",
  greenBrightToGreyTint: "#00D3A9",
  greenDarkToGreyTint: "#3C494F",
  greenShadeToGreenShade: "#009a89",
  greenToBlack: "#00B39F",
  greenToGreenFive: "#00D3A9",
  grey050505ToGreyF1F2F1: "#050505",
  grey0E0E0EToGreen3C494F: "#0E0E0E",
  grey141414ToGreyF5F5F5: "#141414",
  grey141414ToGreyFAFAFA: "#141414",
  grey141714ToGreenEBFCF8: "#141714",
  grey151515OneToWhiteOne: "rgb(21 21 21 0.1)",
  grey212121OneToWhiteOne: "rgb(21 21 21 0.1)",
  grey212121ToAquaLight: "#212121",
  grey212121ToGoldenRod: "#212121",
  grey212121ToGreen1E2117: "#212121",
  grey212121ToGreenDark: "#212121",
  grey212121ToGreenTint: "#212121",
  grey212121ToGreyTint: "#212121",
  grey212121ToLinear: "#212121",
  grey212121ToLinear2: "#212121",
  grey212121ToWhite: "#212121",
  grey232323ToGreyEEEEEE: "#232323",
  grey323232ToGreenF3FFFD: "#323232",
  grey3C3C3CToGreyF1F1F1: "#3C3C3C",
  grey8C8C8CToGreen1E2117: "#8C8C8C",
  grey8C8C8CToGreyA0A0A0: "#8C8C8C",
  greyC8C8C8ToGreen3C494F: "#C8C8C8",
  greyDarkShades: "#404040",
  greyDarkToBlack: "#404040",
  greyDarkToGreen: "#404040",
  greyDarkToGreyLight: "#404040",
  greyDarkToGreyTint: "#404040",
  greyDarkToWhite: "#404040",
  greyDCDCDCToGrey3B3B3B: "#DCDCDC",
  greyFiveToBlueFive: "rgb(122 132 142 0.5)",
  greyLightShadeToGreyLightShade: "#C8C8C8",
  greyLightToBlue: "#B3B3B3",
  greyLightToGreenDark: "#B3B3B3",
  greyLightToGrey: "#B3B3B3",
  greyLightTogrey212121: "#B3B3B3",
  greyLightToGreyDark: "#B3B3B3",
  greyShadeToGreyShade: "#8C8C8C",
  greyTintToGreenDark: "#F0F0F0",
  greyTintToGrey: "#F0F0F0",
  greyTintTogrey212121: "#F0F0F0",
  greyToGreenDark: "#737373",
  greyTogrey212121: "#737373",
  greyToGreyDark: "#737373",
  greyToGreyLight: "#737373",
  greyToWhite: "#737373",
  linearToLinear: "linear-gradient(89.99deg, rgba(0, 179, 159, 0.54) 10%, rgba(71, 126, 150, 0.26) 65.12%, rgba(18, 18, 18, 0.16) 90%)",
  linearToLinear2: "linear-gradient(61.3deg, rgba(0, 179, 159, 0.2) -26.19%, rgba(18, 18, 18, 0.2) 40.19%), linear-gradient(303.45deg, rgba(0, 179, 159, 0.2) 0%, rgba(18, 18, 18, 0.2) 37.23%), linear-gradient(360deg, #00B39F -11.84%, #121212 63.36%)",
  linearToWhite: "linear-gradient(to right, #666666, #444444)",
  whiteEightToBlack: "rgb(255 255 255 0.8)",
  whiteEightToBlackEight: "rgb(255 255 255 0.8)",
  whiteFiveToBlackFive: "rgb(255 255 255 0.5)",
  whiteFiveToGrey: "rgb(255 255 255 0.5)",
  whiteFiveToGreyLight: "rgb(255 255 255 0.5)",
  whiteFourToBlackFour: "rgb(255 255 255 0.4)",
  whiteFourToGreyCECECE: "rgb(255 255 255 0.4)",
  whiteNineToBlackOne: "rgb(255 255 255 0.9)",
  whiteOneFiveToBlackOneFive: "rgb(255 255 255 0.15)",
  whiteOneToBlackOne: "rgb(255 255 255 0.1)",
  whiteOneToGreyCECECE: "rgb(255 255 255 0.1)",
  whiteOneToLightGrey: "rgb(255 255 255 0.1)",
  whiteOneToWhiteShade: "rgb(255 255 255 0.1)",
  whiteSevenFiveToBlackSevenFive: "rgb(255 255 255 0.75)",
  whiteSixFiveToBlackSixFive: "rgb(255 255 255 0.65)",
  whiteSixToBlackSix: "rgb(255 255 255 0.6)",
  whiteSixToGreenDark: "rgb(255 255 255 0.6)",
  whiteToBlack: "#FFFFFF",
  whiteToGreen1E2117: "#FFFFFF",
  whiteToGreen3C494F: "#FFFFFF",
  whiteToGreenBright: "#FFFFFF",
  whiteToGrey: "#FFFFFF",
  whiteToGrey212121: "#FFFFFF",
  whiteToGreyLight: "#FFFFFF",
  whiteZeroEightToBlackZeroEight: "rgb(255 255 255 0.08)",
  whiteZeroFiveToBlackZeroFive: "rgb(255 255 255 0.05)",
  whiteZeroThreeToBlackZeroOne: "rgb(255 255 255 0.03)",
  whiteZeroThreeToBlackZeroThree: "rgb(255 255 255 0.03)",
  //DarkTheme
  DarkTheme: true,


};


export default lighttheme;
