import styled from "styled-components";

export const ProjectWrapper = styled.div`
    color:#000;
    margin-top: 50px;

    .heading {
        margin-top: 25px;
        margin-bottom: 25px;
    }
    .center{
        text-align: center;
        color: black;
    }

    .fixed-width {
        align: center;
        max-width: 700px;
    }

    .responsive-holder {
        position: relative;
        overflow: hidden;
        width: 100%;
        padding-top: 56.25%;
    }

    .responsive-iframe {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
    }

    .center-col {
        margin: auto;
    }
    .flex-iframe {
        display: flex; 
        justify-content:center;
    }
`;
