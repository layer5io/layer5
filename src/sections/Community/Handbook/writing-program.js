import React, {useState} from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import { Link } from "gatsby";
import { HandbookWrapper } from "./Handbook.style";
import Button from "../../../reusecore/Button";
import Modal from "react-modal";
import TOC from "../../../components/handbook-navigation/index";
import TocPagination from "../../../components/handbook-navigation/TocPagination";
import { GrFormClose } from "@react-icons/all-files/gr/GrFormClose";

import blog from "./images/blogs.svg";
import event from "./images/event.svg";
import talks from "./images/talks.svg";
import videos from "./images/videos.svg";
import workshop from "./images/workshop.svg";
import resources from "./images/resources.svg";
import c_icon from "./images/checkmark-box_green.svg";


const Writers = () => {
  const [modalIsOpen,setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  
  const closeModal = () => setIsOpen(false);

  return (
    <HandbookWrapper>
      <div className="page-header-section">
        <h1>Layer5 Writing Program</h1>
      </div>
      <TOC />
      <div className="page-section">
        <Container>
          <div className="content writing_program">
            <h2>What is Layer5 Writing Program?</h2>
            <p>
            The Layer5 Writing Program is a way to demonstrate your expertise, give back to the community, and help us produce great content. We collaborate with authors and technologists from around the world to produce high quality articles, blog posts, tutorials and other cloud native resources on Meshery, Kubernetes, service meshes, Docker and related technologies. 
            </p>

            <h2>Why should you participate?</h2>
            <div className="list">
              <Row>
                <Col lg={6} md={6} sm={12}>
                  <div className="listed">
                    <table className="table">
                      <tr>
                        <td className="icon"><img src={c_icon} alt="icon" /></td>
                        <td className="skill">
                          <h4>
                        Improve your writing and  <br />
                        communication skills
                          </h4>
                      Publishing is a feedback-driven process that can help you understand your audience better, explain complex topics clearly, and iterate to improve results.                    </td>
                      </tr>
                      <tr>
                        <td className="icon"><img src={c_icon} alt="icon" /></td>
                        <td className="skill">
                          <h4>
                      Give back
                          </h4>
                      Open source contributions are not always about pull requests and GitHub issues. While this may sound to be a more exciting way make a contribution, it's certainly not the only way to give back to the programming community. Documenting the problems you solved or a new feature you implemented will serve as a perpetual guide to others in the community.
                        </td>
                      </tr>
                    </table>
                  </div>
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <div className="listed">
                    <table className="table">
                      <tr>
                        <td className="icon"><img src={c_icon} alt="icon" /></td>
                        <td className="skill">
                          <h4>
                        Establish your voice
                          </h4>
                      Sharing your knowledge not only demonstrates your technical expertise, it highlights your ability to teach others, and establishes you as an authority on the topic. Your technical write-ups are empirical evidence of your ability to learn and teach.
                        </td>
                      </tr>
                      <tr>
                        <td className="icon"><img src={c_icon} alt="icon" /></td>
                        <td className="skill">
                          <h4>
                        Educate
                          </h4>
                      Whether you're writing about a complex system or a a set of actions you took to address an error, the odds are high that someone else will someday struggle with the same things as you. By writing about the things that you learn or find interesting, you aren't just teaching yourself, you're also helping share your knowledge with every person who reads your post.
                        </td>
                      </tr>
                    </table>
                  </div>
                </Col>
              </Row>
            </div>

            <h2>Where can you contribute?</h2>

            <p>
              We welcome the contribution of any type that shares knowledge about our projects or related technologies.
              <br />
              Do you want to document your recent effort in implementing a new feature? Do you want to share a solution for a problem you were struggling with? Do you want to share information about a recent technology you find intriguing? Want to host an event with Layer5?  Want to deliver a talk, a workshop, or a tutorial?  Just let us know.
            </p>

            <Row>
              <div className="content_list">
                <Col sm={12} md={6} lg={4}>
                  <Link className="project-card" to="/blog">
                    <div className="content_type">
                      <img src={blog} alt="Blog" />
                      <h5>Blog</h5>
                      <p>Share Your Experience</p>
                    </div>
                  </Link>
                </Col>
                <Col sm={12} md={6} lg={4}>
                  <Link className="project-card" to="/resources">
                    <div className="content_type">
                      <img src={resources} alt="Resource" />
                      <h5>Resource</h5>
                      <p>Articles, Tutorials, Podcasts and More</p>
                    </div>
                  </Link>
                </Col>
                <Col sm={12} md={6} lg={4}>
                  <Link className="project-card" to="/learn/service-mesh-workshops">
                    <div className="content_type">
                      <img src={workshop} alt="Workshop" />
                      <h5>Workshop</h5>
                      <p>Deliver a Hands-on Learning Experience</p>
                    </div>
                  </Link>
                </Col>
              </div>
            </Row>
            <Row>
              <div className="content_list">
                <Col sm={12} md={6} lg={4}>
                  <Link className="project-card" to="/community/events">
                    <div className="content_type">
                      <img src={event} alt="Event" />
                      <h5>Event</h5>
                      <p>Organize an Event</p>
                    </div>
                  </Link>
                </Col>
                <Col sm={12} md={6} lg={4}>
                  <Link className="project-card" to="/community/events">
                    <div className="content_type">
                      <img src={talks} alt="Talks" />
                      <h5>Talks</h5>
                      <p>Talk About Anything Cloud Native</p>
                    </div>
                  </Link>
                </Col>
                <Col sm={12} md={6} lg={4}>
                  <Link className="project-card" to="/service-mesh-management/meshery">
                    <div className="content_type">
                      <img src={videos} alt="Videos" />
                      <h5>Recorded Videos</h5>
                      <p>Product Videos, Reviews or Demo</p>
                    </div>
                  </Link>
                </Col>
              </div>
            </Row>

            <h2>What is the process?</h2>

            <div className="process">
              <div className="item">
                <p>If you’re interested in the Layer5 Writing Program, please submit your information (and proposed topic, if you have one) to get started. <i>Don't have a topic? Don't worry, we have plenty of suggestions for you.</i></p>

                <Button primary className="open-modal-btn" onClick={openModal} title="Layer5 Content Form" />
                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={closeModal}
                  className="Modal"								
                  overlayClassName="Overlay"			
                  ariaHideApp={false}
                  contentLabel="Content Form"
                >
                  <Button secondary className="close-modal-btn" onClick={closeModal}> <GrFormClose /></Button>
                  <h2 className="modal-heading">Layer5 Content Form</h2>
                  <div className="content-form">
                    <iframe
                      src="https://docs.google.com/forms/d/e/1FAIpQLSf0BlMvmeEVsy4x6fMdI2cWcsnyVRSCv7b8e0Ios1hEopjOZQ/viewform"
                      loading="lazy"
                      className="form-frame"
                    />
                  </div>
                </Modal> 
              </div>
              <div className="item">
                <p>Upon being accepted, you'll work with a coordinator on the content team to decide on a topic, develop a project plan, and discuss submission details.</p>
              </div>
            </div>

            <h3>Additional Resources</h3>
            <ul>
              <li><a href="https://github.com/layer5io/layer5/blob/master/CONTRIBUTING.md#adding-a-blog-post">Contributing to Layer5 Blogs</a></li>
              <li><a href="https://github.com/layer5io/layer5/blob/master/CONTRIBUTING.md#adding-a-resource">Contributing to Layer5 Resources</a></li>
              <li>Join the <a href="https://discuss.layer5.io/">Layer5 Discussion Forum</a></li>
              <li>Explore our <Link to="/resources">Resource Library</Link></li>
              <li><Link to="/learn">Free service mesh training</Link></li>
            </ul>

            <TocPagination />
          </div>
        </Container>
      </div>
    </HandbookWrapper>
  );
};

export default Writers;