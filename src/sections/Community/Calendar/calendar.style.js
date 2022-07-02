import styled from "styled-components";

const CalendarStyleWrapper = styled.div`
    position: relative;
    overflow: hidden;
    text-align: center;
    .page-header {
        margin: 3rem auto 6rem;
    }
    .calendar-wrapper {
        margin-bottom: 5rem;
    }
    .calendar-grid {
        overflow-x: auto;
    }
    .fc-direction-ltr .fc-button-group > .fc-button:not(:last-child) {
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }
    .fc-direction-ltr .fc-button-group > .fc-button:not(:first-child) {
        margin-left: 5px;
        padding-top: 2px;
        padding-bottom: 2px;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
    }
    .fc .fc-button-group > .fc-button {
        background: ${props => props.theme.tertiaryColor};
        padding: 1rem;
        margin: 0px;
        min-width: 2.5rem;
        color: ${props => props.theme.shadowLightColor};

    }
    .fc-direction-ltr .fc-toolbar > * > :not(:first-child) {
        background: ${props => props.theme.keppelColor};
        min-width: 7.5rem;
        padding: 1rem;
        &:hover{
            color: ${props => props.theme.text};
            background: ${props => props.theme.primaryLightColorTwo}; 
        }

    }
    .fc .fc-button-primary,
    .fc .fc-button-primary:disabled{
        cursor: pointer; 
        font-family: inherit;
        text-decoration: none;
        text-transform: capitalize; 
        border: 0; 
        
        padding: 1rem;
        border-radius: 5px;
        -webkit-transition: 450ms all;
        transition: 450ms all;


    }
    .fc-addToCalendar-button.fc-button.fc-button-primary {
        background: ${props => props.theme.highlightColor};
        min-width: 10.625rem;
        &:hover{
            color: ${props => props.theme.black};
            background: ${props => props.theme.highlightColor}; 
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
        }
    }
    .fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events {
        min-height: auto;
        font-size: 14px;
        background: ${props => props.theme.secondaryColor};

        .fc-daygrid-event-harness {
            background: ${props => props.theme.secondaryColor};
        }
    }
    @media only screen and (max-width: 57rem) {
        .fc.fc-media-screen.fc-direction-ltr.fc-theme-standard {
            width: 57rem;
        }
    }
    .fc-daygrid-event {
        color: white;
        font-weight: bold;
        background: ${props => props.theme.secondaryColor};
        border-color: ${props => props.theme.secondaryColor};

        &:hover {
            background: rgba( 0, 0, 0, 0.1);
        }

        .fc-daygrid-event-dot {
            border: calc(var(--fc-daygrid-event-dot-width, 8px) / 3) solid var(--fc-event-border-color, #ffffff)
        }
    }
`;

export default CalendarStyleWrapper;
