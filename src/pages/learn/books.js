import React from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../../components/layout";

import SEO from "../../components/seo";
import BookPage from "../../sections/Learn/Books-grid";
import Navigation from "../../sections/Navigation";
import Footer from "../../sections/Footer";

import { GlobalStyle } from "../../sections/app.style";
import theme from "../../theme/app/themeStyles";


const BooksGridPage = ({hide_path}) => (
    <ThemeProvider theme={theme}>
        <Layout>
            <GlobalStyle />
            <SEO title="Service Mesh Books" />
            <Navigation />
            <BookPage hide_path={hide_path} />
            <Footer/>
        </Layout>
    </ThemeProvider>
);
export default BooksGridPage;
