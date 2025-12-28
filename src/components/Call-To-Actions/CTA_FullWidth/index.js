import React from "react";
import image_src from "../../../assets/images/callout/callout.webp";
import styled from "styled-components";
import Button from "../../../reusecore/Button";
import { Categories } from "./cta_fullwidth_categories";

const CTA_FullWidthWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 98%;
    min-height: 16rem;
    margin: 1.5rem auto;
    box-shadow: 0px 0px 16px 4px rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;
    background: rgba(201, 252, 246, 0.3);

    a {
        display: block;
    }

    img {
        width: 16rem;
        height: 16rem;
        object-fit: cover;
        pointer-events: none;
        border-radius: 0.5rem 0 0 0.5rem;
        padding: 1.5rem;
    }

    .cta-content {
        padding: 2rem;
        display: flex;
        flex: 1;
        text-align: center;
        align-items: center;
        justify-content: space-around;
        gap: 2rem;
        height: 100%;

        div {
          flex: 0 1 70%;
        }

        p {
            margin-top: 0.5rem;
        }
        a {
            flex: 0 0 auto;
        }
    }

    @media screen and (max-width: 1200px) {
      .cta-content {
        flex-direction: column;
        justify-content: center;
        gap: 1.5rem;
        div {
            flex: 0 0 auto;
            width: 100%;
        }
        a {
            flex: 0 0 auto;
        }
      }
    }

    @media screen and (max-width: 992px) and (min-width: 699px) {
        button {
            min-width: 6.5rem;
        }
    }

    @media screen and (max-width: 699px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: auto;
        margin: 1.5rem auto;
        border-radius: 0.25rem;

        img {
            width: 100%;
            height: auto;
            max-height: 250px;
            position: static;
            opacity: 1;
            border-radius: 0.25rem;
            padding: 1rem;
        }

        .cta-content {
            position: static;
            height: auto;
            display: flex;
            flex-direction: column;
            width: 100%;
            background: none;
            padding: 1.5rem 2rem 3rem 2rem;

            p {
                color: inherit;
            }
        }
    }
`;

const defaultHeading = "Layer5 Community";
const defaultContent = "Join the Layer5 community and explore the world of cloud native!";
const defaultURL = "https://slack.layer5.io";

const CTA_FullWidth = ({ alt, button_text, category, content, external_link, image, url, heading, ...props }) => {
  return (
    <CTA_FullWidthWrapper {...props}>
      { category ? (
        <>
          <img src={Categories[category]["Image"]} alt={Categories[category]["Image_Alt"]} />
          <div className="cta-content">
            <div>
              <h3>{Categories[category]["Heading"]}</h3>
              <p>{Categories[category]["Content"]}</p>
            </div>
            <Button $primary title={Categories[category]["Button_Text"]} $url={Categories[category]["Link"]} $external={Categories[category]["Link_external"]} />
          </div>
        </>
      ) : (
        <>
          <img src={image ? image : image_src} alt={alt ? alt : "Alt Text"} />
          <div className="cta-content">
            <div>
              <h3>{heading ? heading : defaultHeading}</h3>
              <p>{content ? content : defaultContent}</p>
            </div>
            <Button $primary title={button_text ? button_text : "Join Us"} $url={url ? url : defaultURL} $external={external_link ? true : false} />
          </div>
        </>
      )}
    </CTA_FullWidthWrapper>
  );
};

export default CTA_FullWidth;