import styled from "styled-components";

export const Container = styled.div`
    max-width: 1170px;
    padding: 0 1rem;
    margin: 5rem auto 0;
    min-height: 400px; /* Add explicit min-height */
    width: 100%; /* Add explicit width */
    position: relative; /* Add position for better layout control */
    
    .title {
        opacity: 0;
        transform: translateY(20px) scale(0.95);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        text-transform: capitalize;
        text-align: center;
        font-weight: 400;
        color: ${props => props.theme.greyDEE3DEToGreen3C494F};
        min-height: 1.2em; /* Reserve space for title */
         span {
            color: ${(props) => props.theme.text};
            font-weight: 700;
        } 
    }

    .subtitle {
        opacity: 0;
        transform: translateY(20px) scale(0.95); 
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        text-align: center;
        margin-top: 1rem;
        margin-bottom: 3rem;
        font-size: 1.5rem;
        min-height: 1.5em; /* Reserve space for subtitle */
    }
    
    .fade-out {
        opacity: 0;
      }
    
      .fade-in {
        opacity: 1;
        transform: translateY(0) scale(1); 
      }
    
      .feature-item,
      .layout-item {
        opacity: 0; 
        transform: translateY(20px) rotate(-3deg) scale(0.9); 
        transition: opacity 0.6s ease-out, transform 0.6s ease-out; 
      }
    
      .fade-in {
        opacity: 1; 
        transform: translateY(0) rotate(0deg) scale(1); 
      }
`;