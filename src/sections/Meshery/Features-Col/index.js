import React, { useEffect, useState } from "react";
// import c_icon from "./checkmark-box_green.svg";
import LifecycleFeature from "./data";
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
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" fill="#C9FCF6" rx="5" /><path stroke="#00B39F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M28 14L17 25L12 20" /></svg>        </td>
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
          <h2>{feature.name}</h2>
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
            duration={5}
            separator=","
            end={
              feature.count.value !== 0 ? feature.count.value : performanceCount
            }
            suffix= {(feature.count.description == "components" || feature.count.description == "cloud native integrations") ? "+" : " "}
          />
        </h1>
        <p className="count-desc">{feature.count.description}</p>
      </CountBlockContainer>
    </FeatureBlockContainer>
  );
}

const Features = () => {
  const [performanceCount, setPerformanceCount] = useState(0);
  const performanceCountEndpoint = "https://meshery.layer5.io/api/performance/results/total";

  useEffect(() => {
    fetch(performanceCountEndpoint)
      .then((response) => response.json())
      .then((resultcount) => setPerformanceCount(resultcount.total_runs));
  }, []);

  const data = LifecycleFeature().features;
  return (
    <FeaturesSectionWrapper>
      <TitleContainer>
        <h1>
          <span className="light">Your</span> full-service
          <span className="light"> cloud native manager</span>
        </h1>
      </TitleContainer>
      <FeaturesSectionContainer>
        {data.map((feature, index) =>
          getFeatureBlock(feature, index, performanceCount)
        )}
      </FeaturesSectionContainer>
    </FeaturesSectionWrapper>
  );
};


export default Features;
