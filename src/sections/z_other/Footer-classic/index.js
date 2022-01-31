import React from "react";
import { Link } from "gatsby";

// import {
//   FaFacebookF,
//   FaTwitter,
//   FaLinkedinIn,
//   FaEnvelope,
//   FaPinterestP,
//   FaInstagram
// } from "react-icons/fa";

import { Container, Row, Col } from "../../../reusecore/Layout";
import Button from "../../../reusecore/Button";
import ParticleComponent from "../../../reusecore/Particle";

import logo from "../../Footer/images/footer-logo-two.svg";

import FooterBGTwo from "../../Footer/images/footer-particle-two.png";

import FooterWrapper from "./footer.style";

const FooterClassic = () => {
  return (
    <FooterWrapper>
      <img src={FooterBGTwo} alt="img" className="section__particle one" />
      <ParticleComponent />
      <Container>
        <Row>
          <Col xs={12} sm={6} lg={3}>
            <div className="footer-widgets first">
              <Link to="#" className="footer-logo">
                <img src={logo} alt="logo" />
              </Link>
              <form className="subscribe-form">
                <input type="text" placeholder="Search here..." />
                <Button>
                  {/* <FaEnvelope /> */}
                </Button>
              </form>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={2}>
            <div className="footer-widgets">
              <h3 className="widget-title">Download</h3>
              <ul className="widget-catagory">
                <li>
                  <Link to="#">Company</Link>
                </li>
                <li>
                  <Link to="#">Android App</Link>
                </li>
                <li>
                  <Link to="#">ios App</Link>
                </li>
                <li>
                  <Link to="#">Desktop</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <div className="footer-widgets">
              <h3 className="widget-title">Help</h3>
              <ul className="widget-catagory">
                <li>
                  <Link to="#">FAQ</Link>
                </li>
                <li>
                  <Link to="#">Privecy</Link>
                </li>
                <li>
                  <Link to="#">Reporting</Link>
                </li>
                <li>
                  <Link to="#">Terms & Condition</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={4}>
            <div className="footer-widgets">
              <h3 className="widget-title">Follow US</h3>
              <ul className="social">
                <li>
                  <Link to="#">
                    {/* <FaFacebookF /> */}
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    {/* <FaTwitter /> */}
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    {/* <FaInstagram /> */}
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    {/* <FaLinkedinIn /> */}
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    {/* <FaPinterestP /> */}
                  </Link>
                </li>
              </ul>
              <p className="copyright-text">
                Copyright &#169; 2020 Design By
                <Link to="#">Devscorn</Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </FooterWrapper>
  );
};

export default FooterClassic;
