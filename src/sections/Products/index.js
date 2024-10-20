import React from "react";
import ProductsWrapper from "./products.style";
import Button from "../../reusecore/Button";
import darkbgSvg from "./images/circle_dark.svg";
import lightbgSvg from "./images/circle_light.svg";
import product_hero_img from "./images/layer5-products-overview.svg";
import product_hero_img_light from "./images/layer5-products-overview-dark.svg";
import desktop from "./images/fluent_desktop-mac.svg";
import codicon from "./images/codicon_extensions.svg";
import mesheryLogo from "../../assets/images/meshery/icon-only/meshery-logo-light.svg";
import cloudicon from "./images/cloud.svg";
import layer5 from "../../assets/images/layer5/5 icon/svg/light/5-light-no-trim.svg";
import kanvas from "../../assets/images/kanvas/icon-only/kanvas-icon.svg";
import comingSoon from "./icons/coming-soon.webp";
import { useStyledDarkMode } from "../../theme/app/useStyledDarkMode";
import PlanCard from "../../components/PlanCard";
import { Row } from "../../reusecore/Layout";
import Reviews from "../Pricing/review-slider";

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
        description: "Visual event replay in Kanvas",
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
    logo: kanvas,
    title: "Kanvas",
    icon: [codicon, desktop],
    text: "GitOps-infused cloud native visual designer for Kubernetes and cloud native infrastucture.",
    //as there is no soluton page.
    url: "/cloud-native-management/kanvas"
  },
  {
    id: 2,
    logo: mesheryLogo,
    title: "Meshery",
    icon: ["",desktop],
    text: "As a self-service engineering platform, Meshery enables collaborative design and operation of cloud native infrastructure.",
    url: "/cloud-native-management/meshery"
  },
  {
    id: 3,
    logo: layer5,
    title: "Cloud",
    icon: [cloudicon, codicon, desktop],
    text: "The Meshery Remote Provider with identity and collaboration services, private catalogs, GitOps, and multi-Meshery management.",
    //as there is no soluton page.
    url: "https://docs.layer5.io/cloud"
  },
];

const index = () => {
  const { isDark } = useStyledDarkMode();
  return (
    <div>
      <ProductsWrapper>
        <div className="freeCont">
          <div className="product_hero">
            <div className="product_hero_text">
              <h1>
                Effortless Configuration & Complete Control of Your Cloud Native{" "}
                <span
                  style={{
                    fontWeight: "bolder",
                  }}
                >
                  Infrastructure
                </span>
                .
              </h1>
              <p>
                Unlock your enterprise's capabilities with our innovative cloud
                native solutions. Crafted to tackle cloud challenges, our
                offerings enhance processes for effectiveness, scalability, and
                flexibility, elevating operations to new efficiencies.{" "}
              </p>
              <div className="btn">
                <Button secondary className="banner-btn two" $external={true} title="Explore Now" alt="" $url="https://meshery.layer5.io/"/>
                <Button id="book-a-demo" aria-label="Book a demo" primary className="banner-btn book-a-demo" $external={true} title="Book a demo" alt="Book a demo" $url="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3pmcApaDP4xd8hvG5fy8ylxuFxD3akIRc5vpWJ60q-HemQi80SFFAVftbiIsq9pgiA2o8yvU56?gv=true" />
              </div>
            </div>
            <div className="product_hero_img">
              <img
                className="heroImg"
                src={isDark ? product_hero_img : product_hero_img_light}
                alt=""
              />
            </div>
          </div>
          <div className="product_cards">
            {/* <h2>All Products</h2> */}
            <div className="cards">
              {CardsData.map((card) => (
                <>
                  <div className="card" key={card.id}>
                    <div className="card_head">
                      <img src={card.logo} alt="" className="logo" />
                      <div className="title">{card.title}</div>
                      <div className="iconss">
                        {/* <div> */}
                        {card.icon.map((curr_icon) => (
                          <img src={curr_icon} alt="" key={curr_icon} />
                        ))}
                        {/* </div> */}
                      </div>
                    </div>
                    <div className="text">{card.text}</div>
                    <div className="card_bottom">
                      {/* <Link className="learn" > */}
                      <a className="learn" href={card.url}>Learn more</a>
                      {/* </Link> */}
                      {/* TEMPORARY COMMENTED BUTTON  */}
                      {/* <div className="btns">
                        <Button button secondary className="banner-btn two" title="Subscribe" alt=""/>
                      </div> */}
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className="freeTry">
            <img className="bgSvgLeft" src={isDark ? darkbgSvg : lightbgSvg} alt="" />
            <img className="bgSvgRight" src={isDark ? darkbgSvg : lightbgSvg} alt="" />
            <div className="headers rotate gap">
              <h1 className="header-heading">
                Unlock Your <span>Potential </span> with Free Tier Account!
              </h1>
              <p className="paraInfo">
                Embrace the future of technology and embark on a transformative journey with our comprehensive range of products prepared to meet your needs. Elevate, Innovate, and conquer the cloud with us today!
              </p>
              <Button button secondary className="banner-btn two" title="Open Playground" alt="Cloud Native Playground" $url="https://play.meshery.io" />
            </div>
          </div>
          <div className="headers bot_gap">
            <h1 className="header-heading">
              <span>Plans</span> For Every Team Size
            </h1>
            <p className="paraInfo">
              Choose the ideal plan to propel your infrastructure goals. From startups to seasoned enterprises, we have a plan designed to fit your unique needs.
            </p>
          </div>

          <PlanCard planData={options}/>

          <Row $Vcenter $Hcenter className={"comparison-button"}>
            <Button $primary title="Feature Comparison" alt="Feature Comparison" $url={"/pricing/#feature-comparison"}/>
          </Row>

          <div className="headers gap">
            <h1 className="header-heading">
              Don’t Just Take Our Word For It, <span style={{
                fontWeight: "bolder",
              }}>Experience </span> It!
            </h1>
            <div className="paras">
              <p>See how our products can transform your cloud experience today.</p>
              <p className="paraInfo">
              Book to see it in action! Our experts are eager to guide you through the incredible possibilities that Layer5 offers. Take this opportunity to discover what more your infrastructure can do for you!
              </p>
            </div>
            <Button $external={true} $primary title="Book a Demo" alt="Book a demo" $url="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3pmcApaDP4xd8hvG5fy8ylxuFxD3akIRc5vpWJ60q-HemQi80SFFAVftbiIsq9pgiA2o8yvU56?gv=true" />
          </div>
        </div>
      </ProductsWrapper>
      <Reviews />
    </div>
  );
};

export default index;