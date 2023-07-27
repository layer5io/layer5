import React, { Suspense } from "react";
import Loading from "../../../components/loading";
import SEO from "../../../components/seo";
import MesheryTerminal from "../../../sections/Meshery/Meshery-terminal";
const MesheryPlatforms = React.lazy(() => import ("../../../sections/Meshery/Meshery-platforms"));
const MesheryManageMesh = React.lazy(() => import ("../../../sections/Meshery/Meshery-mange-mesh"));
const MesheryQuotes = React.lazy(() => import ("../../../sections/Meshery/Meshery-quotes"));

const MesheryMainPage = () => {
  return (
    <>
      <MesheryTerminal />
      <Suspense fallback={<Loading />}>
        <MesheryPlatforms />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <MesheryManageMesh />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <MesheryQuotes />
      </Suspense>

    </>
  );
};
export default MesheryMainPage;
export const Head = () => {
  return <SEO title="Meshery Getting Started"
    description="How to get started with cloud native management. Adopting and operating your cloud native infrastructure."
    image="/images/meshery-logo-dark-text.webp" />;
};