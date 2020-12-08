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
        

        .slick-arrow{	
            transition: all 0.3s ease;	
            background-color: rgba(103,58,183,0.1);	
            color: #999;	
            box-shadow: 0 0 2px 0px #333;	
            border-radius: 50%;	
            border: none;	
            width: 50px;	
            height: 50px;	
            line-height: 50px;	
            outline: none;	
        }	
        .slick-arrow:hover {	
            background-color: rgba(0,179,159,1);	
        }	
        .slick-arrow:focus:enabled {	
            color: #fff;	
            background-color: rgba(0, 179, 159, 1);	
            box-shadow: 0 0 2px 0 #333;	
        }	
        .slick-disabled{	
            visibility: hidden;	
        }	
        .slick-arrow:before{	
            color: black;	
            font-size: 43px;	
            margin: auto;	
            color: #000;	
        }	
        .slick-arrow:focus:before{	
            color: white;	
        }	
        .slick-prev:before{	
            content: "❮";	
        }	
        .slick-next:before{	
            content: "❯";	
        }	
        .slick-list{	
            margin: 25px;	
        }



        .swiper-button-prev, .swiper-button-next{
            right: -3px;
        }
        .swiper-wrapper{
            margin-left: 27px;
            margin-right: 27px;
        }

        .cardCol{
            padding-left: 2px;
            padding-right: 2px;
            margin-left: 15px;
            margin-right: 15px;
        }

`;


export default RelatedPostsWrapper;
