import React from "react";
import { ProfileCardWrapper } from "./ProfileCard.style";
import { FaTwitter, FaGithub } from "react-icons/fa";
import MeshMateIcon from "../../svgs/meshmate-icon.svg"
import Image from "../image";

const ProfileCard = (props) =>{
    const {name, github, twitter, status, image_path, meshmate} = props.frontmatter;
    return(
        <ProfileCardWrapper status={status}>
            <div className="profile-card">
                <header>
                    <Image {...image_path} imgStyle={{ objectFit: "contain" }}/>
                    <h1>{name}</h1>
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
                            <a href={`https://twitter.com/${twitter}`}>
                                <MeshMateIcon size={32}/>
                            </a>
                        </li>
                    )}
                </ul>
            </div>
        </ProfileCardWrapper>
    );
};

export default ProfileCard;
