import styled from "styled-components";

const CalendarStyleWrapper = styled.div`
    padding: 150px 0 100px 0;
    position: relative;
    overflow: hidden;
    text-align: center;
    .sub-heading {
        color:gray;
        position:relative;
        margin: 20px 0px;
        font-size: 16px;
        line-height: 16px;
    }
    .calendar-wrapper {
        margin: 5% 10%;
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
        padding: 14px;
        margin: 0px;
        min-width: 40px;
        color: ${props => props.theme.shadowLightColor};

    }
    .fc-direction-ltr .fc-toolbar > * > :not(:first-child) {
        background: ${props => props.theme.secondaryColor};
        min-width: 120px;
        padding: 14px;
        &:hover{
            color: #111111; 
            background: ${props => props.theme.primaryLightColorTwo}; 
        }

    }
    .fc .fc-button-primary,
    .fc .fc-button-primary:disabled {
        cursor: pointer;
        font-family: inherit; 
        font-size: 16px;
        text-decoration: none;
        text-transform: capitalize; 
        border: 0; 
        
        padding: 14px;
        border-radius: 5px;
        -webkit-transition: 450ms all;
        transition: 450ms all;


    }
    .fc-addToCalendar-button.fc-button.fc-button-primary {
        background: ${props => props.theme.highlightColor};
        min-width: 170px;
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
    }
`;

export default CalendarStyleWrapper;