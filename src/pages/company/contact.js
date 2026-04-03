import React from "react";

import SEO from "../../components/seo";

import ContactPage from "../../sections/Company/Contact";
import { Script } from "gatsby";
const Contact = () => {
  return (
    <>
      <ContactPage />

    </>
  );
};
export default Contact;
export const Head = () => {
  return <SEO title="Contact" description="Contact us for assistance with your cloud native journey, whether you are a beginner or an expert. We are here to help you with your questions and provide the support you need." >
    <Script src="https://v8hx52m354g0.statuspage.io/embed/script.js" />
  </SEO>;
};