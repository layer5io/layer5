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
`;

export default WhatAwaitsWrapper;