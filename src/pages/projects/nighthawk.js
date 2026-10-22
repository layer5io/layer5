import React from "react";

import SEO from "../../components/seo";
import Nighthawk from "../../sections/Projects/Nighthawk";

import Subscribe from "../../sections/subscribe/subscribe";
const NighthawkPage = () => {
  return (
    <>
      <Nighthawk  />
      <Subscribe />

    </>
  );
};
export default NighthawkPage;
export const Head = () => {
  return <SEO title="Nighthawk"
    description="Behavioral characterization of your microservices' performance"
  />;
};