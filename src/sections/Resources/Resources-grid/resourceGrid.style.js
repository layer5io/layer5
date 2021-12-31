import styled from "styled-components";
export const ResourcePageWrapper = styled.div`

    .resource-grid-wrapper{
        margin: 5rem 2rem;
    }

    @media only screen and (max-width: 992px) {
        .resource-page-wrapper{
            margin-bottom: 5rem;
        }
    }

    @media only screen and (max-width: 575px) {
        .resource-grid-wrapper{
            margin: 0 auto 5rem;
        }
    }

    .no-resources-page{
    padding: 1rem 1rem 4rem;
    margin: 1rem;
    
    box-shadow: 0px 3px 10px 1px rgba(0, 179, 159, 0.5);
    .errorMessage {
        font-size: 2rem;
        line-height: 2rem;
    }
    .error-text{
        margin-top: 5rem;
    }
    .errorSubtitle {      
        font-weight: 400;       
        font-size: 1.5rem;
        color: gray;
        font-style: italic;
        margin-top: 2.5rem;
    }
        img{
            display: block;
            margin:auto;
            margin-top: 3.125rem;
            width: 14rem;
            @media only screen and (max-width:700px){
                max-width: 100%;
            }
        }
    }
`;
