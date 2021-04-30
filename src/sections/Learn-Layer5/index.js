import React from "react";
// import { graphql, useStaticQuery } from "gatsby";
import { LearnLayer5GridWrapper } from "./learnlayer5.style";

const LearnPathsPage = () => {
  // const data = useStaticQuery(
  //                 graphql`query allLearnPath {
  //                     allMdx(
  //                         filter: {fields: {collection: {eq: "content-learn"}, slug: {glob: "/*/"}}}
  //                     ) {
  //                         nodes {
  //                             fields {
  //                                 slug
  //                                 learnpath
  //                             }
  //                         }
  //                     }
  //                 }
  //             `);

  return (
    <LearnLayer5GridWrapper>
      <div className="page-header-section">
        <h1>Learn Service Mesh</h1>
      </div>
    </LearnLayer5GridWrapper>
  );
};

export default LearnPathsPage;