import styled from "styled-components";

export const LearnLayer5GridWrapper = styled.div`

    margin: 3rem auto 6rem;

    .page-header {
        margin: 0rem auto 0.5rem !important;
    }
    .learn-subtitle {
        text-align: center;
    }

    .learning-path-cards{
        margin: auto;
        justify-content: center;
        padding: 6rem 0;
    }
    .service-mesh-patterns{
         display: flex;
         margin: auto;
         padding: 3rem;
         align-items: center;
        
         button{
             margin-top: 1.25rem;
         }
     }
     .service-mesh-patterns_text-and_button{
         h1{
             margin-bottom: 1rem;
         }
         p{
             margin: auto;
             max-width: 42rem;
         }
     }
     @media(max-width: 768px)
     {
         .service-mesh-patterns{
             flex-direction: column;
             justify-content: center;
             padding: 3rem 1rem;
             text-align: center;
         }
     }
    @media(max-width:500px){
        .learning-path-cards{
            padding: 6rem 2rem;
        }
    }
`;
