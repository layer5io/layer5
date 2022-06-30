import React from "react";
import Image from "../image";
import WorkshopCardWrapper from "./WorkshopsCardWrapper.style";

const WorkshopCardContent = ({ frontmatter, content, ID, id }) => {
  return (
    <WorkshopCardWrapper>
      <div className={content && ID === id ? "main-open" : "main"}>
        <div className={content && ID === id ? "image-container-open" : "image-container"}>
          <div className="image">
            <Image {...frontmatter.thumbnail} imgStyle={{ objectFit: "cover" }} alt={frontmatter.title} />
          </div>
        </div>
        <div className="upcomingContainer">
          {frontmatter.status === "delivered" ? "" : <button className="upcoming">Upcoming...</button>}
        </div>
        <div className={content && ID === id ? "card-content-open" : "card-content"}>
          <div>
            <h3 className="title">{frontmatter.title}</h3>
            <p className="para">{frontmatter.abstract}</p>
          </div>
        </div>
      </div>
    </WorkshopCardWrapper>
  );
};
export default WorkshopCardContent;