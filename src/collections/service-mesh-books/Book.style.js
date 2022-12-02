import styled from "styled-components";

export const BookWrapper = styled.div`

    .book{
        float:right;
        padding:20px;
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
    div.center {
        text-align:center;
        margin: 1rem 0rem;
    }
    .card{
        position: relative;
        margin: 0.5rem 0 1rem 0;
        background-color: #fff;
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
