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


export const Integrations = styled.div`
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
  @media (max-width: 394px) and (min-width: 315px) {
    padding-bottom: 37.5rem;
  }
`;

export const IntegrationPageWrapper = styled.section`
.herosection{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 5rem 1rem;
  h2 {
    font-size: 2.5rem;
    text-align: center;
  }
  img {
    margin-bottom: 0.5rem;
  }
  p {
    text-align: center;
  }
}

.overview{
  display: flex;
  padding: 0 2rem 5rem 2rem;
  gap: 5rem;
  justify-content: center;
  @media (max-width: 700px) {
    flex-direction: column-reverse;
  } ;
}
.feature{
  display: flex;
  flex-direction: column;
  h3 {
    padding-bottom: 1rem;
  }
  div {
    display: flex;
    gap: 0.5rem;
    padding: 0.625rem 0;
  }
  div p {
    margin: auto 0;
  }
}
.content{
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  p {
    line-height: 2rem;
    text-align: justify;
  }
  span {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    .btn {
      font-weight: bold;
      transition: all 0.5s ease;
      background: #ebc017;
      opacity: 0.8;
      padding: 0.5rem 2rem;
      color: black;
      border-radius: 0.625rem;
    }
    .btn:hover {
      opacity: 1;
    }
    span {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      a {
        color: black;
        transition: all 0.5s ease;
      }
      a:hover {
        padding-right: 5px;
      }
    }
  }
  @media (min-width: 700px) {
    width: 35rem;
  } ;
}`;




