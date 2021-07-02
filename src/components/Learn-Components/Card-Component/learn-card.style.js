import styled from "styled-components";

const CardWrapper = styled.div`
    max-width:375px;
    min-height: 335px;
    margin: auto;
    border-radius: 1rem;

    .card-link{
        color: black;
    }

    .card-parent{
        border-radius: 2rem;
        min-height:22.3rem;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
    }

    .card-head{
        display: flex;
        padding: 1rem;
        span{
            background-color: white;
            border-radius : 1rem;
            padding: 0 0.6rem;
            font-size:0.8rem;
        }
    }

    .card-desc{
        padding: 0 1rem;
        p{
            font-size: 1rem;
        }
    
    }
    .card-image{
        text-align: center;
        
        img{
            height: 100px;
            width: auto;
            padding: 1rem;
        }
    }

    @media(max-width: 1300px){
        margin: 1rem auto;
    }
`;

export default CardWrapper;