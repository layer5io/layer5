import styled from "styled-components";

import Bg1 from "../../assets/images/app/features/bg-1.png";
import Bg2 from "../../assets/images/app/features/bg-2.png";

import Vintage1 from "../../assets/images/app/features/vintage-1.png";
import Vintage2 from "../../assets/images/app/features/vintage-2.png";

const CareersSectionWrapper = styled.div`
.project{
    box-shadow: 0px 0px 30px ${props => props.theme.shadowLightColor};
    min-height: 280px;
    padding: 5px;
    transition: 0.2s ease;
}
.project:hover{
    transform: scale(1.1);
    transition: 0.2s ease;
}
.blue{
    color: rgb(29, 49, 108);
}
element.style {
    font-size: 0.7em;
    padding-bottom: 40px;
    padding-top: 10px;
    width: 300px;
}
a {
    text-decoration: none;
}
.post-title{
    text-align: center;
    color: #1D316C;
    font-size: 2rem;
    margin: 1.46rem 0 1.168rem 0;
    line-height: normal
}
.banner-btn.one{
    background: #EBC017;
    color: #fff;
    &:hover{
        background: #EAD07D;
        color: #333;
    }
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
    color: aliceblue;
}
.participate{
    font-size: 21px;
    padding-bottom: 40px;
    padding-top: 10px;
    width: 300px;
}
.link{
    color: white;
}
padding: 140px 0 60px 0;
position: relative;
.CTA-content{
    h2{
        font-size: 40px;
        line-height: 56px;
        font-weight: 600;
        margin-bottom: 30px;
    }
    p{
        font-weight: 300;
        margin-bottom: 45px;
    }
} 
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
         
         .fetures-icon-block{
             &:before{
                 position: absolute;
                 display: inline-block;
                 top: -3px;
                 right: 0px;
                 height: 70px;
                 width: 70px;
                 content: '';
                 border-radius: 50%;
                 z-index: -1;
                 opacity: 0;
                 transition: all 0.3s linear;
             }
         } 
         &:hover{
             .fetures-icon-block{
                 &:before{
                     opacity: 1;
                     right: -10px;
                 }
             }
         }
         
 
         
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
        margin-top: 30px;
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