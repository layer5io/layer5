import React from "react";
import { Link } from "gatsby";

import { Container, Row, Col } from "../../../reusecore/Layout";
import SectionTitle from "../../../reusecore/SectionTitle";
import Button from "../../../reusecore/Button";
import VintageBox from "../../../reusecore/VintageBox";
import BGImg from "../../../components/BGImage";
import ReactPlayer from "react-player/youtube";
import mesheryPlayground from "./meshery-playground-meshmap.png";

import { FaMapMarkedAlt } from "@react-icons/all-files/fa/FaMapMarkedAlt";
import { BsArrowUpRight } from "@react-icons/all-files/bs/BsArrowUpRight";

import Banner1SectionWrapper from "./banner4.style";

import meshmapVideo from "../../../assets/video/meshery/meshmap/meshmap-short-consul.mp4";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import useHasMounted from "../../../utils/useHasMounted";

const Banner1 = (props) => {

  const { heroImage } = useStaticQuery(
    graphql`
      query {
        heroImage: file(
          relativePath: { eq: "poster.webp" }
        ) {
          childImageSharp {
            gatsbyImageData(
              width: 2000
              quality: 50
              webpOptions: { quality: 70 }
              breakpoints: [760]
            )
          }
        }
      }
    `
  );

  const pluginImage = getImage(heroImage);

  const hasMounted = useHasMounted();

  return (
    <Banner1SectionWrapper {...props}>
      <BGImg title="heroImage" image={pluginImage}>
        <Row>
          <Col sm={4} lg={6} className="section-title-wrapper text-col">
            <Container fullWidthSM>
              <SectionTitle
                className="section-title"
                leftAlign={true}
                UniWidth="100%"
              >
                <h1>Take the blinders off</h1>
                <h2>
                  cloud native management
                </h2>
              </SectionTitle>
              <span className="vintage-box-container">
                <VintageBox right={true} vintageOne={true}>
                  <Button primary className="banner-btn one" title="Learn about MeshMap" url="/cloud-native-management/meshmap">
                    <FaMapMarkedAlt size={21} className="icon-left" />
                  </Button>
                  <Button secondary className="banner-btn two" title="Open in Playground" url="https://play.meshery.io">
                    <BsArrowUpRight size={21} className="icon-left" />
                  </Button>
                </VintageBox>
              </span>
            </Container>
          </Col>
          {hasMounted && window.innerWidth > 760 && (
            <Col sm={4} lg={6} className="section-title-wrapper video-col">
              <ReactPlayer
                url="https://youtu.be/Do7htKrRzDA"
                playing
                controls
                light={mesheryPlayground}
                width="90%"
                style={{ margin: "auto" }}
                className="embedVideo"
              />
              {/* <Link to="/cloud-native-management/meshmap">
                <video autoPlay muted loop preload="metadata" className="meshmapVideo">
                  <source src={meshmapVideo} type="video/mp4"></source>
                </video>
              </Link> */}
            </Col>
          )}
        </Row>
      </BGImg>
    </Banner1SectionWrapper>
  );
};

export default Banner1;
