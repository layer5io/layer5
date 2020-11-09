import React from "react";
import { Link } from "gatsby";
import { ProfileCardWrapper } from "./ProfilePage.style";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import MeshMateIcon from "../../svgs/meshmate-icon.svg";
import MeshMateIconWhite from "../../svgs/meshmate-icon.svg";
import Image from "../image";
import {Col, Container, Row} from "../../reusecore/Layout";

const ProfileCard = (props) =>{
    const {name, position,  github, twitter, status, image_path, meshmate, linkedin, location, skills, technologies, bio} = props.frontmatter;
    return(
        <ProfileCardWrapper status={status}>
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
                            {
                                location &&
                                <h4>Location: {location}</h4>
                            }
                            
                            {
                                bio &&
                                <h6>{bio}</h6>
                            }
                            {
                                skills &&
                                <h4>skills: {skills}</h4>
                            }
                            {
                                technologies &&
                                <h4>technologies: {technologies}</h4>
                            }
                        </header>
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
                                            <MeshMateIconWhite className="meshmate-white" size={32}/>
                                            <MeshMateIcon className="meshmate-color" size={32}/>
                                        </Link>
                                    </li>
                                )}
                            </ul>
                        </div>
                        
                    </Col>
                </Row>
            </div>
        </ProfileCardWrapper>
    );
};

export default ProfileCard;
