import React from "react";
import styled from "styled-components";
import Button from "../../reusecore/Button";

const BtnContainer = styled.div`
        display: flex;
        gap: 40px;
        flex-direction: row;
        justify-content: center;
        Button {
            font-size: 20px;
            color: ${(props) => props.theme.blackToWhite} !important;
            font-weight: 600;
            transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

    @media (max-width: 418px) {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 30px;
    }
`;

const DemoBtn = ({ style }) => {
  return (
    <BtnContainer className="btn" style={style} >
      <Button
        aria-label="Book a demo"
        $secondary
        $external={true}
        title="Book a demo"
        alt="Book a demo"
        $url="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3pmcApaDP4xd8hvG5fy8ylxuFxD3akIRc5vpWJ60q-HemQi80SFFAVftbiIsq9pgiA2o8yvU56?gv=true"
      />
    </BtnContainer>
  );
};

export default DemoBtn;