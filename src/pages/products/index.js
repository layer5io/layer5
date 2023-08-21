import React from "react";
import { Container, Row, Col } from "../../reusecore/Layout";
import PricingWrapper from "./pricing.style";
import { options } from "./data";
import FeatureDetails from "./collapsible-details";
import Button from "../../reusecore/Button";
import bgSvg from "../../assets/images/products/concentricCircle.svg";
import product_hero_img from "../../assets/images/products/MesheryRange.svg";
import desktop from "../../assets/images/products/fluent_desktop-mac.png";
import concentricCircle from "../../assets/images/products/concentricCircle.svg";
import codicon from "../../assets/images/products/codicon_extensions.svg";
import mesheryLogo from "../../assets/images/products/Meshery-logo-light.svg";
import Nightawk from "../../assets/images/products/Nightawk.svg";
import patterns from "../../assets/images/products/patterns.svg";
import meshmap from "../../assets/images/products/meshmap.svg";

const CardsData = [
  {
    id: 1,
    logo: patterns,
    title: "Meshmap",
    icon: [codicon],
    text: "Assess the value of your cloud native infrastructure in context of its cost. Benchmark and manage the performance of your application across different cloud native infrastructure. Compare and manage cloud native overhead.",
  },
  {
    id: 2,
    logo: meshmap,
    title: "Meshmap",
    icon: [codicon, desktop],
    text: "Assess the value of your cloud native infrastructure in context of its cost. Benchmark and manage the performance of your application across different cloud native infrastructure. Compare and manage cloud native overhead.",
  },
  {
    id: 3,
    logo: meshmap,
    title: "Meshmap",
    icon: [desktop],
    text: "Assess the value of your cloud native infrastructure in context of its cost. Benchmark and manage the performance of your application across different cloud native infrastructure. Compare and manage cloud native overhead.",
  },
  {
    id: 4,
    logo: meshmap,
    title: "Meshmap",
    icon: [codicon, desktop],
    text: "Assess the value of your cloud native infrastructure in context of its cost. Benchmark and manage the performance of your application across different cloud native infrastructure. Compare and manage cloud native overhead.",
  },
];

const index = () => {
  return (
    <div>
      <PricingWrapper>
        <div className="freeCont">
          <div className="product_hero">
            <div className="product_hero_text">
              <h1>
                Utilize join efforts to Skillfuly manage your{" "}
                <span>Infrastructure</span>.
              </h1>
              <p>
                access the value of your cloud native infrastructure in the
                context of its cost. Benchark and manage the performance of your
                application accross different cloud native infrastructure.
                Compare and manage cloud native overhead.{" "}
              </p>
              <div className="HeroBtn">
                <Button title="Explore Now" />
                <Button primary title="Book a Demo" />
              </div>
              <div className="hoverCard">
                <h2>Meshery</h2>
                <p>Drag-and-drop your cloud native infrastructure using already prepared Kubernetes components. Go from developer handoffs to ongoing conversations with a shared language between design and development. </p>
              </div>
            </div>
            <div className="product_hero_img">
              <img className="heroImg" src={product_hero_img} alt="" />
            </div>
          </div>
          <div className="product_cards">
            <h2>All Products</h2>
            <div className="cards">
              {CardsData.map((card) => (
                <>
                  <div className="card" key={card.id}>
                    <div className="cardDetails">
                      <div className="card_head">
                        <div className="proName">
                          <img src={card.logo} alt="" className="logo" />
                          <div className="title">{card.title}</div>
                        </div>
                        <div className="iconss">
                          <img src={card.icon[0]} alt="" />
                          <img src={card.icon[1]} alt="" />
                        </div>
                      </div>
                      <div className="text">{card.text}</div>
                    </div>
                    {/* <hr className="card_hr" /> */}
                    <div className="card_bottom">
                      <div className="learn">Learn more</div>
                      <div className="btns">
                        {/* <Button title="See Demo" /> */}
                        <Button title="Subscribe" />
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>

          <div className="freeTry">
            <img className="bgSvgLeft" src={bgSvg} alt="" />
            <img className="bgSvgRight" src={bgSvg} alt="" />
            <div className="headers rotate gap">
              <h1 className="header-heading">
                <span>Experience </span>Our Product/Service in Action!
              </h1>
              <p>
                Ready to transform? Don't miss this chance to elevate [specific
                use cases, e.g., marketing, project management, analytics].
                Embrace innovation and see how [Product Name] revolutionizes
                [specific outcomes, e.g., customer engagement, project
                efficiency, data analysis].
              </p>
              <Button title="Try Now" />
            </div>
          </div>
          <div className="headers">
            <h1 className="header-heading">
              <span>Plans</span> For Every Team Size
            </h1>
            <p>
              Discover the ideal plan to propel your goals forward. Unveil our
              pricing options and explore how our tailored solutions can enhance
              your [industry/field] journey. From startups to enterprises, we
              have a plan designed to fit your unique needs. Take the next step
              towards success and view our pricing and plans now.
            </p>
          </div>
          <Container>
            <Row Hcenter={true}>
              {options.map((x) => (
                <Col lg={4} md={6} key={x.tier}>
                  <div
                    className={`${x.featured ? "featured" : ""} pricing-table`}
                  >
                    {x.featured ? (
                      <div className="pricing-label">Free Forever</div>
                    ) : (
                      ""
                    )}
                    <div className="pricing_coming_soon">
                      {x.pricing_coming_soon}
                    </div>
                    <h2>{x.tier}</h2>
                    <h5 className="byline">{x.byline}</h5>
                    <div className="pricing-features">
                      {x.summary.map((t) => (
                        <div className="feature" key={t.id}>
                          <FeatureDetails
                            category={t.category}
                            description={t.description}
                          />
                        </div>
                      ))}
                    </div>
                    <Button
                      primary
                      className={
                        x.button[0] === "Coming Soon"
                          ? "price-button-disabled"
                          : "price-button-link"
                      }
                      url={x.button[1]}
                    >
                      {x.button[0]}
                    </Button>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
          <div className="headers gap">
            <h1 className="header-heading">
              <span>Experience </span>Our Product/Service in Action!
            </h1>
            {/* <p>See how our Product/Service can transform your Developer Experience today.</p> */}
            <p>
              Book a demo with us now! Our experts are eager to guide you
              through the incredible possibilities of [Product/Service]. Don't
              miss this chance to revolutionize your [specific outcome]! Click
              below to schedule your demo.
            </p>
            <Button primary title="Book a Demo" />
          </div>
        </div>
      </PricingWrapper>
    </div>
  );
};

export default index;
