import React from "react";
import { Link } from "gatsby";
import { ProfileCardWrapper } from "./ProfileCard.style";
import { FaTwitter, FaGithub } from "react-icons/fa";
import MeshMateIcon from "../../svgs/meshmate-icon.svg"
import Image from "../image";

const ProfileCard = (props) =>{
    const {name, position,  github, twitter, status, image_path, meshmate} = props.frontmatter;
    return(
        <ProfileCardWrapper status={status}>
            <div className="profile-card">
                <header>
                    <Image {...image_path} imgStyle={{ objectFit: "contain" }}/>
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
                    { meshmate && (
                        <li>
                            <Link to={'/community/meshmates'}>
                                <MeshMateIcon className="meshmate" size={32}/>
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </ProfileCardWrapper>
    );
};

export default ProfileCard;
