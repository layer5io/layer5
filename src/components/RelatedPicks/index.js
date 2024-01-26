import React from "react";
import { Container, Wrapper, CardWrapper, CardImageContainer, Image, CardTitle } from "./style";

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

const RelatedPicks = ({ content }) => {

  return (
    <>
      <Container>
        <h2>Other Supported Platforms</h2>
        <Wrapper>
          {
            content.map(item => (
              <Card key={item.id} title={item.title} imgSrc={item.imgSrc} redirectLink={item.redirectLink}/>
            ))
          }
        </Wrapper>
      </Container>
    </>
  );
};

export default RelatedPicks;