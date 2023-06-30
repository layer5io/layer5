import React, { useState } from "react";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import { Link } from "gatsby";
import { IoIosArrowRoundForward } from "@react-icons/all-files/io/IoIosArrowRoundForward";
import { FeaturesWrapper } from "./FeaturesCarousel.style";
import Slider from "react-slick";


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
        <Slider
          autoplay={true}
          autoplaySpeed={3500}
          arrows={false}
          dots={true}
          infinite= {true}
          speed="500"
          slidesToShow={1}
          slidesToScroll={1}
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
        </Slider>
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
      <div className="body" id={`feature-${id}`} >
        <p>{children}</p>
        {learnMoreLink && learnMoreLink.startsWith("/")
          ? <Link className="learn-more-link" to={learnMoreLink}>
            Explore <IoIosArrowRoundForward />
          </Link>
          : <a href={learnMoreLink} className="learn-more-link">
           Explore <IoIosArrowRoundForward />
          </a>
        }
      </div>
    </Element>
  );
};

export default Features;
