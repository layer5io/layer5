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
@media screen and (min-width: 768px) {
    .responsive-quotes {
        display: flex;
      }
    }
@media screen and (max-width: 768px) {
    img{
        width: 100%;
    }
    }
`;
