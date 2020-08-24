import styled from "styled-components";
export const ProjectPageWrapper = styled.div`
padding: 100px 0 110px 0;
    .project-text{
        font-weight: 300;
        margin-bottom: 80px;
        margin-top: 0;
    }
    .project__block__wrap{
        display: flex;
        flex-wrap: wrap;
    }
    .project__block{
        flex-basis: 33%;
    }
    .project__block__inner { 
        box-shadow: 0px 0px 15px ${props => props.theme.shadowLightColor};
        padding: 11%;
        margin-top: 15px;
        border-radius: 4%;
        position: relative;
        &:hover{
            background-color: #00d3a9;
            img {
                filter: brightness(0) invert(1);
            }
            h2 {
                color: white;
            }
        }
        h2{
            margin-bottom: 20px; 
            font-weight: 400;
        }
        img{
            height: 120px; 
            margin-bottom: 25px
        }
        .arrow{
            position: absolute;
            right: 15%;
            bottom: 0%;
            width: 30px;
            transition: all 0.8s cubic-bezier(0.3,0.8,0.2,1) 0s;
            img{
                margin: 0;
                width: 30px;
                height: auto;
            }
            &:hover{
                right: 10%;
            }
        }    
    }
    .project__block__inner+.project__block__inner{
        margin-top: 30px;
    }
    .section-title{
        h2{
            margin-bottom: 42px;
        }
    }
    @media only screen and (max-width: 1024px) {
        .project__block__inner { 
            a{
                bottom: 8%;
            }
        }
    }
    @media only screen and (max-width: 912px) {
         padding: 60px 0 0 0;
        .project__block__inner{
            padding: 8%;
            img{
                height: 60px;
                margin-bottom: 6px;
            }
            h3{
                margin-bottom: 0px;
            }
            a{
                display: block;
                bottom: 0;
                right: 0;
                position: relative;
            }
            &:hover{
                a{
                    right: -10%;
                }
            }
        }
        .project-text{
            margin-bottom: 40px;
        }
     }
     @media only screen and (max-width: 568px) {
        margin-left: 5%;
        margin-right: 5%;
        padding: 60px 0 40px 0;
     }
     @media only screen and (max-width: 480px) {
        .project__block__inner{
            padding: 30px;
        }
     }
`;