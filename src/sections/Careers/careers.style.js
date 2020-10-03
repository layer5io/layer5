import styled from "styled-components";

const CareersSectionWrapper = styled.div`
    .careers-section-wrapper{
        padding: 50px 0;
    }
    
    .programs-section{
        margin-top: -100px;
    }
    
    .opportunity-section {
        margin-top: -50px; 
    }
    
    .grid{
        margin-top: 2px;
    }
    
    .card-content{
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
    
    
    
`;

export default CareersSectionWrapper;
