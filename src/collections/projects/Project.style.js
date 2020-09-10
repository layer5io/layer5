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

    .row {
        content: "";
        display: table;
        clear: both;
    }

    .col {
        float: left;
        width: 50%;
        padding: 10px;
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
            width: 100%;
            flex: 100%;
        }
    }
`;
