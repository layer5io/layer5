## Adding dark theme for components

1. To differentiate between the colors of the dark and light theme, we have created a customization system in which you can define styles like color, position, display, etc using {props => props.theme.DarkTheme? darkThemeStyle: LightThemeStyle} 
  

2. It is recommended to use pre-existing styles or colors from the theme. Avoid adding your CSS variables."


 Examples- To change Text Color according to the theme

color: ${props => props.theme.DarkTheme ? props.theme.secondaryColor : props.theme.primaryLightColor}; (Recommended)

color: ${props => props.theme.DarkTheme ? "rgba(255, 255, 255, 0.6)" :"rgba(0, 0, 0, 0.6)"}; (Not recommended, only use when there is a need for creating a new css variable)




## Changing SVG according to theme

1. To change different SVG according to the theme, import SVG as a source, pass theme from the parent component, and change its source according to it,

Examples - 1. Importing SVG as a source.

             import layer5_logo from "../../../assets/images/app/layer5.svg";
             import layer5dark_logo from "../../../assets/images/layer5/layer5-only/svg/layer5-light-no-trim.svg";

            2. Pass the theme and change its source according to the theme.

             <img src={theme === "dark" ? layer5dark_logo : layer5_logo} alt="Layer5 logo" />



2. To change similar SVG as in dark and light according to the theme, fill inner paths or rect or polygon with the preferable colors like in the case of the components.

Examples -

   rect {
        fill:  ${props => props.theme.DarkTheme ? "#313131" : "#C9FCF6"};  
      }
      path {
        stroke: ${props => props.theme.DarkTheme ? props.theme.keppelColor: "#00B39F"};
      }


## Changing local images according to theme

1. To Change images according to the theme, pass the theme state to a specific image parent component and change its source according to the theme. For example- <img src={theme ==="dark"? DarkThemelogoSource : LightThemelogoSource}/> 

2. Also Fetch Logo source as a Source variable is recommended as it will be easier to read.


    Examples-                   
    
    <img src={theme ==="dark"? CNCFLightstackedlogo : CNCFstackedlogo} alt="About Layer5 Projects" />


## Changing images in gatsby-image-plugin according to the theme.

1. Procedure of changing the image for the gatsby-image is the same as we change for local images, however, it is recommended to fetch two images, one for a dark theme and one for a light theme change it according to the theme state as did with local images.

    Example(For Thumbnail)- 
      
        Fetching images through Graphql:
          Add this in graphql query in frontmatter
           darkthumbnail {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
            extension
            publicURL
          }

          Change image according to theme
          <Image
             {...(theme ==="dark"? frontmatter.darkthumbnail : frontmatter.thumbnail)}
             imgStyle={{ objectFit: "contain" }}
             alt={frontmatter.title}
           />): ""
                    