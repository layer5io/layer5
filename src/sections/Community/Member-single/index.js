import React from "react";
import { Link } from "gatsby";
import { MemberSingleWrapper } from "./memberSingle.style";
// import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaUserTie } from "@react-icons/all-files/fa/FaUserTie";
import { IoIosArrowDropleftCircle } from "@react-icons/all-files/io/IoIosArrowDropleftCircle";
import { Col, Container, Row } from "../../../reusecore/Layout";
import Image from "../../../components/image";
import MeshMateIcon from "../../../assets/images/meshmate/meshmate-icon.svg";
import mesheryLogo from "../../../assets/images/meshery/icon-only/meshery-logo-light.svg";
import mesheryOperatorLogo from "../../../assets/images/meshery-operator/meshery-operator-dark.svg";
import smpLogo from "../../../assets/images/service-mesh-performance/stacked/smp-dark-text.svg";
import landscapeLogo from "../../../assets/images/landscape/layer5_landscape_green.svg";
import patternsLogo from "../../../assets/images/service-mesh-patterns/service-mesh-pattern.svg";
import NighthawkLogo from "../../../assets/images/nighthawk/icon-only/SVG/nighthawk-logo.svg";
import imageHubLogo from "../../../assets/images/image-hub/layer5-image-hub.svg";
import communityLogo from "../../../assets/images/community/community-green.svg";
import uiuxrLogo from "../../../assets/images/uiuxr/uiuxr.svg";
import writerIcon from "../../../assets/images/writer-program/writer-program-badge.svg";
import docsLogo from "../../../assets/images/docs/docs.svg";
import mesheryCatalogLogo from "../../../assets/images/meshery/meshery-catalog.svg";
import dockerExtensionLogo from "../../../assets/images/docker-extension/docker-extension-meshery-logo.svg";
import meshMapLogo from "../../../assets/images/meshmap/icon-only/meshmap-icon.svg";
import Button from "../../../reusecore/Button";
import { ReactComponent as TwitterIcon } from "../../../assets/images/socialIcons/twitter.svg";

