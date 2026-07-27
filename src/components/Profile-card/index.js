import React from "react";
import { Link } from "gatsby";
import { ProfileCardWrapper } from "./ProfileCard.style";
import MeshMateIcon from "../../assets/images/meshmate/meshmate-icon.svg";
import Meshmate2020 from "../../assets/images/meshmate-of-the-year/meshmate-of-the-year-2020.svg";
import Meshmate2021 from "../../assets/images/meshmate-of-the-year/meshmate-of-the-year-2021.svg";
import Image from "../image";

const meshmateBadges = {
  meshmate2020: Meshmate2020,
  meshmate2021: Meshmate2021,
};

const ProfileCard = (props) => {
  const { name, status, image_path, meshmate, badges } = props.frontmatter;
  const link = props.cardlink;
  return (
    <ProfileCardWrapper status={status}>
      <div className="profile-card">
        <Link to={link}>
          <header>
            <Image
              {...image_path}
              imgStyle={{ objectFit: "contain" }}
              alt={name}
            />
            {meshmate === "yes" && (
              <Link className="meshmate" to="/community/meshmates">
                <img src={MeshMateIcon} alt="meshmate-color-icon" />
              </Link>
            )}
            {badges &&
              badges.map((badge) => {
                const BadgeIcon = meshmateBadges[badge];
                if (BadgeIcon) {
                  return (
                    <Link
                      key={badge}
                      className="meshmate"
                      to="/community/meshmates"
                    >
                      <img src={BadgeIcon} alt="meshmate-color-icon" />
                    </Link>
                  );
                }
                return null;
              })}
            <h4>{name}</h4>
          </header>
        </Link>
      </div>
    </ProfileCardWrapper>
  );
};

export default ProfileCard;
