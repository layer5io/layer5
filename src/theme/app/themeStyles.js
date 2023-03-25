
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

  /* color transition pairings for dark/light theme switch. naming convention is 1. darktheme color first and lighttheme color second. 2. color then hexcode for color (except for white and black) 3. if there is an alpha channel setting, it is added in the number word (e.g. eight).

  example: if you want the color to go from white (alpha channel .05) in darktheme to green #00D3A9 in lighttheme, the property will be called "whiteFiveToGreen00D3A9", and would be in the stylesheet as "props.theme.whiteFiveToGreen00D3A9"

  note: there must be one of the same property name in both lighttheme and darktheme
  */

  blackFiveToWhiteFive: "rgb(255 255 255 / 0.5)",
  blackFourToWhiteFour: "rgb(255 255 255 / 0.4)",
  blackOneToBlackZeroFive: "rgb(0 0 0 / 0.05)",
  blackToGreen3C494F: "#3C494F",
  blackToWhite: "#FFFFFF",
  boxShadowBlue477E96: "-0.25rem 0.25rem 1.25rem #477e96",
  boxShadowGreen00D3A9: "-0.25rem 0.25rem 3rem #00D3A9",
  boxShadowGreen00D3A9ToBlackTwoFive: "rgb(0 0 0 / 0.25) 0px 0px 10px",
  boxShadowGreyA3A3A3toBlackTwo: "0px 2px 16px rgb(0 0 0 / 0.2)",
  boxShadowGreyBABABAtoBlackTwoFive: "0px 0px 8px -2px rgb(0 0 0 / 0.25)",
  green009A89ToGreen00B39F: "#00B39F",
  green00B39FToBlackFive: "rgb(0 0 0 / 0.5)",
  green00B39FToBlackFour: "rgb(0 0 0 / 0.4)",
  green00B39FToGreen3C494F: "#3C494F",
  green00B39FToGreyB3B3B3: "#B3B3B3",
  green00D3A9ToBlackFour: "rgb(0 0 0 / 0.4)",
  green00D3A9ToBlackTwo: "rgb(0 0 0 / 0.2)",
  green00D3A9ToBlue477E96: "#477E96",
  green00D3A9ToGreen00B39F: "#00B39F",
  green00D3A9ToGreen00B39FFive: "rgb(0 179 159 / 0.5)",
  green00D3A9ToGreen3C494F: "#3C494F",
  green00D3A9ToGreyE6E6E6: "#E6E6E6",
  green3C494FToGreyF5F5F5: "#F5F5F5",
  grey050505ToGreyF1F2F1: "#F1F2F1",
  grey0E0E0EToGreen3C494F: "#3C494F",
  grey101010ToGreyF7F7F7: "#F7F7F7",
  grey111111ToGreyFAFAFA: "#FAFAFA",
  grey121212EightToWhiteEight: "rgb(255 255 255 / 0.8)",
  grey121212ToGreyEFEFEF: "#EFEFEF",
  grey121212ToLinear: "linear-gradient(123deg, white 60%, white 100%)",
  grey121212ToWhite: "#FFFFFF",
  grey141414ToGreyF5F5F5: "#F5F5F5",
  grey141414ToGreyFAFAFA: "#FAFAFA",
  grey141714ToGreenEBFCF8: "#EBFCF8",
  grey151515OneToWhiteOne: "rgb(255 255 255 / 0.1)",
  grey191919ToGreyFAFAFA: "#FAFAFA",
  grey1D1817ToGreyE6E6E6: "#E6E6E6",
  grey1D1D1DToGreyFAFAFA: "#FAFAFA",
  grey1D1D1DToLinear2: "linear-gradient(123deg, white 60%, white 100%)",
  grey212121ToBlack: "#000000",
  grey212121ToGreen1E2117: "#1E2117",
  grey212121ToGreen3C494F: "#3C494F",
  grey212121ToGreyEEEEEE: "#EEEEEE",
  grey212121ToGreyEFEFEF: "#EFEFEF",
  grey212121ToGreyF0F0F0: "#F0F0F0",
  grey212121ToGreyF3F3F3: "#F3F3F3",
  grey212121ToGreyF5F5F5: "#F5F5F5",
  grey212121ToLinear: "linear-gradient(122.25deg, #eee -2.45%, #fff 52.7%, #eee 96.5%)",
  grey212121ToLinear2: "linear-gradient(123deg, white 60%, white 100%)",
  grey212121ToWhite: "#FFFFFF",
  grey222222ToGreen1E2117: "#1E2117",
  grey222222ToWhite: "#FFFFFF",
  grey232323ToGreyEEEEEE: "#EEEEEE",
  grey262626ToGreen3C494F: "#3C494F",
  grey313131ToGreenC9FCF6: "#C9FCF6",
  grey313131ToYellowFFF7D8: "#FFF7D8",
  grey323232ToGreenF3FFFD: "#F3FFFD",
  grey3C3C3CToGreyF1F1F1: "#F1F1F1",
  grey404040ToGreen00B39F: "#3C494F",
  grey404040ToGrey1E2117: "#1E2117",
  grey737373ToGrey222222: "#222222",
  grey737373ToGrey4C4A4A: "#4C4A4A",
  grey737373ToGreyB3B3B3: "#B3B3B3",
  grey8C8C8CToGreen1E2117: "#1E2117",
  grey8C8C8CToGreyA0A0A0: "#A0A0A0",
  grey939393ToGrey4C4A4A: "#4C4A4A",
  greyA0AAAAToGrey666666: "#666666",
  greyAAAAAAToGrey7A848E: "#7A848E",
  greyB1B6B8ToBlue477E96: "#477E96",
  greyB4B4B4ToGrey505050: "#505050",
  greyC1C1C1ToGreyB3B3B3: "#B3B3B3",
  greyC8C8C8ToGreen3C494F: "#3C494F",
  greyD3D7DBToGreen1E2117: "#1E2117",
  greyDCDCDCToGrey3B3B3B: "#3B3B3B",
  greyDDDDDDToGrey333333: "#333333",
  greyDEE3DEToGreen3C494F: "#3C494F",
  greyDEE3DEToGrey363636: "#363636",
  greyEEEEEEToBlack: "#000000",
  greyFiveToBlueFive: "rgb(71 126 150 / 0.5)",
  linearToLinear: "linear-gradient(90deg, rgba(0, 179, 159, 0.7) 0%, rgba(217, 217, 217, 0) 99.34%)",
  linearToLinear2: "linear-gradient(61.3deg, rgba(0, 179, 159, 0.2) -26.19%, rgba(255, 255, 255, 0.2) 40.19%), linear-gradient(303.45deg, rgba(0, 179, 159, 0.2) 0%, rgba(255, 255, 255, 0.2) 37.23%), linear-gradient(360deg, #00B39F -108%, #FFFFFF 63.36%)",
  linearToWhite: "#FFFFFF",
  whiteEightToBlack: "#000000",
  whiteEightToBlackEight: "rgb(0 0 0 / 0.8)",
  whiteFiveToBlackFive: "rgb(0 0 0 / 0.5)",
  whiteFourToBlackFour: "rgb(0 0 0 / 0.4)",
  whiteFourToGreyCECECE: "#CECECE",
  whiteNineToBlackOne: "rgb(0 0 0 / 0.1)",
  whiteOneFiveToBlackOneFive: "rgb(0 0 0 / 0.15)",
  whiteOneToBlackOne: "rgb(0 0 0 / 0.1)",
  whiteOneToGreyCECECE: "#CECECE",
  whiteOneToGreyF0F0F0: "#F0F0F0",
  whiteSevenFiveToBlackSevenFive: "rgb(0 0 0 / 0.75)",
  whiteSevenToBlackSeven: "rgb(0 0 0 / 0.7)",
  whiteSixFiveToBlackSixFive: "rgb(0 0 0 / 0.65)",
  whiteSixToBlackSix: "rgb(0 0 0 / 0.6)",
  whiteSixToGreen3C494F: "#3C494F",
  whiteToBlack: "#000000",
  whiteToGreen00D3A9: "#00D3A9",
  whiteToGreen1E2117: "#1E2117",
  whiteToGreen3C494F: "#3C494F",
  whiteToGrey4C4A4A: "#4C4A4A",
  whiteToGrey737373: "#737373",
  whiteToGreyB3B3B3: "#B3B3B3",
  whiteToGreyE6E6E6: "#E6E6E6",
  whiteZeroEightToBlackZeroEight: "rgb(0 0 0 / 0.08)",
  whiteZeroFiveToBlackZeroFive: "rgb(0 0 0 / 0.05)",
  whiteZeroThreeToBlackZeroOne: "rgb(0 0 0 / 0.01)",
  whiteZeroThreeToBlackZeroThree: "rgb(0 0 0 / 0.03)",

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


  /* color transition pairings for dark/light theme switch. naming convention is 1. darktheme color first and lighttheme color second. 2. color then hexcode for color (except for white and black) 3. if there is an alpha channel setting, it is added in the number word (e.g. eight).

  example: if you want the color to go from white (alpha channel .05) in darktheme to green #00D3A9 in lighttheme, the property will be called "whiteFiveToGreen00D3A9", and would be in the stylesheet as "props.theme.whiteFiveToGreen00D3A9"

  note: there must be one of the same property name in both lighttheme and darktheme
  */

  blackFiveToWhiteFive: "rgb(0 0 0 / 0.5)",
  blackFourToWhiteFour: "rgb(0 0 0 / 0.4)",
  blackOneToBlackZeroFive: "rgb(0 0 0 / 0.1)",
  blackToGreen3C494F: "#000000",
  blackToWhite: "#000000",
  boxShadowBlue477E96: "0rem 0.25rem 1.25rem #477e96",
  boxShadowGreen00D3A9: "0rem 0.25rem 3rem #00D3A9",
  boxShadowGreen00D3A9ToBlackTwoFive: "#00D3A9 0px 0px 10px",
  boxShadowGreyA3A3A3toBlackTwo: "0px 2px 16px #A3A3A3",
  boxShadowGreyBABABAtoBlackTwoFive: "0px 0px 8px -2px #BABABA",
  green009A89ToGreen00B39F: "#009A89",
  green00B39FToBlackFive: "#00B39F",
  green00B39FToBlackFour: "#00B39F",
  green00B39FToGreen3C494F: "#00B39F",
  green00B39FToGreyB3B3B3: "#00B39F",
  green00D3A9ToBlackFour: "#00D3A9",
  green00D3A9ToBlackTwo: "#00D3A9",
  green00D3A9ToBlue477E96: "#00D3A9",
  green00D3A9ToGreen00B39F: "#00D3A9",
  green00D3A9ToGreen00B39FFive: "#00D3A9",
  green00D3A9ToGreen3C494F: "#00D3A9",
  green00D3A9ToGreyE6E6E6: "#00D3A9",
  green3C494FToGreyF5F5F5: "#3C494F",
  grey050505ToGreyF1F2F1: "#050505",
  grey0E0E0EToGreen3C494F: "#0E0E0E",
  grey101010ToGreyF7F7F7: "#101010",
  grey111111ToGreyFAFAFA: "#111111",
  grey121212EightToWhiteEight: "rgb(18 18 18 / 0.8)",
  grey121212ToGreyEFEFEF: "#121212",
  grey121212ToLinear: "#121212",
  grey121212ToWhite: "#121212",
  grey141414ToGreyF5F5F5: "#141414",
  grey141414ToGreyFAFAFA: "#141414",
  grey141714ToGreenEBFCF8: "#141714",
  grey151515OneToWhiteOne: "rgb(21 21 21 / 0.1)",
  grey191919ToGreyFAFAFA: "#191919",
  grey1D1817ToGreyE6E6E6: "#1D1817",
  grey1D1D1DToGreyFAFAFA: "#1D1D1D",
  grey1D1D1DToLinear2: "#1D1D1D",
  grey212121ToBlack: "#212121",
  grey212121ToGreen1E2117: "#212121",
  grey212121ToGreen3C494F: "#212121",
  grey212121ToGreyEEEEEE: "#212121",
  grey212121ToGreyEFEFEF: "#212121",
  grey212121ToGreyF0F0F0: "#212121",
  grey212121ToGreyF3F3F3: "#212121",
  grey212121ToGreyF5F5F5: "#212121",
  grey212121ToLinear: "#212121",
  grey212121ToLinear2: "#212121",
  grey212121ToWhite: "#212121",
  grey222222ToGreen1E2117: "#222222",
  grey222222ToWhite: "#222222",
  grey232323ToGreyEEEEEE: "#232323",
  grey262626ToGreen3C494F: "#262626",
  grey313131ToGreenC9FCF6: "#313131",
  grey313131ToYellowFFF7D8: "#313131",
  grey323232ToGreenF3FFFD: "#323232",
  grey3C3C3CToGreyF1F1F1: "#3C3C3C",
  grey404040ToGreen3C494F: "#404040",
  grey404040ToGrey1E2117: "#404040",
  grey737373ToGrey222222: "#737373",
  grey737373ToGrey4C4A4A: "#737373",
  grey737373ToGreyB3B3B3: "#737373",
  grey8C8C8CToGreen1E2117: "#8C8C8C",
  grey8C8C8CToGreyA0A0A0: "#8C8C8C",
  grey939393ToGrey4C4A4A: "#939393",
  greyA0AAAAToGrey666666: "#A0AAAA",
  greyAAAAAAToGrey7A848E: "#AAAAAA",
  greyB1B6B8ToBlue477E96: "#B1B6B8",
  greyB4B4B4ToGrey505050: "#505050",
  greyC1C1C1ToGreyB3B3B3: "#C1C1C1",
  greyC8C8C8ToGreen3C494F: "#C8C8C8",
  greyD3D7DBToGreen1E2117: "#D3D7DB",
  greyDCDCDCToGrey3B3B3B: "#DCDCDC",
  greyDDDDDDToGrey333333: "#DDDDDD",
  greyDEE3DEToGreen3C494F: "#DEE3DE",
  greyDEE3DEToGrey363636: "#DEE3DE",
  greyEEEEEEToBlack: "#EEEEEE",
  greyFiveToBlueFive: "rgb(122 132 142 / 0.5)",
  linearToLinear: "linear-gradient(89.99deg, rgba(0, 179, 159, 0.54) 10%, rgba(71, 126, 150, 0.26) 65.12%, rgba(18, 18, 18, 0.16) 90%)",
  linearToLinear2: "linear-gradient(61.3deg, rgba(0, 179, 159, 0.2) -26.19%, rgba(18, 18, 18, 0.2) 40.19%), linear-gradient(303.45deg, rgba(0, 179, 159, 0.2) 0%, rgba(18, 18, 18, 0.2) 37.23%), linear-gradient(360deg, #00B39F -11.84%, #121212 63.36%)",
  linearToWhite: "linear-gradient(to right, #666666, #444444)",
  whiteEightToBlack: "rgb(255 255 255 / 0.8)",
  whiteEightToBlackEight: "rgb(255 255 255 / 0.8)",
  whiteFiveToBlackFive: "rgb(255 255 255 / 0.5)",
  whiteFourToBlackFour: "rgb(255 255 255 / 0.4)",
  whiteFourToGreyCECECE: "rgb(255 255 255 / 0.4)",
  whiteNineToBlackOne: "rgb(255 255 255 / 0.9)",
  whiteOneFiveToBlackOneFive: "rgb(255 255 255 / 0.15)",
  whiteOneToBlackOne: "rgb(255 255 255 / 0.1)",
  whiteOneToGreyCECECE: "rgb(255 255 255 / 0.1)",
  whiteOneToGreyF0F0F0: "rgb(255 255 255 / 0.1)",
  whiteSevenFiveToBlackSevenFive: "rgb(255 255 255 / 0.75)",
  whiteSevenToBlackSeven: "rgb(255 255 255 / 0.7)",
  whiteSixFiveToBlackSixFive: "rgb(255 255 255 / 0.65)",
  whiteSixToBlackSix: "rgb(255 255 255 / 0.6)",
  whiteSixToGreen3C494F: "rgb(255 255 255 / 0.6)",
  whiteToBlack: "#FFFFFF",
  whiteToGreen00D3A9: "#FFFFFF",
  whiteToGreen1E2117: "#FFFFFF",
  whiteToGreen3C494F: "#FFFFFF",
  whiteToGrey4C4A4A: "#FFFFFF",
  whiteToGrey737373: "#FFFFFF",
  whiteToGreyB3B3B3: "#FFFFFF",
  whiteToGreyE6E6E6: "#FFFFFF",
  whiteZeroEightToBlackZeroEight: "rgb(255 255 255 / 0.08)",
  whiteZeroFiveToBlackZeroFive: "rgb(255 255 255 / 0.05)",
  whiteZeroThreeToBlackZeroOne: "rgb(255 255 255 / 0.03)",
  whiteZeroThreeToBlackZeroThree: "rgb(255 255 255 / 0.03)",

  //DarkTheme
  DarkTheme: true,


};


export default lighttheme;
