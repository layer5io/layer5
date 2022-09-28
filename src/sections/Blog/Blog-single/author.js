import React from "react";
import Image from "../../../components/image";
import { useLocation } from "@reach/router";
import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from "react-share";
import { Link } from "gatsby";
import Button from "../../../reusecore/Button";
import AboutTheAuthorWrapper from "./author.style";



const AboutTheAuthor = (props) => {
  const { authorInformation, shareQuote } = props;
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
            <h4>{authorInformation.frontmatter?.name}</h4>
            <p>
              {authorInformation.frontmatter?.bio}
            </p>
            <div className="authors-info-meshery">
              <h4>MeshMap</h4>
              <p>MeshMap is the world's only visual designer for Kubernetes and service mesh deployments.</p>
              <Button secondary url="/meshmap" title="Get Started" className="cta-btn" />
            </div>
            <div className="share-section">
              <h3>Share</h3>
              <div className="share-icons-container">
                <TwitterShareButton url={location.href} title={shareQuote} className="icon">
                  <AiOutlineTwitter />
                </TwitterShareButton>
                <FacebookShareButton url={location.href} quote={shareQuote} className="icon">
                  <FaFacebookF />
                </FacebookShareButton>
                <LinkedinShareButton url={location.href} className="icon">
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

