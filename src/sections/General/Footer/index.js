import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "../../../reusecore/Layout";
import logo from "../../../assets/images/layer5/layer5-only/svg/layer5-light-bg.svg";
import SocialLinksColor from "../../../components/SocialLinks-Color";
import Button from "../../../reusecore/Button";
import FooterWrapper from "./footer.style";
import bubblesElement from "./images/bubbles-element.svg";

const Footer = () => {
  var currentYear = new Date().getFullYear();
  return (
    <FooterWrapper>
      <img
        className="section__particle"
        src={bubblesElement}
        alt="Layer5, the cloud native management company"
      />
      <Container>
        <Row className="footer-head">
          <Col className="footer_logo-icons" sm={3}>
            <Link to="/">
              <img src={logo} className="footer-logo" alt="logo" />
            </Link>
          </Col>
          <Col className="footer_logo-icons" sm={9}>
            <SocialLinksColor />
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={3}>
            <p className="desc-info">
              An empowerer of engineers, Layer5 helps you extract more value from your infrastructure.
              Creator and maintainer of service mesh standards. Maker of Meshery, the cloud native management plane.
            </p>
          </Col>
          <Col className="sections_col" xs={12} lg={9}>
            <Row>
              <div className="footer-sections odd-col">
                <h3 className="section-title">
                  <Link className="title-link" to="/resources">
                    RESOURCES
                  </Link>
                </h3>
                <ul className="section-categories">
                  <li>
                    <Link
                      className="category-link"
                      to="/learn/learning-paths"
                    >Learning Paths
                    </Link>
                  </li>
                  <li>
                    <Link className="category-link" to="/resources">
                      Resource Library
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="category-link"
                      to="/learn/service-mesh-books"
                    >
                      Service Mesh Books
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="category-link"
                      to="/learn/service-mesh-workshops"
                    >
                      Service Mesh Workshops
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="category-link"
                      to="/service-mesh-landscape"
                    >
                      Service Mesh Comparison
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="category-link"
                      to="/learn/service-mesh-labs"
                    >
                      Service Mesh Interactive Labs
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="footer-sections even-col">
                <h3 className="section-title">
                  <Link className="title-link" to="/community">
                    COMMUNITY
                  </Link>
                </h3>
                <ul className="section-categories">
                  <li>
                    <Link className="category-link" to="/blog">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link className="category-link" to="/community/events">
                      Events
                    </Link>
                  </li>
                  <li>
                    <a
                      className="category-link"
                      href="https://discuss.layer5.io"
                    >
                      Forum
                    </a>
                  </li>
                  <li>
                    <Link className="category-link" to="/company/faq">
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link className="category-link" to="/careers/programs">
                      Internship Programs
                    </Link>
                  </li>
                  <li>
                    <Link className="category-link" to="/community/handbook/writing-program">
                      Writing Program
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="footer-sections odd-col">
                <h3 className="section-title">
                  <Link className="title-link" to="/projects">
                    SOLUTIONS
                  </Link>
                </h3>
                <ul className="section-categories">
                  <li>
                    <Link
                      className="category-link"
                      to="/cloud-native-management/meshmap"
                    >
                      MeshMap
                      <span className="new-label">NEW</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="category-link"
                      to="/service-mesh-management/meshery"
                    >
                      Meshery
                    </Link>
                  </li>
                  <li>
                    <Link className="category-link" to="/projects/nighthawk">
                      Nighthawk
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="category-link"
                      to="/docker-extension-meshery"
                    >
                      Docker Extension
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="category-link"
                      to="/projects/service-mesh-interface-conformance"
                    >
                      Service Mesh Interface
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="category-link"
                      to="/projects/service-mesh-performance"
                    >
                      Service Mesh Performance
                    </Link>
                  </li>

                </ul>
              </div>
              <div className="footer-sections even-col">
                <h3 className="section-title">
                  <Link className="title-link" to="/company/about">
                    COMPANY
                  </Link>
                </h3>
                <ul className="section-categories">
                  <li>
                    <Link className="category-link" to="/company/news">
                      News
                    </Link>
                  </li>
                  <li>
                    <Link className="category-link" to="/company/brand">
                      Brand
                    </Link>
                  </li>
                  <li>
                    <Link className="category-link" to="/pricing">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link className="category-link" to="/careers">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link className="category-link" to="/partners">
                      Partners
                    </Link>
                  </li>
                  <li>
                    <Link className="category-link" to="/company/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </Row>
            <Row className="subscribe">
              <form
                name="contactform"
                method="post"
                action="https://calcotestudios.us15.list-manage.com/subscribe/post?u=6b50be5aea3dfe1fd4c041d80&amp;id=6bb65defeb"
              >
                <div>
                  <span>Subscribe to our Newsletter</span>
                  <input
                    className="inputrow subscribe-email"
                    type="email"
                    placeholder="Email Address"
                    name="EMAIL"
                    id="mce-EMAIL"
                    onInvalid={e => e.target.setCustomValidity("Please fill-in this field")}
                    onInput={e => e.target.setCustomValidity("")}
                    required
                  />
                  <Button
                    secondary
                    title="Subscribe"
                    id="mc-embedded-subscribe"
                  />
                </div>
              </form>
            </Row>
          </Col>
        </Row>
        <Row>
          <div className="footer-bottom">
            <p className="copyright-text">
              {currentYear} Copyright ©Layer5, Inc | All Rights Reserved
            </p>
            <ul className="policies">
              <li>
                <a
                  href="https://layer5.statuspage.io"
                  target="_blank"
                  rel="noreferrer"
                >
                  Status
                </a>
              </li>
              <li>
                <a
                  href="/company/legal/privacy"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="/company/legal/terms-of-service"
                >
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </Row>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
