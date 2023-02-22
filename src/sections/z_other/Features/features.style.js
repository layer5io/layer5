import styled from "styled-components";

import Bg1 from "../../assets/images/app/features/bg-1.png";
import Bg2 from "../../assets/images/app/features/bg-2.png";

import Vintage1 from "../../assets/images/app/features/vintage-1.png";
import MeshSyncLogo from "./img/meshsync.svg";



const FeturesSectionWrapper = styled.section`
   padding: 95px 0 50px 0;
  
    .section-title{
        h4{
            text-transform: uppercase;
                color: ${props => props.theme.primaryLightColor};
            }
    }

   .features-icon-block{
        height: 70px;
        width: 70px;
        display: flex;
        align-items: center;
        margin-bottom: 25px;
        position: relative;

        img{
            display: block;
            margin: 0 auto;
        }
        
   }
    .features-block{
        
        .features-icon-block{
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
            .features-icon-block{
                &:before{
                    opacity: .3;
                    right: -10px;
                }
            }
        }
        &.v1{
            .features-icon-block{
               // background: url(${Bg1}) no-repeat;
                background-size: contain;
                &:before{
                    background: url(${Vintage1});
                }
            }
        }
        &.v2{
            .features-icon-block{
               // background: url(${Bg2}) no-repeat;
                background-size: contain;
                &:before{
                    background: url(${MeshSyncLogo});
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
        .features-block{
            text-align: center;
        }
        .features-icon-block{
            margin: 0 auto 25px auto;
        }
    }
    
`;

export default FeturesSectionWrapper;
