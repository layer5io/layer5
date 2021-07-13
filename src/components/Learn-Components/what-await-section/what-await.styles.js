import styled from "styled-components";

const WhatAwaitsWrapper = styled.div`
    background-color: #FAFAFA;
    padding: 1rem;
    margin: 1rem 0rem 6rem 0rem;
    
    .what-await-section {
        padding: 4rem;  
        justify-content: center;
        align-items:center;
    }
    .what-await-section-info {
        padding: 2rem 1rem; 
        justify-content: center;
        display: flex;
        flex-direction: column;
        h2{
            margin: 1rem 0;
        }
       
    }
    .what-await-section-image {
        img{
            height: 100%;
            width: 100%;
        }
    }
    @media(max-width: 768px)
    {
        .what-await-section {
            padding: 4rem 1rem;
        }
    }
    .what_awaits-section-wrapper{
        margin-bottom: 3.125rem;
    }

    .what_awaits{
        margin-top: 2rem;
        h2{
            line-height: 3.1rem;
            margin-bottom: 1rem;
            @media (max-width: 62rem) {
                line-height: 2.5rem;
            }
        }

        img{
            display:block;
            margin:auto;
        }
        @media (max-width: 62rem) {
             text-align:left;
        }
    }
`;

export default WhatAwaitsWrapper;