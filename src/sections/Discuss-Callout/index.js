import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Col } from "../../reusecore/Layout";
import SectionTitle from "../../reusecore/SectionTitle";
import DiscussWrapper from "./discuss.style";

const Discuss = "../../assets/images/discuss/layer5-discuss-white.png";

const DiscussCallout = () => {
  return (
    <DiscussWrapper>
      <div className="explain">
        <div className="cards">
          <Col lg={12} md={12} sm={12}>
            <a href="https://discuss.layer5.io/">
              <div className="card">
                <div className="parentcard">
                  <SectionTitle className="section-title" UniWidth="100%">
                    <h2>Join the Conversation</h2>
                    <p>Ask questions, find answers and share knowledge on our Discussion Forum</p>

                    <button><StaticImage className="logo" alt="Discuss" src={Discuss} /></button>

                  </SectionTitle>
                </div>
              </div>
            </a>
          </Col>
        </div>
      </div>
    </DiscussWrapper>
  );
};

export default DiscussCallout;
