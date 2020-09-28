import styled from "styled-components";

export const ProgramsWrapper = styled.div`
    img{
        width: 19vw;
        float: right;
        margin-left: 20px;
    }
    
    .flex-div{
        flex-grow: 0.25;
    }
    
    .iframe-container {
        position: relative;
        float: right;
        
        @media only screen and (max-width:572px){
            float:none;
            margin-left: 0px;
            overflow: hidden;
             
             iframe{
               border: 0;
               height: 100%;
               width: 100%;
               left:0;
               top:0;
            }
        } 
    }
    
    .apply-button{
        position: relative;
        text-align: center;
        vertical-align: bottom;
    }
    
    
`;
