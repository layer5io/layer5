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

.project__block__inner { 
    background: ${props => props.theme.white};
    transition: 450ms all;
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
        <div className="project__block__inner">
          <h5>Media Contacts</h5>
          <p>Kate Suttons</p>
          <FiMail size={40} className="icon" />
          <p>press@layer5.io</p>
        </div>
      </a>
    </NewsSidebarWrapper>
  );
};

export default NewsSidebar;

