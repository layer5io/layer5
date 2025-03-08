import styled from "styled-components";

const AboutTheAuthorWrapper = styled.div`

.author-info-section{
    float: right;
    width: 25%;
    margin: 3rem 0 3rem 1rem;
    .authors-info-container{
        padding: 1.8rem;
        background: rgba(201,252,246,.3);
        text-align: center;
        margin-bottom: 3rem;
        h3{
            font-size: 1.5rem;
        }
        .authors-head-shot{
            width: 150px;
            height: 150px;
            margin: 1.3rem auto;
            border: 5px solid #00D3A9;
            border-radius: 50%;
            overflow: hidden;
            a{
                img{
                    clip-path: circle(50% at 50% 50%);
                }
            }
            
        }
         .gatsby-image-wrapper, .old-gatsby-image-wrapper {
            display: block;
            margin: auto;
            border-radius: 100%;
            overflow: hidden;
            width: 140px;
            height: 140px;
            box-shadow: 0 1px 0 rgba(0,0,0,.1);
        }
        h4{
            font-weight: 500;
            font-size: 1.25rem;
            border-bottom: 1px solid ${props => props.theme.greyFiveToBlueFive};
            padding-bottom: .5rem;
            width: 80%;
            margin: 0 auto;
            transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        p{
            font-size: 1rem;
            line-height: 1.375rem;
            margin: 1.5rem 0;
            color: ${props => props.theme.greyB1B6B8ToBlue477E96}; 
            transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1); 
        }
        .authors-info-meshery{
            border-top: 1px solid ${props => props.theme.greyFiveToBlueFive};
            border-bottom: 1px solid ${props => props.theme.greyFiveToBlueFive};
            padding: 1.5rem 0;
            transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

            h4{
                font-weight: 500;
                font-size: 1.25rem;
                line-height: 2rem;
                color: ${props => props.theme.greyD3D7DBToGreen1E2117}; 
                transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1); 
            }
            p{
                font-size: 1rem;
                line-height: 1.375rem;
                color: ${props => props.theme.greyB1B6B8ToBlue477E96}; 
                transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1); 
            }
            .cta-btn{
                    min-width: 100%;
            }
        }
        .share-section{
            padding: 1.5rem 0;
            
            h3{
                font-size: 1.5rem;
                color: ${props => props.theme.greyD3D7DBToGreen1E2117};  
                border-bottom: none;
                margin-bottom: .5rem;
                transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
            }
            .share-icons-container{
                width: 60%;
                margin: 0 auto;
                display: flex;
                justify-content: space-between;

                .icon{
                    box-shadow: none;
                }
            }
        }
    }
}


 @media (max-width: 975px) { 
     .author-info-section{
       width: 30%;
     }
 }
 @media (max-width: 770px) { 
     .author-info-section{
       display: none;
     }
 }

 @media screen and (max-width: 360px){
    .author-info-section{
        width: 90%;
        margin: 0 auto;
         .authors-info-container{
            .authors-head-shot{
                width: 40%;
                height: 40%;
            }
         }
     }
}
`;

export default AboutTheAuthorWrapper;
