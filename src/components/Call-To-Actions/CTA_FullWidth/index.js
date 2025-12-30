import React from "react";
import image_src from "../../../assets/images/callout/callout.webp";
import styled from "styled-components";
import Button from "../../../reusecore/Button";
import { Categories } from "./cta_fullwidth_categories";

const CTA_FullWidthWrapper = styled.div`
    display: flex;
    flex: 0 0 100%;
    width: 98%;
    margin: 1.5rem auto;
    box-shadow: 0px 0px 16px 4px rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;
    background: rgba(201, 252, 246, 0.3);

    ${props => props.$isLayer5Icon ? `
        flex-wrap: wrap;
        min-height: 16rem;
        height: auto;
    ` : `
        height: 16rem;
    `}

    a {
        display: block;
    }

    img {
        width: 16rem;
        height: 16rem;
        object-fit: cover;
        pointer-events: none;
        border-radius: 0.5rem 0 0 0.5rem;

        ${props => props.$isLayer5Icon && `
            padding: 1.5rem;
            object-fit: contain;
        `}
    }

    .cta-content {
        display: flex;
        text-align: center;
        align-items: center;
        height: 100%;
        
        ${props => props.$isLayer5Icon ? `
            padding: 2rem;
            flex: 1;
            justify-content: space-around;
            gap: 2rem;
        ` : `
            padding: 0.5rem;
            flex: auto;
        `}

        div {
        ${props => props.$isLayer5Icon ? `
          flex: 0 1 70%;
            ` : `
          flex: 0 0 75%;
        `}
      }
        
        p {
            margin-top: 0.5rem;
        }

        a {
          ${props => props.$isLayer5Icon ? `
                  flex: 0 0 auto;
              ` : `
                  flex: 0 0 25%;
            `}
        }
    }

    @media screen and (max-width: 1200px) {
      .cta-content {
        ${props => props.$isLayer5Icon ? `
            flex-direction: column;
            justify-content: center;
            gap: 1.5rem;
            padding: 1.5rem;

            div {
                flex: 0 0 auto;
                width: 100%;
            }
            a {
                flex: 0 0 auto;
            }
        ` : `
            div {
                flex: 0 0 65%;
            }
            a {
                flex: 0 0 35%;
            }
          `}
        }
      }

    @media screen and (max-width: 992px) and (min-width: 699px) {
        button {
            min-width: 6.5rem;
        }
    }

    @media screen and (max-width: 699px) {
        border-radius: 0.25rem;
        margin: 1.5rem auto;

        ${props => props.$isLayer5Icon ? `
            display: flex;
            flex-direction: column;
            width: 100%;
            height: auto;

            img {
                width: 100%;
                height: auto;
                min-height: 200px;
                max-height: 200px;
                position: static;
                opacity: 1;
                border-radius: 0.25rem 0.25rem 0 0;
                padding: 2rem;
                object-fit: contain;
            }

            .cta-content {
                position: static;
                height: auto;
                display: flex;
                flex-direction: column;
                width: 100%;
                background: none;
                padding: 1.5rem 2rem 2rem 2rem;

                p {
                    color: inherit; 
                }
            }
        ` : `
        display: block;
        width: 18rem;
        height: 18rem;

        img {
            width: 18rem;
            height: 18rem;
            position: absolute;
            opacity: 0.35;
            border-radius: 0.25rem;
        }

        .cta-content {
            position: absolute;
            height: 18rem;
            display: block;
            width: 18rem;
            background: none;
            padding: 4rem 1rem;

            p {
                color: white;
            }
        }
    `}
  }
`;

const defaultHeading = "Layer5 Community";
const defaultContent = "Join the Layer5 community and explore the world of cloud native!";
const defaultURL = "https://slack.layer5.io";

const CTA_FullWidth = ({ alt, button_text, category, content, external_link, image, url, heading, ...props }) => {

  const isLayer5Icon = image && (
    image.includes('/5 icon/') || 
    image.includes('5-light') || 
    image.includes('5-dark') ||
    image.includes('layer5/5')
  );

  return (
    <CTA_FullWidthWrapper $isLayer5Icon={isLayer5Icon} {...props}>
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