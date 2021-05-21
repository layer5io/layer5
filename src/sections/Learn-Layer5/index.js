import React from "react";
import { LearnLayer5GridWrapper , CardComponentWrapper} from "./learnlayer5.style";
import { graphql, useStaticQuery } from "gatsby";
import CardComponent from "../../components/Learn-Components/Card-Component";
import Info from "./Info/index";

const LearnPathsPage = () => {
  const data = useStaticQuery(graphql`query allLearnPath {
    allMdx(
        filter: {fields: {collection: {eq: "content-learn"}, slug: {glob: "/*/"}}}
    ) {
        nodes {
            id,
            frontmatter{
              title,
              description,
              themeColor,   
              learningPaths                 
              cardImage{
                childImageSharp {
                  gatsbyImageData(width: 200, layout: CONSTRAINED)
                }
                extension
                publicURL
              },
              status
            }
            fields {
                slug
                learnpath
            }
        }
    }
}
`);

  return (
    <LearnLayer5GridWrapper>
      <CardComponentWrapper>
        <div>
          <h1>Learning Paths</h1>
          <div className="">
            <p>Learn how to service mesh.Learn how to run</p>
            <p>Meshery, install Istio and deploy a sample app</p>
          </div>
        </div>
        <div className="learning-paths">
          {
            data.allMdx.nodes.map((tutorial,index) => (
              <CardComponent tutorial={tutorial} key={index} />
            ))
          }
        </div>
      </CardComponentWrapper>
      <Info/>
    </LearnLayer5GridWrapper>
  );
};

export default LearnPathsPage;