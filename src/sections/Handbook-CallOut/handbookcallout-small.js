import React from "react";
import { Link } from "gatsby";
import Layer5 from "../../assets/images/layer5/layer5-only/png/layer5-light-bg.png";
import styled from "styled-components";

const HandbookCallOutWrapper = styled.div`
  border-radius: 25px;
  max-width: 70rem;
  height: 15rem;
  text-align: center;
  background-position: center;
  background: radial-gradient(circle, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.75)),
    url(${(props) => props.image});
  background-size: cover;
  margin: auto;
  margin-bottom: 3rem;

  .content {
    top: 5rem;
    padding-bottom: 1rem;
    width: 100%;

    position: relative;
    text-align: center;
    h2 {
      color: white;
      text-align: center;
      text-transform: uppercase;
      clear: both;
      margin-bottom: 0rem;
      margin-top: 2.5rem;
      font-weight: 500;
      font-size: 2.5rem;
    }
    p {
      text-align: center;
      padding: 0.1rem 0.75rem 0rem 0.75rem;
      letter-spacing: 0;
      font-size: 1rem;
      color: white;
    }
    img {
      padding: 0;
      width: 17rem;
    }
    .handbook-btn {
      text-align: center;
      margin-bottom: 0;
    }

    .logo {
      margin-top: -0.8rem;
    }
  }
  &:hover,
  &:focus {
    outline: none;
  }
  &:hover {
    transform: translateY(0.03rem);
    box-shadow: 0 2px 8px #00d3a9;
    button {
      background: #00b39f;
      color: white;
    }
  }
`;

const HandbookCallout = (props) => {
  return (
    <HandbookCallOutWrapper image={props.image}>
      <Link to="/community/handbook">
        <div className="content">
          <h2>Community Handbook</h2>
          <p>Know everything about Layer5 community </p>
          <img className="logo" src={Layer5} />
        </div>
      </Link>
    </HandbookCallOutWrapper>
  );
};

export default HandbookCallout;
