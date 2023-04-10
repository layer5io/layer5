import React, { useEffect, useState } from "react";

import SEO from "../../components/seo";

import ServiceMeshLabs from "../../sections/Learn/Service-Mesh-Labs";
const ServiceMeshLabsPage = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  useEffect(() => {
    if (props.location.state && props.location.state.selectedIndex) {
      setSelectedIndex(props.location.state.selectedIndex);
    }
  }, []);
  return (
    <>
      <ServiceMeshLabs selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />

    </>
  );
};
export default ServiceMeshLabsPage;
export const Head = () => {
  return <SEO title="Interactive DevOps, GitOps, and Cloud Native Labs" description="Learn to manage Kubernetes and Istio with experts from Layer5. Try an interactive service mesh lab." />;
};