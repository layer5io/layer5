import styled from "styled-components";
export const NewsPageWrapper = styled.div`

    .news-grid-wrapper{
        margin-bottom: 5rem;
    }
    .page-header{
        margin:5rem auto;
        margin-top: 1rem;
    }

    .button-container{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        justify-content: start;
        margin-bottom: 3rem;
        @media only screen and (max-width:990px){
                
            justify-content: center;
        
    }
    }
    .press-release-button{
        margin: 0.5rem;
        background : rgb(240, 240, 240);
        border-radius: 5px;
        color: black;
        &:hover{
        box-shadow: 0 2px 10px ${props => props.theme.DarkTheme ? "rgba(0, 179, 159, 1.0)" : "rgba(0, 0, 0, 0.5)"};
        }
    }   
    .coverage-button {
        margin: 0.5rem;
        background : rgb(240, 240, 240);
        border-radius: 5px;
        color: black;
        &:hover{
            box-shadow: 0 2px 10px ${props => props.theme.DarkTheme ? "rgba(0, 179, 159, 1.0)" : "rgba(0, 0, 0, 0.4)"};
            }
    }
    
    .filter-buttons {
        display: flex;
        @media only screen and (max-width:990px){
            display:block;
        
    }
    }
    .search-box-container {
        width: 35%;
    }
    
    .post-content-block {
        height: 10rem;
    }

    .mystyle {
      background : rgb(30, 33, 23);
      color : white;
    }

    .search{
        display:flex;
        justify-content:flex-end;
        width:100%;
        
        margin-bottom: 0.8rem;
        .searchBox{
            @media only screen and (max-width:990px){
                
                    width:100%;
                    margin-bottom: 1.8rem;
                
            }
        }
        
    }
    .search-box {
        margin: auto;
    }

`;
