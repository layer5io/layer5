## Adding dark theme for components

1. To differentiate the colors between dark theme and light theme, we have already created a customisation system in which we can define style like colors, position, display etc for both theme using {props => props.theme.DarkTheme? darkThemeStyle: LightThemeStyle} 
  
2. It is not recommended to fill style sheet with css variables, if possible use only colors or styles that are already defined in themeStyles.js.


## Changing svg according to theme

1. To Change svg according to theme, We strongly recommend to add inner paths in the svg and fill them with the preferable colors like we did for compenent.

## Changing local images according to theme

1. To Change images according to theme, We strongly recommend to pass theme state to specific image and change its source according to the theme. For example- <img src={theme ==="dark"? DarkThemelogoSource : LightThemelogoSource}/> 

2. Also Fetching Logo source as a Source variable is recommended as it will be easier to read.

## Changing images in gatsby-image-plugin.

1. Procidure of changing image for gatsby-image is same as we change for local images, however we recommend you to fetch two images, as one for dark theme and one for light theme change it according to theme state as we did with local theme.