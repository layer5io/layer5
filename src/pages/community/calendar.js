import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../sections/app.style";
import SEO from "../../components/seo";
import Navigation from "../../sections/General/Navigation";
import Footer from "../../sections/General/Footer";
import Layout from "../../components/layout";
import Loadable from "react-loadable";
import Loader from "./Loader.style";
import LoadingIcon from "../../assets/images/LoadingIcon";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Container } from "../../reusecore/Layout";
import CalendarStyleWrapper from "../../sections/Community/Calendar/calendar.style";
import PageHeader from "../../reusecore/PageHeader";
import { darktheme } from "../../theme/app/themeStyles";
import lighttheme from "../../theme/app/themeStyles";

const LoadableCalendar = Loadable({
  loader: () => import("../../sections/Community/Calendar"),
  loading() {
    return (
      <Loader>
        <div className="loading-modal">
          <LoadingIcon />
        </div>
        <div className="calender">
          <CalendarStyleWrapper>
            <PageHeader
              title="Community Calendar"
              path="Community > Calendar"
              subtitle="Join any or all of the weekly meetings"
            />
            <Container>
              <div className="calendar-wrapper">
                <div className="calendar-grid">
                  <FullCalendar
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                    contentHeight={700}
                    headerToolbar={{
                      left: "prev,next today",
                      center: "title",
                      right: "addToCalendar",
                    }}
                  />
                </div>
              </div>
            </Container>
          </CalendarStyleWrapper>
        </div>
      </Loader>
    );
  },
});


const CalendarPage = () => {
  const [theme, setTheme] = useState();
  const themeSetter = (thememode) => {
    setTheme(thememode);
  };
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  // prevents ssr flash for mismatched dark mode
  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>Prevent Flash</div>;
  }
  return (
    <ThemeProvider theme={theme === "dark" ? darktheme : lighttheme}>
      <Layout>
        <GlobalStyle />
        <SEO
          title="Layer5 Events Calendar"
          description="Join any or all of the Layer5 community meetings."
        />
        <Navigation theme={theme} themeSetter={themeSetter} />
        <LoadableCalendar />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default CalendarPage;
