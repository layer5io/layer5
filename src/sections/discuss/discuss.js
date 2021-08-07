import React from "react";
import { Row, Col, Container } from "../../reusecore/Layout";
import SectionTitle from "../../reusecore/SectionTitle";
import Button from "../../reusecore/Button";
import DiscussWrapper from "./discuss.style";
import Discuss from "./layer5-discuss-white.png"
import DiscussDark from "./layer_discuss.png"

const discuss= () => {
  return (
    <DiscussWrapper>
      

      <div className="explain-1">
      <div className="cards">
              
                  <Col lg={12} md={12} sm={12}>
                    <div className="card">
                    <div className="parentcard">
            <SectionTitle className="section-title" UniWidth="100%">
                <h2>Join the Conversation</h2>
                <p>Ask questions, find answers and share knowledge on our Discussion Forum</p>
                
                <a href="https://discuss.layer5.io/">

                  <button><img className="logo" src={Discuss} /></button>
                </a> 
            </SectionTitle>
      </div> 
                       </div>
                                         
                  </Col>
              
                
              </div>
              </div>
    </DiscussWrapper>
  );
};

export default discuss;
