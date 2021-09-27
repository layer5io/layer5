import styled from "styled-components";
export const HandbookWrapper = styled.div`
    .highlight{
      font-weight: 600;
    }
    .content{
      width:100%;
      padding-bottom: 2rem;
    ul > li {
        color: ${(props) => props.theme.menuColor};
      }
    ol > li {
        color: ${(props) => props.theme.menuColor};
      }
    ul > li > span {
        color: ${(props) => props.theme.black};
      }
    ol > li > span {
      color: ${(props) => props.theme.black};
    }
    }
    h2 h3{
      margin: 0.5rem 0;
      color: ${(props) => props.theme.tertiaryColor};
    }
    .page-section{
      margin-top: -29rem;
      margin-left: 20rem;
    }

    .sidebar {
        margin: 0;
        padding: 0;
        width: 250px;
        background-color:${(props) => props.theme.secondaryLightColor};
        position: absolute;
        height: 150rem;
        overflow: auto;
    }
    .sidebar a {
        display: block;
        color: black;
        padding: 16px;
        text-decoration: none;
    }

    .sidebar a.active {
        background-color: ${(props) => props.theme.primaryLightColorTwo};
        color: white;
    }
    .sidebar a:hover:not(.active) {
        background-color:${(props) => props.theme.secondaryLightColor};
        color: white;
    }
    .page-header-section {
        height: 10rem;
        text-align: center;
        background: rgb(71,126,150);
        background: linear-gradient(250deg, rgba(71,126,150,1) 0%, rgba(0,179,159,1) 35%, rgba(60,73,79,1) 100%);
        h1 {
            line-height: 10rem;
            color: white;
        }
    }

    .community-home-subtitle {
        text-align: center;
        padding-top: 3rem;
        padding-bottom: 1.5rem;
    }

    table {
    border-collapse: collapse;
    width: 98%;
    margin: 1rem 0 2rem 0;
    .github-icon{
      height: 1.7rem;
      width:auto;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
    .site-icon{
      height: 1.6rem;
      width:auto;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
        }

  td, th {
    border: 0.05rem solid ${(props) => props.theme.primaryLightColor};
    text-align: left;
    padding: 0.5rem;
        }
      .linkscol{
        text-align: center;
        width:8%;
      }
  tbody:nth-child(even) {
    background-color: ${(props) => props.theme.secondaryLightColorTwo};
        }

  .codes{
    width:75%
    margin-top:-2rem;
  }

    .community-home-container{
        padding: 1rem 0;
        padding-bottom: 4rem;
        display: flex;
        flex-wrap : wrap;
        align-items : center;
        justify-content: center;
    }

    h2, h3, h4{
      padding-bottom: 10px;
    }
    input[type=checkbox] + label {
      display: block;
      margin: 0.2em;
      cursor: pointer;
      padding: 0.2em;
    }

    input[type=checkbox] {
      display: none;
    }

    input[type=checkbox] + label:before {
      content: url('data:image/svg+xml; utf8, <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="white" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>');;
      border: 0.1em solid #000;
      border-radius: 0.2em;
      display: inline-block;
      width: 1.3em;
      height: 1.3em;
      padding-left: 0.2em;
      padding-bottom: 0.3em;
      margin-right: 0.2em;
      vertical-align: bottom;
      color: transparent;
      /* transition: .2s; */
    }

    input[type=checkbox] + label:active:before {
      transform: scale(0);
    }

    input[type=checkbox]:checked + label:before {
      background-color: #00B39F;
      border-color: #00B39F;
      color: #fff;
    }

    input[type=checkbox]:disabled + label:before {
      transform: scale(1);
      border-color: #aaa;
    }

    input[type=checkbox]:checked:disabled + label:before {
      transform: scale(1);
      background-color: #bfb;
      border-color: #bfb;
    }

    @media only screen and (max-width: 750px){
      .page-section{
        margin-top: -2rem;
        margin-left: 0;
        padding: 1rem 2.5rem;
      }
      .codes{
      width:100%
      margin-top:-2rem;
    }
    }

    @media only screen and (max-width: 475px){
        .page-header-section h1{
            padding: 0 1rem;
            line-height: 3rem;
            padding-top: 4rem;
        }
        .page-section{
          margin-top: -2rem;
          margin-left: 0rem;
        }
        table{
          margin-left: -1.5rem;
        }
        .frontendTable{
          margin-left: -2.8rem;
        }
    }
  .channels-list {
    padding-left: 40px;
  }
  .channels-img {
    width: 30px;
    height: 30px;
  }
  .channels-para {
    display: flex;
    align-items: flex-end;
  }
`;
