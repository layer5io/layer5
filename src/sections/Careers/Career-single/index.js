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
          <div className="mainjobdiv">
            <div className="leftjobdiv">
              {/* */}
              <div className="job-details">
                <h5>
                  {" "}
                  <FaPlay /> Start Date
                </h5>
                <p>{frontmatter.start_date}</p>
              </div>
              {/* */}
              {frontmatter.type === "internship" ? (
                <div className="job-details">
                  <h5>
                    {" "}
                    <FiCalendar /> Duration
                  </h5>
                  <p>{frontmatter.duration}</p>
                </div>
              ) : (
                ""
              )}
              <div className="job-details">
                <h5>
                  {" "}
                  <FaGlobeAmericas /> Location
                </h5>
                <p>{frontmatter.location}</p>
              </div>
              <div className="job-details">
                <h5>
                  {" "}
                  <HiOutlineCash />{" "}
                  {frontmatter.type === "internship" ? "Stipend" : "Salary"}
                </h5>
                <p>{frontmatter.salary}</p>
              </div>
              <div className="job-details">
                <h5>
                  {" "}
                  <FiClock /> Apply By
                </h5>
                <p>{frontmatter.apply_by}</p>
              </div>
            </div>

            <div className="rightjobdiv">
              <div className="layer5-logo">
                <Logo alt="Layer5 logo" />
              </div>
            </div>
          </div>
          <div>
            <MDXRenderer>{body}</MDXRenderer>
          </div>
        </Container>
      </div>
    </CareerPageWrapper>
  );
};

export default CareerSingle;
