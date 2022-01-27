import React from "react";

import { Container, Row, Col } from "../../../reusecore/Layout";
import SectionTitle from "../../../reusecore/SectionTitle";
import Button from "../../../reusecore/Button";
import VintageBox from "../../../reusecore/VintageBox";

import { FaPlay } from "@react-icons/all-files/fa/FaPlay";
import { FaDownload } from "@react-icons/all-files/fa/FaDownload";

import AppScreenImage from "../../../assets/images/classic/app-screen.png";
import AppScreenThumb1 from "../../../assets/images/classic/app-screen-thumb-1.png";
import AppScreenThumb2 from "../../../assets/images/classic/app-screen-thumb-2.png";

import BannerSectionWrapper from "./banner.style";

const BannerClassic = () => {
  return (
    <BannerSectionWrapper>
      <Container>
        <Row Vcenter={true}>
          <Col sm={12} sm={7}>
            <SectionTitle
              className="section-title"
              leftAlign={true}
              UniWidth="100%"
            >
              <h4>
                {" "}
                <span> 50% </span> off for new users for 1 month
              </h4>
              <h1>
                Drive Customers Passing Your Appslife With <span>Appion</span>
              </h1>
            </SectionTitle>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad
              minim veniam quis nostrud exercitation.
            </p>

            <VintageBox right={true} vintageOne={true}>
              <Button className="banner-btn one" title="View on Google Play">
                <FaDownload className="icon-left" />
              </Button>
              <Button className="banner-btn two" title="Watch Now">
                <FaPlay className="icon-left" />
              </Button>
            </VintageBox>
          </Col>

          <Col sm={12} sm={5}>
            <div className="app-screen-image-wrapper">
              <img src={AppScreenImage} alt="prime app screen" />
              <div className="thumb one">
                <img src={AppScreenThumb1} alt="prime app screen" />
              </div>
              <div className="thumb two">
                <img src={AppScreenThumb2} alt="prime app screen" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </BannerSectionWrapper>
  );
};

export default BannerClassic;
