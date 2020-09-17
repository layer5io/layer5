import React from "react";
import { Container, Row, Col } from "../../reusecore/Layout";
import CareersSectionWrapper from "./careers.style";
import Button from "../../reusecore/Button";
import { Link } from "gatsby";

import Icon1 from "../../images/careers/digital-marketing.svg";
import Icon2 from "../../images/careers/product-engineering-internship.svg";
import Icon3 from "../../images/careers/layer5-tag-linkedin.png";
import Icon4 from "../../images/careers/ux-designer.svg";

import Icon5 from "../../images/layer5/gsod.png";
import Icon6 from "../../images/layer5/gsoc.svg";
import Icon8 from "../../images/layer5/cb.png";

const Gsoc = () => {
    return (
<CareersSectionWrapper>
  <Container>
    <div>
      <h3 className="post-title">Come Work with Us</h3>
      <p>  
        If you’re a smart, curious person who can make contributions in and out of
        your areas of expertise, why not start now?
      </p>
      <div
        id="layer5-intro"
        className="card-content">
        <iframe
          width="392"
          height="220.5"
          src="https://www.youtube.com/embed/0yN5T5LB9ps"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <p>
        <b>What is Layer5?</b>
      </p>
      <p>  
      The quickly growing Layer5 community represents the largest collection of
          service mesh projects and their maintainers in the world. Our projects establish
          industry standards and enable service developers, owners, and operators
          with repeatable patterns and best practices for managing all aspects of distributed services.
          
          Our shared commitment to the open source spirit push the Layer5 community and its projects forward.  
          New members are always welcome.
      </p>
      <p>  
        <b>Open Source Projects?</b>
      </p>  
      <p>  
      Layer5 projects are open source software. Anyone can download, use, work
      on, and share it with others. It's built on principles like collaboration,
      globalism, and innovation. Layer5 projects are distributed under the terms
      of Apache v2.
      </p>  
      <p>
      We believe that all contributors should expect and be part of a safe and
      friendly environment for constructive contribution. We can more
      effectively and successfully compare and challenge different ideas to find
      the best solutions for advancement, while building the size, diversity,
      and strength of our community.
      </p>
      <div className="felx-div">&nbsp;</div>
      <hr />
      <div className="felx-div">&nbsp;</div>
      <b className="blue">Available Opportunities</b>
      <div>
        See our <a href="/careers" className="blue">careers</a> page for more about Layer5.
        <div>  
          <ul>
              <b>Internships</b>
            <p> 
              The key component of these projects is our community of contributors. Some contributors intern under the Google Summer of Code program, while others intern unpaid directly with Layer5. Irrespective, your contributions will affect people you've never met as the Layer5 projects are being broadly referenced and used in organizations large and small. The Layer5 community includes software engineers, researchers, students, artists, system administrators, operators and web designers -- all of whom will be happy to help you get started.
            </p>
          </ul>
          <ul>
            <p> 
              We believe that all contributors should expect and be part of a safe and friendly environment for constructive contribution. We can more effectively and successfully compare and challenge different ideas to find the best solutions for advancement, while building the size, diversity, and strength of our community.
            </p>
          </ul>
        </div>
        <p>
          <b class="black-text blue">Participating Partners</b>
          <ul>
            <li><b>UT Austin Coding Boot Camp</b> - <a target="_blank" href="https://layer5.io/assets/careers/internships/UT%20Austin%20Boot%20Camp%20-%20Meshery%20Flyer.pdf">Internship Flyer</a></li>
            <li><b>UEM Computer Science and Engineering</b> - <a target="_blank" href="https://layer5.io/assets/careers/internships/UEM%20Jaipur%20-%20Meshery%20Flyer.pdf">Internship Flyer</a>,<a href="https://uem.edu.in/blog/what-is-open-source/"> Learn More </a></li>
          </ul>
        </p>
      </div>
      <div
        id="gsoc-2020"
        className="card-content1">
        <h3>
        <Button className="banner-btn one" >                           
          <a className="link" href="mailto:jobs@layer5.io">Join Today</a>
        </Button>
        </h3>
      </div>
      <div className="grid">
        <Row>
          <Col xs={12} sm={6} md={4}>
            <Link to="/careers/Digital-Marketing-Internship">
              <div className="fetures-block v1 project__block__inner">
                  <div className="fetures-icon-block">
                      <img src={Icon1} alt="img" />
                  </div>
                  <h3 className="blue">Digital Marketing Internship</h3>
                  <p>
                  Learn and exercise modern marketing strategies and automation as a Layer5 Digital Marketing Intern.
                  </p>
              </div>
            </Link>
          </Col>
          <Col xs={12} sm={6} md={4}>
          <Link to="/careers/Software-Engineer">
              <div className="fetures-block v2 project__block__inner">
                  <div className="fetures-icon-block">
                      <img src={Icon2} alt="img" />
                  </div>
                  <h3 className="blue">Software Engineer</h3>
                  <p>
                  Engage in distributed systems and the world of multipe service meshes as a Layer5 Software Engineer.
                  </p>
              </div>
              </Link>
          </Col>
          <Col xs={12} sm={6} md={4}>
          <Link to="/careers/Software-Engineering-Internship">
              <div className="fetures-block v1 project__block__inner">
                  <div className="fetures-icon-block">
                      <img src={Icon3} alt="img" style={{ paddingTop: '20px' }}/>
                  </div>
                  <h3 className="blue">Software Engineering Internship</h3>
                  <p>
                  Work with talented engineers in a challenging learning environment as a Layer5 Software Engineer Intern.
                  </p>
              </div>
              </Link>
          </Col>
          <Col xs={12} sm={6} md={4}>
          <Link to="/careers/UI-Visual-Designer">
              <div className="fetures-block v2 project__block__inner">
                  <div className="fetures-icon-block">
                      <img src={Icon4} alt="img" />
                  </div>
                  <h3 className="blue">UI Visual Designer</h3>
                  <p>
                  Put your eye for design to the test as a Layer5 UI Visual Designer Intern.
                  </p>
              </div>
              </Link>
          </Col>
          <Col xs={12} sm={6} md={4}>
          <Link to="/careers/UI-Visual-Designer-Internship">
              <div className="fetures-block v1 project__block__inner">
                  <div className="fetures-icon-block">
                      <img src={Icon4} alt="img" />
                  </div>
                  <h3 className="blue">UI Visual Designer Internship</h3>
                  <p>
                  Put your eye for design to the test as a Layer5 UI Visual Designer Intern.
                  </p>
              </div>
              </Link>
          </Col>
          <Col xs={12} sm={6} md={4}>
          <Link to="/careers/UX-Engineer">
              <div className="fetures-block v2 project__block__inner">
                  <div className="fetures-icon-block">
                      <img src={Icon4} alt="img" />
                  </div>
                  <h3 className="blue">UX Engineer</h3>
                  <p>
                  Intuitive design, flowing interaction, and delightfuling users are core components of the Layer5 user experience.
                  </p>
              </div>
              </Link>
          </Col>
        </Row>
      </div>
      <br></br>
      <div>
      <h3 className="post-title">Programs</h3>
        <div className="grid">
          <Row>
            <Col xs={12} sm={6} md={3}>
              <Link to="/gsoc">
                <div className="fetures-block v1 project">
                    <div className="fetures-icon-block">
                        <img src={Icon5} alt="img" />
                    </div>
                    <h3 className="blue">Google Season of Docs 2020</h3>                   
                </div>
              </Link>
            </Col>
            <Col xs={12} sm={6} md={3}>
            <Link to="/gsoc">
                <div className="fetures-block v2 project">
                    <div className="fetures-icon-block">
                        <img src={Icon6} alt="img" />
                    </div>
                    <h3 className="blue">Google Summer of Code 2020</h3>
                </div>
                </Link>
            </Col>
            <Col xs={12} sm={6} md={3}>
            <Link to="/careers/gsoc2019">
                <div className="fetures-block v1 project">
                    <div className="fetures-icon-block">
                        <img src={Icon6} alt="img"/>
                    </div>
                    <h3 className="blue">Google Summer of Code 2019</h3>
                </div>
                </Link>
            </Col>
            <Col xs={12} sm={6} md={3}>
            <Link to="/careers/cb2020">
                <div className="fetures-block v2 project">
                    <div className="fetures-icon-block">
                        <img src={Icon8} alt="img" style={{ paddingTop: '45%', height: '65%'}}/>
                    </div>
                    <h3 className="blue">CommunityBridge 2020</h3>
                </div>
                </Link>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  </Container>
</CareersSectionWrapper>
    );
};

export default Gsoc;
