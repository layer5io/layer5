import React from "react";
import styled from "styled-components";
import {Row} from "../../reusecore/Layout";
import Button from "../../reusecore/Button";
import hero from "./hero.png";


const CommunityCallCardWrapper = styled.div`
    box-shadow: 0 1px 10px 0 gray;
    margin: 100px 0 0 30px;
    width: 500px;
    .card-img{
        height: 200px;
        width: 500px;
        object-fit: cover;
        filter: brightness(50%);
    }
    .card-text{
        margin-top: -7px;
        padding: 20px;
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
            margin-top: 15px;
            font-size: 12px;
            color: #CCCCCC;
            text-align: center;
            line-height: 10px;
        }
    }
    input{
        margin: 0 10px 0 15px;
        padding: 15px;
        width: 325px;
        background: #F5F7FA;
        border: 1px solid white;
        border-radius: 7px;
    }
    button{
        padding: 10px;
        min-width: 50px;
    }
`;

const CommunityCallCard = ({hero_image}) => {

  return(
    <CommunityCallCardWrapper>
      <img className="card-img" alt="community" src={hero_image ? hero_image : hero} />
      <div className="card-text">
        <h4> Community Call </h4>
        <p> Layer5 hosts official monthly community calls where users and contributors can discuss about any topic and demonstrate  use-cases. </p>
        <h4 className="highlight"> Interested? </h4>
        <p> You can register below for the next Community Call. </p>
        <Row>
          <input type="text" placeholder="Your Email Address" />
          <Button secondary title="Subscribe" />
        </Row>
        <p className="unsubscribe"> You can unsubscribe any time. No spam. </p>
      </div>
    </CommunityCallCardWrapper>
  );
};

export default CommunityCallCard;
