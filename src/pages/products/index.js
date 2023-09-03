import React from "react";
import { Container, Row, Col } from "../../reusecore/Layout";
import PricingWrapper from "./pricing.style";
// import { options } from "./data";
import FeatureDetails from "./collapsible-details";
import Button from "../../reusecore/Button";
import bgSvg from "../../assets/images/products/concentricCircle.svg";
import product_hero_img from "../../assets/images/products/MesheryRange.svg";
import desktop from "../../assets/images/products/fluent_desktop-mac.png";
import codicon from "../../assets/images/products/codicon_extensions.svg";
// import mesheryLogo from "../../assets/images/products/Meshery-logo-light.svg";
import Nightawk from "../../assets/images/products/Nightawk.svg";
import patterns from "../../assets/images/products/patterns.svg";
import meshmap from "../../assets/images/products/meshmap.svg";
import comingSoon from "./icons/coming-soon.webp";

const options = [
  {
    tier: "Personal",
    featured: true,
    monthlyprice: 0,
    yearlyprice: 0,
    byline: "Open Source features, plus:",
    button: ["Join for Free", "https://meshery.layer5.io"],
    summary: [
      {
        id: 0,
        category: "Cloud Native Design Patterns",
        description:
          "Import and export your designs using your local filesystem or remote URL.",
      },
      {
        id: 1,
        category: "Multiple Kubernetes Clusters",
        description:
          "Ongoing synchronization of Kubernetes configuration, workloads and cloud native infrastructure changes across any number of Kubernetes clusters.",
      },
      {
        id: 2,
        category: "Cluster Discovery",
        description:
          "Day 2 support for ongoing synchronization of Kubernetes configuration, workloads and cloud native infrastructure changes.",
      },
      {
        id: 3,
        category: "Microservices Performance",
        description:
          "Continuous visibility across all of your clusters and workloads.",
      },
      {
        id: 4,
        category: "Load Generation",
        description:
          "Single Load Generator: Support testing multiple endpoints simultaneously.",
      },
      {
        id: 5,
        category: "MeshMark",
        description: "Identify the cost of a specific network function.",
      },
    ],
  },

  {
    tier: "Team",
    featured: false,
    monthlyprice: 9.99,
    yearlyprice: 100,
    byline: "Everything in Free, plus:",
    button: [
      "Contact Sales",
      "https://us15.list-manage.com/contact-form?u=6b50be5aea3dfe1fd4c041d80&form_id=d0ffe17c92d8014ede6b721aa16096e8",
    ],
    summary: [
      {
        id: 0,
        category: "Dry-run",
        description:
          "Test and verify configuration changes in a separate environment.",
      },
      {
        id: 1,
        category: "Design Reviews",
        description:
          "Discuss any design by leaving review comments or notes on a specific design. Control who has access, notify discussion participants with updates, and link from anywhere.",
      },
      {
        id: 2,
        category: "Visual Design",
        description:
          "Drag-n-drop cloud native infrastructure designer to configure, model, and deploy your workloads",
      },
      {
        id: 3,
        category: "Performance Profiles",
        description:
          "Share performance profiles and test results with individual users or teams.",
      },
      {
        id: 4,
        category: "Built-in Roles",
        description: "Static - out of the box",
      },
      {
        id: 5,
        category: "Standard Support",
        description:
          "Layer5 Support can help you troubleshoot issues you run into while using Meshery. Get support via the web.",
      },
    ],
  },
  {
    tier: "Enterprise",
    featured: false,
    monthlyprice: 15.99,
    yearlyprice: 180,
    pricing_coming_soon: <img src={comingSoon}></img>,
    byline: "Everything in Team, plus:",
    button: ["Coming Soon", ""],
    summary: [
      {
        id: 0,
        category: "User-defined Roles",
        description: "Customizable roles for specific permission assignments",
      },
      {
        id: 1,
        category: "Authentication: LDAP",
        description:
          "Access Meshery  using your existing accounts and centrally manage repository access.",
      },
      {
        id: 2,
        category: "Authentication: SAML",
        description:
          "Use an identity provider to manage the identities of Meshery users and applications.",
      },
      {
        id: 3,
        category: "Self-hosted Deployment",
        description:
          "Self-hosted Meshery Cloud for on-prem appliances or self-managed cloud tenants.",
      },
      {
        id: 4,
        category: "Traffic Replay",
        description: "Visual event replay in MeshMap",
      },
      {
        id: 5,
        category: "Phone Support",
        description:
          "Layer5 Support can help you troubleshoot issues you run into while using Meshery. Get support via phone.",
      },
    ],
  },
];
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
    logo: Nightawk,
    title: "Meshmap",
    icon: [desktop],
    text: "Assess the value of your cloud native infrastructure in context of its cost. Benchmark and manage the performance of your application across different cloud native infrastructure. Compare and manage cloud native overhead.",
  },
  {
    id: 4,
    logo: Nightawk,
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
              Effortless Configuration & Complete Control of Your Cloud Native{" "}
                <span>Infrastructure</span>.
              </h1>
              <p>
              Unlock your enterprise's capabilities with our innovative cloud native solutions. Crafted to tackle cloud challenges, our offerings enhance processes for effectiveness, scalability, and flexibility, elevating operations to new efficiencies.{" "}
              </p>
              <div className="btn">
                <Button title="See our Products" />
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
                    <div className="card_head">
                      <img src={card.logo} alt="" className="logo" />
                      <div className="title">{card.title}</div>
                      <div className="iconss">
                        <>
                          <img src={card.icon[0]} alt="" />
                          <img src={card.icon[1]} alt="" />
                        </>
                      </div>
                    </div>
                    <div className="text">{card.text}</div>
                    <div className="card_bottom">
                      <div className="learn">Learn more</div>
                      <div className="btns">
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
                <span>Experience </span>Our Product in Action!
              </h1>
              <p className="paraInfo">
                Ready to transform? Don't miss this chance to elevate [specific
                use cases, e.g., marketing, project management, analytics].
                Embrace innovation and see how [Product Name] revolutionizes
                [specific outcomes, e.g., customer engagement, project
                efficiency, data analysis].
              </p>
              <Button title="Explore Now" />
            </div>
          </div>
          <div className="headers">
            <h1 className="header-heading">
              <span>Plans</span> For Every Team Size
            </h1>
            <p className="paraInfo">
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
              <span>Experience </span>Our Product in Action!
            </h1>
            {/* <p>See how our Product/Service can transform your Developer Experience today.</p> */}
            <p className="paraInfo">
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
