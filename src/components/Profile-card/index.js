import React from "react";
import { Link } from "gatsby";
import { ProfileCardWrapper } from "./ProfileCard.style";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import MeshMateIcon from "../../svgs/meshmate-icon.svg";
import MeshMateIconWhite from "../../svgs/meshmate-icon-white.svg";
import Image from "../image";

const ProfileCard = (props) =>{
    const {name, position,  github, twitter, status, image_path, meshmate, linkedin} = props.frontmatter;
    return(
        <ProfileCardWrapper status={status}>
            <div className="profile-card">
                <header>
                    <Image {...image_path} imgStyle={{ objectFit: "contain" }} alt={name}/>
                    <h1>{name}</h1>
                    { position && (
                        <h2>{position}</h2>
                    )}
                </header>
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
        </ProfileCardWrapper>
    );
};

export default ProfileCard;
