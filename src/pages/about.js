import React from "react"
import { ThemeProvider } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Navigation from "../sections/Navigation"
import Footer from "../sections/Footer"
import About from "../sections/About"

import { GlobalStyle } from "../sections/app.style"
import theme from "../theme/blog/themeStyles"

const programs = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <SEO title="About" />
      <Navigation />
      <About />
      <Footer />
    </Layout>
  </ThemeProvider>
)

export default programs
