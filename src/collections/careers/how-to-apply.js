import React from "react";
import styled from "styled-components";
import job_icon from "./jobs_black.svg";

export const PositionApplyWrapper = styled.div`
    text-align: center;
    .pos-logo{
        width: 2.25rem;
        filter: invert(${(props) => props.theme.meshInterfaceLogoFilter});
        margin: 0 0.5rem;
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }

    .apply-now {
        border: 2px solid ${props => props.theme.secondaryColor};
        border-radius: 0.25rem;
        padding-top: 0.5rem;
        width: 60%;
        margin: auto;
        h5 {
          transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
    }

    .apply{
        display:flex;
        justify-content: center;
        align-items: center;
    }
    .back-button{
        padding: 0.75rem;
        margin: 1.5rem;
    }
    .back-arrow{
        margin-right: 5px;
    }
`;

const PositionApply = () => {
  return (
    <PositionApplyWrapper>
      <div className="apply-now">
        <div className="apply">
          <img src={job_icon} alt="job-icon" className="pos-logo"/>
          <h5>How to Apply</h5>
        </div>
        <p>Submit your resume and a short cover letter to:
          <a href="mailto:jobs@layer5.io"> jobs@layer5.io</a>
        </p>
      </div>
    </PositionApplyWrapper>
  );
};

export default PositionApply;
