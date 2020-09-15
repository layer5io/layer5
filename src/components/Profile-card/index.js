import React from "react";
import { ProfileCardWrapper } from "./ProfileCard.style";
import { FaTwitter, FaGithub } from "react-icons/fa";

const ProfileCard = () =>{
    return(
        <ProfileCardWrapper>
            <div className="profile-card">
                <header>
                    <a href="http://ali.shahab.pk">
                        <img src="http://gravatar.com/avatar/eb2d48c7f2cf027bb4cb20483e27c9c9?size=200px"/>
                    </a>
                    <h1>Tanuj Agarwal</h1>
                </header>
                <ul className="profile-social-links">
                    <li>
                        <a href="https://twitter.com/alishahab">
                            <FaGithub/>
                        </a>
                    </li>
                    <li>
                        <a href="http://themeforest.net/user/alishahab">
                            <FaTwitter/>
                        </a>
                    </li>
                </ul>
            </div>
        </ProfileCardWrapper>
    );
};

export default ProfileCard;
