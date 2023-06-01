import React from "react";
import SEO from "../components/seo";
import Partner from "../sections/Partners";
import Footer from "../sections/General/Footer";


const Partners = ({ location }) => {
  return (
    <>
      <Partner  />
      <Footer location={location} />

    </>
  );
};
export default Partners;
export const Head = () => {
  return <SEO title="Partners" description="Partner Program" />;
};