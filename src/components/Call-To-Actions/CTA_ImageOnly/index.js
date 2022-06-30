import React from "react";
import { Link } from "gatsby";
import image_src from "../../../assets/images/callout/callout.png";
import styled from "styled-components";
import { Categories } from "./cta_imageonly_categories";

const CTA_ImageOnlyWrapper = styled.div`
    float: right;
    margin-left: 0.5rem;

    a {
        display: block;
        height: 15rem;
        background: rgb(201, 252, 246);
        border-radius: 0.5rem;
    }

    img {
        width: 20rem;
        height: 15rem;
        pointer-events: none;
        border-radius: 0.5rem;
    }

    @media screen and (max-width: 500px) {
        float: none;
        width: 20rem;
        margin: 1.5rem auto;
    }
`;

const defaultURL = "https://slack.layer5.io";

export const CTA_ImageOnly = ({ alt, category, image, url, blend }) => {
  return (
    <CTA_ImageOnlyWrapper>
      { category ? (
        <Link to={Categories[category]["Link"]}>
          <img
            src={Categories[category]["Image"]}
            alt={Categories[category]["Alt"]}
            style={{ opacity: blend ? "0.7" : "1" }}
          />
        </Link>
      ) : (
        <Link to={url ? url : defaultURL}>
          <img
            src={image ? image : image_src}
            alt={alt ? alt : "Alt Text"}
            style={{ opacity: blend ? "0.7" : "1" }}
          />
        </Link>
      )}
    </CTA_ImageOnlyWrapper>
  );
};