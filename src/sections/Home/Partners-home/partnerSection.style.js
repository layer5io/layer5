import styled from "styled-components";
const PartnerItemWrapper = styled.section`
    padding: 2rem 0;
    margin: 0rem 0rem 5rem 0rem;
    overflow: hidden;
    .section-title{
        h4{
            color: ${props => props.theme.DarkTheme ? "#737373" : "#b3b3b3"};
            text-align: center;
            margin-top: .5rem;
        }
    }
    .partner-slider{
        display: flex;
        justify-content: center;
        flex-wrap: nowrap;
        @media(max-width: 1400px){
            flex-wrap: wrap;
        }
    }
    a.partner-card {
        @media(max-width: 1400px){
            flex: 0 0 12%;
            margin-left:0.5rem;
            margin-right:0.5rem;
        }

        &:hover {
             img  {
                opacity: 1;
            }
        }
        flex-shrink: 3;
    }
    img {
        width: 2rem;
        margin-left:0.5rem;
        margin-right:0.5rem;
        max-width: 100%;
        min-width: 7rem;
        height:auto;
        opacity: 0.7;
        max-height:100px;
        @media(max-width: 800px){
                min-width:5.5rem;
            }
    }
    @supports (-webkit-hyphens:none) { 
        img { 
            min-width: 8rem; 
          }
        @media only screen and (max-width: 992px) {
            img { 
                min-width: 5.625rem; 
            }
        }
    }
    .partner__block__inner {
        padding: 5px;
        margin: 0px;
        filter:  ${props => props.theme.invertColor};
        display: flex;
        transition: all 0.2s ease-in-out;
        height: 110px;
    }
    @media only screen and (max-width: 575px) {
        margin: 2rem auto;
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
