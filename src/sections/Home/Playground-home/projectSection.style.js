import styled from "styled-components";

const ProjectItemWrapper = styled.section`
    padding: 0 0 2rem 0;
    overflow: hidden;
    margin-top: 4rem;
    .subtitle {
        text-align: center;
        margin-bottom: 3rem;
        color: ${props => props.theme.grey737373ToGreyB3B3B3};
    }
    img {
        width: 100px; 
        display: block;
        margin: 0 auto; 
      }
    .logo-meshery {
        margin-bottom: 2rem;
    }
    .project-title {
        .section-title{
            
            h4 {
                font-weight: 500;
                color: ${props => props.theme.grey737373ToGreyB3B3B3};
                transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
            }
            h2{
                color: ${props => props.theme.greyDEE3DEToGreen3C494F};
                margin-bottom: 40px;
                transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
                
                span{
                    color: ${props => props.theme.text};
                    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
                }
            }
            text-align: center;
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
    
    .banner-btn {
        text-align: center;
        padding: 0 5% 0 5%;
        width: 100%;
        margin: auto;
    }  

`;

export default ProjectItemWrapper;
