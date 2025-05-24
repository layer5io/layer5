import React, { Suspense } from "react";
import SEO from "../../components/seo";
import Loadable from "react-loadable";
import Loader from "./Loader.style";
import LoadingIcon from "../../assets/images/LoadingIcon";
import { Container } from "../../reusecore/Layout";
import CalendarStyleWrapper from "../../sections/Community/Calendar/calendar.style";
import PageHeader from "../../reusecore/PageHeader";

// Lazy load the calendar component
const Calendar = Loadable({
  loader: () => import("../../sections/Community/Calendar"),
  loading: () => (
    <Loader>
      <div className="loading-modal">
        <LoadingIcon />
      </div>
    </Loader>
  )
});

const CalendarPage = () => (
  <Suspense fallback={<LoadingIcon />}>
    <SEO title="Layer5 Community Calendar" description="Layer5 Community - Calendar of open source community events and meetings" />
    <Calendar />
  </Suspense>
);

export default CalendarPage;

export const Head = () => <SEO title="Layer5 Community Calendar" description="Layer5 Community - Calendar of open source community events and meetings" />;