import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { HandbookWrapper } from "./Handbook.style";
import HandbookCard from "../../../components/HandbookCard/index";
import AdventuresVol from "../../../components/AdventuresVol/index";
import vol1Img from "../Adventures-of-Five/vol1/meet-five.webp";

const handbookHome = () => {
  const data = useStaticQuery(graphql`
    query AllHandbookPages {
      allMdx(
        filter: { fields: { collection: { eq: "handbook" } } }
        sort: { frontmatter: { title: ASC } }
      ) {
        nodes {
          frontmatter {
            title
            description
          }
          fields {
            slug
          }
        }
      }
    }
  `);

  const handbookPages = data.allMdx.nodes;

  return (
    <HandbookWrapper>
      <div className="page-header-section">
        <h1>Community Handbook</h1>
      </div>

      <div className="community-home-subtitle">
        <h3>Explore the Layer5 Community</h3>
      </div>

      <div className="community-home-container">

        <AdventuresVol
          title="Meet Five"
          description="Join Five as he sets off in his trusty rocketship following the trail of stars to planet Meshery."
          to="/community/adventures-of-five-and-friends"
          image={vol1Img}
        />

        {handbookPages.map((page, index) => (
          <HandbookCard
            key={index}
            title={page.frontmatter.title}
            description={page.frontmatter.description}
            to={page.fields.slug}
          />
        ))}
      </div>
    </HandbookWrapper>
  );
};

export default handbookHome;
