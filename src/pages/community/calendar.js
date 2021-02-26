import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../theme/blog/themeStyles";
import { GlobalStyle } from "../../sections/app.style";
import SEO from "../../components/seo";
import Navigation from "../../sections/General/Navigation";
import Footer from "../../sections/General/Footer";
import Layout from "../../components/layout";
import Loadable from "react-loadable";

const LoadableCalendar = Loadable({
  loader: () => import("../../sections/Community/Calendar"),
  loading() {
    return <div>Loading...</div>;
  }
});

const CalendarPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyle />
        <SEO title="Service Mesh Events Calendar" description="Join any or all of the Layer5 community meetings." />
        <Navigation />
        <LoadableCalendar />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default CalendarPage;
