import styled from "styled-components";

const SoSpecialWrapper = styled.div`    
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:0rem 3rem 2rem 3rem;
    .special_carousel{
            width:65%;
        }

    .slick-arrow::before{
        color:black;
    }
    .slick-slider{
        .slick-inside-div{
            width:100%;
        }
        .slick-slide{
           max-width:25rem;
            width:25rem;
        }
    }
    .so-special-head{
        padding:4rem;
        text-align:center; .so-special-head{
        padding:4rem;
        text-align:center;
    }
    }
    .special-cont{
        cursor: pointer;
        transition: all 0.5s ease-in-out;   
        padding:0.5rem;
    }
    .special-cont_img{
            width: 100%;
            display: block;
            margin: auto;
        }
    .slick-dots{
        display:none;
    }
    
    .special-cont_para{
        padding:1rem 2rem;
        font-family:"Qanelas Soft";
        font-weight:bold;
        font-size:1rem;
        word-break:break-word;
    }
    @media screen and (max-width: 1400px){
        .special_carousel{
            margin-bottom: 6rem;
            width:75%;
        }
    }
    @media screen and (max-width: 1024px){
        .special_carousel{
            margin-bottom: 6rem;
            width:80%;
        }

        .special-cont{
            width: 18rem !important;
        }

        .special-cont_img{
                width: 18rem;
                max-height: 18rem;
        }
        .special-cont_para{
            padding:1rem ;
            
        }
    }

    @media screen and (max-width: 850px){
        .special_carousel{
            margin-bottom: 6rem;
            width:90%;
        }

        .special-cont{
            width: 17rem !important;
        }

        .special-cont_img{
                width: 17rem;
                max-height: 17rem;
        }
        .so-special-head{
           padding:1rem;
            text-align:center;  
        }
         .slick-prev{
            left:-20px;
        }
        .slick-next{
            right:-20px;
        }
        .special-cont_para{
            padding:1rem ;
            
        }
    }
    @media screen and (max-width: 665px){
        .special-cont{
            width: 22rem !important;
        }

        .special-cont_img{
                width: 22rem;
                max-height: 22rem;
        }
    }
`;
export default SoSpecialWrapper;