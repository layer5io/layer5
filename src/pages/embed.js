import { Script } from "gatsby";
import React from "react";
import styled from "styled-components";

const EmbedWrapper = styled.section`
  padding: 100px;
  #embedded-design-142f0054-d9ae-4352-8618-887104a81928{
    height: 30rem;
    width: 100%;
  }
`;


const EmbedPage = () => {
  return (
    <EmbedWrapper>
      <div id="embedded-design-142f0054-d9ae-4352-8618-887104a81928"></div>
      <Script src="/embed-test/embedded-design-cypress-des-1-no-modify-by-me-copy.js" type="module" strategy={"post-hydrate"} ></Script>
    </EmbedWrapper>
  );
};

export default EmbedPage;