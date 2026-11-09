import React from "react";
import SEO from "../../components/seo";

import loadable from "@loadable/component";
import Loader from "./Loader.style";
import LoadingIcon from "../../assets/images/LoadingIcon";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Container } from "../../reusecore/Layout";
import CalendarStyleWrapper from "../../sections/Community/Calendar/calendar.style";
import PageHeader from "../../reusecore/PageHeader";

const calendarFallback = (
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

const LoadableCalendar = loadable(
  () => import("../../sections/Community/Calendar"),
  {
    fallback: calendarFallback,
  },
);
const CalendarPage = () => {
  return (
    <>
      <LoadableCalendar />
    </>
  );
};
export default CalendarPage;
export const Head = () => {
  return (
    <SEO
      title="Layer5 Events Calendar"
      description="Join any or all of the Layer5 community meetings."
    />
  );
};
