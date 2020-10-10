import React from "react"
import Image from "../image"
import WorkshopCardWrapper from "./WorkshopsCardWrapper.style"

const WorkshopCardContent = ({ frontmatter }) => {
  console.log(frontmatter)
  return (
    <WorkshopCardWrapper>
      <div className="image">
        <Image {...frontmatter.thumbnail} imgStyle={{ objectFit: "contain" }} />
      </div>
      <div>
        <h3 className="title">{frontmatter.title}</h3>
      </div>
      <div>
        <p className="para">{frontmatter.abstract}</p>
        {frontmatter.slack ? <a href={frontmatter.slack} target = "_blank" rel="noreferrer" className="links">Slack</a> : ""}
        {frontmatter.slides ? <a href={frontmatter.slides} target = "_blank" rel="noreferrer" className="links">Slides</a> : ""}
        {frontmatter.eurl ? <a href={frontmatter.eurl} target = "_blank" rel="noreferrer" className="links">EURL</a> : ""}
        {frontmatter.labs ? <a href={frontmatter.labs} target = "_blank" rel="noreferrer" className="links">Labs</a> : ""}
        {frontmatter.video ? <a href={frontmatter.video} target = "_blank" rel="noreferrer" className="links">Video</a> : ""}
      </div>
    </WorkshopCardWrapper>
  )
}
export default WorkshopCardContent
