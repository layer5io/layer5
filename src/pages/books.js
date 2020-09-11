import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Navigation from "../sections/Navigation";
import Footer from "../sections/Footer";

import { GlobalStyle } from "../sections/app.style";
import theme from "../theme/blog/themeStyles";
import NewsPage from "../sections/News-grid";


const BooksGridPage = ({data}) => (
    <ThemeProvider theme={theme}>
        <Layout>
            <GlobalStyle />
            <SEO title="Books | Layer5 - The Service Mesh Company" />
            <Navigation />
            <NewsPage data={data}/>
            <Footer/>
        </Layout>
    </ThemeProvider>
);
export default BooksGridPage;
