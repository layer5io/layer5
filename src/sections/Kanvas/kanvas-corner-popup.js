import React from "react";
import CornerPopup from "../../components/Corner-popup";
import KanvasArchitecturalTransition from "./kanvas-architectural-transition";
import styled from "styled-components";

const TransitionWrapper = styled.div`
    .popup-container {
        background: ${props => props.theme.linearToLinear2};
        overflow: hidden;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        border-radius: 12px;
    }

    .popup-text {
        display: flex;
        gap: 0;
        flex-direction: column;
        text-align: center;
        z-index: 1;
        padding-top: 2%;
    }

    h1 {
        display: inline-block;
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        font-size: 1.8rem;
    }

    h4 {
        padding: 3% 0;
        color: ${props => props.theme.greyA0AAAAToGrey666666};
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        @media only screen and (max-width: 500px) {
            font-size: 1rem;
            max-width: 100%;
        }
        @media only screen and (max-width: 767px) {
            max-width: 100%;
        }
    }

    .try-it-text {
        z-index: 1;
        padding: 1rem 2rem 2rem;
        text-align: center;
        font-size: 1.1rem;

        span {
            color: ${props => props.theme.greyA0AAAAToGrey666666};
        }

        strong {
            color: #FFFFFF;
            font-weight: 600;
            font-size: 1.5rem
        }
    }
`;

const KanvasCornerPopup = () => {
  return (
    <CornerPopup storageKey="kanvasShowPopup" content={
      <TransitionWrapper>
        <div className="popup-container">
          <div className="popup-text">
            <h4>
              Build solutions together
            </h4>
            <h1>
              Collaborate with the team
            </h1>
          </div>
          <KanvasArchitecturalTransition/>
          <div className="try-it-text">
            <span>Try it now at </span>
            <strong>kanvas.new</strong>
          </div>
        </div>
      </TransitionWrapper>
    } link="https://kanvas.new/" text="Access Kanvas"/>
  );
};

export default KanvasCornerPopup;
