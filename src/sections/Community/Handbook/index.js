import React from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import { HandbookWrapper } from "./Handbook.style";
import {Link} from "gatsby";
import Arrow from "./images/arrow.svg";

const HandbookHome= () => {
  return (
    <HandbookWrapper>

      <div className="page-header-section">
        <h1>Community Handbook</h1>
      </div>
      <div className="explain-1">
        <div className="cards">
          <Col lg={12} md={12} sm={12}>
            <Link className="book-page_link" to="/handbook/about">
              <div className="card">
                <p><img className="logo" src={Arrow} />About</p>
              </div>   
            </Link>                 
          </Col>
        </div>
        <div className="cards">
          <Col lg={12} md={12} sm={12}>
            <Link className="book-page_link" to="/handbook/community">
              <div className="card">
                <p><img className="logo" src={Arrow} />Community</p>
              </div> 
            </Link>                   
          </Col>
        </div>
        <div className="cards">
          <Col lg={12} md={12} sm={12}>
            <Link className="book-page_link" to="/handbook/contribution">
              <div className="card">
                <p><img className="logo" src={Arrow} />Contribution</p>
              </div>
            </Link>                    
          </Col>
        </div>
        <div className="cards">
          <Col lg={12} md={12} sm={12}>
            <Link className="book-page_link" to="/handbook/mentorship-programs">
              <div className="card">
                <p><img className="logo" src={Arrow} />Mentorship Programs</p>
              </div>
            </Link>                    
          </Col>
        </div>
        <div className="cards">
          <Col lg={12} md={12} sm={12}>
            <Link className="book-page_link" to="/handbook/projects">
              <div className="card">
                <p><img className="logo" src={Arrow} />Projects</p>
              </div> 
            </Link>                   
          </Col>
        </div>
        <div className="cards">
          <Col lg={12} md={12} sm={12}>
            <Link className="book-page_link" to="/handbook/repository-overview">
              <div className="card">
                <p><img className="logo" src={Arrow} />Repository Overview</p>  
              </div> 
            </Link>                   
          </Col>
        </div>
        <div className="cards">
          <Col lg={12} md={12} sm={12}>
            <Link className="book-page_link" to="/handbook/learn-layer5">
              <div className="card">
                <p><img className="logo" src={Arrow} />Learn Layer5</p>
              </div>
            </Link>                    
          </Col>
        </div>
        <div className="cards">
          <Col lg={12} md={12} sm={12}>
            <Link className="book-page_link" to="/handbook/connect-with-us">
              <div className="card">
                <p><img className="logo" src={Arrow} />Connect with us</p>
              </div> 
            </Link>                   
          </Col>
        </div>
        <div className="cards">
          <Col lg={12} md={12} sm={12}>
            <Link className="book-page_link" to="/handbook/code-of-conduct">
              <div className="card">
                <p><img className="logo" src={Arrow} />Code of Conduct</p>
              </div> 
            </Link>                   
          </Col>
        </div>
      </div>     
                  
    </HandbookWrapper>
  );
};
  
export default HandbookHome;