import React from "react";
import { Link } from "gatsby";

import { Container, Row, Col } from "../../../reusecore/Layout";
// import { DiAppstore } from "react-icons/di";
// import { FaGooglePlay } from "react-icons/fa";

import AppSecreenImage from "../../../assets/images/app/get-app/get-app-screen.png";
import particle1 from "../../../assets/images/app/particle/09.png";
import particle2 from "../../../assets/images/app/particle/10.png";
import particle3 from "../../../assets/images/app/particle/11.png";
import particle4 from "../../../assets/images/app/particle/13.png";

import GetAppSectionWrap from "./getAppSection.style";

const GetApp = () => {
  return (
    <GetAppSectionWrap>
      <img className="section__particle one" src={particle1} alt="img" />
      <img className="section__particle two" src={particle2} alt="img" />
      <img className="section__particle three" src={particle3} alt="img" />
      <img className="section__particle four" src={particle4} alt="img" />
      <Container>
        <Row Vcenter={true}>
          <Col xs={12} sm={6}>
            <div className="getapp-block">
              <h3>Get the app now!</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua enim
                ad minim veniam quis nostrud exercitation.
              </p>
              <div className="btn-block">
                <Link to="#" className="getapp-btn apl-btn">
                  {/* <DiAppstore /> */}
                  <p>
                    Download iphone App
                    <span>App Store</span>
                  </p>
                </Link>

                <Link to="#" className="getapp-btn">
                  {/* <FaGooglePlay /> */}
                  <p>
                    Get it On
                    <span>Google Play Store</span>
                  </p>
                </Link>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6}>
            <div className="getapp-thumb">
              <img src={AppSecreenImage} alt="get the app" />
            </div>
          </Col>
        </Row>
      </Container>
    </GetAppSectionWrap>
  );
};

export default GetApp;
