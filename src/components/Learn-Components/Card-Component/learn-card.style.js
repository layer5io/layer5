import styled from "styled-components";

const CardWrapper = styled.div`
    max-width: 23.5rem;
    min-height: 16rem;
    margin: auto;
    border-radius: 1rem;

    .card-link{
        color: black;
    }

    .card-parent{
        background: rgba(255, 255, 255);
        border-top: 5px solid rgb(117, 232, 168);
        border-radius: 0.25rem;
        min-height: 16rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-shadow: 0px 0.75rem 1rem 0.25rem rgb(0 0 0 / 12%);
        position: relative;
    }

    .card-head{
        display: flex;
        padding: 1rem;
        span{
            border: 1px solid rgb(60 73 79);
            color: black;
            border-radius: 0.8rem;
            padding: 0.05rem 0.75rem;
            font-size: 1rem;
        }
    }

    .card-desc{
        padding: 0 1rem;
        .summary {
            color: rgba(0, 0, 0, 0.75);
        }
        p{
            font-size: 1rem;
        }
    }

    .card-subdata {
        padding: 0 1rem;
        position: absolute;
        bottom: 0rem;
        p{
            font-size: 1rem;
            font-weight: 600;
        }
    }

    .card-image{
        text-align: center;
        position: absolute;
        bottom: 0.1rem;
        right: 0.75rem;
        opacity: 0.2;
        
        img{
            height: 8.5rem;
            width: 8.5rem;
        }
    }

    @media(max-width: 1300px){
        margin: 1rem auto;
    }
`;

export default CardWrapper;