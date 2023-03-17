import React from "react";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import MentorshipPage from "../../../sections/Community/Handbook/mentorships";
import Footer from "../../../sections/General/Footer";
const Mentorship = () => {
  return (
    <Layout>
      <MentorshipPage />
      <Footer />
    </Layout>
  );
};
export default Mentorship;
export const Head = () => {
  return <SEO title="Mentorship Programs" description="As an open-source organization and a community, we participate in different mentorships programs." />;
};