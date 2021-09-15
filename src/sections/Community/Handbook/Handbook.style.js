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
