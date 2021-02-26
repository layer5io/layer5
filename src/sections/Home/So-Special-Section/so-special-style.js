import styled from "styled-components";

const SoSpecialWrapper = styled.div`    
    display:flex;
    flex-direction:column;
    justify-content: space-around;
    align-items:center;
    padding:0rem 3rem 2rem 3rem;
    .slick-list .slick-track{
        width:5000px;
    }
    @media only screen and (max-width:450px){
        padding:1rem;
    }
    .special_carousel{
        width:65%;
        display:flex;
        flex-direction:column;
        margin-bottom: 3rem;
    }
    
    .slick-arrow::before{
        color:black;
        font-size:22px;
    }
    .slick-slider{
        .slick-inside-div{
            width:100%;
        }
    }
    .slick-slide{
        height:30rem;
        margin:1rem 0rem;
        div{
            height:100%;
        }    
    }
    .so-special-head{
        padding:2rem;
        text-align:center; 
        h4{
            color:#b3b3b3;
            padding:2rem 0rem;
        }
    }
    #special-cont{
        cursor: pointer;
        transition: all 0.5s ease-in-out;   
        text-align:center;
        width:100%;
        border-radius:1rem;
        box-shadow:0 2px 10px rgba(0,0,0,0.4);
    }
    #special-cont_img{
            height:70%;
            width:100%;
            display:flex;  
            justify-content:center;
            align-items:center;
            overflow:hidden;
            img{
                width:100%;
                height:100%;
                border:none;
                border-top-left-radius:1rem;
                border-top-right-radius:1rem;
            }
        }
    .slick-dots{
        display:none;
    }
    #special-cont_content{
        padding-top:1rem;
        text-align: center;
        postion:absolute;
        bottom:0;
        height:30%;
        .special-cont_para{
            font-weight:bold;
            font-size:1rem;
            margin:0rem;
            padding:1rem;
        }
    }
    .special-cont_btn{
        background-color:white;
        color:black;
        height:100%;
        outline:none;
        border:none;   
    }
    .special-cont_btn:hover{
        background-color:white;
        color:black;
    }
    .so-special-foot{
        text-align:center;
        .so-special-foot-btn
        {
            color:white;
            margin:2rem;
            :hover{
                color:black;
            }
        }
    }
    @media screen and (max-width: 1400px){
        .special_carousel{
            width:75%;
        }
    }
    @media screen and (min-width: 1199px){
        .special-cont_img{
            height:20rem;
            width:100%;
        }
    }
    @media screen and (max-width: 1199px){
        .special-cont_img{
            height:20rem;
            width:100%;
        }
    }
    @media screen and (max-width: 1024px){
        .special_carousel{
            margin-bottom: 3rem;
            width:80%;
        }
        .special-cont_img{
            width: 100%;
            max-height: 75%;
        }
        .special-cont_para{
            padding:1rem ;
        }
    }

    @media screen and (max-width: 850px){
        .special_carousel{
            margin-bottom: 3rem;
            width:100%;
        }
        .special-cont_img{
            width: 22rem;
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
            padding:1rem 0rem;
            word-wrap:break-word;
        }
    }
    @media screen and (max-width: 671px){
        .special-cont_img{
            width: 100%;
            max-height: 20rem;
        }
        .special-cont_content{
            padding:0rem;
        }
    }
    @media screen and (max-width: 500px){
        #special-cont_img{
            width: 100%;
            height: 65%;
        }
        .so-special-head{
            padding: 0.5rem 0rem;
        }   
    }
    @media screen and (max-width: 300px){
        .slick-slide{
            height:25rem;
            margin:0rem;
        }
        #special-cont_img{
            height: 60%;
        }
        #special-cont_content{
            .special-cont_para
            {
                padding:0rem;
            }
        }
    }
`;
export default SoSpecialWrapper;