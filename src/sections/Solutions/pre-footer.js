import React from "react";
import styled from "styled-components";
import InlineQuotes from "../../components/Inline-quotes";
import YashSharmaIMg from "../../collections/members/yash-sharma/yash-sharma.webp";
import JourneySection from "./pre-footer-cards";


const PreFooterContentWrapper = styled.div`
        max-width: 90%;
        margin: auto;
`;

const PreFooterContent = () => {
  return (
    <PreFooterContentWrapper>
      <InlineQuotes
        person="Yash Sharma"
        title="Layer5 MeshMate & Developer Advocate at DigitalOcean"
        quote="The platform helped me gain recognition in Developer Relations by showcasing my popular designs to the community."
        image={YashSharmaIMg} />
      <JourneySection/>
    </PreFooterContentWrapper>
  );
};

export default PreFooterContent;