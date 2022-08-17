import styled from "styled-components";

export const HoneycombGrid = styled.div`
  display: flex;
  --s: 9.375rem;
  --m: 0.25rem;
  --f: calc(var(--s) * 1.732 + 4 * var(--m) - 1px);

  .container {
    filter: drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.1));
    font-size: 0;
  
  }

  .container div {
    background: white;
    width: var(--s);
    margin: var(--m);
    height: calc(var(--s) * 1.1547);
    display: inline-block;
    font-size: initial;
    clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
    margin-bottom: calc(var(--m) - var(--s) * 0.2885);

    :hover {
      transition: all 0.25s ease-in;
      transform: scale(1.03);
      background: #00d3a9;
      
    
    }
  }
  .container div div {
    display: flex;
    height: 10.125rem;
    width: 8.8125rem;
    margin: 0.3125rem;
    justify-content: center;
    align-items: center;
    
    :hover{
      background:white;
    }
    img{
      height:60px;
    }
  }
  .container::before {
    content: "";
    width: calc(var(--s) / 2 + var(--m));
    float: left;
    height: 120%;
    shape-outside: repeating-linear-gradient(
      #0000 0 calc(var(--f) - 3px),
      #000 0 var(--f)
    );
  }
 
  @media(max-width:768px){
    --s: 7.8125rem;
    .container div div{
      height:8.125rem;
      width:7.3125rem;
      margin:0.3125rem;

      img{
        height:50px;
      }
    }
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

  .integrations-grid {
    margin: 2rem auto 8rem;

    @media screen and (min-width:530px) and (max-width: 600px) {
      margin: 2rem auto 13rem;
    }

    @media screen and (min-width:400px) and (max-width: 465px) {
      margin: 2rem auto 18rem;
    }
  }

  @media (max-width: 394px) and (min-width: 315px) {
    padding-bottom: 37.5rem;
  }
`;





