import styled from "styled-components";

const CareersSectionWrapper = styled.div`
    .careers-section-wrapper{
        padding: 50px 0;
    }
    
    .programs-section{
        margin-top: -100px;
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
    
    .apply-button{
        position: relative;
        text-align: center;
        vertical-align: bottom;
    }
    
    .opportunity { 
        box-shadow: 0px 0px 30px ${props => props.theme.shadowLightColor};
        padding-top: 4%;
        padding-right: 4%;
        padding-left: 4%;
        margin: 15px;
        min-height: 410px;
        border-radius: 4%;
        position: relative;
        text-align: center;
        h3{
            font-size: 22px;
            color: black;
            margin-bottom: 20px; 
            font-weight: 400;
        }
        p{
            font-size: 16px;
            font-weight: 400
        }
    
    .opportunity_icon{
        position: relative;
        height: 170px;
        width: 170px;
        display: block;
        margin: 0 auto 25px auto;
        align-items: center;
    
        img{
            display: block;
            position: absolute;
            top: 0;
            bottom: 0;
            margin: auto;
        }  
    }
    
`;

export default CareersSectionWrapper;
