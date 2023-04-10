import styled from "styled-components";
import background from "./images/background.svg";

const ProjectItemWrapper = styled.section`
    padding: 0 0 2rem 0;
    overflow: hidden;
    margin-top: 4rem;

    .project-title {
        .section-title{
            
            h4 {
                font-weight: 500;
                color: ${props => props.theme.grey737373ToGreyB3B3B3};
            }
            h2{
                color: ${props => props.theme.greyDEE3DEToGreen3C494F};
                margin-bottom: 40px;
                
                span{
                    color: ${props => props.theme.text};
                }
            }
            text-align: center;
            margin-bottom: 25px;
        }
        text-align: center;
        padding: 0 5% 0 5%;
        width: 100%;
        margin: auto;
        p{
            font-size: 17.5px;
            color: ${props => props.theme.black};
        }
    }
    .project-text {
        font-weight: 300;
        margin-bottom: 80px;
        margin-top: 0;
    }
    .project__block__wrap{
        position: relative;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 2rem;
        &:before {
            content: url(${background});
            position: absolute;
            right: -2rem;
            bottom: 0;
        }
    }
    .project__block__inner { 
        display: flex;
        flex-direction: column;
        background: ${props => props.theme.grey212121ToLinear2};
        box-shadow: 0px 0px ${props => props.theme.projectShadowsize} ${props => props.theme.green00D3A9ToGreyE6E6E6};
        &:hover{
            box-shadow: 0px 0px 5px ${props => props.theme.whiteToGreen3C494F};
        }
        padding: 12% 6% 12% 6%;
        height: 220px;
        border-radius: 4%;
        text-align: center;
        justify-content: center;
        h3{
            margin: auto;
            font-weight: 700;
            font-size: 1.3rem;
            color: ${props => props.theme.secondaryColor}
        }
        p{
            font-weight: 300;
            color: ${props => props.theme.text};
            margin: auto;
        }

        img{
            height: 40px ; 
            width: auto ;
        }
        .gatsby-image-wrapper{
            margin: 10px auto;
            min-height: 40px;
        }
    }
    .banner-btn {
        background: linear-gradient(123deg, #00b39f 60%, #00b39f 100%);
    }
    .description {
        padding: 1rem;
        border-radius: 1rem;
        display: flex;

        justify-content: center;
        align-items: baseline;
        background: ${props => props.theme.secondaryLightColor};
        .button {
            margin: auto;
        }
        p {
            display: inline;
            text-align: center;
            justify-content: center;
            font-size: 1rem;
            padding: 0 4rem;
            margin: 0rem;
            color: ${props => props.theme.greyDCDCDCToGrey3B3B3B};
            span {
                font-weight: 600;
            }
        }        
    }
    @media only screen and (max-width: 992px) {
        .project__block__wrap:before {
            content: none;
        }
    }
    @media only screen and (max-width: 992px) {
        .project-text{
            font-size: 7rem;
            color:red;
        }
    }
    @media only screen and (max-width: 912px) {
         /* padding: 60px 0 0 0; */
         .project-title {
            padding: 0 5% 0 5%;
            .section-title{
                text-align: center;
            }
            text-align: center;
            width: 100%;
        }
        .project__block__inner{
            height: 200px;
            margin: 20px;
            padding: 8%;

            h3{
                margin-bottom: 0px;
            }
        }
        .description {
            padding: 1rem 0.5rem;
            text-align: center;
            display: flex;
            p {
                padding: 2rem;
            }
            .button{
                margin: auto;
            }
            @media screen and (max-width:767px) {
                display: block;
                .button{
                    margin: 1rem auto;
                }
              }
        }
        .project-text{
            margin-bottom: 40px;
        }
     }
     @media only screen and (max-width: 760px) {
        .project__block__wrap{
            margin-bottom: 60px;
        }
     }
     @media only screen and (max-width: 568px) {
        /* padding: 60px 0 0px 0; */
         .section-title,
        .project-content-wrap{
            text-align: center;
        }
        .section-title{
            img{
                display: none;
            }
            h4{
                width: 100%;
            }
        }
        
     }
     @media only screen and (max-width: 480px) {
        .project__block__inner{
            padding: 30px;
        }
     }
   

`;

export default ProjectItemWrapper;
