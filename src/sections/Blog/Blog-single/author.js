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
            <div className="authors-head-shot" style={{ aspectRatio: "1/1", width: "150px", height: "150px", overflow: "hidden" }}>
              <Link to={`${authorInformation?.fields?.slug}`}>
                <Image {...authorInformation?.frontmatter?.image_path} imgStyle={{ objectFit: "cover", width: "100%", height: "100%" }} alt={authorInformation.frontmatter?.name} className="authors-image" />
              </Link>
            </div>
            <h4>{authorInformation.frontmatter?.name}</h4>
            <p>
              {authorInformation.frontmatter?.bio}
            </p>
            <div className="authors-info-meshery">
              <h4>Meshery</h4>
              <p>Meshery is the world's only collaborative cloud manager.</p>
              <Button $secondary $url="/kanvas" title="Get Started" className="cta-btn" />
            </div>
            <div className="share-section">
              <h3>Share</h3>
              <div className="share-icons-container">
                <TwitterShareButton $url={location.href} title={shareQuote} className="icon">
                  <AiOutlineTwitter />
                </TwitterShareButton>
                <FacebookShareButton $url={location.href} quote={shareQuote} className="icon">
                  <FaFacebookF />
                </FacebookShareButton>
                <LinkedinShareButton $url={location.href} className="icon">
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

