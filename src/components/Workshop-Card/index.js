import React from "react";
import Image from "../image";
import WorkshopCardWrapper from "./WorkshopsCardWrapper.style";

const WorkshopCardContent = ({ frontmatter, content, ID, id }) => {
    return (
    <WorkshopCardWrapper>
        <div className={content && ID === id ? "main-open" : "main"}>
            <div className={content && ID === id ? "image-container-open" : "image-container"}>
                <div className="image">
                    <Image {...frontmatter.thumbnail} imgStyle={{ objectFit: "cover" }} />
                </div>
            </div>
            <div className={content && ID === id ? "card-content-open" : "card-content"}>
                <div>
                    <h3 className="title">{frontmatter.title}</h3>
                    <p className="para">{frontmatter.abstract}</p>
                </div>
            </div>
        </div>
    </WorkshopCardWrapper>
    )
}
export default WorkshopCardContent


{/* <div className="btn-and-status">
  {frontmatter.status === "delivered" ? "" : <p>Upcoming...</p>}
  <button type="button" className="readme-btn" onClick={() => toggle(!isActive)}>{`${isActive ? "Show Less" : "Show More"}`}</button>
</div> */}