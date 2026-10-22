import styled from "styled-components";

const EngineerWrapper = styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:center;
    padding:40px;
    .head-cont{
        margin:20px;
        width:100%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
    h5{
        margin:15px;
    }
    div button{
        background-color:${props => props.theme.highlightColor};
        color:white;
        margin:15px;
    }
    @media only screen and (max-width:1050px) and (min-width:992px)
    {
        .head-cont h1{
            font-size:2.9rem;
            
        }
        
    }
    @media only screen and (max-width:800px){
        .head-cont{
            
            justify-content:center;
            align-items:center;
            .resp{
                display:flex;
                flex-direction:column;
                justify-content:center;
                align-items:center;
            }
        }
    }
    @media only screen and (max-width:600px){    
        .head-cont h1{
            font-size:1.9rem;
        }
    }
    @media only screen and (max-width:400px){
        .head-cont{
            
            justify-content:unset;
            align-items:unset;
        
            .resp{
                display:flex;
                flex-direction:column;
                justify-content:unset;
                align-items:unset;
            }
        }
        .head-cont h1{
            font-size:1.6rem;
        }
    }

`;

export default EngineerWrapper;