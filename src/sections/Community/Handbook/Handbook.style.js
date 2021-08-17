import styled from "styled-components";
export const HandbookWrapper = styled.div`


  .sidebar {
  margin: 0;
  padding: 0;
  width: 250px;
  background-color: #f1f1f1;
  position: absolute;
  height: 150rem;
  overflow: auto;
  flex-wrap: wrap;
justify-content: center;
align-items: center;

}

.content{
  width:100%;
ul > li {
    color:#00d3a9;
  }
ol > li {
    color:#00d3a9;
  }
ul > li > span {
    color: black;
  }
ol > li > span {
  color: black;
}  

}

.page-section{
  margin-top: -30rem;
  margin-left: 20rem;

}

.sidebar a {
  display: block;
  color: black;
  padding: 16px;
  text-decoration: none;
}
 
.sidebar a.active {
  background-color: #00d3a9;
  color: white;
}

.sidebar a:hover:not(.active) {
  background-color: #929496;
  color: white;
}


    .page-header-section {
        height: 15rem;
        text-align: center;
        background: rgb(71,126,150);
        background: linear-gradient(250deg, rgba(71,126,150,1) 0%, rgba(0,179,159,1) 35%, rgba(60,73,79,1) 100%);
        h1 {
            line-height: 15rem;
            color: white;
        }
    }
    .sub-heading{
        padding: -3rem 20rem;
    }

    .content{
      
    }
    .explain-1 {
        padding-top: 1rem;
        text-align: center;
        p { 
            text-align: center;
            color: ${props => props.theme.black};
        }
        h2 {
            color: ${props => props.theme.black};  
        }
        .cards {
            margin: 0.15rem 0;
            width: 100%;
            padding: 1rem 20rem 3rem 20rem;
            background-color: ${props => props.theme.white};
            border-radius: 10px;
            .card {
                box-shadow:
                0 2.8px 2.2px rgba(0, 0, 0, 0.034),
                0 6.7px 5.3px rgba(0, 0, 0, 0.048),
                0 12.5px 10px rgba(0, 0, 0, 0.05),
                0 10.3px 17.9px rgba(0, 0, 0, 0.052),
                0 3.125rem 80px rgba(0, 0, 0, 0.12)
                ;
                padding: 0.75rem;
                background-color: white; 
                border-radius: 10px;
                p {
                    text-align: left;
                    padding: 5px 0px 0px 0px;
                    letter-spacing: 0;
                    font-size: 20px;
                }
                }
            }
        }
    }

`;
