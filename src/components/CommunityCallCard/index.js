import React from "react";
import styled from "styled-components";
import { Row, Col } from "../../reusecore/Layout";
import Button from "../../reusecore/Button";
import hero from "./hero.png";

const CommunityCallCardWrapper = styled.div`
    box-shadow: 0 1px 30px 0 ${props => props.theme.shadowLightColor};
    .card-img{
        height: 12.5rem;
        width: 100%;
        object-fit: cover;
        filter: brightness(50%);
    }
    .card-text{
        margin-top: -7px;
        padding: 1.25rem;
        h4{
            font-weight: 700;
            margin-bottom: 10px;
        }
        .highlight{
            color: ${props => props.theme.secondaryColor};
        }
        p{
            line-height: 20px;
        }
        .unsubscribe{
            margin-top: 0.9375rem;
            font-size: 0.75rem;
            color: #CCCCCC;
            text-align: center;
            line-height: 10px;
        }
    }
    form {
      display: flex;
      width: 100%;

      .inputrow{
        padding: 1rem;
        width: 100%;
        background: #F5F7FA;
        border: 1px solid white;
        border-radius: 7px;
      }
      button{
          padding: 10px;
          min-width: auto;
      }
    }
`;

const CommunityCallCard = ({ hero_image }) => {

  return (
    <CommunityCallCardWrapper>
      <img className="card-img" alt="community" src={hero_image ? hero_image : hero} />
      <div className="card-text">
        <h4> Community Meeting </h4>
        <p> Layer5 hosts weekly community calls where users and contributors discuss cloud native topics and demonstrate advancements of its open source projects. </p>
        <h4 className="highlight"> Interested? </h4>
        <p> You can register below for the next Layer5 community meeting. </p>
        <Row>
          <form name="registerform" method="post" action="https://calcotestudios.us15.list-manage.com/subscribe/post?u=6b50be5aea3dfe1fd4c041d80&amp;id=6bb65defeb">
            <Col xs={7}>
              <input className="inputrow subscribe-email" type="email" placeholder="Email Address" name="EMAIL" id="mce-EMAIL" required  onInvalid={e => e.target.setCustomValidity("Please fill-in this field")} onInput={e => e.target.setCustomValidity("")} />
            </Col>
            <Col xs={3}>
              <Button secondary title="Subscribe" id="mc-embedded-subscribe" />
            </Col>
          </form>
        </Row>
        <p className="unsubscribe"> You can unsubscribe any time. No spam. </p>
      </div>
    </CommunityCallCardWrapper>
  );
};

export default CommunityCallCard;
