import React from "react";
import image_src from "../../../assets/images/callout/callout.webp";
import styled from "styled-components";
import Button from "../../../reusecore/Button";
import { Categories } from "./cta_bottom_categories";

const CTA_BottomWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between; 
    align-items: center; 
    width: 98%;
    height: 16rem;
    margin: 2rem auto 1.5rem;
    box-shadow: 0px 0px 16px 4px rgba(0, 0, 0, 0.1);
    background: rgba(201, 252, 246, 0.3);
    border-radius: 0.5rem;
    overflow: hidden; 

    .cta-content {
        padding: 0.5rem 1.5rem;
        text-align: center;
        max-width: calc(75% - 1rem); 
        margin-right: 1rem; 

        h3 {
            margin-bottom: 0.5rem; 
        }

        p {
            margin-top: 0.5rem;
        }
    }

    img {
      object-fit: cover; 
      width: auto; 
      max-width: 35%; 
      padding: 1rem;
      max-height: 100%; 
      border-radius: 0 0.5rem 0.5rem 0; 
    }

    button {
        width: fit-content; 
    }
`;

const defaultHeading = "Layer5 Community";
const defaultContent = "Join the Layer5 community and explore the world of service meshes!";
const defaultURL = "https://slack.layer5.io";

const CTA_Bottom = ({ alt, button_text, category, content, external_link, image, url, heading, ...props }) => {
  return (
    <CTA_BottomWrapper {...props}>
      <div className="cta-content">
        { category ? (
          <>
            <h3>{Categories[category]["Heading"]}</h3>
            <p>{Categories[category]["Content"]}</p>
          </>
        ) : (
          <>
            <h3>{heading ? heading : defaultHeading}</h3>
            <p>{content ? content : defaultContent}</p>
          </>
        )}
        <Button primary title={category ? Categories[category]["Button_Text"] : (button_text ? button_text : "Join Us")} url={category ? Categories[category]["Link"] : (url ? url : defaultURL)} external={category ? Categories[category]["Link_external"] : (external_link ? true : false)} />
      </div>
      <img src={category ? Categories[category]["Image"] : (image ? image : image_src)} alt={category ? Categories[category]["Image_Alt"] : (alt ? alt : "Alt Text")} />
    </CTA_BottomWrapper>
  );
};

export default CTA_Bottom;
