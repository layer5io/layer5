import styled from "styled-components";


const RelatedPostsWrapper = styled.div`
        .widgets-title{
            margin-bottom: 20px;
            margin-left: 5px;
            h3{
                display: inline-block;
                font-size: 25px;
                font-weight: 500;
                line-height: 30px;
                position: relative;
                &:before{
                    position: absolute;
                    top: 50%;
                    right: -80px;
                    content: '';
                    width: 70px;
                    height: 1px; 
                }
            }
            
        }
        .allBlogsCard{
            height:100%;      
            a{
                justify-content: center;
                margin-top: 48%;
                font: 400 25px "Open Sans", sans-serif;
                color: rgb(0,0,0);
                display: flex;
                align-items: center;
                transition: all 0.3s linear;
                svg{
                    margin-left: 0px;
                    font-size: 35px;
                    transition: all 0.3s linear;
                }
                &:hover{
                    color: #00D5A7;
                    svg{
                        margin-left: 3px;
                            transform: scale(1.2);
                    }
                }
                
            }
        }
        .carouselStyling{
            .rec.rec-arrow:hover {
                background-color: rgba(0,179,159,1);
            }
            .rec.rec-arrow:focus:enabled {
                color: #fff;
                background-color: rgba(0, 179, 159, 1);
                box-shadow: 0 0 2px 0 #333;
              }
            .rec.rec-arrow:disabled {
                visibility: hidden;
            }            
            .rec.rec-dot{
                background-color: rgba(225, 247, 245, 1);
            }
            .rec.rec-dot_active {
                background-color: rgba(117, 255, 239, 1);
                box-shadow: 0 0 1px 3px rgba(0, 179, 159, 1);
            }

        }
        
`;

export default RelatedPostsWrapper;
