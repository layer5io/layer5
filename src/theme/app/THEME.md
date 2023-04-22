## Adding dark mode for components

The site currently has dark and light mode, the colors used in these two modes can be found in the dark and light theme objects in [themeStyles.js](https://github.com/layer5io/layer5/blob/master/src/theme/app/themeStyles.js).

These theme objects use a property whose value automatically changes based on the active theme without using a conditional.

An example of a conditional:

```
theme === "dark" ? "white" : "black"
```

The preference is to **not use conditionals** for elements because they will flicker when reloading a page in dark mode.

As currently constructed, the dark and light theme objects share similar property names that have different values.

The property name will tell you how the value (color or hexcode) will change from dark mode to light mode. The first part is for dark mode, then "To", and the next part is for light mode.

example #1: `whiteToBlack`

"white" is the first part for dark mode
"To"
"Black" is the second part for light mode

In dark mode the value of `whiteToBlack` will be `white`
In light mode the value of `whiteToBlack` will be `black`

example #2: `grey141414ToGreyF5F5F5`

In dark mode this value will be `#141414` (a dark shade of grey)
In light mode this value will be `#F5F5F5` (a light shade of grey).

The hexcode in the property name is the indication of the color shade being used in the active theme. Always check the hexcode to confirm it is the desired shade/color.

In a styled component, you can use the property name in the following way:

#### Examples

example #1:
`color: ${props => props.theme.whiteToBlack};`

example #2:
`color: ${props => props.theme.greyDEE3DEToGreen3C494F}`

### Adding a new color pair transition property

It is recommended to use pre-existing styles, colors, hexcodes from the theme. Avoid adding your own CSS variables and incorporating new colors.

If you must add a new property that changes with the theme:

1. Add a new property with the same name to the dark and light theme objects in [themeStyles.js](https://github.com/layer5io/layer5/blob/master/src/theme/app/themeStyles.js) and the corresponding values you want them to have in each mode.

#### Example:

```
const lighttheme = {
  blue0000FFToRedFF0000: "#FF0000",
```

```
const darktheme = {
  blue0000FFToRedFF0000: "#0000FF",

```

2. Use that property name in your styled component

```
color: ${props => props.theme.blue0000FFToRedFF0000};
```

### Adding the transition property to the element in the styled component

Transition property is not inherited. It must be added for each element that is changing colors and be consistent with the transition timing and style of the background color in [`GlobalStyle`](https://github.com/layer5io/layer5/blob/master/src/sections/app.style.js) to ensure uniform color change.

Currently this property:value is

```
transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
```

## Preferable SVG and Images

- SVG or image does not need to change colors depending on the theme

OR

- SVG or image uses transparent sections that change with the background color to work with either theme.

[Example of SVG file with transparent sections](https://github.com/layer5io/layer5/blob/master/src/assets/images/meshmap/icon-only/meshmap-icon.svg)

[Example of image file with transparent sections](https://github.com/layer5io/layer5/blob/master/src/assets/images/app/projects/meshery-logo-light.png)

You can see these two examples in action [here](https://layer5.io/projects) by toggling the theme (located on the right side of the navigation bar).

The above are the preferred kinds of SVG and images. If your SVG or image fits one of the descriptions above, then you do not need to read further.

### Changing SVG according to theme

SVG image formats are the preferred format because of the ability to control colors used to fill path or stroke with styled-components and have them change dependent on the theme without using a conditional.

#### Importing SVG as a React Component

To use the SVG as an `svg` element and not a source for an `img` element, we will import the SVG as a ReactComponent. You can see an example of importing the SVG as a ReactComponent in the code [here](https://github.com/layer5io/layer5/blob/master/src/sections/General/Navigation/index.js)

```
import { ReactComponent as Logo } from "../../../assets/images/app/layer5-colorMode.svg";
```

Then we include the component where you want to display it

```
<Link to="/" className="logo">
    <Logo />
</Link>
```

#### Adding the color change property to the SVG

To change a fill for a SVG depending on the theme, you will need to create a class in the SVG to fill inner paths or rect or polygon with default colors, then assign that SVG class in a styled-component to a property value as done in components.

#### Example: Layer5 Logo

To see the code for this SVG click [here](https://github.com/layer5io/layer5/blob/master/src/assets/images/app/layer5-colorMode.svg?short_path=e76da80). (note: if link is not working , click [here](https://github.com/layer5io/layer5/blob/master/src/assets/images/app/layer5-colorMode.svg) and then click the "<>" button to display the source blob.)

In the SVG code, we see classes declared here:

```
<defs>
        <style>
            .colorMode1 {
                fill: #fff
            }
          ...
        </style>
</defs>
```

We use `colorMode[#]` in the class name to designate classes that we want to change depending on the theme.

Then in the related styled component, we use a specific class generated by styled-components to add the theme property.

In our example with the logo in the navigation, this is the relevant [styled component](https://github.com/layer5io/layer5/blob/master/src/sections/General/Navigation/navigation.style.js).

Here, if we want to update the CSS of the SVG then we target the appropriate parent class. For this example, looking at the where the SVG React component (`<Logo />`) was placed, we see `className="logo"` as the relevant parent class.

```
<Link to="/" className="logo">
    <Logo />
</Link>
```

In the styled component, we find ".logo", add the `svg` element, and within that add the class that is generated by the styled-component plugin, in our example it is `.layer5-colorMode_svg__colorMode1`.

> Note: the styled-component generated class name is based off the file name and the colorMode class name, using the following structure:
>
> svg file name (`layer5-colorMode`)

- a separator (`_svg___`)
- the class name being targetted inside the SVG (`colorMode1`)
  > this results in the class `.layer5-colorMode_svg__colorMode1`

```
 .logo {
    margin-top: 8px;

    svg {
      width: 155px;
      .layer5-colorMode_svg__colorMode1 {
        fill: ${props => props.theme.whiteToGreen3C494F};
        transition: fill 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
      }
    }
  }
```

> Notes:
>
> - You can add presentation css attributes to `svg` similar to how you would add to an `img`.
> - You can find the generated class name when you inspect the element in the browser console and look at the styles section of the svg code.
> - Even though we have a default fill property in the SVG itself (just in case), the fill property in the styled component will override it.
> - Whenever we are changing colors in a SVG, be sure to add the transition timing and style that is used for the background color in [GlobalStyle](https://github.com/layer5io/layer5/blob/master/src/sections/app.style.js) to have everything smoothly transition. Currently this property: value is
>
> ```
>  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
> ```

## Changing images depending on the theme.

If possibe we wish to avoid using images dependent on the theme because we are required to use a conditional (which will cause a flicker of the image when the page is reloaded). If necessary, please use the following instructions.

1. To change images or SVG as the image source, according to the theme, you have to import the hook `useStyledDarkMode` from the following [folder](https://github.com/layer5io/layer5/blob/master/src/theme/app/useStyledDarkMode.js), and then use the `isDark` value from `useStyledDarkMode` hook for the conditional.

For example, you can view the code for [this file](https://github.com/layer5io/layer5/blob/master/src/sections/Meshmap/Meshmap-collaborate/meshmap-collaborate-banner.js).

Here are the relevant parts of the code:

```
import { useStyledDarkMode } from "../../../theme/app/useStyledDarkMode";

const { isDark } = useStyledDarkMode();

 <img className="canvas" src={isDark ? EmptyDark : EmptyLight} alt="" />
```

## Changing images in gatsby-image-plugin according to the theme.

Procedure of changing the image for the gatsby-image is the same as we change for images, however, it is recommended to fetch two images, one for a dark theme and one for a light theme change it according to the `isDark` value as done with images.

Example (For Thumbnail):
Fetching images through Graphql. Add this in graphql query in frontmatter

      darkthumbnail {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
      extension
      publicURL
    }

Change image according to isDark value:

```
<Image
      {...((isDark && frontmatter.darkthumbnail.publicURL !== frontmatter.thumbnail.publicURL)
        ? frontmatter.darkthumbnail : frontmatter.thumbnail)}
      imgStyle={{ objectFit: "contain" }}
      alt={frontmatter.title}
    />
```

> Note:
>
> - A condition `frontmatter.darkthumbnail.publicURL !== frontmatter.thumbnail.publicURL` is added so that the image only changes if there is a difference between the thumbnail publicURLs.
