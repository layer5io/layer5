import styled from "styled-components";
import background from "./background.svg";

const CloudNativeWrapper = styled.div`
     background: url(${background}) no-repeat;
    -webkit-background-size: 100%;
    -moz-background-size: 100%;
    -o-background-size: cover;
    background-size: cover;
    background-position: right;
     
    padding: 2rem 0rem 2rem 0rem;
    color:white;
    margin-top:5rem;
    margin-bottom: -9rem;
    margin-left: 0rem;
    margin-right: 0rem;
    

    
    /* width:0; 
    height: 0; 
  border-top: 10px solid transparent;
  border-bottom: 10vh solid transparent; 
  
  border-right:100vw solid blue;  */
    
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
        display:flex;      
        padding:2rem 0rem;
        justify-content:flex-end;
        flex-direction: 
        margin-bottom: 4rem;
        margin: auto;
        width: 60%;
        text-align:center;
        align-self: center;

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
        margin-top: 15rem;
        margin-bottom: -10rem;
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
            padding-bottom: 0rem;
        }  
        .col-1 h1,h4{
            padding-top:1rem 1rem 0rem 1rem; 
            
        } 
        .btn-cont{
            margin-top: -1rem;
            padding-top: 0rem;
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
            padding:0rem;
            text-align:center;
        }
        .col-2 p{
            font-size:1.2rem;
        }
        .btn-cont{
            margin-top: 0rem;
            margin-bottom:0rem;
            padding-top: 0rem;
            padding-bottom:5rem;
            width:20vw;
        }
    }
`;

export default CloudNativeWrapper;