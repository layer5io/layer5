import React from "react";
import { ProfileCardWrapper } from "./ProfileCard.style";
import { FaTwitter, FaGithub } from "react-icons/fa";
import Image from "../image";

const ProfileCard = (props) =>{
    const {name, github, twitter, image_path} = props.frontmatter;
    return(
        <ProfileCardWrapper>
            <div className="profile-card">
                <header>
                    <Image {...image_path} imgStyle={{ objectFit: "contain" }}/>
                    <h1>{name}</h1>
                </header>
                <ul className="profile-social-links">
                    { github && (
                        <li>
                            <a href={`https://github.com/${github}`}>
                                <FaGithub size={32}/>
                            </a>
                        </li>
                    )}
                    { twitter && (
                        <li>
                            <a href={`https://twitter.com/${twitter}`}>
                                <FaTwitter size={32}/>
                            </a>
                        </li>
                    )}
                </ul>
            </div>
        </ProfileCardWrapper>
    );
};

export default ProfileCard;
