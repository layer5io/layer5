import styled from "styled-components";

const EngineerWrapper = styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:center;
    padding:40px;
    .head-cont{
        margin:20px;
        width:80%;
        display:flex;
    }
    h5{
        margin:15px;
    }
    div button{
        background-color:${props => props.theme.highlightColor};
        color:white;
        margin:15px;
    }
    @media only screen and (max-width:1500px){
        .head-cont{        
            width:80%;
            
        }
    }
    @media only screen and (max-width:1200px){
        .head-cont{
        
            width:80%;
        }
    }
    @media only screen and (max-width:1000px){
        .head-cont{
            
            width:100%;
        }
    }
`;

export default EngineerWrapper;