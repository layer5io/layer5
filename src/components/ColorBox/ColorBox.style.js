import styled from "styled-components";

export const ColorBoxWrapper = styled.div`
         .PalletBox {
           height: 16rem;
           width: 16rem;
           background-color: ${props =>
  props.bgcolor ? props.bgcolor : "red"};
           margin-bottom: 1rem;
           padding: 1.5rem 2.5rem;
           color: ${props => props.dark ? "black" : "white" };
           .color-name{
             color: ${props => props.dark ? "black" : "white" };
             margin-bottom: 6.25rem;
           }
           .color-data{
             font-size: 1.25rem;
           }
         }
         @media (max-width:575px){
          .PalletBox{
              width: 9.5rem;
              height: 9.5rem;
              line-height: 2rem;
              padding: 1rem 2rem;
              .color-name{
                font-size: 1.25rem;
                margin-bottom: 1rem;
              }
              .color-data{
                font-size: 1rem;
              }
          }
      }
       `;
