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

    .tutorials-table {
        border-spacing: 0;
        th {
            padding: 14px 0 14px 12px;
            border-top: 1px solid #e3e3e3;
            border-bottom: 1px solid #e3e3e3;
        }
        td {
            padding: 14px 0 14px 12px;
            border-bottom: 1px solid #e3e3e3;
        }
        tbody tr {
            transition: .2s ease;
            :hover {
                background-color: #f5f5f5;
            }
            
        }
    }

    

    
    
    
`;
