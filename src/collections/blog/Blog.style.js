import styled from "styled-components";
export const BlogWrapper = styled.div`
  color: #000;
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
  .text-centre {
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
    box-shadow: 0px 5px 10px 1px ${props => props.theme.DarkTheme ? "rgba(0, 179, 159, 1.0)" : "rgba(0, 179, 159, 0.5)"};
  }

  .image-right {
    width: 40%;
    float: right;
    margin: 1rem 0rem 1rem 1.25rem;
    box-shadow: 0px 5px 10px 1px ${props => props.theme.DarkTheme ? "rgba(0, 179, 159, 1.0)" : "rgba(0, 179, 159, 0.5)"};
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
    width: 90%;
    margin-bottom: 1rem;
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

  .gsoc-image {
    max-width: 100%;
    height: auto;
  }
  .smp-image {
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
  .kubecon-header {
    color: #00b39f;
  }
  .kubecon-img1 {
    width: 28%;
  }
  .kubecon-img2 {
    padding-top: 8px;
    width: 28%;
  }
  .kubecon-img3 {
    padding-top: 15px;
    width: 28%;
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
  styles for service-mesh-specifications 
  =======================*/

  .slides{
    width: 45%;
    box-shadow: 0px 5px 10px 1px ${props => props.theme.DarkTheme ? "rgba(0, 179, 159, 1.0)" : "rgba(0, 179, 159, 0.5)"};     
    margin-bottom: 1rem;
  }
  .slides-right{
    width: 45%;
    display: inline;
    position: relative;
    margin: 1rem 0 1rem 2rem;
    float: right;
    box-shadow: 0px 5px 10px 1px ${props => props.theme.DarkTheme ? "rgba(0, 179, 159, 1.0)" : "rgba(0, 179, 159, 0.5)"};     
  }
  .slides-left {
    width: 45%;
    display: inline;
    position: relative;
    float: left;
    margin: 1rem 2rem 1rem 0rem;
    box-shadow: 0px 5px 10px 1px ${props => props.theme.DarkTheme ? "rgba(0, 179, 159, 1.0)" : "rgba(0, 179, 159, 0.5)"};     
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
.iframe-container{
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
