import React from "react";
import styled from "styled-components";
import Button from "../../reusecore/Button";

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

const KanvasBtn = ({ title, style }) => {
  return (
    <BtnContainer className="btn" style={style} >
      <Button
        $primary
        $external={true}
        title={title ? title : "Explore Kanvas"}
        alt="Explore Kanvas"
        $url="https://kanvas.new/"
      />
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

export default KanvasBtn;