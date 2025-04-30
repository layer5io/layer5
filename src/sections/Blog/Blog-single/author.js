import React from "react";
import Image from "../../../components/image";
import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { Link } from "gatsby";
import Button from "../../../reusecore/Button";
import AboutTheAuthorWrapper from "./author.style";

const AboutTheAuthor = (props) => {
  const { authorInformation } = props;

  const getShareUrls = () => {
    const currentUrl = typeof window !== "undefined" ? window.location.href : "";
    return {
      twitter: `https://twitter.com/share?url=${encodeURIComponent(currentUrl)}&via=mesheryio`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`
    };
  };

  const shareUrls = getShareUrls();

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
                <a href={shareUrls.twitter} target="_blank" rel="noopener noreferrer" className="icon" aria-label="Share on Twitter">
                  <AiOutlineTwitter />
                </a>
                <a href={shareUrls.facebook} target="_blank" rel="noopener noreferrer" className="icon" aria-label="Share on Facebook">
                  <FaFacebookF />
                </a>
                <a href={shareUrls.linkedin} target="_blank" rel="noopener noreferrer" className="icon" aria-label="Share on LinkedIn">
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