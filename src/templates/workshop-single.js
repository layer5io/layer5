// import React from "react"
// import { graphql } from "gatsby"

// import { ThemeProvider } from "styled-components"

// import Layout from "../components/layout"
// import SEO from "../components/seo"

// import Navigation from "../sections/Navigation"
// import Footer from "../sections/Footer"

// import { GlobalStyle } from "../sections/app.style"
// import theme from "../theme/blog/themeStyles"
// import WorkshopSingle from "../sections/Workshop-single"

// export const query = graphql`
//   query WorkshopsBySlug {
//     mdx(frontmatter: { status: { eq: "delivered" } }) {
//       body
//       frontmatter {
//         title
//         slack
//         slides
//         eurl
//         labs
//         abstract
//         video
//         date(formatString: "YYYY MMMM Do")
//         thumbnail {
//           extension
//           publicURL
//           childImageSharp {
//             fluid(maxWidth: 500) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `

// const WorkshopsSinglePage = ({ data }) => {
//   return (
//     <ThemeProvider theme={theme}>
//       <Layout>
//         <GlobalStyle />
//         <SEO title={data.mdx.frontmatter.title} />
//         <Navigation />
//         <WorkshopSingle data={data} />
//         <Footer />
//       </Layout>
//     </ThemeProvider>
//   )
// }

// export default WorkshopsSinglePage
