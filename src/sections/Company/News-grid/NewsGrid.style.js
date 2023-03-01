import styled from "styled-components";
export const NewsPageWrapper = styled.div`

    .news-grid-wrapper{
        margin-bottom: 5rem;
    }
    .page-header{
        margin:5rem auto;
    }

    .button-container{
        display: flex;
        width: 100%;
        justify-content: start;
        margin-bottom: 3rem;
        flex-wrap: wrap;
        justify-content: start;
        @media only screen and (max-width:990px){
                
            justify-content: center;
        
    }
    }
    .press-release-button{
        margin-left: 1.2rem;
        background : rgb(240, 240, 240);
        border-radius: 5px;
        color: black;
        &:hover{
        box-shadow: 0 2px 10px ${props => props.theme.DarkTheme ? "rgba(0, 179, 159, 1.0)" : "rgba(0, 0, 0, 0.5)"};
        }
    }   
    .coverage-button {
        background : rgb(240, 240, 240);
        border-radius: 5px;
        color: black;
        &:hover{
            box-shadow: 0 2px 10px ${props => props.theme.DarkTheme ? "rgba(0, 179, 159, 1.0)" : "rgba(0, 0, 0, 0.4)"};
            }
    }
    @media only screen and (max-width:450px) and (min-width: 0px){ 
        .coverage-button,  .press-release-button {
            margin: 1rem 0;
            }  
        } 
        
        @media only screen and (max-width:990px){
           .coverage-button, .press-release-button{
                margin: 1rem calc(3% / 2);
           } 
        }
    
    .filter-buttons {
        display: flex;
        @media only screen and (max-width:990px){
            display:block;
        
    }
    }
    .search-box-container {
        width: 0 calc(3% / 2);
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
            flex:0 0 50%;
            @media only screen and (max-width:990px){
                
                    flex:0 0 100%;
                    max-width:100%;
                    margin-bottom: 1.8rem;
                    justify-content: center;
                
            }
        }
        
    }

`;
