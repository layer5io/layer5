import styled from "styled-components";
export const ProjectWrapper = styled.div`
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
        box-shadow: 0px 0px 15px gray;
        padding: 11%;
        margin-top: 15px;
        margin-bottom: 15px;
        height: 300px;
        border-radius: 4%;
        position: relative;
        text-align: center;
        &:hover{
            background-color: #00b39f;
            box-shadow: 0px 0px 10px #FFBD2E;
            img {
                filter: brightness(0) invert(1);
            }
            h1 {
                color: white;
            }
        }
        h1{
            margin-bottom: 20px;
            font-size: 21px; 
            font-weight: 600;
        }
        img{
            height: 120px; 
            margin-bottom: 25px;
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
        padding: 5px 0 0 0;
        .project__block__inner{
            height: auto;
            padding: 5px;
            img{
                height: 60px;
                margin-bottom: 6px;
            }
            h1{
                margin-bottom: 0px;
                font-size: 20px;
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
