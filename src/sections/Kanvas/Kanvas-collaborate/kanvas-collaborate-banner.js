import React from "react";
import styled from "styled-components";
import Button from "../../../reusecore/Button";
import KanvasArchitecturalTransition from "../kanvas-architectural-transition";

const CollaborationBannerWrapper = styled.div`
    .banner {
        display: flex;
        flex-direction: column;
        background: ${props => props.theme.linearToLinear2};
        max-width: 1920px;
        width: 100%;
        height: fit-content;
        justify-content: space-evenly;
        align-items: center;
        position: relative;
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }

    .banner-text {
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        z-index: 1;
        padding-top: 2%;
    }

    h1 {
        position: relative;
        display: inline-block;
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        @media only screen and (min-width: 1400px) {
            font-size: 3.75rem;
        }
    }

    h4 {
        padding: 3% 0;
        color: ${props => props.theme.greyA0AAAAToGrey666666};
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        max-width: 40%;
        @media only screen and (max-width: 500px) {
            font-size: 1rem;
            max-width: 100%;
        }
        @media only screen and (max-width: 767px) {
            max-width: 100%;
        }
    }

    h5 {
        padding: 2rem 0;
    }

    p {
        padding-top: 2rem;
    }
`;

const KanvasCollaborateBanner = () => {
  return (
    <CollaborationBannerWrapper>
      <div className="banner">
        <div className="banner-text">
          <h1>
            Collaborate with the team. <br /> Build solutions together
          </h1>
          <h4>
            Designer and Operator live side-by-side, so all design work, from
            ideation to operation, can be found in one place.
          </h4>
          <Button
            $primary
            className="join-community-button"
            title="Start Collaborating"
            $url="https://kanvas.new/"
            $external={true}
          />
        </div>
        <KanvasArchitecturalTransition />
      </div>
    </CollaborationBannerWrapper>
  );
};

export default KanvasCollaborateBanner;
