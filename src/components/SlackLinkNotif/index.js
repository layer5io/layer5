import React from "react";
import styled from "styled-components";
import Button from "../../reusecore/Button";

const SlackNotif = styled.div`
    color: #000000;
    .container {
        background-color: #FFF7D8;
        padding: 16px 0px 16px 0px;
    }

    .text {
        text-align: center;
    }

    .notice {
      background-color: #00B39F;
      border-radius: 50%;
      color: white;
      padding: 1px 10px;
      font-weight: 700;
    }
`;

const SlackLinkNotif = () => {

  return (
    <SlackNotif>
      <div className="container">
        <div className="text"><span className="notice"> !</span> If you have not already joined us in Slack, jump in! <Button secondary title="Join Now" url="https://slack.layer5.io/" external={true}/></div>
      </div>
    </SlackNotif>
  );
};

export default SlackLinkNotif;
