import styled from "styled-components";

export const ColorBoxWrapper = styled.div`
         .PalletBox {
           height: 16rem;
           width: 16rem;
           background-color: ${props =>
        props.bgcolor ? props.bgcolor : "red"};
           margin-bottom: 1rem;
           line-height: 2rem;
           padding: 1.5rem 2.5rem;
           color: ${props => props.dark ? "black" : "white" };
           .color-name{
             font-size: 1.4rem;
             color: ${props => props.dark ? "black" : "white" };
             margin-bottom: 6.25rem;
             font-weight: 400;
           }
           .color-data{
             font-size: 1.3rem;
           }
         }
         @media (max-width:575px){
          .PalletBox{
              width: 9.5rem;
              height: 9.5rem;
              line-height: 2rem;
              padding: 1rem 2rem;
              .color-name{
                font-size: 1rem;
                margin-bottom: 0px;
              }
              .color-data{
                font-size: 0.9rem;
              }
          }
      }
       `;
