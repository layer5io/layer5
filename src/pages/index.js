import React from "react";
import {ThemeProvider} from "styled-components";

import Layout from "../components/layout"; 

import SEO from "../components/seo";
import Navigation from "../sections/Navigation";
import Banner from "../sections/Banner-default";
import Features from "../sections/Features";
import Faq from "../sections/Faq";
import Integrations from "../sections/Projects-home";
import AppScreens from "../sections/AppScreens";
import Counters from "../sections/Counters";
import Pricing from "../sections/Pricing";
import Testimonial from "../sections/Testimonial";
import News from "../sections/News";
import Getapp from "../sections/Getapp";
import ContactCard from "../components/ContactCard";
import Footer from "../sections/Footer";

import { GlobalStyle } from "../sections/app.style";
import theme from "../theme/app/themeStyles";

const IndexPage = () => (
    <ThemeProvider theme={theme}> 
        <GlobalStyle />
        <SEO meta="Making service meshes available to the rest of us. Open source software for management of service meshes. Allowing developers to focus on business logic, not infrastructure concerns. Empowering operators to confidentally run modern infrastructure."></SEO>
        <Layout>
            <Navigation />
            <Banner />
            <Integrations />
            <Features />
            {/* <AppScreens /> */}
            {/* <Counters />  */}
            <Pricing />
            <Testimonial />
            {/* <Getapp /> */}
            {/* <News /> */}
            <Faq />
            <ContactCard />
            <Footer />
        </Layout>
    </ThemeProvider>
);

export default IndexPage;
