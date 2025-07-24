
import React from "react";
import { Row, Col } from "../../../reusecore/Layout";
import Button from "../../../reusecore/Button";
import Slider from "react-slick";
import Slide1 from "../../../assets/images/kanvas/gifs/start-from-scratch.gif";
import Slide2 from "../../../assets/images/kanvas/gifs/catalog.gif";
import Slide3 from "../../../assets/images/kanvas/gifs/rendered-design.png";
import FeaturesSectionWrapper from "./features-section.style";
import { StaticImage } from "gatsby-plugin-image";

const slide2Path = "../../../assets/images/kanvas/gifs/catalog.gif";
const slide3Path = "../../../assets/images/kanvas/gifs/rendered-design.png";

const slides_list = [Slide1, Slide2, Slide3];

const FeaturesSection = () => {

  var settings = {
    customPaging: function (i) {
      return (
        <p>
          <img src={slides_list[i]} loading="lazy" alt={"slide-img" + [i]}/>
        </p>
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
          <h2>Cloud native infrastructure is complex.</h2>
          <h1>Design it <span>visually and collaboratively</span></h1>
          {/* <h1>
            <span>Meshery</span> supports the most service meshes.
          </h1> */}
          <p>
            No matter where you run your workloads, Meshery's Kanvas makes Kubernetes and cloud infrastructure design intuitive and collaborative.
          </p>
        </div>
        <div className="smp-section">
          {/* <h4>No matter what service mesh you use, Meshery just works.</h4> */}
          <Row className="smp-section-row">
            <Col $xs={12} $xl={4} className="smp-section-data">
              <h2>The Visual Designer: Kanvas</h2>
              <p>
                Drag, drop, and deploy your infrastructure with ease. Kanvas, built on Meshery, simplifies Kubernetes and cloud management through intuitive visual designer and operator.
              </p>
            </Col>
            <Col $xs={12} $xl={8} className="smp-section-caraousel">
              <Slider {...settings}>
                <div>
                  <img src={Slide1} alt="Slide 1" />
                </div>
                <div>
                  <StaticImage src={slide2Path} alt="Slide 2" loading="lazy" />
                </div>
                <div>
                  <StaticImage src={slide3Path} alt="Slide 3" loading="lazy" />
                </div>
              </Slider>
            </Col>
          </Row>
        </div>
        <div className="mesh-mngmnt">
          <div>
            <h3>One step to managing your microservices</h3>
            <h1>Cloud Native Application Management</h1>
            <p>Confidently take full advantage of all that your infrastructure offers.</p>
          </div>
          <div className="mesh-mngmnt-btn">
            <Col $xs={12} $sm={6} $md={4}>
              <Button $secondary className="mgmt_button" title="Install" $url="/cloud-native-management/meshery/getting-started" />
            </Col>
            <Col $xs={12} $sm={6} $md={4}>
              <Button $secondary className="mgmt_button" title="Manage" $url="/cloud-native-management/meshery/operating-cloud-native-infra" />
            </Col>
            <Col $xs={12} $sm={6} $md={4}>
              <Button $secondary className="mgmt_button" title="Catalog" $url="/cloud-native-management/catalog" />
            </Col>
          </div>
        </div>
      </div>
    </FeaturesSectionWrapper>
  );
};

export default FeaturesSection;