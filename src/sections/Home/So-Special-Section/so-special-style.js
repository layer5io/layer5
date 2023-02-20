import styled from "styled-components";

const SoSpecialWrapper = styled.div`    
    display:flex;
    flex-direction:column;
    justify-content: space-around;
    align-items:center;
    padding:0 3rem 2rem 3rem;
    Button:hover{
        box-shadow: none;
    }
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
    
    .slick-next{
        right: -2.5rem;
    }

    .slick-prev{
        left: -2.5rem;
    }

    @media screen and (max-width: 992px) {
        .slick-list{
            margin: 0;	
        }
    }

    .slick-arrow{
        width: 2rem;
        height: 3rem;
    }	
    .slick-arrow:before{	
        color: ${(props) => props.theme.primaryColor};
        font-size: 4.5rem;
        display: inline-block;
        height: 2rem;
    }
    .slick-disabled {
        pointer-events:none;
    }
    .slick-arrow:hover:before{	
        color: ${(props) => props.theme.secondaryColor};
    }
    .slick-slider{
        .slick-inside-div{
            width:100%;
        }
    }
    .slick-slide{
        height:30rem;
        margin:1rem 0;
        div{
            height:100%;
        }    
    }
    
    .slick-prev:before{	
        content: "‹";
        line-height: 0;	
    }
    .slick-next:before{	
        content: "›";
        line-height: 0;
        opacity: 1;
    }
    .slick-dots li button:before {
        font-size: 0.6rem;
        color: ${(props) => props.theme.secondaryColor};
    }
    .slick-dots li.slick-active button:before {
        opacity: 1;
        color: ${(props) => props.theme.secondaryColor};
    }
    }
    .so-special-head{
        padding:2rem;
        text-align:center; 
        p{
            color:#b3b3b3;
            padding:2rem 0;
            font-size: 1.5rem;
        }
    }
    #special-cont{
        cursor: pointer;
        transition: all 0.5s ease-in-out;   
        text-align:center;
        width:100%;
        border-radius:1rem;
        background-color: ${(props) => props.theme.DarkTheme ? "#212121" : "#FFFFFF"};
        box-shadow:0 2px ${(props) => props.theme.projectPageShadowsize} ${(props) => (props.theme.DarkTheme ? "#00d3a9" : "rgba(0, 0, 0, 0.40)")};
        color:${(props) => props.theme.text};
    }
    #special-cont_img{
        height:70%;
        width:100%;
        overflow:hidden;
          .gatsby-image-wrapper, .old-gatsby-image-wrapper{
              height:100%;
          }
          img{
            height: inherit;
            display: block;
            text-align: center;
            margin: auto;
          }
    }
    .slick-dots{
        display:none;
    }
    #special-cont_content{
        padding-top:1rem;
        text-align: center;
        bottom:0;
        height:30%;
        .special-cont_para{
            font-weight:bold;
            font-size:1rem;
            margin:0;
            padding:1rem;
        }
    }
    .special-cont_btn{
        background-color:${(props) => props.theme.body};
        color:black;
        height: 30rem;
        outline:none;
        border:none;   
    }

    .so-special-foot{
        text-align:center;
        p{
            font-size: 1.25rem;
            font-weight: 300;
        }
        .so-special-foot-btn
        {
            margin:2rem;
             color: ${(props) => props.theme.black};
        background: ${(props) => props.theme.highlightColor};

        &:hover{
            box-shadow: 0 2px 10px ${(props) => props.theme.DarkTheme ? "rgb(255 255 255 / 40%)" : "rgb(0 0 0 / 40%)"};
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
        .special-cont_para{
            padding:1rem 0;
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
            padding: 0.5rem 0;
        }   
    }
    @media screen and (max-width: 300px){
        .slick-slide{
            height:25rem;
            margin:0;
        }
        #special-cont_img{
            height: 60%;
        }
        #special-cont_content{
            .special-cont_para
            {
                padding:0;
            }
        }
    }
`;
export default SoSpecialWrapper;
