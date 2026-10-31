import React from "react";
import { Link } from "gatsby";

import SEO from "../../../components/seo";

import Kanvas from "../../../sections/Kanvas/index";
const KanvasPage = ({ location }) => {
  const params = new URLSearchParams(location.search);
  const parameter1 = params.get("teaser");
  return (
    <>
      <Kanvas teaser={parameter1 === "play"} />
      <p style={{ textAlign: "center", margin: "2rem 1rem" }}>
        Compare Kanvas with{" "}
        <Link to="/cloud-native-management/kanvas-vs-lucidchart-diagrams-net">
          Lucidchart and diagrams.net
        </Link>{" "}
        for collaborative cloud infrastructure diagramming.
      </p>
    </>
  );
};
export default KanvasPage;
export const Head = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Kanvas",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    url: "https://www.kanvas.new",
    author: {
      "@type": "Organization",
      name: "Layer5",
      url: "https://layer5.io",
    },
    description:
      "A collaborative cloud infrastructure diagramming tool for engineering teams. Design, review, and deploy Kubernetes and multi-cloud infrastructure visually, with GitOps reviews and live cluster operation.",
  };
  return  <SEO
    title="Kanvas | Collaborative Cloud Infrastructure Diagramming Tool for Engineering Teams"
    description="Kanvas is a collaborative cloud infrastructure diagramming tool for engineering teams. Design, review, and deploy Kubernetes and multi-cloud infrastructure visually, with GitOps reviews and live cluster operation."
    keywords={["Kanvas", "collaborative diagramming tool", "cloud infrastructure diagramming", "Kubernetes diagram tool", "Lucidchart alternative", "diagrams.net alternative", "Layer5"]}
    schemaMarkup={schema}
  />;
};
