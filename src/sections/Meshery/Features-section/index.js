import React from "react";
import { Row, Col } from "../../../reusecore/Layout";
import Button from "../../../reusecore/Button";
import Slider from "react-slick";
import slide1 from "../images/service mesh performance example.gif";
import slide2 from "../images/meshery_benchmark_screen.png";
import slide3 from "../images/meshery-configuration-management.png";
import FeaturesSectionWrapper from "./features-section.style";

const slides_list = [slide1, slide2, slide3];

const FeaturesSection = () => {

  var settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={slides_list[i]} />
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
          <h2>It's meshy out there.</h2>
          <h1>Get the <span>most out</span> of your service mesh</h1>
          {/* <h1>
            <span>Meshery</span> supports the most service meshes.
          </h1> */}
          <p>
            No matter what service mesh you choose, Meshery works.
          </p>
        </div>
        <div className="smp-section">
          {/* <h4>No matter what service mesh you use, Meshery just works.</h4> */}
          <Row className="smp-section-row">
            <Col xs={12} xl={4} className="smp-section-data">
              <h3>The Performance Yardstick</h3>
              <p>
                Assess the value of your service mesh in context of its cost. Benchmark and manage the performance of your
                application across different service meshes. Compare and manage service mesh overhead.
              </p>
            </Col>
            <Col xs={12} xl={8} className="smp-section-caraousel">
              <Slider {...settings}>
                <div>
                  <img src={slide1} alt="Slide 1" />
                </div>
                <div>
                  <img src={slide2} alt="Slide 2" />
                </div>
                <div>
                  <img src={slide3} alt="Slide 3" />
                </div>
              </Slider>
            </Col>
          </Row>
        </div>
        <div className="mesh-mngmnt">
          <div>
            <h4>One step to managing service meshes</h4>
            <h1>Cloud Native Application Management</h1>
            <p>Confidentally take full advantage of all that a service mesh offers.</p>
          </div>
          <div className="mesh-mngmnt-btn">
            <Col xs={12} sm={6} md={4}>
              <Button secondary className="mgmt_button" title="Install" url="/service-mesh-management/meshery/getting-started" />
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Button secondary className="mgmt_button" title="Manage" url="/service-mesh-management/meshery/operating-service-meshes" />
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
