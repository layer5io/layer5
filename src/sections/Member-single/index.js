import React from "react";
import {Link} from "gatsby";
import { MemberSingleWrapper } from "./memberSingle.style";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import {Col, Container, Row} from "../../reusecore/Layout";
import Image from "../../components/image";
import MeshMateIcon from "../../assets/images/meshmate/meshmate-icon.svg";
import MeshMateIconWhite from "../../assets/images/meshmate/meshmate-icon-white.svg";

const MemberSingle = ({frontmatter}) =>{
    const {name, position,  github, twitter, image_path, meshmate, linkedin, location, skills, bio} = frontmatter;
    return(
        <MemberSingleWrapper>
            <Container>
                <div>
                    <Row>
                        <Col xs={12} sm={6} lg={6} >
                            <Image className="profile-image" {...image_path} imgStyle={{ objectFit: "contain" }} alt={name}/>
                        </Col>
                        <Col xs={12} sm={6} lg={6} >
                            <header>
                                <h1>{name}</h1>
                                { position && (
                                    <h2>{position}</h2>
                                )}
                            </header>
                            <div className="body">
                                {
                                    location &&
                                    <h4>Location: {location}</h4>
                                }

                                {
                                    bio &&
                                    <h4>{bio}</h4>
                                }
                                {
                                    skills &&
                                    <h4>skills: {skills}</h4>
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
                                            <Link to={"/community/meshmates"}>
                                                <img src={MeshMateIconWhite} className="meshmate-color" alt="meshmate-white-icon" />
                                                <img src={MeshMateIcon} className="meshmate-white" alt="meshmate-color-icon" />
                                            </Link>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </MemberSingleWrapper>
    );
};

export default MemberSingle;
