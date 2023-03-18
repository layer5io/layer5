import styled from "styled-components";
export const EventWrapper = styled.div`
  color: ${(props) => props.theme.text};
  .sub-heading {
    color: gray;
    position: relative;
    top: -10px;
  }

  div.intro {
    display: flex;
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
  .text-center {
    text-align: center;
  }
  .table-adapters {
    float: right;
    width: auto;
    vertical-align: middle;
    border: 1px solid darkgray;
    .adapter-logo {
      vertical-align: middle;
      margin-right: 5px;
      height: 30px;
      width: 30px;
    }
    .stable-adapters {
      width: auto;
      background-color: #3c494f;
      text-align: center;
      color: #fff;
    }
    .beta-adapters {
      width: auto;
      background-color: #00d3a9;
      text-align: center;
      color: #fff;
    }
    .alpha-adapters {
      width: auto;
      background-color: lightgray;
      text-align: center;
      color: black;
    }
  }

  .starting-letter {
    margin-left: 0.75em;
    font-size: 2em;
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

  .pa-20 {
    padding: 20px;
  }

  .image-left {
    width: 40%;
    float: left;
    margin: 1rem 1.25rem 1rem 0rem;
    box-shadow: 0px 5px 10px 1px ${props => props.theme.greenToGreenFive};
  }

  .image-right {
    width: 40%;
    float: right;
    margin: 1rem 0rem 1rem 1.25rem;
    box-shadow: 0px 5px 10px 1px ${props => props.theme.greenToGreenFive};
  }
  .image-right-no-shadow {
    width: 40%;
    float: right;
    margin: 1rem 0rem 1rem 1rem;
  }
  .image-left-no-shadow {
    width: 40%;
    float: left;
    margin: 1rem 1rem 1rem 0rem;
  }
  .image-center-shadow {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1.5rem;
    width: 90%;
    box-shadow: 0px 5px 10px 1px rgba(0, 179, 159, 0.5);
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
  .small-image {
    height: 40%;
    width: 40%;
  }
  .date {
    color: gray;
  }

  .centered-text {
    color: #3c494f;
    text-align: center;
  }
  
  img.right {
    width: 25%;
    display: inline;
    position: relative;
    float: right;
  }
  img.left {
    width: 25%;
    display: inline;
    position: relative;
    float: left;
    margin: 1rem 1rem 1rem 0rem;
  }
  div.intro {
    padding-left: 3rem;
    padding-right: 3rem;
    font-style: italic;
    font-size: 0.8rem;
    border-bottom: 1px dashed ${(props) => props.theme.primaryLightColor};
  }
  .flex-row {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  /* ==============
styles for figure with caption

Example: 
// <figure class="imgWithCaption fig-right">
//   <img src="" />
//   <figcaption>
//     <p>This is text for the image</p>
//   </figcaption>
// </figure>
=======================*/

  figure.imgWithCaption {
    margin-bottom: 1rem;
    box-shadow: 0px 5px 10px 1px rgba(0, 179, 159, 0.5);
    img{
      width: 100%;
    }
  }
  .fig-right{
    float: right;
    width: 40%;
    margin-left: 1rem;
  }
  .fig-left{
    float: left;
    width: 40%;
    margin-right: 1rem;
  }
  @media screen and (max-width: 699px) {
    .fig-right, .fig-left{
      width: 100%;
      display: block;
      margin: 1rem auto;
    }
  }
  
  figcaption p {
    text-align: center;
    font-size: 0.8rem;
    margin: -0.1rem 0 0.12rem;
    color: ${props => props.theme.menuColor};
  }


  /* ==============
styles for meshmate-of-the-year-2020 
=======================*/

  @media screen and (min-width: 768px) {
    .responsive-blog {
      display: flex;
    }
  }

  .meshmate-img {
    width: 100%;
    margin: auto;
  }

  @media screen and (min-width: 768px) {
    .meshmate-img {
      width: 40%;
      margin: auto;
    }
  }

  /* ==============
  styles for slides
  =======================*/

  .slides {
    width: 45%;
    box-shadow: 0px 5px 10px 1px ${props => props.theme.greenToGreenFive};     
    margin-bottom: 1rem;
  }
  .slides-right {
    width: 45%;
    display: inline;
    position: relative;
    margin: 1rem 0 1rem 2rem;
    float: right;
    box-shadow: 0px 5px 10px 1px ${props => props.theme.greenToGreenFive};     
  }
  .slides-left {
    width: 45%;
    display: inline;
    position: relative;
    float: left;
    margin: 1rem 2rem 1rem 0rem;
    box-shadow: 0px 5px 10px 1px ${props => props.theme.greenToGreenFive};     
  }
  @media screen and (max-width: 768px) {
    .slides-right, .slides-left, .slides{
      width: 100%;
      display: block;
      margin: 1rem auto;
    }
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
.iframe-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%; 
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
code {
      padding: 5px;
      font-style: normal;
      font-weight: normal;
      white-space: pre-wrap;
      border-radius: 3px;
      background-color: ${props => props.theme.tertiaryColor};
      color: ${props => props.theme.textRevert};
      &.short {
        line-height: 16px;
      }
      &.navy {
        color: var(--vagrant-l1);
      }
      &.gray {
        color: var(--gray-5);
      }
      &.white {
        color: var(--white);
      }
      @media (min-width: 768px){
        font-size: .85rem;
        line-height: .85rem;
      } 
  }
    
`;
