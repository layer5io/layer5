import styled from "styled-components";

export const BookWrapper = styled.div`

    .book,.book-1,.book-2{
        text-align:center;
        @media only screen and (max-width: 568px){
             float: inherit;
        }

        .two-buttons{
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
        }

    }
    .book{
        float:right;
    }
    .book-1,.book-2{
        display:flex;
        justify-content:center;
        align-items:center;
        @media only screen and (max-width: 568px){
             display:block;
        }
    }
    div.center {
        text-align:center;
        margin: 1rem 0rem;
    }
    .card{
        position: relative;
        margin: 0.5rem 0 1rem 0;
        -webkit-transition: -webkit-box-shadow .25s;
        transition: -webkit-box-shadow .25s;
        transition: box-shadow .25s;
        transition: box-shadow .25s, -webkit-box-shadow .25s;
        border-radius: 2px;
    }

    .mr-l-25{
        margin-left:25px;
    }

    .mr-l-15{
        margin-left:15px;
    }

    .pa-8{
        padding:8px;
    }

    .mr-2{
        margin: 2px;
    }

`;
