import React from "react"
import { ThemeProvider } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Navigation from "../sections/Navigation"
import BannerClassic from "../sections/Banner-classic"
import AboutClassic from "../sections/About-classic"
import FeaturesClassic from "../sections/Features-classic"
import FaqClassic from "../sections/Faq-Classic"
import Integrations from "../sections/Integrations"
import AppScreens from "../sections/AppScreens-classic"
import Counter from "../sections/Counters"
import Pricing from "../sections/Pricing"
import Testimonial from "../sections/Testimonial"
import News from "../sections/News"
import Getapp from "../sections/Getapp"
import Client from "../sections/Client"
import Footer from "../sections/Footer-classic"

import { GlobalStyle } from "../sections/app.style"
import theme from "../theme/classic/themeStyles"

const ClassicPage = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Layout>
    <SEO title="Layer5 | The Service Mesh Company" />
      <Navigation />
      <BannerClassic />
      <AboutClassic />
      <Integrations />
      <FeaturesClassic />
      <AppScreens />
      <Counter />
      <Pricing />
      <Testimonial />
      <FaqClassic />
      <Getapp />
      <News />
      <Client />
      <Footer />
    </Layout>
  </ThemeProvider>
)
export default ClassicPage
