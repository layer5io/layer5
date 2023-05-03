import React from "react";
import SEO from "../../components/seo";
import Playground from "../../sections/Playground";

const PlaygroundPage = () => {
  return (
    <>
      <Playground/>
    </>
  );
};
export default PlaygroundPage;
export const Head = () => {
  return <SEO title="Cloud-native Playground" description="Meshery CNCF Playground - The cloud native playground for Kubernetes and all CNCF projects" />;
};