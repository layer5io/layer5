import styled from "styled-components";

const CareersSectionWrapper = styled.div`
    .careers-section-wrapper{
        padding: 50px 0;
    }
    
    .programs-section{
        margin-top: -100px;
    }
    .flex-div{
        flex-grow: 0.25;
    }
    .card-content{
        position: relative;
        float: right;
    }
    .card-content1{
        position: relative;
        float: center;
        vertical-align: bottom;
    }
    h3{
        text-align: center;
        color: black;
    }
    .participate{
        font-size: 21px;
        padding-bottom: 40px;
        padding-top: 10px;
        width: 300px;
    }
    
    padding: 140px 0 60px 0;
    position: relative;
    
    @media (max-width:400px){
        .card-content{
            position:relative;
            float:none;
            margin-left: 0px;
             overflow: hidden;
        }
        .card-content iframe{
           border: 0;
           height: 100%;
           width: 100%;
           left:0;
           top:0;
        }}
    padding: 95px 0 50px 0;
    
    .fetures-icon-block{
        height: 170px;
        width: 170px;
        display: flex;
        display: block;
        margin: 0 auto;
        align-items: center;
        margin-bottom: 25px;
        position: relative;
    
        img{
            display: block;
            margin: 0 auto;
        }  
    }
    .fetures-block{
        h3{
            font-size: 22px; 
            margin-bottom: 15px;
            font-weight: 600;
            line-height: 30px;
        }
        p{
            margin: 0 0 50px 0;
            font-weight: 300;
        }
    }
    @media only screen and (max-width: 912px) {
        padding: 80px 0 0px 0;
    }
    @media only screen and (max-width: 760px) {
        padding: 80px 0 50px 0;
    }
    @media only screen and (max-width: 568px) {
        .fetures-block{
            text-align: center;
        }
        .fetures-icon-block{
            margin: 0 auto 25px auto;
        }
    }
    img{
        display: block;
        margin: 0 auto;
    }
    .grid{
        margin-top: 2px;
    }
    .project__block__inner { 
        box-shadow: 0px 0px 30px ${props => props.theme.shadowLightColor};
        padding-top: 4%;
        padding-right: 4%;
        padding-left: 4%;
        margin: 15px;
        min-height: 410px;
        border-radius: 4%;
        position: relative;
        h3{
            margin-bottom: 20px; 
            font-weight: 400;
        }
        p{
            font-size: 16px;
            font-weight: 400
        }
        a{
            position: absolute;
            right: 15%;
            bottom: 16%;
            width: 30px;
            transition: all 0.8s cubic-bezier(0.3,0.8,0.2,1) 0s;
            img{
                margin: 0;
                width: 30px;
                height: auto;
            }
        }
    .project__block__inner { 
        box-shadow: 0px 0px 30px ${props => props.theme.shadowLightColor};
        padding: 4%;
        margin: 15px;
        min-height: 450px;
        border-radius: 4%;
        position: relative;
    h3{
        margin-bottom: 20px; 
        font-weight: 400;
    }
    p{
        font-size: 16px;
        font-weight: 400
    }
    a{
        position: absolute;
        right: 15%;
        bottom: 16%;
        width: 30px;
        transition: all 0.8s cubic-bezier(0.3,0.8,0.2,1) 0s;
        img{
            margin: 0;
            width: 30px;
            height: auto;
        }
    }

`;

export default CareersSectionWrapper;
