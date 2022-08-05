import styled from "styled-components";
export const ResourcesWrapper = styled.div`
  color: #000;
  .sub-heading {
    color: gray;
    position: relative;
    top: -10px;
  }

  div.fact {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    color: ${props => props.theme.secondaryColor};
    font-style: italic;
    font-size: 1.3rem;
    font-weight: 600;
    text-align: right;
    border-right: 4px solid ${props => props.theme.secondaryColor};        
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
}

div.fact-left {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: ${props => props.theme.secondaryColor};
  font-style: italic;
  font-size: 1.3rem;
  font-weight: 600;
  text-align: left;
  border-left: 4px solid ${props => props.theme.secondaryColor};        
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

  div.intro {
    padding-left: 3rem;
    padding-right: 3rem;
    font-style: italic;
    font-size: 0.8rem;
    border-top: 1px dashed ${(props) => props.theme.primaryLightColor};
    border-bottom: 1px dashed ${(props) => props.theme.primaryLightColor};
    margin-bottom: 1rem;
    padding-top: 1rem;
    background-color: ${(props) => props.theme.secondaryLightColorTwo};
    span {
      font-style: normal;
    }
  }
  .to-uppercase {
    text-transform: uppercase;
  }

  .content-left-margin {
    margin-left: 0.5em;
  }

  .table-1 {
    white-space: nowrap;
    max-width: 290px;
  }

  .table-2 {
    width: 40%;
    margin-left: 1.8em;
  }

  .table-box {
    margin-top: 2em;
    margin-bottom: 2em;
    width: 50%;
    border: 2px solid gray;
  }
  .text-centre {
    text-align: center;
  }

  .pull-right {
    float: right;
  }

  .hidden {
    display: none;
  }

  .fit-content {
    width: fit-content;
  }

  .embed-dimension {
    min-height: 315px;
    min-width: 280px;
  }

  .image-left {
    width: 42%;
    float: left;
    margin: 1rem 1.25rem 1rem 0rem;
    box-shadow: 0px 5px 10px 1px rgba(0, 179, 159, 0.5);

    @media only screen and (max-width: 568px) {
      width: 100%;
  }
  }

  .image-right {
    width: 42%;
    float: right;
    margin: 1rem 0rem 1rem 1.25rem;
    box-shadow: 0px 5px 10px 1px rgba(0, 179, 159, 0.5);
    @media only screen and (max-width: 568px) {
      width: 100%;
  }
  }
  .image-right-no-shadow {
    width: 40%;
    float: right;
    margin: 1rem 0rem 1rem 1.25rem;
  }
  .image-center {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    padding-bottom: 10px;
    padding-top: 10px;
  }

  .align-right {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 22%;
    height: 22%;
    float: right;
    border-radius: 50%;
  }

  .date {
    color: gray;
  }

  .centered-text {
    color: #3c494f;
    text-align: center;
  }
  .btn-center{
    display: block;
    margin: auto;
  }
  
  img.right {
    width: 40%;
    display: inline;
    position: relative;
    float: right;
  }
  img.left {
    width: 40%;
    display: inline;
    position: relative;
    float: left;
    margin: 1rem 1rem 1rem 0rem;
  }
  .left {
    width: 40%;
    display: inline;
    position: relative;
    float: left;
    margin: 1rem 1rem 1rem 0rem;
    p{
      font-size: 0.9rem;
      font-weight: 15;
      text-align: center;
    }
    img:hover{
      cursor:pointer;
    }
  }
  .center {
    width: 60%;
    position: relative;
    float: center;
    margin: 1rem auto 1rem auto;
    p{
      font-size: 0.9rem;
      font-weight: 15;
      text-align: center;
    }
    img:hover{
      cursor:pointer;
    }
  }
  .right {
    width: 40%;
    display: inline;
    position: relative;
    float: right;
    margin: 1rem 0 0 1rem;
    p{
      font-size: 0.9rem;
      font-weight: 15;
      text-align: center;
    }
    img:hover{
      cursor:pointer;
    }
  }
  div.intro {
    padding-left: 3rem;
    padding-right: 3rem;
    font-style: italic;
    font-size: 0.8rem;
    border-bottom: 1px dashed ${(props) => props.theme.primaryLightColor};
  }


  /* ==============
  styles for service-mesh-specifications 
  =======================*/

  .slides-right{
    width: 45%;
    display: inline;
    position: relative;
    float: right;
    box-shadow: 0px 5px 10px 1px rgba(0, 179, 159, 0.5);
  }
  .slides-left {
    width: 45%;
    display: inline;
    position: relative;
    float: left;
    margin: 1rem 2rem 1rem 0rem;
    box-shadow: 0px 5px 10px 1px rgba(0, 179, 159, 0.5);
  }
  .slides-left:hover{
    cursor:pointer;
  }
  .slides-right:hover{
    cursor:pointer;
  }
  div.note {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    color: ${props => props.theme.secondaryColor};
    font-style: italic;
    font-size: 1.3rem;
    font-weight: 600;
    text-align: right;
    border-right: 4px solid ${props => props.theme.secondaryColor};        
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
}
.status {
  text-align: center;
  padding-left: 2rem;
}
.iframe-container{
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%; 
  margin-top: 1rem;
  iframe{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 80%;
    height: 80%;
    display: block;
    margin-right: auto;
    margin-left:auto;
  }
}

iframe{
  padding-bottom: 2rem;
}
.Tutorial-btn{
  text-align: center;
}
`;
