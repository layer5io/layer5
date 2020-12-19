import styled from "styled-components";

const InternshipSectionWrapper = styled.div`

    h1{
        margin-bottom: 1rem;
        font-size: 2rem;
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
        flex: 0 0 33%;
        max-width: 100%;
        margin: 1rem 0;
    }
    @media only screen and (min-width:1201px){
        .full_time{
            .opportunity-col{
                flex: 0 0 25%;
            }
        }
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
        display: inline-flex;
        min-width: 16rem;
        height: 5rem; 
        background: rgba(247,247,247,1);
        justify-content: center;
        border-radius: 1rem;
        transition: box-shadow 0.2s;
        transition-timing-function: ease-in-out;
        h3{
            font-size: 1.1rem;
            color: black; 
            font-weight: 600;
            align-self: center;
            margin: auto 0.5rem;
        }
        &:hover{
            box-shadow: 0px 0px 10px -4px ${props => props.theme.shadowLightColor};
        }
        &:hover .oppurtunity_icon{
            background: #EBC017;
            box-shadow: none;
            position: relative;
            left: 7px;
        }
    }

    .oppurtunity_icon{
        width: 40px;
        height: 40px;
        min-width: auto;
        align-self: center;
        margin: auto 1rem auto 0.5rem;
        padding: 0;
        font-size: 1.25rem;
        border-radius: 1rem;        
        left: 0;
        transition: left 0.2s;
    }

    .oppurtunities_row{
        justify-content: space-evenly;
    }
`;

export default InternshipSectionWrapper;
