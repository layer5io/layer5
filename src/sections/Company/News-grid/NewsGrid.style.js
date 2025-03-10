import styled from "styled-components";
export const NewsPageWrapper = styled.div`

    .news-grid-wrapper{
        margin-bottom: 5rem;
    }
    .page-header{
        margin: 1rem auto 5rem;
    }

    .button-container{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        justify-content: start;
        @media only screen and (max-width:990px) {
            justify-content: center;
            margin-bottom: 3rem;
        }
    }
    .press-release-button{
        background : ${props => props.theme.shadowDarkColor};
        border-radius: 5px;
        color: ${props => props.theme.text};
        &:hover {
            box-shadow: 0 2px 10px ${props => props.theme.green00B39FToBlackFive};
        }
    }   
    .coverage-button {
        background : ${props => props.theme.shadowDarkColor};
        margin-right: 2rem;
        border-radius: 5px;
        color: ${props => props.theme.text};
        &:hover {
            box-shadow: 0 2px 10px ${props => props.theme.green00B39FToBlackFour};
        }
    }
    .coverage-button, .press-release-button {
        @media only screen and (max-width:990px) {
            margin: 0.5rem;
        }    
    }

    .filter-buttons {
        display: flex;
        margin-bottom: 3rem;
        @media only screen and (max-width:990px) {
            display:block;
        }
    }
    .search-box-container {
        width: 35%;
    }
    .post-thumb-block{
        overflow: hidden;
        height: 11.5rem;
        border-top-right-radius: 0.5rem;
        border-top-left-radius: 0.5rem;

        .gatsby-image-wrapper{
            height: 100%;
            width: 80%;
            margin: auto;
            transition: all 0.3s ease-in;
        }
        .old-gatsby-image-wrapper{
            height:100%;
            width:80%;
            margin: auto;
            transition: all 0.3s ease-in;
        }
         img{
            padding: 4px;
            width: 100%;
            height: 100%;
        }
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
        .searchBox {
            @media only screen and (max-width:990px){
                width:100%;
            }
        }
        
    }

`;
