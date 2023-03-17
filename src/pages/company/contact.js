import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Footer from "../../sections/General/Footer";
import ContactPage from "../../sections/Company/Contact";
import { Script } from "gatsby";
const Contact = () => {
  return (
    <Layout>
      <ContactPage />
      <Footer />
    </Layout>
  );
};
export default Contact;
export const Head = () => {
  return <SEO title="Contact" description="Contact Layer5 for help managing your cloud native infrastructre and apps. Layer5 is the maker of Meshery and service mesh standards.">
    <Script src="https://v8hx52m354g0.statuspage.io/embed/script.js" />
  </SEO>;
};