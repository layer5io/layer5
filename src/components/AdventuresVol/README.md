## How to use the CTA (Call To Action)

The CTA's are meant to be used in the MDX files under the layer5 repo.
Any MDX file can have these CTA's, and you don't need to import them explicitly.
Just calling the component like `<AdventuresVolh />` would do the trick.

### How to use the CTA:
Using `<AdventuresVolh />` will render the CTA with the no data in the component.

```
<AdventuresVol 
  title="This is an example title"
  description="This is an example description"
  to="https://example.com"     // Always provide the http/https header for the link if external link or start with '/' in case of internal link
  image={"./example.webp"}
/>
```