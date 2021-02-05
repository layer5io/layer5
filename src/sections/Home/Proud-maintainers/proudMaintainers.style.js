import styled from "styled-components";

const ProjectItemWrapper = styled.section`
    padding: 0 0 110px 0;
    overflow: hidden;
    .project-title {
        .section-title{
            h4 {
            margin-bottom: 8px;
            color: ${props => props.theme.primaryLightColor};
            text-transform: uppercase;
            font-weight: 500;
    }
            h2{
                margin-bottom: 1rem;
                font-style: normal;
                text-align: center;
            }
            text-align: center;
        }
        text-align: center;
        padding: 0 5% 0 5%;
        width: 100%;
        margin: auto;
    }
    .project-text {
        font-weight: 300;
        margin-bottom: 80px;
        width: 50%;
        margin-left: 272px;
    }
    .project-div {
      width: 250px;
      margin-left: 40px;
      height: 120px;
      background: #FAFAFA;
      border-radius: 20px;
    }
    .project-div-up {
      width: 100%;
      margin: auto;
      padding: 20px;
      height: 100px;
      margin-bottom: 3rem;
      background: #FAFAFA;
      border-radius: 20px;
    }
    .company-name {
      padding-top: 35px;
      padding-right: 60px;
      font-weight: boldest;
      font-size: 30px;
      line-height: 30px;
      text-align: center;
      color: #000000;
    }
    .company-name-service {
      padding-top: 25px;
      padding-right: 30px;
      font-weight: boldest;
      font-size: 30px;
      line-height: 30px;
      text-align: center;
      color: #000000;
    }
    .project__block__wrap{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }
    .project__block__inner {
        box-shadow: 0px 0px 30px ${props => props.theme.shadowLightColor};
        &:hover{
            box-shadow: 0px 0px 5px ${props => props.theme.primaryColor};
        }
        padding: 12% 6% 12% 6%;
        height: 220px;
        border-radius: 4%;
        margin-bottom: 30px;
        h5{
            margin-bottom: 10px;
            font-weight: 700;
            color: ${props => props.theme.secondaryColor}
        }
        p{
            font-weight: 300;
            color: ${props => props.theme.black};
        }

        img{
            height: 40px;
            margin: 0 0 15px 10px;
        }
    }
    .button{
        margin-top: 25px;
        text-align: center;
    }
    @media only screen and (max-width: 912px) {
         padding: 60px 0 0 0;
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
                margin-bottom: 6px;
            }
            h5{
                margin-bottom: 0px;
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
     }
     @media only screen and (max-width: 568px) {
        padding: 60px 0 40px 0;
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
