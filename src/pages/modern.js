import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Navigation from "../sections/Navigation";
import Banner from "../sections/Banner-modern";
import About from "../sections/About";
import Features from "../sections/Features";
import Faq from "../sections/Faq";
import Integrations from "../sections/Projects";
import AppScreens from "../sections/AppScreens";
import Counters from "../sections/Counters";
import Pricing from "../sections/Pricing";
import Testimonial from "../sections/Testimonial";
import News from "../sections/Company/News";
import Getapp from "../sections/Getapp";
import ContactCard from "../components/ContactCard";
import Footer from "../sections/Footer";

import { GlobalStyle } from "../sections/app.style";
import theme from "../theme/modern/themeStyles";

const IndexPage = () => (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
            <SEO title="Layer5 | The Service Mesh Company" />
            <Navigation />
            <Banner />
            <About />
            <Integrations />
            <Features />
            <AppScreens />
            <Counters />
            <Pricing />
            <Testimonial />
            <Faq />
            <Getapp />
            <News />
            <ContactCard />
            <Footer />
        </Layout>
    </ThemeProvider>
);

export default IndexPage;
