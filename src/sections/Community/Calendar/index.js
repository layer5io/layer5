import React from "react";
import CalendarStyleWrapper from "./calendar.style";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import { Container , Row, Col} from "../../../reusecore/Layout";
import PageHeader from "../../../reusecore/PageHeader";
import Table from "../../../components/MeetInfo-Table";
import { meet_links_data } from "./meetLinksData";
import NewcomersMap from "../Newcomers-guide/newcomers-map";
import Button from "../../../reusecore/Button";
import { FaUsers } from "@react-icons/all-files/fa/FaUsers";

const Calendar = () => {

  const columns = React.useMemo(
    () => [
      {
        Header: "Meeting",
        accessor: "meeting",
      },
      {
        Header: "Day",
        accessor: "day",
      },
      {
        Header: "Slack Channel",
        id: "slack_channel",
        accessor: meet_links_data => {
          return (
            <>
              {
                <a href={meet_links_data.slack_link}>
                  {meet_links_data.slack_channel}
                </a>
              }
            </>
          );
        }
      },
      {
        Header: "Meeting Minutes",
        id: "meeting_minutes",
        accessor: meet_links_data => {
          return (
            <>
              {
                <a href={meet_links_data.meeting_minutes}>
                                    Minutes
                </a>
              }
            </>
          );
        }
      },
      {
        Header: "Meeting Link",
        id: "meeting_link",
        accessor: meet_links_data => {
          return (
            <>
              {
                <a href={meet_links_data.meeting_link}>
                                    Zoom
                </a>
              }
            </>
          );
        }
      },
      {
        Header: "Meeting Recordings",
        id: "meeting_recordings",
        accessor: meet_links_data => {
          return (
            <>
              {meet_links_data.slack_channel !== "#smi" ?
                <a href={meet_links_data.meeting_recordings}>
                                    YouTube
                </a>: "N/A"
              }
            </>
          );
        }
      },
    ],
    []
  );

  const data = React.useMemo(() => meet_links_data);

  return (
    <CalendarStyleWrapper>
      <PageHeader
        title="Community Calendar"
        path="Community > Calendar"
        subtitle="Join any or all of the weekly meetings"
      />
      <div>
        <Container>
          <div className="calendar-wrapper">
            <div className="calendar-grid">
              <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin, googleCalendarPlugin]}
                initialView="dayGridMonth"
                googleCalendarApiKey="AIzaSyDcmx-nLYfqvrfpEmVJuclwt9akayYfUgg"
                events={{
                  googleCalendarId: "layer5.io_eh2aa9dpf1g40elvoc762jnphs@group.calendar.google.com",
                }}
                buttonText={{
                  today: "Today"
                }}
                customButtons={{
                  addToCalendar: {
                    text: "Add To Your Calendar",
                    click: function () {
                      window.open("https://bit.ly/2SbrRhe", "_blank");
                    }
                  }
                }}
                headerToolbar={{
                  left: "prev,next today",
                  center: "title",
                  right: "addToCalendar"
                }}
                showNonCurrentDates={false}
                contentHeight={700}
              />
            </div>
          </div>
        </Container>
        <Table columns={columns} data={data} />
      </div>
      <br/>
      <Container>
          <Row className="newcomers-section">
            <Col xs={12} lg={6} className="map">
              <NewcomersMap />
            </Col>
            <Col xs={12} lg={6} className="text">
              <div>
                <h1>Newcomers Welcome!</h1>
                <h3>Are you new to the community?</h3>
                <p className="invitation">
                  Begin your journey by <a href="http://slack.layer5.io">joining the community Slack</a>. Then, use the resources linked in our <a href="community/newcomers">Contributor's Journey Map </a>
                  and engage in the community and projects.
                </p>
                <Button primary title="See All Newcomers Resources" url="/community/newcomers">
                  <FaUsers size={21} className="icon-left" />
                </Button>
              </div>
            </Col>
          </Row>
      </Container>
      <br />
    </CalendarStyleWrapper>
  );
};

export default Calendar;
