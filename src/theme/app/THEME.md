## Adding dark theme for components

1. To differentiate between the colors of dark and light theme, we have created a customization system in which we can define styles like color, position, display etc using {props => props.theme.DarkTheme? darkThemeStyle: LightThemeStyle} 
  

2. It is recommended to use pre-existing styles or colors from the theme. Avoid adding your own CSS variables."


 Examples- To change Text Color according to theme

color: ${props => props.theme.DarkTheme ? "rgba(255, 255, 255, 0.6)" :"rgba(0, 0, 0, 0.6)"}; (Not recommended, only use when there is a need for creating a new css variable)

color: ${props => props.theme.DarkTheme ? props.theme.secondaryColor : props.theme.primaryLightColor}; (Recommended)



## Changing svg according to theme

1. To Change svg according to theme, We strongly recommend innerpaths or rect or polygon to befill them with the preferable colors like we did in the case of the components.

Examples -

   rect {
        fill:  ${props => props.theme.DarkTheme ? "#313131" : "#C9FCF6"};  
      }
      path {
        stroke: ${props => props.theme.DarkTheme ? props.theme.keppelColor: "#00B39F"};
      }


## Changing local images according to theme

1. To Change images according to theme, We strongly recommend to pass theme state to specific image parent component and change its source according to the theme. For example- <img src={theme ==="dark"? DarkThemelogoSource : LightThemelogoSource}/> 

2. Also Fetching Logo source as a Source variable is recommended as it will be easier to read.


    Examples-                   
    
    <img src={theme ==="dark"? CNCFLightstackedlogo : CNCFstackedlogo} alt="About Layer5 Projects" />


## Changing images in gatsby-image-plugin according to theme.

1. Procedure of changing image for gatsby-image is same as we change for local images, however we recommend you to fetch two images, as one for dark theme and one for light theme change it according to theme state as we did with local theme.

    Example- 
          <Image
             {...(theme ==="dark"? frontmatter.darkthumbnail : frontmatter.thumbnail)}
             imgStyle={{ objectFit: "contain" }}
             alt={frontmatter.title}
           />): ""
                    