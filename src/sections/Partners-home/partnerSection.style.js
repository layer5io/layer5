import styled from "styled-components";

const PartnerItemWrapper = styled.section`
    padding: 2rem 0;
    .section-title{
        h4{
            font-weight: bold;
            color: ${props => props.theme.primaryLightColor};
            text-align: center;
        }
    }
    a.partner-card {
        &:hover {
            div {
                box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
            }
        }
    }
    img {
        width: 60%;
        margin: auto;
    }
    .partner__block__inner {
        padding: 1.5rem 1rem;
        display: flex;
        transition: all 0.2s ease-in-out;
    }
    @media only screen and (max-width: 991px) {
        .partner__block__inner{
            padding: 3rem 2rem;
        }
     }
     @media only screen and (max-width: 768px) {
        .partner__block__inner{
            padding: 3rem 3rem;
        }
     }
     @media only screen and (max-width: 575px) {
        .partner__block__inner{
            padding: 2rem 6rem;
        }
     }
`;

export default PartnerItemWrapper;
