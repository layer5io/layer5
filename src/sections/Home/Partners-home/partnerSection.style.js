import styled from "styled-components";

const PartnerItemWrapper = styled.section`
    padding: 2rem 0;
    .section-title{
        h4{
            color: ${props => props.theme.primaryLightColor};
            text-align: center;
        }
    }
    .row{
        flex-wrap: nowrap;
    }
    a.partner-card {
        /* &:hover {
            div {
                box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
            }
        } */
        
    }
    img {
        max-width: 100%;
        max-height: 100%;
        margin: auto;
    }
    .partner__block__inner {
        padding: .5rem;
        margin: 0px;
        display: flex;
        transition: all 0.2s ease-in-out;
        height: 8vw;
    }
     /* @media only screen and (max-width: 768px) {
        .horizontal {
            padding: 2rem 4rem;
        }
     }
     @media only screen and (max-width: 575px) {
        .horizontal {
            padding: 3rem 6rem;
        }
     }
     @media only screen and (max-width: 380px) {
        .horizontal {
            padding: 2.5rem;
        } */
     }
`;

export default PartnerItemWrapper;
