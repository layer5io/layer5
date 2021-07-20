import React from "react";
import styled from "styled-components";
import Button from "../../../reusecore/Button";

const JoinCommunityWrapper = styled.div`
  .join-community {
    max-width: 70rem;
    height: 25rem;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${(props) => props.image});
    background-size: cover;
    background-position: center;
    margin: auto;
    margin-bottom: 2.5rem;
  }
  .join-community_text-and_button {
    position: relative;
    top: 6.5rem;
    text-align: center;
    h1 {
      color: white;
    }
    p {
      margin: auto;
      max-width: 20rem;
      color: white;
    }
    button {
      margin-top: 1.5rem;
    }
  }
  .callout {
    display: grid;
  }
`;

const JoinCommunity = (props) => {
  return (
    <JoinCommunityWrapper image={props.image}>
      <div className="join-community">
        <div className="join-community_text-and_button">
          <h1>{props.header ? props.header : "Join the community!"}</h1>
          <p>
            {props.text
              ? props.text
              : "Checkout the Layer5 community by joining us on Slack and Our Discussion Forum"}
          </p>
          <div className="callout">
            {props.btn_primary ? (
              <Button
                primary
                title="Join Our Talented Slack Community"
                url="http://slack.layer5.io/"
                external={true}
              />
            ) : (
              <Button
                secondary
                title="Join Our Talented Slack Community"
                url="http://slack.layer5.io/"
                external={true}
              />
            )}
            {props.btn_primary ? (
              <Button
                primary
                title="Join Our Trending Discussion Forum"
                url="https://discuss.layer5.io/"
                external={true}
              />
            ) : (
              <Button
                secondary
                title="Join Our Trending Discussion Forum"
                url="https://discuss.layer5.io/"
                external={true}
              />
            )}
          </div>
        </div>
      </div>
    </JoinCommunityWrapper>
  );
};

export default JoinCommunity;
