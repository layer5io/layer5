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
    }
    .press-release-button{
        margin-left: 3rem;
        background-color: #1E2117;
        border-radius: 5px;
        color: white;
    }   
    .coverage-button {
        background-color: #1E2117;
        border-radius: 5px;
        color: white;
    }
    .filter-topic-input {
    height: 50px;
    background-image: url(https://cdn2.hubspot.net/hubfs/4004166/bioticresearch_website_assets/images/search_icon.png);
    background-repeat: no-repeat;
    background-position: right center;
    padding-left: 19px;
    background-color: #fff;
    border: 1px solid #000;
    box-shadow: none;
    -webkit-appearance: none;
        margin-left: 40%;
        border-radius: 10px;
        width: 30%;
        font-size: 20px;
    }
`;
