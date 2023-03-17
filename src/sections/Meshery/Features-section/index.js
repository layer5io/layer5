import React from "react";
import { Row, Col } from "../../../reusecore/Layout";
import Button from "../../../reusecore/Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide1 from "../images/service mesh performance example.gif";
import Slide2 from "../images/meshery_benchmark_screen.png";
import Slide3 from "../images/meshery-configuration-management.png";
import FeaturesSectionWrapper from "./features-section.style";
import { StaticImage } from "gatsby-plugin-image";

const slide2Path = "../images/meshery_benchmark_screen.png";
const slide3Path = "../images/meshery-configuration-management.png";

const slides_list = [Slide1, Slide2, Slide3];

const FeaturesSection = () => {

  var settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={slides_list[i]} height="100%" width="100%" loading="lazy" alt={"slide-img" + [i]}/>
        </a>
      );
    },
    infinite: false,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    vertical: true,
    verticalSwiping: true
  };

  return (
    <FeaturesSectionWrapper>
      <div className="skw">
        <div className="rect-1-left"></div>
        <div className="rect-2-left"></div>
        <div className="rect-3-right"></div>
        <div className="rect-4-right"></div>
      </div>
      <div className="section-data">
        {/* <div className="meshery-logo">
          <img src={meshery_logo} alt="Meshery Logo" />
        </div> */}
        <div className="section-header">
          <h2>Distributed systems are hard.</h2>
          <h1>Get the <span>most out</span> of yours</h1>
          {/* <h1>
            <span>Meshery</span> supports the most service meshes.
          </h1> */}
          <p>
            No matter where you run your workloads, Meshery just works.
          </p>
        </div>
        <div className="smp-section">
          {/* <h4>No matter what service mesh you use, Meshery just works.</h4> */}
          <Row className="smp-section-row">
            <Col xs={12} xl={4} className="smp-section-data">
              <h3>The Performance Yardstick: MeshMark</h3>
              <p>
                Assess the value of your service mesh in context of its cost. Benchmark and manage the performance of your          application across different service meshes. Compare and manage service mesh overhead.
              </p>
            </Col>
            <Col xs={12} xl={8} className="smp-section-caraousel">
              <Slider {...settings}>
                <div>
                  <img src={Slide1} alt="Slide 1" width="1918px" height="978px" loading="lazy" />
                </div>
                <div>
                  <StaticImage src={slide2Path} alt="Slide 2" imgStyle={{ height: "1348px" ,width: "2652px" }} loading="lazy" />
                </div>
                <div>
                  <StaticImage src={slide3Path} alt="Slide 3" imgStyle={{ width: "3164px", height: "2004px" }} loading="lazy"  />
                </div>
              </Slider>
            </Col>
          </Row>
        </div>
        <div className="mesh-mngmnt">
          <div>
            <h4>One step to managing your microservices</h4>
            <h1>Cloud Native Application Management</h1>
            <p>Confidently take full advantage of all that your infrastructure offers.</p>
          </div>
          <div className="mesh-mngmnt-btn">
            <Col xs={12} sm={6} md={4}>
              <Button secondary className="mgmt_button" title="Install" url="/cloud-native-management/meshery/getting-started" />
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Button secondary className="mgmt_button" title="Manage" url="/cloud-native-management/meshery/operating-service-meshes" />
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Button secondary className="mgmt_button" title="Patterns" url="/learn/service-mesh-books/service-mesh-patterns" />
            </Col>
          </div>
        </div>
      </div>
    </FeaturesSectionWrapper>
  );
};

export default FeaturesSection;