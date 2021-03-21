import styled from "styled-components";

const PartnerItemWrapper = styled.section`
    padding: 2rem 0;
    margin: 0rem 0rem 5rem;
    overflow: hidden;
    .section-title{
        h4{
            color: ${props => props.theme.primaryLightColor};
            text-align: center;
            margin-top: .5rem;
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
        flex-shrink: 3;
    }
    img {
        max-width: 100%;
        min-width: 5rem;
        margin: auto;
        opacity: .7;
        max-height:100px;
    }
    .partner__block__inner {
        padding: 5px;
        margin: 0px;
        display: flex;
        transition: all 0.2s ease-in-out;
        height: 110px;
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
        }
     } */
`;

export default PartnerItemWrapper;
