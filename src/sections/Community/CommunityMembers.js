import React from "react";
import mentorimg from "../../assets/images/community/Layer5-mentor-program.png";

const CommunityMembers=()=>{
    return (
        <div>
            <h3 className="black-text">Our Community Members</h3>
            <img
                src={mentorimg}
                width="40%" align="right" 
                className="mentorimg"
            />
            <div>
                <h6>Jump in! The community is warm</h6>
  The Layer5 community is diverse with members from around the globe, who have shown consistent commitment in advancing our open source initiatives.
                <p className="indent">
  We believe that every contributor deserves a safe and friendly environment, enabling them to effectively compare different ideas and find the best solutions for advancement, while building the size, diversity, and strength of the community.
                </p>    
                <div width="100%" className="center">
                    <h3>
                        <a href="/community/members">See our community members</a>
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default CommunityMembers;