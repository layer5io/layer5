import styled from "styled-components";
import background from "./images/background.svg";

const ProjectItemWrapper = styled.section`
    padding: 0 0 110px 0;
    overflow: hidden;
    margin-top: 2rem;
    .project-title {
        .section-title{

            h4 {
                font-weight: 500;
                color: ${props => props.theme.sideTextLight};
            }
            h2{
                color: ${props => props.theme.sideText};
                margin-bottom: 2.25rem;

                span{
                    color: ${props => props.theme.text};
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
        background: ${props => props.theme.projectCardColor};
        box-shadow: 0px 0px ${props => props.theme.projectShadowsize} ${props => props.theme.projectShadowColor};
        &:hover{
            box-shadow: 0px 0px 5px ${props => props.theme.projectCardHoverColor};
        }
        padding: 12% 6% 12% 6%;
        height: 220px;
        border-radius: 4%;
        margin-bottom: 30px;
        text-align: center;
        h5{
            margin-bottom: auto; 
            font-weight: 700;
            color: ${props => props.theme.secondaryColor}
        }
        p{
            font-weight: 300;
            color: ${props => props.theme.text};
        }

        img{
            height: 40px ; 
            width: auto ;
        }
        .gatsby-image-wrapper{
            margin: 10px auto; 
        }
    }
    .description {
        padding: 1rem;
        border-radius: 1rem;
        background: ${props => props.theme.secondaryLightColor};
        text-align: center;
        p {
            padding: 0 4rem;
            margin: 0rem;
            color: #737373;
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
            img{
                height: 45px;
            }
            h5{
                margin-bottom: 0px;
            }
        }
        .description {
            padding: 1rem 0.5rem;
            p {
                padding: 0 2rem;
            }
        }
        .button{
            margin-top: 0px;
        }
        .project-text{
            margin-bottom: 40px;
        }
     }
     @media only screen and (max-width: 760px) {
        .project__block__wrap{
            margin-bottom: 60px;
        }
        .description {
            padding: 1rem 0.5rem;
            p {
                padding: 0 1rem;
            }
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
        .description {
            padding: 1rem 0.5rem;
            p {
                padding: 0rem;
            }
        }
     }
   

`;

export default ProjectItemWrapper;
