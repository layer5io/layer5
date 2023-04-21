import React from "react";

import SEO from "../components/seo";
import DockerMesheryPage from "../sections/Docker-Meshery";

const MesheryDocker = () => {
  return (
    <>
      <DockerMesheryPage />

    </>
  );
};
export default MesheryDocker;
export const Head = () => {
  return <SEO title="Docker Extension for Meshery"
    description="The Docker Extension for Meshery extends Docker Desktop’s position as the cloud native developer’s go-to Kubernetes environment with easy access to the next layer of cloud native infrastructure: service meshes."
    image="/images/meshery-logo-dark-text.png" />;
};