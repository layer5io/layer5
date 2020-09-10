import styled from "styled-components";

export const ProjectWrapper = styled.div`
    color:#000;
    margin-top: 50px;
    .center{
        margin-bottom: 50px;
        text-align: center;
        color: black;
    }
    .image-left {
        width: 40%;
        float: left;
        padding-right: 10px;
    }
    .half-col {
        padding: 5px;
        width: 48%;
        height: auto;
        right: 0;
        text-align: center;
    }

    .row {
        display: flex;
    }

    .col {
        flex: 50%;
    }

    .col4 {
        flex: 40%;
    }

    .col6 {
        flex: 60%;
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

    @media screen and (max-width: 600px) {
        .col {
            flex: 100%;
        }
    }
`;
