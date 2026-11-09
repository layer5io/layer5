import styled from "styled-components";
import background from "./background.svg";

const CloudNativeWrapper = styled.div`
     background: url(${background}) no-repeat;
    -webkit-background-size: 100%;
    -moz-background-size: 100%;
    -o-background-size: cover;
    background-size: cover;
    background-position: right;
     
    padding: 1rem 0rem 2rem 0rem;
    color:white;
    margin: -2rem 0 0rem 0rem;
    position: relative;
    z-index: 1;
    
    
    .cloud-cont{
        margin:6rem 6rem 0rem 6rem;
        padding:2rem 4rem 0rem 2rem;
        display:flex;   

    }
    .cloud-cont div h4,h1{
        color:white;
    }
    .col-1,.col-2{
        padding:rem;
        width:100%;
        
    }
    .col-1 p{
        font-size: 1.5rem;
        font-weight: 400;
        margin: 0px 0px 0.5rem;
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
        display:flex;      
        padding:2rem 0rem;
        justify-content:flex-end;
      
        margin-bottom: 4rem;
        margin: auto;
        width: 30%;
        text-align:center;
        align-self: center;

    }
    .btn-cont button{
        color:black;
    }
    .btn-cont button:hover{
        color:white;
        box-shadow: rgb(255 255 255 / 40%) 0px 2px 10px;
    }
    
    @media only screen and (max-width:1220px)
    {
        .cloud-cont{
            margin:6rem 6rem 0em 6rem;

        }
        .col-1,.col-2{
            padding:1rem;
        }
        .col-2 p{
            width:100%;
            font-size:1.2rem;
            padding-bottom: 0rem;
            
        }  

        .col-1 h1,h4{
            padding-top:1rem; 
            
        } 
        .btn-cont{
            margin-top: 1rem;
            margin-bottom: 3rem;
            padding-top: 0rem;
            width: 50%;
        }
    }
    @media only screen and (max-width:900px)
    {
        .cloud-cont{
            display:unset;
            margin:5rem 5rem 5rem 5rem;
        }
        .col-1 {
            margin:1rem 0rem;
            padding:2rem;
            text-align:center;
        }
        .col-2  {
            text-align:center;
            padding-left:2rem;
            padding-right:2rem;
        }
        .col-2 p{
            font-size:1.2rem;
            text-align:center;
        }
        .btn-cont{
            margin: 0 auto;
            padding: 0rem 0 6rem;
            width: 20rem;
            justify-content: center;
        }
    }
`;

export default CloudNativeWrapper;