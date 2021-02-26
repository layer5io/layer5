import React from "react";
import {Link} from "gatsby";
import { MemberSingleWrapper } from "./memberSingle.style";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import {Col, Container, Row} from "../../../reusecore/Layout";
import Image from "../../../components/image";
import MeshMateIcon from "../../../assets/images/meshmate/meshmate-icon.svg";
import mesheryLogo from "./meshery-logo-light.svg";
import mesheryOperatorLogo from "./meshery-operator-dark.svg";
import smpLogo from "./smp-dark-text.svg";
import landscapeLogo from "./landscape-green.png";
import getNighthawkLogo from "../../../assets/images/meshmate/meshmate-icon.svg";
import communityLogo from "./community-green.svg";
import imageHubLogo from "./layer5-image-hub.svg";
import Button from "../../../reusecore/Button";

const MemberSingle = ({frontmatter}) => {
  const {name, position,  github, twitter, image_path, meshmate, linkedin, location, badges, bio} = frontmatter;
  return(
    <MemberSingleWrapper>
      <Container>
        <div>
          <Row>
            <div className="backBtn">
              <Link to="/community/members">
                <IoIosArrowDropleftCircle />
                <h4>Go Back</h4>
              </Link>
            </div>
          </Row>
          <Row>
            <Col xs={12} sm={12} lg={6} >
              <Image className="profile-image" {...image_path} imgStyle={{ objectFit: "contain" }} alt={name}/>
            </Col>
            <Col xs={12} sm={12} lg={6} >
              <div className="header">
                <div className="name">{name}</div>
                { position && (
                  <div className="position">{position}</div>
                )}
              </div>
              <div className="body">
                { location &&
                  <div className="text location">
                    <span className="bold">{location}</span>
                  </div>
                }
                {
                  badges &&
                <div className="social-bg">
                  <ul className="profile-social-links">
                    {badges.includes("meshery") &&
                      <li>
                        <Link to="/meshery">
                          <img className="profile-social-links" src={mesheryLogo} alt="Meshery logo"/>
                        </Link>
                      </li>
                    }
                    {badges.includes("smp") &&
                      <li>
                        <Link to="/projects/service-mesh-performance">
                          <img className="profile-social-links" src={smpLogo} alt="Service Mesh Peformance logo"/>
                        </Link>
                      </li>
                    }
                    {badges.includes("image-hub") &&
                      <li>
                        <Link to="/projects/image-hub">
                          <img className="profile-social-links" src={imageHubLogo} alt="Image Hublogo"/>
                        </Link>
                      </li>
                    }
                    {badges.includes("landscape") &&
                      <li>
                        <Link to="/landscape">
                          <img className="profile-social-links" src={landscapeLogo} alt="Service Mesh Landscape logo"/>
                        </Link>
                      </li>
                    }
                    {badges.includes("community") &&
                      <li>
                        <Link to="/community">
                          <img className="profile-social-links" src={communityLogo} alt="Service Mesh Community logo"/>
                        </Link>
                      </li>
                    }
                    {badges.includes("getnighthawk") &&
                      <li>
                        <Link to="/projects/getnighthawk">
                          <img className="profile-social-links" src={getNighthawkLogo} alt="GetNighthawk logo"/>
                        </Link>
                      </li>
                    }
                    {badges.includes("meshery-operator") &&
                      <li>
                        <Link to="/projects/meshery-operator">
                          <img className="profile-social-links" src={mesheryOperatorLogo} alt="Meshery Operator logo"/>
                        </Link>
                      </li>
                    }
                  </ul>
                </div>
                }
                { bio &&
                    <div className="text bio">{bio}</div>
                }
              </div>
              <div className="social-bg">
                <ul className="profile-social-links">
                  { github && (
                    <li>
                      <a href={`https://github.com/${github}`}>
                        <FaGithub className="github" size={32}/>
                      </a>
                    </li>
                  )}
                  { twitter && (
                    <li>
                      <a href={`https://twitter.com/${twitter}`}>
                        <FaTwitter className="twitter" size={32}/>
                      </a>
                    </li>
                  )}
                  { linkedin && (
                    <li>
                      <a href={`https://Linkedin.com/in/${linkedin}`}>
                        <FaLinkedin className="linkedin" size={32}/>
                      </a>
                    </li>
                  )}
                  { meshmate && (
                    <li>
                      <Link to="/community/meshmates">
                        <img src={MeshMateIcon} className="meshmate-white" alt="meshmate-icon" />
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </Col>
          </Row>
          <Row Hcenter>
            <Col className="start-contributing" sm={12} lg={12}>
              <p> Would you Like a Member Profile?</p>
              <Button primary title="Start Contributing Today" url="/community"/>
            </Col>
          </Row>
        </div>
      </Container>
    </MemberSingleWrapper>
  );
};

export default MemberSingle;
