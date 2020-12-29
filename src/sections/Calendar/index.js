import React from "react";
import CalendarStyleWrapper from "./calendar.style";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import googleCalendarPlugin from "@fullcalendar/google-calendar";

const Calendar = () => {

    return (
        <CalendarStyleWrapper>
            <div>
                <h1>Community Calendar</h1>
                <p>Join any or all of the weekly meetings</p>
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
                        />
                    </div>
                </div>
            </div>
        </CalendarStyleWrapper>
    );
};

export default Calendar;
