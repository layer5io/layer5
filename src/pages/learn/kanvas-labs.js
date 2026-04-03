import React, { useEffect, useState } from "react";

import SEO from "../../components/seo";

import KanvasLabs from "../../sections/Learn/Kanvas-Labs";
const KanvasLabsPage = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  useEffect(() => {
    if (props.location.state && props.location.state.selectedIndex) {
      setSelectedIndex(props.location.state.selectedIndex);
    }
  }, []);
  return (
    <>
      <KanvasLabs selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />

    </>
  );
};
export default KanvasLabsPage;
export const Head = () => {
  return <SEO title="Interactive DevOps, GitOps, and Cloud Native Labs" description="Learn to manage Kubernetes, Prometheus, Meshery and all CNCF projects with experts from Layer5. Try an interactive cloud native lab." />;
};