const MemberSingle = ({ frontmatter }) => {
  const {
    name,
    position,
    github,
    twitter,
    image_path,
    layer5,
    meshmate,
    linkedin,
    location,
    badges,
    status,
    bio,
    executive_bio,
  } = frontmatter;
  return (
    <MemberSingleWrapper>
      <Container>
        <div>
          <Row>
            <Col xs={12} sm={12} lg={6}>
              <div className="backBtn">
                <Link to="/community/members">
                  <IoIosArrowDropleftCircle />
                  <h4>Go Back</h4>
                </Link>
              </div>
            </Col>
            <Col xs={12} sm={12} lg={6}>
              <h1 className="page-heading">Layer5 Community Member</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} lg={6}>
              <Image
                className={
                  status.includes("Inactive")
                    ? "profile-image-inactive"
                    : "profile-image"
                }
                {...image_path}
                imgStyle={{ objectFit: "contain" }}
                alt={name}
              />
            </Col>
            <Col xs={12} sm={12} lg={6}>
              <div className="header">
                <div className="name">{name}</div>
                {position && <div className="position">{position}</div>}
              </div>
              <div className="body">
                {location && (
                  <div className="text location">
                    <span className="bold">{location}</span>
                  </div>
                )}
                {badges && (
                  <div className="social-bg">
                    <ul className="profile-social-links">
                      {badges.includes("meshery") && (
                        <div className="tooltip">
                          <li>
                            <Link to="/cloud-native-management/meshery">
                              <img
                                className="profile-social-links"
                                src={mesheryLogo}
                                alt="Meshery logo"
                              />
                            </Link>
                          </li>
                          <div className="tooltip-text meshery">Meshery</div>
                        </div>
                      )}
                      {badges.includes("smp") && (
                        <div className="tooltip">
                          <li>
                            <Link to="/projects/service-mesh-performance">
                              <img
                                className="profile-social-links"
                                src={smpLogo}
                                alt="Service Mesh Peformance logo"
                              />
                            </Link>
                          </li>
                          <span className="tooltip-text smp">SMP</span>
                        </div>
                      )}
                      {badges.includes("image-hub") && (
                        <div className="tooltip">
                          <li>
                            <Link to="/projects/image-hub">
                              <img
                                className="profile-social-links"
                                src={imageHubLogo}
                                alt="Image Hublogo"
                              />
                            </Link>
                          </li>
                          <span className="tooltip-text image-hub">
                            Image-hub
                          </span>
                        </div>
                      )}
                      {badges.includes("landscape") && (
                        <div className="tooltip">
                          <li>
                            <Link to="/service-mesh-landscape">
                              <img
                                className="profile-social-links"
                                src={landscapeLogo}
                                alt="Service Mesh Landscape logo"
                              />
                            </Link>
                          </li>
                          <span className="tooltip-text landscape">
                            Landscape
                          </span>
                        </div>
                      )}
                      {badges.includes("community") && (
                        <div className="tooltip">
                          <li>
                            <Link to="/community/community-managers">
                              <img
                                className="profile-social-links"
                                src={communityLogo}
                                alt="Community logo"
                              />
                            </Link>
                          </li>
                          <span className="tooltip-text community">
                            Community
                          </span>
                        </div>
                      )}
                      {badges.includes("docs") && (
                        <div className="tooltip">
                          <li>
                            <Link to="https://docs.meshery.io/">
                              <img
                                className="profile-social-links"
                                src={docsLogo}
                                alt="Docs logo"
                              />
                            </Link>
                          </li>
                          <span className="tooltip-text docs">Docs</span>
                        </div>
                      )}
                      {badges.includes("meshery-catalog") && (
                        <div className="tooltip">
                          <li>
                            <Link to="https://meshery.io/catalog">
                              <img
                                className="profile-social-links"
                                src={mesheryCatalogLogo}
                                alt="Meshery Catalog logo"
                              />
                            </Link>
                          </li>
                          <span className="tooltip-text meshery-catalog">
                            Meshery-catalog
                          </span>
                        </div>
                      )}
                      {badges.includes("meshmap") && (
                        <div className="tooltip">
                          <li>
                            <Link to="/meshmap">
                              <img
                                className="profile-social-links"
                                src={meshMapLogo}
                                alt="MeshMap Logo"
                              />
                            </Link>
                          </li>
                          <span className="tooltip-text meshmap">Meshmap</span>
                        </div>
                      )}
                      {badges.includes("docker-extension") && (
                        <div className="tooltip">
                          <li>
                            <Link to="/docker-extension-meshery">
                              <img
                                className="profile-social-links"
                                src={dockerExtensionLogo}
                                alt="Docker Extension logo"
                              />
                            </Link>
                          </li>
                          <span className="tooltip-text docker-extension">
                            Docker-extension
                          </span>
                        </div>
                      )}
                      {badges.includes("nighthawk") && (
                        <div className="tooltip">
                          <li>
                            <Link to="/projects/nighthawk">
                              <img
                                className="profile-social-links"
                                src={NighthawkLogo}
                                alt="Nighthawk logo"
                              />
                            </Link>
                          </li>
                          <span className="tooltip-text nighthawk">
                            Nighthawk
                          </span>
                        </div>
                      )}
                      {badges.includes("meshery-operator") && (
                        <div className="tooltip">
                          <li>
                            <Link to="/cloud-native-management/meshery/meshery-operator">
                              <img
                                className="profile-social-links"
                                src={mesheryOperatorLogo}
                                alt="Meshery Operator logo"
                              />
                            </Link>
                          </li>
                          <span className="tooltip-text meshery-operator">
                            Meshery-operator
                          </span>
                        </div>
                      )}
                      {badges.includes("patterns") && (
                        <div className="tooltip">
                          <li>
                            <Link to="/learn/service-mesh-books/service-mesh-patterns">
                              <img
                                className="profile-social-links"
                                src={patternsLogo}
                                alt="Patterns Logo"
                              />
                            </Link>
                          </li>
                          <span className="tooltip-text patterns">
                            Patterns
                          </span>
                        </div>
                      )}
                      {badges.includes("ui-ux") && (
                        <div className="tooltip">
                          <li>
                            <Link to="../../handbook/designer">
                              <img
                                className="profile-social-links"
                                src={uiuxrLogo}
                                alt="UI/UX'er Logo"
                              />
                            </Link>
                          </li>
                          <span className="tooltip-text ui-ux">UI-UX</span>
                        </div>
                      )}
                      {badges.includes("writer") && (
                        <div className="tooltip">
                          <li>
                            <Link to="../../handbook/writing-program">
                              <img
                                className="profile-social-links"
                                src={writerIcon}
                                alt="Writer Program Logo"
                              />
                            </Link>
                          </li>
                          <span className="tooltip-text writer">Writer</span>
                        </div>
                      )}
                    </ul>
                  </div>
                )}
                {bio && <div className="text bio">{bio}</div>}
              </div>
              <div className="social-bg">
                <ul className="profile-social-links">
                  {executive_bio && (
                    <li className="tooltip">
                      <Link to="bio">
                        <FaUserTie className="bio" size={32} />
                        <span className="tooltiptext">Executive Bio</span>
                      </Link>
                    </li>
                  )}
                  {github && (
                    <li className="tooltip">
                      <a href={`https://github.com/${github}`}>
                        <FaGithub className="github" size={32} />
                        <span
                          className={`tooltiptext ${
                            github.length > 20
                              ? "large-tooltip "
                              : `${
                                  github.length > 10 && github.length <= 20
                                    ? "small-tooltip "
                                    : "tooltiptext "
                                }`
                          } `}
                        >
                          {github}
                        </span>
                      </a>
                    </li>
                  )}
                  {twitter && (
                    <li className="tooltip">
                      <a href={`https://twitter.com/${twitter}`}>
                        <TwitterIcon className="twitter" size={32} />
                        <span
                          className={`tooltiptext ${
                            twitter.length > 20
                              ? "large-tooltip "
                              : `${
                                  twitter.length > 10 && twitter.length <= 20
                                    ? "small-tooltip "
                                    : "tooltiptext "
                                }`
                          } `}
                        >
                          {twitter}
                        </span>
                      </a>
                    </li>
                  )}
                  {linkedin && (
                    <li className="tooltip">
                      <a href={`https://Linkedin.com/in/${linkedin}`}>
                        <FaLinkedin className="linkedin" size={32} />
                        <span
                          className={`tooltiptext ${
                            linkedin.length > 20
                              ? "large-tooltip "
                              : `${
                                  linkedin.length > 10 && linkedin.length <= 20
                                    ? "small-tooltip "
                                    : "tooltiptext "
                                }`
                          } `}
                        >
                          {linkedin}
                        </span>
                      </a>
                    </li>
                  )}
                  {layer5 && (
                    <li className="tooltip">
                      <a href={`https://meshery.layer5.io/user/${layer5}`}>
                        <img src={mesheryLogo} alt="meshery-icon"></img>
                        <span className="tooltiptext">Meshery</span>
                      </a>
                    </li>
                  )}
                  {meshmate && (
                    <li className="tooltip">
                      <Link to="/community/meshmates">
                        <img
                          src={MeshMateIcon}
                          className="meshmate-white"
                          alt="meshmate-icon"
                        />
                        <span className="tooltiptext">Meshmate</span>
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
              <Button
                primary
                title="Start Contributing Today"
                url="/community"
              />
            </Col>
          </Row>
        </div>
      </Container>
    </MemberSingleWrapper>
  );
};

export default MemberSingle;
