import React from "react";
import CalendarStyleWrapper from "./calendar.style";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import { Container } from "../../reusecore/Layout";
import PageHeader from "../../reusecore/PageHeader";

const Calendar = () => {

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
                                googleCalendarApiKey='AIzaSyDcmx-nLYfqvrfpEmVJuclwt9akayYfUgg'
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
            </div>
        </CalendarStyleWrapper>
    );
};

export default Calendar;
