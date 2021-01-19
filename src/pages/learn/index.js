import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Navigation from "../../sections/Navigation";
import BookPage from "../../sections/Learn/Books-grid";
import WorkshopsPage from "../../sections/Learn/Workshop-grid";
import Footer from "../../sections/Footer";

import { GlobalStyle } from "../../sections/app.style";
import theme from "../../theme/app/themeStyles";


const WorkshopsGridPage = () => {
    const hide_path = true;
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <GlobalStyle />
                <SEO title="Learn" />
                <Navigation />
                <BookPage hide_path={hide_path} />
                <WorkshopsPage limit={3} hide_path={hide_path} />
                <Footer />
            </Layout>
        </ThemeProvider>
    );
};
export default WorkshopsGridPage;
