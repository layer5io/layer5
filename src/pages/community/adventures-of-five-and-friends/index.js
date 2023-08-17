import React from "react";

import SEO from "../../../components/seo";
import AdventuresPage from "../../../sections/Community/Adventures-of-Five/index";

const Adventures = () => {
  return (
    <>
      <AdventuresPage />

    </>
  );
};
export default Adventures;
export const Head = () => {
  return <SEO title="Adventures of Five and Friends" description="Meet Five, our intergalatic Cloud Native Hero" image="./mascot-five-adventure-github-stars.png" />;
};