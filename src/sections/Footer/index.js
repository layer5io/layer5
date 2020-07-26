import React from "react";
import { Link } from "gatsby";
import { TwitterTimelineEmbed } from 'react-twitter-embed' ;

import { Container, Row, Col } from "../../reusecore/Layout";

import { FiMail, FiPhoneCall } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

import logo from "../../images/layer5/layer5-community-logo.png";
import particleOne from "../../assets/images/app/footer/footer-particle.png";

import FotterWrapper from "./footer.style";
import Language from "./languages";

const Footer = () => {
  return (
    <FotterWrapper>
      <img className="section__particle one" alt="img" src={particleOne} alt="appion app landing" />
      <Container>
        <Row>
          <Col xs={12} sm={6} lg={4}>
            <div className="footer-widgets first">
              <Link className="footer-logo" to="#">
                <img src={logo} alt="logo" />
              </Link>
              {/* <ul className="info">
                <li>
                  <FiMail />
                  <Link className="anchor" to="#">
                    contact@appion.com
                  </Link>
                </li>
                <li>
                  <FiPhoneCall />
                  <Link className="anchor" to="#">
                    +88 12345 697858
                  </Link>
                </li>
              </ul> */}
              <TwitterTimelineEmbed
              sourceType="layer5"
              screenName="Layer5"
              options={{height: 300}}
              />
            </div>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <div className="footer-widgets">
              <h3 className="widget-title">Resources</h3>
              <ul className="widget-catagory">
                <li>
                  <Link className="anchor" to="#">
                    Serivce Mesh
                  </Link>
                </li>
                <li>
                  <Link className="anchor" to="#">
                    Comparison
                  </Link>
                </li>
                <li>
                  <Link className="anchor" to="#">
                    Service Mesh Tools
                  </Link>
                </li>
                <li>
                  <Link className="anchor" to="#">
                    Service Mesh Books
                  </Link>
                </li>
                <li>
                  <Link className="anchor" to="#">
                    Service Mesh
                  </Link>
                </li>
                <li>
                  <Link className="anchor" to="#">
                    Workshops
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <div className="footer-widgets">
              <h3 className="widget-title">Community</h3>
              <ul className="widget-catagory">
                <li>
                  <Link className="anchor" to="#">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className="anchor" to="#">
                    Events
                  </Link>
                </li>
                <li>
                  <Link className="anchor" to="#">
                    Mailing List
                  </Link>
                </li>
                <li>
                  <Link className="anchor" to="#">
                    Internships
                  </Link>
                </li>
                <li>
                  <Link className="anchor-right" to="#">
                    GSOC 2020
                  </Link>
                </li>
                <li>
                  <Link className="anchor-right" to="#">
                    GSOD 2020
                  </Link>
                </li>
                <li>
                  <Link className="anchor-right" to="#">
                    Community Bridge
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={2}>
            <div className="footer-widgets">
              <h3 className="widget-title">Company</h3>
              <ul className="widget-catagory">
                <li>
                  <Link className="anchor" to="#">
                    News
                  </Link>
                </li>
                <li>
                  <Link className="anchor" to="#">
                    Brand
                  </Link>
                </li>
                <li>
                  <Link className="anchor" to="#">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link className="anchor" to="#">
                    Partners
                  </Link>
                </li>
                <li>
                  <Link className="anchor" to="#">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row className="footer-contact">
          <Col xs={12} sm={12} lg={6}>
            <p>Contact</p>
            <Row className="contactf">
              <Link className="social-icons" to="#">
                <FaFacebookF />
              </Link>
              <Link className="social-icons" to="#">
                <FaFacebookF />
              </Link>
              <Link className="social-icons" to="#">
                <FaFacebookF />
              </Link>
              <Link className="social-icons" to="#">
                <FaFacebookF />
              </Link>
              <Link className="social-icons" to="#">
                <FaFacebookF />
              </Link>
              <Link className="social-icons" to="#">
                <FaFacebookF />
              </Link>
              </Row>
          </Col>
          <Col xs={12} sm={12} lg={6}>
            <Language />
          </Col>
        </Row>
        <div className="footer-bottom">
          <ul className="footer-menu">
            <li>
              <Link className="anchor" to="#">
                Terms
              </Link>
            </li>
            <li>
              <Link className="anchor" to="#">
                Condition
              </Link>
            </li>
            <li>
              <Link className="anchor" to="#">
                Contact
              </Link>
            </li>
            <li>
              <Link className="anchor" to="#">
                Help
              </Link>
            </li>
          </ul>
          <p className="copyright-text">
            Copyright @
            <Link className="anchor" to="#">
              Devscorn 
            </Link>
             | All Right Reserved 2020
          </p>
        </div>
      </Container>
    </FotterWrapper>
  );
};

export default Footer;