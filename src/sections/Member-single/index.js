import React from "react";
import { MemberSingleWrapper } from "./memberSingle.style"
import ProfileCard from "../../components/Profile-card";

const MemberSingle = ({frontmatter}) =>{
    return(
        <MemberSingleWrapper>
            <ProfileCard frontmatter={frontmatter}/>
        </MemberSingleWrapper>
    );
};

export default MemberSingle;
