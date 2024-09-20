import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Container, Wrapper, CardWrapper, CardImageContainer, Image, CardTitle } from "./style";
import { useStyledDarkMode } from "../../theme/app/useStyledDarkMode";

import { Link } from "gatsby";

const Card = ({ title, imgSrc, redirectLink }) => {
  return (
    <>
      <Link to={redirectLink}>
        <CardWrapper>
          <CardImageContainer>
            <Image src={imgSrc} alt="gcp architecture diagram" />
          </CardImageContainer>
          <CardTitle>{title}</CardTitle>
        </CardWrapper>
      </Link>
    </>
  );
};

const RelatedPicks = ({ heading }) => {
  const { isDark } = useStyledDarkMode();

  const data = useStaticQuery(
    graphql `query allUseCases {
      allMdx(
        filter: {fields: {collection: {eq: "use-cases"}}, frontmatter: {category: {eq: "supportedplatform"}}}
      ) {
        nodes {
          id
          frontmatter {
            title
            redirectLink
            darkimgsrc {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
              extension
              publicURL
            }
            lightimgsrc {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
              extension
              publicURL
            }
            category
          }
        }
      }
    }`
  );

  return (
    <>
      <Container>
        <h2>Other Supported Platforms</h2>
        <Wrapper>
          {
            data.allMdx.nodes
              .filter(item => item.frontmatter.title.split(" ")[0].toLowerCase() !== heading)
              .map(item => (
                <Card key={item.id} title={item.frontmatter.title} imgSrc={ isDark ? item.frontmatter.darkimgsrc.publicURL : item.frontmatter.lightimgsrc.publicURL } redirectLink={item.frontmatter.redirectLink}/>
              ))
          }
        </Wrapper>
      </Container>
    </>
  );
};

export default RelatedPicks;