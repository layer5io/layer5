import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Container, Row, Col } from "../../../reusecore/Layout";
import PageHeader from "../../../reusecore/PageHeader";
import CareerPageWrapper from "./CareerSingle.style";
import { FaPlay } from "@react-icons/all-files/fa/FaPlay";
import { FaGlobeAmericas } from "@react-icons/all-files/fa/FaGlobeAmericas";
import { FiCalendar } from "@react-icons/all-files/fi/FiCalendar";
import { FiClock } from "@react-icons/all-files/fi/FiClock";
import { HiOutlineCash } from "@react-icons/all-files/hi/HiOutlineCash";
import { ReactComponent as Logo } from "../../../assets/images/app/layer5-colorMode.svg";

const CareerSingle = ({ data }) => {
  const { frontmatter, body } = data.mdx;

  return (
    <CareerPageWrapper>
      <PageHeader title={frontmatter.title} />
      <div className="single-post-wrapper">
        <Container>
          <Row className="job-header-row">
            <Col xs={12} md={7} xl={8} className="job-details">
              <Row>
                <Col xs={6} className="job-details-col">
                  <h5> <FaPlay /> Start Date</h5>
                  <p>{frontmatter.start_date}</p>
                </Col>
                {frontmatter.type === "internship" ? <Col xs={6} className="job-details-col"><h5> <FiCalendar /> Duration</h5><p>{frontmatter.duration}</p></Col> : ""}
                <Col xs={6} className="job-details-col">
                  <h5> <FaGlobeAmericas /> Location</h5>
                  <p>{frontmatter.location}</p>
                </Col>
                <Col xs={6} className="job-details-col">
                  <h5> <HiOutlineCash /> {frontmatter.type === "internship" ? "Stipend" : "Salary"}</h5>
                  <p>{frontmatter.salary}</p>
                </Col>
                <Col xs={6} className="job-details-col">
                  <h5> <FiClock /> Apply By</h5>
                  <p>{frontmatter.apply_by}</p>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={5} xl={4} className="logo-col">
              <div className="layer5-logo">
                <Logo alt="Layer5 logo" />
              </div>
            </Col>
          </Row>
          <div>
            <MDXRenderer>{body}</MDXRenderer>
          </div>
        </Container>
      </div>
    </CareerPageWrapper>
  );
};

export default CareerSingle;
