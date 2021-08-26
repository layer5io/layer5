import styled from "styled-components";
export const HandbookWrapper = styled.div`


.highlight{

  font-weight: 600;
}
.content{
  width:100%;
  padding-bottom: 2rem;
ul > li {
    color: ${props => props.theme.primaryLightColorTwo};
  }
ol > li {
    color: ${props => props.theme.primaryLightColorTwo};
  }
ul > li > span {
    color: ${props => props.theme.black};
  }
ol > li > span {
  color: ${props => props.theme.black};
}  

}

h2 h3{
  margin: 0.5rem 0;
  color: ${props => props.theme.tertiaryColor};
}

.page-section{
  margin-top: -29rem;
  margin-left: 20rem;

}


    .sidebar {
        margin: 0;
        padding: 0;
        width: 250px;
        background-color:${props => props.theme.secondaryLightColor};
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
        background-color: ${props => props.theme.primaryLightColorTwo};
        color: white;
    }

    .sidebar a:hover:not(.active) {
        background-color:${props => props.theme.secondaryLightColor};
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
    
    @media only screen and (max-width: 750px){
      .page-section{
        margin-top: -2rem;
        margin-left: 0;
        padding: 1rem 2.5rem;
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
    }
`;
