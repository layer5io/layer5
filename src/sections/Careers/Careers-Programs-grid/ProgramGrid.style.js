import styled from "styled-components";
export const ProgramsPageWrapper = styled.div`
    
    margin-top: -2rem;
    h1{
        color: ${props => props.theme.text};

    }
    .programs-page-wrapper{
        margin: 4rem 0;

        h5{
            font-weight: 600;
            text-align: center;
        }
    }
    .sub-header_wrapper{
        margin: 1rem 0;

        h5{
            font-size: 1.1rem; 
            font-weight: 600;
            color: ${props => props.theme.text};
        }
    }

    .icon{
        height: 12rem;
        width: 12rem;
        margin: 0 auto 1.5rem auto;
        position: relative;
        
        img{
            display: block;
            position: absolute;
            top: 0;
            bottom: 0;
            margin: auto;
        }
    }
    .sub-section_icon{
        height: 8rem;
        width: 8rem;
    }

    .program{
        height: 18rem;
        width: 20rem;
        padding: 5px;
        color: ${props => props.theme.text};
        margin: auto;
        background: ${props => props.theme.DarkTheme ? "rgba(152, 152, 152, 1)" : "rgba(247, 247, 247, 1)"};
        justify-content: center;
        border-radius: 1rem;
        transition: all 0.2s;
        transition-timing-function: ease-in-out;
        
        &:hover{
            box-shadow: 0px 4px 20px 2px ${props => props.theme.shadowLightColor};
        }
    }
    .sub-section_program{
        width: 18rem;
        height: 13rem;
    }

    .programs-col{
        flex: 0 0 33%;
        max-width: 100%;
        margin: 1rem 0;
    }
    @media only screen and (max-width:1200px){
        .programs-col{
            flex: 0 0 50%;
        }
    }
    @media only screen and (max-width:700px){
        .programs-col{
            flex: 0 0 100%;
        }
    }
`;
