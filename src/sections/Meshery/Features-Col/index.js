import React, { useEffect, useState } from "react";
import c_icon from "./checkmark-box_green.svg";
import data from "./data";
import Counter from "../../../reusecore/Counter";
import {
  FeaturesSectionWrapper,
  TitleContainer,
  FeaturesSectionContainer,
  FeatureBlockContainer,
  FeatureTitleInfoContainer,
  FeatureInfoContainer,
  CountBlockContainer,
} from "./featuresColSection.style.js";

function getServiceFeature(service, index) {
  return (
    <table className="table" key={index}>
      <tr>
        <td className="icon">
          <img src={c_icon} />
        </td>
        <td className="service">{service.content}</td>
      </tr>
    </table>
  );
}

function getFeatureBlock(feature, index, performanceCount) {
  return (
    <FeatureBlockContainer key={index} className="feature-col">
      <FeatureTitleInfoContainer>
        <div className="feature-block">
          <h3>{feature.name}</h3>
        </div>
        <p>{feature.description}</p>
      </FeatureTitleInfoContainer>
      <FeatureInfoContainer>
        {feature.services.map((service, index) =>
          getServiceFeature(service, index)
        )}
      </FeatureInfoContainer>
      <CountBlockContainer>
        <h1 className="count">
          <Counter
            duration={6}
            separator=","
            end={
              feature.count.value !== 0 ? feature.count.value : performanceCount
            }
            suffix={feature.count.description == "users" ? "+" : ""}
          />
        </h1>
        <p className="count-desc">{feature.count.description}</p>
      </CountBlockContainer>
    </FeatureBlockContainer>
  );
}

const Features = () => {
  const [performanceCount, setPerformanceCount] = useState(0);
  const performanceCountEndpoint = "https://meshery.layer5.io/result/total";

  useEffect(() => {
    fetch(performanceCountEndpoint)
      .then((response) => response.json())
      .then((resultcount) => setPerformanceCount(resultcount.total_runs));
  }, []);

  return (
    <FeaturesSectionWrapper>
      <TitleContainer>
        <h1>
          <span className="light">Your</span> full-service
          <span className="light"> mesh manager</span>
        </h1>
      </TitleContainer>
      <FeaturesSectionContainer>
        {data.features.map((feature, index) =>
          getFeatureBlock(feature, index, performanceCount)
        )}
      </FeaturesSectionContainer>
    </FeaturesSectionWrapper>
  );
};

export default Features;
