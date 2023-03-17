import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Footer from "../../sections/General/Footer";
import ServiceMeshLabs from "../../sections/Learn/Service-Mesh-Labs";
const ServiceMeshLabsPage = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  useEffect(() => {
    if (props.location.state && props.location.state.selectedIndex) {
      setSelectedIndex(props.location.state.selectedIndex);
    }
  }, []);
  return (
    <Layout>
      <ServiceMeshLabs selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
      <Footer />
    </Layout>
  );
};
export default ServiceMeshLabsPage;
export const Head = () => {
  return <SEO title="Interactive DevOps, GitOps, and Cloud Native Labs" description="Learn to manage Kubernetes and Istio with experts from Layer5. Try an interactive service mesh lab." />;
};