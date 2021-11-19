import React from "react";
import { Link } from "gatsby";
import { ProfileCardWrapper } from "./ProfileCard.style";
import MeshMateIcon from "../../assets/images/meshmate/meshmate-icon.svg";
import Meshmate2020 from "./meshmate_of_the_year_2020.svg";
import Image from "../image";

const ProfileCard = (props) => {
  const {name, status, image_path, meshmate} = props.frontmatter;
  const link = props.cardlink;
  return(
    <ProfileCardWrapper status={status}>
      <div className="profile-card">
        <Link to={link}>
          <header>
            <Image {...image_path} imgStyle={{ objectFit: "contain" }} alt={name}/>
            { meshmate === "yes" && (
              <Link className="meshmate" to="/community/meshmates">
                <img src={MeshMateIcon} alt="meshmate-color-icon" />
              </Link>
            )}
            { name==="Nikhil Ladha" && ( 
              <Link className="meshmate" to="/community/meshmates">
                <img src={Meshmate2020} alt="meshmate-color-icon" />
              </Link>
            )}
            <h4>{name}</h4>
          </header>
        </Link>
      </div>
    </ProfileCardWrapper>
  );
};

export default ProfileCard;
