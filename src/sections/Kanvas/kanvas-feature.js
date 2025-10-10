import React from "react";
import styled from "styled-components";
import Button from "../../reusecore/Button";
import { Container } from "../../reusecore/Layout";

const KanvasSectionWrapper = styled.div`
    .heading-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    background: linear-gradient(123deg, #00b39f 60%, #00d3a9 100%);
    margin-bottom: 1rem;
  }
    border: 1.5px solid ${(props) => props.theme.green00B39FToGreyB3B3B3};

  h2 {
    text-align: center;
    color: white;
    text-transform: uppercase;
    margin: 0 0 1rem 0;
    font-size: 1.8rem;
  }

  .description-section {
    background-color: ${(props) => props.theme.whiteToSecondaryColor};
    margin: 0 auto;
    max-width: 800px;
  }

  p.caption {
    font-style: normal;
    font-family: 'Qanelas Soft', sans-serif;
    font-weight: 300;
    font-size: 1.5rem;
    line-height: 2.125rem;
    text-align: center;
    color: ${(props) => props.theme.whiteToSecondaryColor};
    margin: 0 0 1.5rem 0;
  }
`;
const BtnContainer = styled.div`
        display: flex;
        gap: 40px;
        flex-direction: row;
        justify-content: center;
        Button {
            font-size: 18px;
        }

    @media (max-width: 418px) {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 30px;
    }
`;

const KanvasFeatures = ({ style }) => {
  return (
    <KanvasSectionWrapper>
      <div className="heading-section">
        <h2>Discover Kanvas Capabilities</h2>
      </div>
      <Container className="description-section">
        <p className="caption">
          Design and manage your infrastructure with Kanvas’s intuitive
          drag-and-drop interface. Watch
          the video to explore freestyle composition and powerful cluster management and learn more about Kanvas.
        </p>
        <BtnContainer className="btn" style={style} >
          <Button
            $primary
            $external={true}
            title="Watch Kanvas in Action"
            alt="Watch Kanvas Video"
            $url="https://docs.layer5.io/videos/"
          />
        </BtnContainer>
      </Container>
    </KanvasSectionWrapper>
  );
};

export default KanvasFeatures;