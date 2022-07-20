import React from "react";
import styled from "styled-components";
import Button from "../../../reusecore/Button";
import { FiDownloadCloud } from "@react-icons/all-files/fi/FiDownloadCloud";
import { FiMail } from "@react-icons/all-files/fi/FiMail";
import { Link } from "gatsby";

const NewsSidebarWrapper = styled.div`
  
Button{
    margin: 0 0 1rem ;
    @media screen and (max-width: 768px) {
        display: block;
        margin: 1rem auto;
        }
}
.icon{
    display: block;
    margin: auto;
}

.media_block { 
    background: ${props => props.theme.white};
    transition: 450ms all;
    margin-bottom: 1rem;
    border: 1px solid ${props => props.theme.shadowLightColor};
    &:hover{
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
    }
    padding: 12% 6% 12% 6%;
    border-radius: 4%;
    text-align: center;
    h5{
        font-weight: 700;
        color: ${props => props.theme.secondaryColor}
    }
    p{
        font-weight: 300;
        color: ${props => props.theme.black};
    }
    @media screen and (max-width: 768px) {
        margin: 6% 15%;
        padding: 6% 10%;
        }
}

  .cta{
    box-shadow: 0 5px 16px 1px rgba(0, 0, 0, 0.1);
    margin: 1rem auto 2rem;
    border-top: solid 3px #00b39f;
    border-radius: 2px;
    padding: 1rem;
    @media screen and (max-width: 768px) {
      margin: 6% 15%;
      padding: 6% 10%;
      }

    .cta_heading {
      font-weight: 600;
      text-align: center;
  }

  .cta_body {
      display: flex;
      flex-direction: column;

      .cta_heading-heading {
          filter: invert(0.5);
          flex: 0 0 70%;
          text-align: center;
          font-size: 1.1rem;
      }
      .btn {
        min-width: 100%;
    }
  }

  @media (min-width: 510px) {
    .cta_heading {
      text-align: left;
    }
      .cta_body {
          .cta_heading-heading {
              margin-bottom: 1rem;
              margin-top: 1rem;
              text-align: left;
          }
      }
  }
}
`;

const NewsSidebar = (props) => {
  return (
    <NewsSidebarWrapper>
      {props.kit ?
        <a href={props.kit}>
          <Button primary title="Press Kit" external={true}>
            <FiDownloadCloud size={21} className="icon-left" />
          </Button>
        </a> : ""}
      <Link to="/brand">
        <Button secondary title="Layer5 brand kit" external={true} />
      </Link>
      <a href="mailto:press@layer5.io" target="_blank" rel="noreferrer">
        <div className="media_block">
          <h5>Media Contacts</h5>
          <p>Kate Suttons</p>
          <FiMail size={40} className="icon" />
          <p>press@layer5.io</p>
        </div>
      </a>
      <Link to="/meshmap">
        <div className="cta">
          <h4 className="cta_heading">
        MeshMap
          </h4>
          <div className="cta_body">
            <h3 className="cta_heading-heading">
            Your friendly cloud native visual editor.
            </h3>
            <div className="chapter-link">
              <Button primary title="Try Now!"
                className="btn"
                url="/meshmap"
                external={false} />
            </div>
          </div>
        </div>
      </Link>
    </NewsSidebarWrapper>
  );
};

export default NewsSidebar;

