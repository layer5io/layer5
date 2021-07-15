import styled from "styled-components";

const WhatAwaitsWrapper = styled.div`
    background-color: #FAFAFA;
    padding: 1rem;
    margin: 1rem 0rem 6rem 0rem;
    
    .what-await-section {
        padding: 2rem;  
        justify-content: center;
        align-items:center;
    }
    .what-await-section-info {
        margin-right: 100px
        padding: 2rem 1rem; 
        justify-content: center;
        display: flex;
        flex-direction: column;
        h2{
            margin: 1rem 0;
        }
       
    }
    .what-await-section-image {
      
        
        @media (max-width: 768px) {
            & > div {
                width: 700px;
            max-width: 100%;
            height: 660px;
            }
    }
    
`;

export default WhatAwaitsWrapper;