## How to use the CTA (Call To Action)

The CTA's are meant to be used in the MDX files under the layer5 repo.
Any MDX file can have these CTA's, and you don't need to import them explicitly.
Just calling the component like `<CTA_ImageOnly />` would do the trick.

Below, find the details on the types of CTA and where/how to use them.

### Types of CTA:

1. CTA_ImageOnly - This CTA is an image callout, and is meant to be used in the first half of the content.
2. CTA_FullWidth - This CTA is a full-width callout, and is meant to be used in the second half/middle of the content.
3. CTA_Bottom - This CTA is also a full-width callout, but it is meant to be used at the bottom of the content, or better after the content
    in the component rendering the content. Like `Blog-single.js`.

### How to use the CTA:

The CTA's take in some set of props (one can find in the respective CTA component definition), to customize the default 
data hardcoded in the component. Each and every field in the component can be customized with the help of props, just the 
respective prop needs to be passed while calling the component.
For example:
Using `<CTA_FullWidth />` will render the full-width CTA with the default data hardcoded in the component.
But,
```
<CTA_FullWidth 
  image={"./example.png"}
  alt="Alternate text for Image"
  content="This is an example callout"
  button_text="Click Me"
  url="https://example.com"     // Always provide the http/https header for the link if external link, or start with '/' in case of internal link
  external_link={true}
/>
```
will render the full-width CTA with the custom data passed as props to the component.

The `image`, `alt`, `link`, `category` props are common for all the CTA's. Preferrably, keep the ImageOnly CTA as internal callout (a lot of conditioning would be needed for external links). Rest of the props can be checked in the component definition.

The prop `category` can be used to categorize the CTA's. That is, instead of passing same custom data for each set of custom CTA's for a group, one can use
the `category` prop to group them under a category and add that category under the respective `cta_imageonly_categories.js`, `cta_fullwidth_categories.js`, 
`cta_bottom_categories.js` files for `CTA_ImageOnly`, `CTA_FullWidth` and `CTA_Bottom` respectively.

### About the props:

Below are the description of all the props available in the CTA's combined. Please check the props supported by the CTA's before using them.

1. `image`: Used to pass custom image for the CTA
2. `alt`: Used to pass alt text for the custom image passed to the CTA
3. `content`: Used to pass custom content to the CTA
4. `url`: Used to pass custom link to the CTA
5. `external_link`: If the url passed above is an external link, pass `true` to it, else `false` (default)
6. `button_text`: Used to pass custom text for the button in the CTA
7. `category`: Used to categorize the CTA's for a group of blogs/news/resources.


_Hopefully, this would ease up the process of adding a CTA to the MDX files. Happy meshing!_