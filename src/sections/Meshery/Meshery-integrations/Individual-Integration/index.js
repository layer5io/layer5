import React from "react";
import { Accordion,AccordionItem,AccordionTitle,AccordionBody,IconWrapper,OpenIcon,CloseIcon } from "../../../../reusecore/Accordion";
import { IoIosArrowDown } from "@react-icons/all-files/io/IoIosArrowDown";
import { IoIosArrowUp } from "@react-icons/all-files/io/IoIosArrowUp";
import FaqSectionWrapper from "../../../General/Faq/faqSection.style";
import { IntegrationPageWrapper } from "./integrationPage.style";
import { Link } from "gatsby";
import { Row, Col } from "../../../../reusecore/Layout";
import Button from "../../../../reusecore/Button";
import arrow from "../../../../assets/images/app/forward-arrow.svg";
import tick from "../../../../assets/images/app/tick.svg";
import IntegrationList from "../index";
import { StaticImage } from "gatsby-plugin-image";


const IntegrationPage = ({ data }) => {
  return (
    <IntegrationPageWrapper>
      <section className="herosection">
        <img src={data.img} alt={data.name} height={90} />
        <h2>
          {data.name} With {" "}
          <span
            style={{
              color: "#00B39F",
            }}
          >
          Meshery
          </span>
        </h2>
        <p>{data.text}</p>
      </section>
      <section className="overview">
        <div className="feature">
          <h3>Features</h3>
          {data.featureList.map((feature, id) => {
            return (
              <div key={id}>
                <img src={tick} alt="checkbox" />
                <p>{feature}</p>
              </div>
            );
          })}
        </div>
        <div className="content">
          <h3>Overview</h3>
          <p>
          Connect {data.name} with any of your favorite apps in just a few
          clicks. Design, build, and automate anything for your work by
          integrating apps like {data.name} to create visual automatedcl
          workflows. Choose from hundreds of ready-made design patterns or use
          our no-code designer, MeshMap to connect to apps not yet in our
          library.
          </p>
          <span>
            <a href="#" className="btn">
            Get Started
            </a>
            <span>
              <a href={data.docURL}>See Documentation</a>
              <img src={arrow} alt="arrow" height={12} />
            </span>
          </span>
        </div>
      </section>
      <IntegrationList />
      <FaqSectionWrapper>
        <div style={{ maxWidth: "50rem", margin: "0 auto" }}>
          <Accordion
            allowMultipleExpanded="true"
            allowZeroExpanded="true"
            style={{
              margin: "0 auto",
              maxWidth: "50rem",
            }}
          >
            <h2
              style={{
                textAlign: "center",
                padding: "2rem 0",
              }}
            >
            Frequently Asked Questions
            </h2>
            {data.faqs.map((faq, index) => (
              <AccordionItem key={index}>
                <AccordionTitle>
                  <IconWrapper>
                    <h5 style={{ padding: "0.5rem 0rem" }}>{faq.question}</h5>
                    <OpenIcon>
                      <IoIosArrowUp size={22} color="white" />
                    </OpenIcon>
                    <CloseIcon>
                      <IoIosArrowDown size={22} color="white" />
                    </CloseIcon>
                  </IconWrapper>
                </AccordionTitle>
                <AccordionBody>
                  <ul>
                    <p>{faq.ans}</p>
                  </ul>
                </AccordionBody>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </FaqSectionWrapper>
      <section className="cta">
        <Row className="book_cover">
          <Col xs={12} sm={6} className="book_col text">
            <p className="cover">Services-first Network</p>
            <h1>
            What is A <br></br> Service Mesh?
            </h1>
            <p>
            Service meshes provide intent-based networking for microservices
            describing desired behavior of the network in the face of constantly
            changing conditions and network topology.
            </p>
            <Button
              primary
              className="learn"
              type="button"
              title="Learn More"
              url="/learn/service-mesh-books/the-enterprise-path-to-service-mesh-architectures-2nd-edition"
            />
          </Col>
          <Col xs={12} sm={6} className="book_col book_img">
            <Link
              to={
                "/learn/service-mesh-books/the-enterprise-path-to-service-mesh-architectures-2nd-edition"
              }
              className="bookLink"
            >
              <StaticImage src="../../../../assets/images/learn/book-cover.png" alt="Book Image" />
            </Link>
          </Col>
        </Row>
      </section>
    </IntegrationPageWrapper>
  );
};


export default IntegrationPage;
