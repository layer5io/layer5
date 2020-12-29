import styled from "styled-components";

const CalendarStyleWrapper = styled.div`
    padding: 150px 0 100px 0;
    position: relative;
    overflow: hidden;
    text-align: center;
    h1 {
        font-style: normal;
        font-weight: bold;
        font-size: 40px;
        line-height: 50px;
        text-transform: capitalize;
    }
    p {
        margin: 20px 0px;
        font-size: 16px;
        line-height: 16px;
    }
    .calendar-wrapper {
        margin: 5% 10%;
    }
    .fc-direction-ltr .fc-button-group > .fc-button:not(:last-child) {
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    .fc-direction-ltr .fc-button-group > .fc-button:not(:first-child) {
        margin-left: 20px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }
    .fc .fc-button-group > .fc-button {
        background: ${props => props.theme.tertiaryColor};
        border-radius: 10px;
        padding: 3px;
    }
    .fc-direction-ltr .fc-toolbar > * > :not(:first-child) {
        background: ${props => props.theme.secondaryColor};
    }
    .fc .fc-button-primary,
    .fc .fc-button-primary:disabled {
        border-color: inherit;
    }
    .fc-addToCalendar-button.fc-button.fc-button-primary {
        background: ${props => props.theme.highlightColor};
    }
    .fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events {
        min-height: auto;
        font-size: 14px;
        background: ${props => props.theme.secondaryColor};
    }
`;

export default CalendarStyleWrapper;