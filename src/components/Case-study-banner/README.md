### What is the use of this CTA:
The **CaseStudyBanner** component is a reusable callout banner for enterprise customer case studies (such as HPE, Infor, and TCS Labs).

### How to use the CTA:

Default (HPE case study):
```jsx
import CaseStudyBanner from "../components/Case-study-banner";

<CaseStudyBanner />
```

Specific case study presets:
```jsx
// Infor case study (Platform Engineering / Kanvas)
<CaseStudyBanner caseStudy="infor" />

// TCS Labs case study (IDP / Solutions / Kanvas)
<CaseStudyBanner caseStudy="tcs" />

// HPE case study (SPIRE / Security)
<CaseStudyBanner caseStudy="hpe" />
```

Custom case study or override props:
```jsx
<CaseStudyBanner
  title="Discover how Acme Corp accelerated DevOps with Meshery"
  link="/resources/case-study/acme-adoption"
  leftLogo={MesheryLogo}
  leftAlt="Meshery Logo"
  rightLogo={AcmeLogo}
  rightAlt="Acme Logo"
  mobileGraphic={AcmeMobileGraphic}
  mobileAlt="Acme Case Study Graphic"
  ribbonText="Case Study"
/>
```
