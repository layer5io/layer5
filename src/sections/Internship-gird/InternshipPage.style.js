import styled from "styled-components";

const InternshipSectionWrapper = styled.div`

    h1{
        margin-bottom: 1rem;
        color: black;
    }

    .grid{
        margin: 1rem 0;
    }

    .oppurtunities-text{
        margin: auto;
        text-align: center;
    }
    .oppurtunities-text p{
        color: rgba(30,33,23,0.6);
        margin: 0;
    }
    
    .oppurtunities{
        margin: 3rem auto;
        text-align: center;
    }
    .oppurtunities > div {
        margin: 3rem 0;
    }
    
    .opportunity-col{
        flex: 0 0 25%;
        max-width: 100%;
        margin: 1rem 0;
    }
    @media only screen and (max-width:1200px){
        .opportunity-col{
            flex: 0 0 50%;
        }
    }
    @media only screen and (max-width:700px){
        .opportunity-col{
            flex: 0 0 100%;
        }
    }

    .opportunity-card {
        width: 20rem;
        height: 14rem;
        margin :auto;
        padding: 0.5rem;
        background: rgba(245,245,245,1);
        text-align: center;
        border-bottom: 5px solid ${props => props.theme.secondaryColor};
        transition: all 0.2s;
        transition-timing-function: ease-in-out;
        h3{ 
            font-weight: 500;
        }
        p{
            margin: 0.5rem 0;
            color: rgba(0, 0, 0, 0.8);
        }
        &:hover{
            box-shadow: 0px 4px 20px 2px ${props => props.theme.shadowLightColor};
        }
    }

    .full_time {
        .opportunity-card {
            height: 12rem;
        }
    }

    @media screen and (max-width: 991px) {
        .opportunity-card {
            height: 12.5rem;
        }
    }

    .partner-image {
        height: 13rem;
        margin-bottom: 0.25rem;

        img {
            width: 22rem;
            height: inherit;
            border-radius: 0.5rem;
        }
    }

    .partners-card {
        display: block;
        width: max-content;
        background: rgba(241,242,241,1);
        border-radius: 1rem;
        text-align: center;
        justify-content: space-between;
        transition: all 0.2s;
        transition-timing-function: ease-in-out;
        h5{
            display: inline-flex;;
            font-weight: 400;
            line-height: 3.5rem;
            vertical-align: middle;
        }
        &:hover{
            .arrow_icon{
                background: #00D3A9;
                left: 0.2rem;
            }
        }
    }
    .arrow_icon{
        width: 2.5rem;
        height: 2.5rem;
        min-width: auto;
        margin: auto 0 auto 0.5rem;
        padding: 0;
        font-size: 1.25rem;
        border-radius: 1rem; 
        justify-content: center;       
        right: 0;
        transition: all 0.2s;
    }

    .partner-col {
        display: flex;
        justify-content: center;
        flex: 0 0 50%;
        max-width: 100%;
    }

    .oppurtunities_row{
        justify-content: space-evenly;
    }
`;

export default InternshipSectionWrapper;
