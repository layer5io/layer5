import styled from "styled-components";

const L404SectionWrapper = styled.section`
    padding: 150px 0 100px 0;
    position: relative;
    overflow: hidden;
    text-align: center;

    h1.message {
        font-size: 2rem;
        line-height: 2rem;
    }
    h2.subtitle {      
        font-weight: 400;       
        font-size: 1.5rem;
        color: #363636;
        font-style: italic;
        margin-top: 2.5rem;
    }
    .button-row{
        display: flex;
        flex-direction: column;
        img{
            display:block;
            margin:auto;
            margin-top: 3.125rem;
            max-width: 50%;
            @media only screen and (max-width:700px){
                max-width: 100%;
            }
        }
        
        button{
            margin-top: 2.5rem;
            color: black;
        }
    }
`;

export default L404SectionWrapper;
