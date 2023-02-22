import styled from "styled-components";

export const NewsWrapper = styled.div`
    iframe {
        margin: 0 auto;
        display:block;
        @media screen and (max-width: 750px) {
            max-width: 100% !important;
            width: auto !important;
            height: auto !important;
        }
    }
    .pull-right {
        float: right;
    }
    .pull-left {
        float: left;
    }
    .block-display {
        display: block;
    }


@media screen and (max-width: 768px) {
    img, iframe {
        width: "100%";
        margin-right: 0;
        margin-left:0;
    }
    
    }
`;
