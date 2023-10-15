import styled from "styled-components";

const CardWrapper = styled.div`
    max-width: 28rem;
    min-height: 16rem;
    margin: auto;
    border-radius: 1rem;

    .card-active{
        cursor: pointer;
        transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0.1s;

        &:hover{
            box-shadow: rgba(0, 179, 158, 0.9) 0px 0px 19px 6px;
        }
    }

    .card-link{
        color: black;
    }

    .card-parent{
        background: ${props => props.theme.grey212121ToWhite};
        border-top: 5px solid rgb(117, 232, 168);
        border-radius: 0.25rem;
        min-height: 16rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-shadow: 0px 0.75rem 1rem 0.25rem rgb(0 0 0 / 12%);
        position: relative;
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    .card-2{
        background: ${props => props.theme.grey1D1817ToGreyE6E6E6};
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    .card-head{
        display: flex;
        padding: 1rem;
        span{
            border: 1px solid rgb(60 73 79);
            color: ${props => props.theme.text};
            border-radius: 0.8rem;
            padding: 0.05rem 0.75rem;
            font-size: 1rem;
            transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        h3{
            color:${props => props.theme.text};
            transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
    }

    .card-desc{
        padding: 0 1rem;
        .summary {
            color:${props => props.theme.whiteSevenFiveToBlackSevenFive};
            transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
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
            color:${props => props.theme.text};
            font-weight: 600;
            transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
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
    
    @media (max-width: 500px) {
        max-width: 100%;
        padding: 0 0rem;
    
        .card-head h3 {
            font-size: 1.1rem;
        }
    
        .card-desc .summary {
            font-size: 0.8rem;
        }
    
        .card-image img {
            height: 6rem;
            width: 6rem;
        }
        .card-head span {
            font-size: 0.55rem; 
            padding: 0.05rem 0.5rem; 
        }
        
        .card-subdata p {
            font-size: 0.8rem; 
            bottom: 0.5rem; 
        }
    }
   
    
`;

export default CardWrapper;