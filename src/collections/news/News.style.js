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
`;
