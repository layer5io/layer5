import React from "react";
import Image from "../../../components/image";
import { useLocation } from "@reach/router";
import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { Link } from "gatsby";
import Button from "../../../reusecore/Button";
import AboutTheAuthorWrapper from "./author.style";

const AboutTheAuthor = (props) => {
  const { authorInformation } = props;
  useLocation();

  return (
    <AboutTheAuthorWrapper>
      {authorInformation && (
        <div className="author-info-section">
          <div className="authors-info-container">
            <h3>About the Author</h3>
            <div className="authors-head-shot">
              <Link to={`${authorInformation?.fields?.slug}`}>
                <Image
                  {...authorInformation?.frontmatter?.image_path}
                  imgStyle={{ objectFit: "cover" }}
                  alt={authorInformation.frontmatter?.name}
                  className="authors-image"
                />
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
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="icon">
                  <AiOutlineTwitter />
                </a>
                <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="icon">
                  <FaFacebookF />
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="icon">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </AboutTheAuthorWrapper>
  );
};

export default AboutTheAuthor;