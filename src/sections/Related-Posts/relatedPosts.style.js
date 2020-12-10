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
        @media screen and (max-width: 992px) {
            .allBlogsCard a {
              margin-top: 60%;
            }
        }          
        

        .slick-list{	
            margin: 25px;	
        }
        @media screen and (max-width: 992px) {
            .slick-list{
                margin: 0px;	
            }
        }
        .cardCol{
            padding-left: 2px;
            padding-right: 2px;
            margin-left: 15px;
            margin-right: 15px;
        }
        @media screen and (max-width: 992px) {
            .cardCol{
                padding: 0;
                margin: auto;   
            }
        }
            
        @media screen and (max-width: 992px) {
            .slick-list{
                margin: 0px;	
            }
        }
    

        .slick-arrow{	
            margin-top: -55px;	
            width: 50px;	
            height: 50px;	
            line-height: 50px;	
            outline: none;	
        }	
        .slick-arrow:before{	
            color: rgba(108, 118, 123, 1);
            font-size: 90px;
            margin: auto;	
        }	
        .slick-prev:before{	
            content: "‹";	
        }	
        .slick-next:before{	
            content: "›";	
        }	
        .slick-arrow:hover:before{	
            color: rgba(0,179,159,1);	
        }	
        .slick-disabled{	
            visibility: hidden;
        }	
        .slick-dots li button:before {
            opacity: 0.5;
            font-size: 10px;
            color: rgba(0,179,159,1);
        }
        .slick-dots li.slick-active button:before {
            opacity: 1;
            color: rgba(0, 153, 136,1);
        }



`;


export default RelatedPostsWrapper;
