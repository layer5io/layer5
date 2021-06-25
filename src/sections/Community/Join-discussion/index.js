import React from "react";
import styled from "styled-components";
import Button from "../../../reusecore/Button";


const JoinDiscussionWrapper = styled.div`
    .join-discussion{
        max-width: 70rem;
        height: 25rem;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props => props.image});
        background-size: cover;
        background-position: center;
        margin: auto;
    }
    .join-discussion_text-and_button{
        position: relative;
        top: 6.5rem;
        text-align: center;
        h1{
            color: white;
        }
        p{
            margin: auto;
            max-width: 20rem;
            color: white;
        }
        button{
            margin-top: 1.5rem;
        }
    }
`;

const JoinDiscussion = (props) => {

  return(
    <JoinDiscussionWrapper image={props.image}>
      <div className="join-discussion">
        <div className="join-discussion_text-and_button">
          <h1>{props.header ? props.header : "Join the community Discussion!"}</h1>
          <p>{props.text ? props.text : "Checkout the Layer5 community Discussion Forum to know the Trending Topics in the Community"}</p>
          {props.btn_primary ? <Button primary title="Join Our Trending Discussion" url="https://discuss.layer5.io/" external={true}/>
            : <Button secondary title="Join Our Trending Discussion" url="https://discuss.layer5.io/" external={true} />}
        </div>
      </div>
    </JoinDiscussionWrapper>
  );
};

export default JoinDiscussion;
