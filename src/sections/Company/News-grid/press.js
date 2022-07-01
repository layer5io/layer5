import React from "react";
import styled from "styled-components";
import Button from "../../../reusecore/Button";
import { Link } from "gatsby";
import { Container, Row, Col } from "../../../reusecore/Layout";
import { FiMail } from "@react-icons/all-files/fi/FiMail";
import { GrGithub } from "@react-icons/all-files/gr/GrGithub";
import { GrLinkedin } from "@react-icons/all-files/gr/GrLinkedin";
import { GrTwitter } from "@react-icons/all-files/gr/GrTwitter";
import { GrYoutube } from "@react-icons/all-files/gr/GrYoutube";
import { FaDocker } from "@react-icons/all-files/fa/FaDocker";
import { FaDiscourse } from "@react-icons/all-files/fa/FaDiscourse";
import FiveIcon from "../../../assets/images/layer5/5 icon/svg/light/5-light-no-trim.svg";

const PressWrapper = styled.div`
padding: 2rem 0;
background: ${props => props.theme.secondaryLightColor};
h2{
    text-align: center;
    border-top: 4px solid #00b39f;
    border-bottom: 4px solid #00b39f;
    margin: 1rem 40% 2rem;
    padding: 1rem 0;
}
h4, h5{
    text-align: center;
}

.press_card { 
    background: ${props => props.theme.DarkTheme ? "#212121" : "#FFFFFF"};
    transition: 450ms all;
    height: 15rem;
    border: 1px solid ${props => props.theme.DarkTheme ? "#00D3A9" : "#E6E6E6"};
    &:hover{
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
    }
    padding: 12% 6% 12% 6%;
    border-radius: 4%;
    margin 1rem 0 3rem;
    text-align: center;
    h5{
        font-weight: 700;
        color: ${props => props.theme.secondaryColor}
    }
    p{
        font-weight: 300;
        color: ${props => props.theme.text};
    }
    @media screen and (max-width: 768px) {
        margin: 6% 15%;
        padding: 6% 10%;
        height: auto;
        }
}
.icon{
    padding: 0 0.25rem;
}
img{
    margin: 0 0 0.5rem;
}
`;



const Press = () => {
  return (
    <PressWrapper>
      <Container>
        <h2>Media Resources</h2>
        <h4>For any press or analyst inquiries, please reach out:</h4>
        <Row>
          <Col xs={12} md={4}>
            <a href="mailto:press@layer5.io" target="_blank" rel="noreferrer">
              <div className="press_card">
                <h5>Media Contacts</h5>
                <p>Kate Suttons</p>
                <FiMail size={40} />
                <p>press@layer5.io</p>
              </div>
            </a>
          </Col>
          <Col xs={12} md={4}>
            <Link to="/brand">
              <div className="press_card">
                <h5>Brand Kit</h5>
                <p>Get our brand, logo assets and more.</p>
                <img src={FiveIcon} alt="Five Logo" height={30} /> <br />
                <Link to="/brand">
                  <Button secondary title="Layer5 brand kit" external={true} />
                </Link>
              </div>
            </Link>
          </Col>
          <Col xs={12} md={4}>
            <div className="press_card">
              <h5>Follow Us</h5>
              <p>On Social Media</p>
              <a href="https://www.linkedin.com/company/layer5"><GrLinkedin size={40} className="icon" /></a>
              <a href="https://twitter.com/layer5"><GrTwitter size={40} className="icon" /></a>
              <a href="https://www.youtube.com/channel/UCFL1af7_wdnhHXL1InzaMvA?sub_confirmation=1"><GrYoutube size={45} className="icon" /></a>
              <br />
              <a href="https://github.com/layer5io"><GrGithub size={45} className="icon" /></a>
              <a href="https://discuss.layer5.io/"><FaDiscourse size={40} className="icon" /></a>
              <a href="https://hub.docker.com/u/layer5/"><FaDocker size={45} className="icon" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </PressWrapper>
  );
};

export default Press;
