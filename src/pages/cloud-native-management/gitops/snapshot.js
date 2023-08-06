import React from "react";

import SEO from "../../../components/seo";
import SnapshotPage from "../../../sections/gitops/SnapshotPage";

export default SnapshotPage;

export const Head = () => {
  return  <SEO title="Visual insights for any Kubernetes environment in every pull request"
    description="Layer5 creates a visual map of your infrastructure that stays up to date with every PR. Visualize your whole environment, see generated insights, and share a single, accurate source of truth to help quickly onboard new contributors. Layer5 MeshMap uses GitHub to generate dependencies between files and update your map to reflect changes in your codebase. We do not store your code, your code is only stored by GitHub. We analyze your code while it's on GitHub's servers using a GitHub Action."
    image="/images/meshery-logo-dark-text.png" />;
};