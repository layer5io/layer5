# Solution for Issue #8038

## 🛠️ Proposed Solution (by Aditya Waghamare)

### Analysis
The Sistent project landing page on `layer5.io/projects/sistent` lacks Open Graph (`og:image`) and meta image tags. When shared on social platforms like LinkedIn or Twitter, no preview thumbnail appears because the SEO/SEO component or frontmatter template for the Sistent project page does not specify an `image` or `og:image` property pointing to the official Sistent logo asset (available at `https://layer5.io/brand` or via GitHub raw assets).

### Fix
Update the frontmatter or page template for the Sistent project page (`src/pages/projects/sistent/index.js` or corresponding Markdown/MDX frontmatter in the Layer5 Gatsby repository) to include the correct Open Graph image metadata linking to the Sistent logo.

### Implementation
```jsx
// Example fix in Gatsby frontmatter / Seo component integration for Sistent project page
import React from "react";
import SEO from "../../../components/seo";

const SistentProjectPage = () => {
  return (
    <>
      <SEO 
        title="Sistent - Layer5 Design System"
        description="Extensible and interoperable design system by Layer5"
        image="https://raw.githubusercontent.com/layer5io/layer5/master/src/assets/images/sistent/sistent-logo.png" // or brand SVG/PNG asset URL
        pathname="/projects/sistent"
      />
      {/* Page Content */}
    </>
  );
};

export default SistentProjectPage;
```

Alternatively, if implemented via frontmatter in MDX:
```markdown
---
title: "Sistent"
subtitle: "The Layer5 Design System"
thumbnail: ../../../assets/images/sistent/sistent-top-light.png
---
```

Ensure the SEO component maps `image` to:
```html
<meta name="image" property="og:image" content="https://layer5.io/images/sistent-logo.png" />
<meta property="og:image:secure_url" content="https://layer5.io/images/sistent-logo.png" />
<meta name="twitter:image" content="https://layer5.io/images/sistent-logo.png" />
```

### Testing
1. Run `gatsby develop` locally.
2. Inspect the HTML head of `http://localhost:8000/projects/sistent`.
3. Verify `<meta name="image" property="og:image" content="...">` is correctly populated with the Sistent logo asset URL.
4. Test with LinkedIn Post Inspector.

Signed-off-by: Aditya Waghamare <adityawaghamare7620@gmail.com>

---
*Submitted by Aditya Waghamare*
💰 **Payout Address (Base L2 / EVM):** `0xb61dBcdBc3407F71EaCb64D4CBFAcf9FFfe2415C`