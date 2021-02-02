import styled from "styled-components";

const CloudNativeWrapper = styled.div`
    background-color:${props => props.theme.black};
    padding:2rem;
    color:white;
    margin-top:3rem;
    
    clip-path: polygon(0% 18%,100% 0%,100% 100%,0% 100%);

    .cloud-cont{
        margin:6rem 6rem 0rem 6rem;
        padding:4rem 4rem 0rem 4rem;
        display:flex;
    }
    .cloud-cont div h4,h1{
        color:white;
    }
    .col-1,.col-2{
        padding:2rem;
        width:100%;
        
    }
    .col-2 p{
        width:85%;
        font-size:1.3rem;
    }
    .col-2 img{
        width:18rem;
        margin:2rem 0px;
        fill:white;
    }
    .btn-cont{
        text-align:center;
        padding:2rem 0rem;
    }
    .btn-cont button{
        color:white;
    }
    .btn-cont button:hover{
        color:black;
        box-shadow:0 2px 10px rgba(0,0,0,0.4);
    }
    
    @media only screen and (max-width:1220px)
    {
        .cloud-cont{
            display:flex;
            margin:5rem 4rem 2rem 4rem;
            padding:0rem;
        }
        .col-1,.col-2{
            padding:1rem;
        }
        .col-2 p{
            width:100%;
            font-size:1.2rem;
        }  
        .col-1 h1,h4{
            padding-top:1rem 1rem 0rem 1rem; 
            
        } 
    }
    @media only screen and (max-width:900px)
    {
        .cloud-cont{
            display:unset;
            margin:5rem 5rem 2rem 5rem;
            padding:0rem;
            
        }
        .col-1,.col-2{
            margin:2rem 0rem;
            padding:2rem;
            text-align:center;
        }
        .col-2 p{
            font-size:1.2rem;
        }
        .btn-cont{
            padding:0rem;
            padding-bottom:2rem;
        }
    }
    @media only screen and (max-width:500px)
    {
        .col-2{
            padding:0rem;
        }
    }
`;

export default CloudNativeWrapper;