import React from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import OpenSourcePricingWrapper from "./index.style";
import productsImageColor from "./images/layer5-products-overview.svg";
import productsImageWhite from "./images/layer5-products-overview-dark.svg";
import { useStyledDarkMode } from "../../../theme/app/useStyledDarkMode";
import SignupForm from "./signup-form";

const OpenSourcePricing = () => {
  const { isDark } = useStyledDarkMode();
  return (
    <OpenSourcePricingWrapper style={{ position: "relative" }}>
      <Container className="open-source-container">
        <img className="dotsimage" src="https://layer5.io/static/background-dots-pattern.e9f0ea60.svg" />
        <Row className="hero">
          <Col $sm={12} $lg={6}>
            <h1>Layer5-Sponsored Open Source Program</h1>
            <p>
            The open source community is at the heart of modern development. Developers around the world create new technology using open source and we're here to help make those innovations a reality.
            In the Layer5 Open Source program, non-commercial open source developers can continue to collaborate, innovate, and push their projects forward — all with the support of Layer5 offered tools
            </p>
          </Col>
          <Col className="products-logo-wrapper" $sm={12} $lg={6}>
            <img
              src={isDark ? productsImageWhite : productsImageColor}
              alt="Layer5 products"
            />
          </Col>
        </Row>
        <div className="signup-form">
          <SignupForm/>
        </div>
      </Container>
    </OpenSourcePricingWrapper>
  );
};

export default OpenSourcePricing;
