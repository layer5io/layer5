import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import WorkshopSinglePageWrapper from "./WorkshopSinglePageWrapper.style";
import { IoIosArrowDropleftCircle } from "@react-icons/all-files/io/IoIosArrowDropleftCircle";
import { Link } from "gatsby";

import Slack from "../../../assets/images/socialIcons/slack_color.png";
import Slide from "../../../assets/images/socialIcons/slide_color.png";
import LinkIcon from "../../../assets/images/socialIcons/link_color.png";
import Youtube from "../../../assets/images/socialIcons/youtube_color.png";
import Lab from "../../../assets/images/socialIcons/lab_color.png";
import PageHeader from "../../../reusecore/PageHeader";
import { Container } from "../../../reusecore/Layout";
import Button from "../../../reusecore/Button";

const WorkshopSinglePage = ({ frontmatter, body }) => {

  return (
    <WorkshopSinglePageWrapper>
      <div className="backBtn">
        <Link to="/learn/service-mesh-workshops">
          <IoIosArrowDropleftCircle />
          <h4>All Workshops</h4>
        </Link>
      </div>
      <PageHeader
        title={frontmatter.title}
        subtitle={frontmatter.abstract}
        thumbnail={frontmatter.thumbnail}
      />
      <Container>
        <div className="cardContent">
          <MDXRenderer>{body}</MDXRenderer>
        </div>
        <div className="btn-and-status">
          <div className="social-icons">
            {frontmatter.slack && frontmatter.status === "delivered" ?
              <a href={frontmatter.slack} target = "_blank" rel="noreferrer" className="links">
                <img src={Slack} alt="Slack"/>
                                Slack
              </a> : ""}
            {frontmatter.slides && frontmatter.status === "delivered" ?
              <a href={frontmatter.slides} target = "_blank" rel="noreferrer" className="links">
                <img src={Slide} alt="Slide"/>
                                Slides
              </a> : ""}
            {frontmatter.eurl && frontmatter.status === "delivered" ?
              <a href={frontmatter.eurl} target = "_blank" rel="noreferrer" className="links">
                <img src={LinkIcon} alt="Link"/>
                                Link
              </a> : ""}
            {frontmatter.labs && frontmatter.status === "delivered" ?
              <a href={frontmatter.labs} target = "_blank" rel="noreferrer" className="links">
                <img src={Lab} alt="Lab"/>
                                Labs
              </a> : ""}
            {frontmatter.video && frontmatter.status === "delivered" ?
              <a href={frontmatter.video} target = "_blank" rel="noreferrer" className="links">
                <img src={Youtube} alt="Youtube video"/>
                                Video
              </a> : ""}
          </div>
        </div>
        <div className="bottomBtn">
          <Button secondary title="Request a Workshop" url="mailto:training@layer5.io" external={true}/>
          <Button primary title="Join this Workshop" url={frontmatter.eurl}/>
        </div>
      </Container>
    </WorkshopSinglePageWrapper>
  );
};

export default WorkshopSinglePage;
