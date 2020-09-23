import React from "react"
import { ThemeProvider } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Navigation from "../sections/Navigation"
import Footer from "../sections/Footer"
import Brand from "../sections/Brand"

import { GlobalStyle } from "../sections/app.style"
import theme from "../theme/hosting/themeStyles"

const BrandPage = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Layout>
      <SEO title="Layer5 | Layer5 Brand Kit" />
      <Navigation />
      <Brand />
      <Footer />
    </Layout>
  </ThemeProvider>
)

export default BrandPage
