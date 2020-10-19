import React from "react";
import mentorimg from "../../assets/images/community/Layer5-mentor-program.png";
import { Link } from "gatsby";

const CommunityMembers=()=>{
    return (
        <div>
            <h2 className="black-text">Our Community Members</h2>
            <img
                src={mentorimg}
                width="40%" align="right" 
                className="mentorimg"
            />
            <div>
                <h5>Jump in! The community is warm</h5>
  The Layer5 community is diverse with members from around the globe, who have shown consistent commitment in advancing our open source initiatives.
                <p className="indent">
  We believe that every contributor deserves a safe and friendly environment, enabling them to effectively compare different ideas and find the best solutions for advancement, while building the size, diversity, and strength of the community.
                </p>    
                <div width="100%" className="center">
                    <h3>
                        <Link to="/community/members">See our community members</Link>
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default CommunityMembers;