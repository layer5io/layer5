import React from "react";
import styled from "styled-components";
import Image from "../../../components/image";
import { useLocation } from "@reach/router";
import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from "react-share";
import { Link } from "gatsby";
import Button from "../../../reusecore/Button";

const AboutTheAuthorWrapper = styled.div`

.author-info-section{
    float: right;
    width: 20%;
    margin: 3rem 0 3rem 1rem;
    .authors-info-container{
        padding: 1.8rem;
        background: rgba(201,252,246,.3);
        text-align: center;
        margin-bottom: 3rem;
        h3{
            font-size: 20px;
            line-height: 32px;
            font-weight: 500;
            color: #1E2117
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
        h5{
            font-family: 'Qanelas Soft';
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 32px;
            border-bottom: 1px solid rgba(71, 126, 150, 0.5);
            padding-bottom: .5rem;
            width: 80%;
            margin: 0 auto;
        }
        p{
            font-family: 'Qanelas Soft';
            font-style: normal;
            font-weight: 500;
            font-size: 15px;
            line-height: 22px;
            margin: 1.5rem 0;
            color: #477E96;
        }
        .authors-info-meshery{
            border-top: 1px solid rgba(71, 126, 150, 0.5);
            border-bottom: 1px solid rgba(71, 126, 150, 0.5);
            padding: 2rem 0;

            h6{
                font-family: 'Qanelas Soft';
                font-style: normal;
                font-weight: 500;
                font-size: 20px;
                line-height: 32px;
                color: #1E2117;
            }
            p{
                font-family: 'Qanelas Soft';
                font-style: normal;
                font-weight: 500;
                font-size: 15px;
                line-height: 22px;
                color: #477E96;
            }
            .cta-btn{
                    min-width: 100%;
            }
        }
        .share-section{
            p{
                font-family: 'Qanelas Soft';
                font-style: normal;
                font-weight: 500;
                font-size: 24px;
                line-height: 32px;
                color: #1E2117;
            }
            .share-icons-container{
                width: 60%;
                margin: 0 auto;
                display: flex;
                justify-content: space-between;
            }
        }
    }
}

 @media (max-width: 770px) { 
    display: block;
    margin: 0 auto;
    width: 100%;
     .post-container{
         width: 100%;
     }
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

const AboutTheAuthor = (props) => {
  const {authorInformation, shareQuote} = props;
  const location = useLocation();

  return (
    <AboutTheAuthorWrapper>
      {authorInformation && (
        <div className="author-info-section">
          <div className="authors-info-container">
            <h3>About the Author</h3>
            <div className="authors-head-shot">
              <Link to={`/community/members/${authorInformation.slug}`}>
                <Image {...authorInformation?.frontmatter?.image_path} imgStyle={{ objectFit: "cover" }} alt={authorInformation.frontmatter?.name} className="authors-image" />
              </Link>
            </div>
            <h5>{authorInformation.frontmatter?.name}</h5>
            <p>
              {authorInformation.frontmatter?.bio}
            </p>
            <div className="authors-info-meshery">
              <h6>MeshMap</h6>
              <p>MeshMap is the world's only visual designer for Kubernetes and service mesh deployments.</p>
              <Button secondary url="/meshmap" title="Get Started" className="cta-btn" />
            </div>
            <div className="share-section">
              <p>Share</p>
              <div className="share-icons-container">
                <TwitterShareButton url={location.href} title={shareQuote}>
                  <AiOutlineTwitter />
                </TwitterShareButton>
                <FacebookShareButton url={location.href} quote={shareQuote}>
                  <FaFacebookF />
                </FacebookShareButton>
                <LinkedinShareButton url={location.href}>
                  <FaLinkedin />
                </LinkedinShareButton>
              </div>
            </div>
          </div>
        </div>
      )}
    </AboutTheAuthorWrapper>
  );
};

export default AboutTheAuthor;

