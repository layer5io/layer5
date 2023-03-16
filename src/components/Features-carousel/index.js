import React, { useState } from "react";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import { Link } from "gatsby";
import Carousel from "nuka-carousel";
import { IoIosArrowRoundForward } from "@react-icons/all-files/io/IoIosArrowRoundForward";
import { FeaturesWrapper } from "./FeaturesCarousel.style";


const Features = ({ features, heading }) => (
  <>
    {/* carousel rendered at smaller breakpoints */}
    <FeaturesCarousel features={features} heading={heading} />
    <FeaturesList features={features} />
  </>
);


const FeaturesList = ({ features }) => {
  const [activeFeature, setActiveFeature] = useState(0);
  return (
    <FeaturesWrapper>
      <div className="features">
        <ul className="options">
          {features.map((feature, stableIdx) => (
            <Feature
              id={stableIdx}
              key={stableIdx}
              title={feature.title}
              active={stableIdx === activeFeature}
              onClick={setActiveFeature}
              learnMoreLink={feature.learnMoreLink}
            >
              {feature.description}
            </Feature>
          ))}
        </ul>
        <div className="terminal-wrapper">
          <SimpleReactLightbox>
            <SRLWrapper>
              {features[activeFeature].content}
            </SRLWrapper>
          </SimpleReactLightbox>
        </div>
      </div>
    </FeaturesWrapper>
  );
};

const FeaturesCarousel = ({ features, heading }) => {
  return (
    <FeaturesWrapper>
      <div className="features-carousel">
        <h2 className="main-heading">{heading ? heading : "Features"}</h2>
        <Carousel
          renderCenterRightControls={() => null}
          renderCenterLeftControls={() => null}
          wrapAround
          defaultControlsConfig={{
            pagingDotsContainerClassName: "pagingDots",
          }}
          cellSpacing={40}
        >
          {features.map((feature, stableIdx) => (
            <div key={stableIdx}>
              <Feature Element="div" id={feature.id} title={feature.title} active>
                {feature.description}
              </Feature>
              <div className="terminal-wrapper">
                {features[stableIdx].content}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </FeaturesWrapper>
  );
};

const Feature = ({ children, title, active, onClick, learnMoreLink, id, Element = "li" }) => {
  return (
    <Element className={active ? "feature active-feature" : "feature"}>
      {onClick ? (
        <button
          className="heading"
          onClick={() => onClick(id)}
          aria-expanded={active}
          aria-controls={`feature-${id}`}
        >
          {title}
        </button>
      ) : (
        <span className="heading">{title}</span>
      )}
      <div className="body" id={`feature-${id}`} aria-hidden={!active}>
        <p>{children}</p>
        {learnMoreLink && (
          <Link className="learn-more-link" to={learnMoreLink}>
            Learn more <IoIosArrowRoundForward />
          </Link>
        )}
      </div>
    </Element>
  );
};

export default Features;
