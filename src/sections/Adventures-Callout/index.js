import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Col } from "../../reusecore/Layout";
import SectionTitle from "../../reusecore/SectionTitle";
import AdventuresWrapper from "./discuss.style";

const Adventure = "../../assets/images/adventure-five/layer_five.png";


const AdventuresCallout = () => {
  return (
    <AdventuresWrapper>
      <div className="explain">
        <div className="cards">
          <Col lg={12} md={12} sm={12}>
            <a target="_blank" href="/community/adventures-of-five-and-friends" rel="noreferrer">
              <div className="card">
                <div className="parentcard">
                  <SectionTitle className="section-title" UniWidth="100%">
                    <h2>Adventures of Five & Friends</h2>
                    {/*<p>Meet Five, our intergalatic Cloud Native Hero</p>*/}

                    <button><StaticImage className="logo" alt="Adventures of Five & Friends" src={Adventure} /></button>

                  </SectionTitle>
                </div>
              </div>
            </a>
          </Col>
        </div>
      </div>
    </AdventuresWrapper>
  );
};

export default AdventuresCallout;
