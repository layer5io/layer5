import styled from "styled-components";

export const HoneycombGrid = styled.div`
  
  .container-active{
    display: flex;
    height: 95%;
    background: white;
    justify-content: center;
    align-items: center;

    :hover {
      transition: all 0.25s ease-in;
      transform: scale(1.03);    
      background: #00d3a9;
        ::after{
          content: "";
          background: white;
          margin: 0px 0px 0 6px;
          clip-path: polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%);
          height: 93%;
          width: 93%;
          position: absolute;
          left: 0;
          z-index: -1;
      }
    }    
  }

  .container-inactive{
    display: flex;
    height: 95%;
    background: white;
    justify-content: center;
    align-items: center;
  }
  



  ul li{
    filter: drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.1));
  }
 
  .category {
    display: flex;
    flex-wrap: wrap;
    margin: 2.5625rem 0;
    gap: 0.625rem;
    justify-content: center;
  }

  .items {
    background-color: #f0f0f0;
    padding: 0.625rem 1.5625rem;
    border-radius: 0.625rem;
    text-transform: uppercase;
    color: #1e2117;
    font-size: 0.875rem;
    cursor: pointer;
  }

  .selected {
    background-color: ${props => props.theme.darkJungleGreenColor};
    color: ${props => props.theme.white};
  }

`;


export const IntegrationsWrapper = styled.div`
  max-width: 75rem;
  margin: 5.1875rem auto;

  .heading {
    text-align: center;

    h1 {
      line-height: 3.75rem;
    }

    h2 {
      font-weight: normal;
    }
  }

`;




export const IntegrationCard = styled.div`
  display:flex;
  margin: 5rem 1rem;
  gap: 5rem;
  align-items: stretch;
  flex-wrap: wrap;
  justify-content: center;
  .container{
    padding: 3.125rem;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    border-radius: 0 3.125rem 3.125rem 3.125rem;
    display: flex;
    justify-content: center;
    gap:0.5rem;
    flex-direction: column;
    align-items: center;
    flex: 0 1 auto;
    max-width: 30rem;
    border-width: 0px 1px 1px 0px;
    border-style: solid;
    border-color: #00D3A9; 
       
    p, h2{
      text-align: center;
    }
    
  }

 .open-modal-btn{
  background-color: #00b39f;
  color: white;
  :hover{
    color:black;
  }
 }
`;