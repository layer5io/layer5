import React from "react";
import { Link } from "gatsby";
import { ProfileCardWrapper } from "./ProfileCard.style";
import MeshMateIcon from "../../assets/images/meshmate/meshmate-icon.svg";
import Image from "../image";

const ProfileCard = (props) =>{
    const {name, status, image_path, meshmate } = props.frontmatter;
    const links = props.cardlink;
    return(
        <ProfileCardWrapper status={status}>
            <div className="profile-card">
                <Link to={links}>
                    <header>
                        <Image {...image_path} imgStyle={{ objectFit: "contain" }} alt={name}/>
                        { meshmate && (
                            <Link className="meshmate" to="/community/meshmates">
                                <img src={MeshMateIcon}  alt="meshmate-color-icon" />
                            </Link>
                        )}
                        <h1>{name}</h1>
                    </header>
                </Link>
            </div>
        </ProfileCardWrapper>
    );
};

export default ProfileCard;
