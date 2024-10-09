import React from "react";
import styled from "styled-components";
import { ReactComponent as IntegrationsImage } from "./images/integration-image-colorMode.svg";
import UnderlineImg from "./images/underline.svg";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Button from "../../../reusecore/Button";
// import { useStyledDarkMode } from "../../../theme/app/useStyledDarkMode";

const IntegrationsSectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background: ${(props) => props.theme.integrationsGraphicGradient};
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  padding: 0% 4%;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  @media only screen and (max-width: 767px) {
    text-align: center;
    flex-direction: column-reverse;
  }

  .hero-text {
    display: flex;
    flex-direction: column;
    flex: 0 0 40%;
    position: relative;
    @media only screen and (max-width: 767px) {
      max-width: 100%;
      margin-top: 15%;
    }
  }

  h1 {
    font-weight: 100;
    color: white;
  }

  h4 {
    color: white;
  }

  .hero-image {
    display: grid;
    /* grid-template-rows: 5rem 5rem; */
    place-items: center;
    margin: 5% 0;
    flex: 0 0 25%;
    /* max-width: 25%; */
    @media only screen and (max-width: 767px) {
      max-width: 50%;
      margin-top: 10%;
    }

    .diagram-hidden {
      opacity: 0;
      transition: 0.5s ease-out;
    }
    .diagram-visible {
      opacity: 1;
      transition: 0.5s ease-in;
    }
  }

  .underline-img {
    width: 20%;
    top: 40%;
    left: -6%;

    @media only screen and (max-width: 1498px) {
      top: 27%;
    }
    @media only screen and (max-width: 838px) {
      top: 24%;
    }
    @media only screen and (max-width: 767px) {
      left: 10%;
      top: 40%;
    }
    @media only screen and (max-width: 500px) {
      left: 0;
    }
    @media only screen and (max-width: 407px) {
      left: 20%;
      top: 25%;
    }
  }
`;

const KanvasIntegrationsSection = () => {
  const [diagramRef, inView] = useInView({ threshold: 0.6 });
  const [imageInView, setimageInView] = useState(false);

  const integrations = useStaticQuery(graphql`
    query {
      allMdx(
        filter: {
          fields: { collection: { eq: "integrations" } }
          frontmatter: { published: { eq: true } }
        }
      ) {
        totalCount
      }
    }
  `);
  if (inView && !imageInView) setimageInView(true);
  else if (imageInView && !inView) setimageInView(false);

  // const { isDark } = useStyledDarkMode();

  return (
    <IntegrationsSectionWrapper>
      <div
        className="hero-image"
        ref={diagramRef}
        style={{ alignSelf: "center", width: "100%" }}
      >
        <IntegrationsImage
          alt="integrations-img"
          className={imageInView ? "diagram-visible" : "diagram-hidden"}
        />
      </div>
      <div className="hero-text">
        <div>
          <h1>
            {Math.ceil(integrations.allMdx.totalCount / 10) * 10}+ Built-in
            Integrations
          </h1>
        </div>
        <div>
          <img className="underline-img" src={UnderlineImg} />
        </div>
        <div>
          <h4>
            Support for all of your Cloud Native Infrastructure and
            Applications.
          </h4>
        </div>
        <div>
          <Button
            id="integrations"
            $secondary
            style={{ margin: "1.5rem 0 1.5rem 0" }}
            $url="https://layer5.io/cloud-native-management/meshery/integrations"
            $external={true}
          >
            All Integrations
          </Button>
        </div>
      </div>
    </IntegrationsSectionWrapper>
  );
};

export default KanvasIntegrationsSection;
