### What is the use of this CTA:
The **CaseStudyBanner** component displays a rotational case study showcase on the homepage, cycling through featured case studies (HPE, TCS Labs, and Infor) on each refresh/visit via `sessionStorage` and body class transitions.

### How to use the CTA:
To use this CTA simply use:
```jsx
<CaseStudyBanner />
```

### Adding a new Case Study:
To add a new case study:
1. Add the case study object to the `caseStudies` array in `src/components/Case-study-banner/index.js`.
2. Increment `CaseStudiesCount`.
3. Add the corresponding `.casestudyN` style rule in `src/sections/app.style.js`.

![image](https://github.com/meshery/meshery/assets/74408634/37332188-aae7-4f53-8a3b-27b0e55ed737)