import React from "react";
import Image from "../../components/image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import WorkshopSinglePageWrapper from "./WorkshopSinglePageWrapper.style";
import { MdArrowBack } from "react-icons/md";
import { Link } from "gatsby";

import Slack from "../../assets/images/socialIcons/slack_color.png";
import Slide from "../../assets/images/socialIcons/slide_color.png";
import LinkIcon from "../../assets/images/socialIcons/link_color.png";
import Youtube from "../../assets/images/socialIcons/youtube_color.png";
import Lab from "../../assets/images/socialIcons/lab_color.png";


const WorkshopSinglePage = ({ frontmatter, body }) => {

    return (
        <WorkshopSinglePageWrapper>
            <div className="backBtn">
                <Link to="/workshops">
                    <MdArrowBack /> All Workshops
                </Link>
            </div>
            <div className="main">
                <div className="imageContainer">
                    <div className="image">
                        <Image {...frontmatter.thumbnail} alt={frontmatter.title} />
                    </div>
                </div>
                <div className="cardContent">
                    <div className="contentContainer">
                        <h3 className="title">{frontmatter.title}</h3>
                        <p className="abstract">{frontmatter.abstract}</p>
                    </div>
                    <div className="contentBody">
                        <MDXRenderer>{body}</MDXRenderer>
                    </div>
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
                    <button className="requestBtn">
                        <a href="mailto:training@layer5.io" target="_blank" rel="noreferrer">Request a Workshop</a>
                    </button>
                    <button className="joinBtn">
                        <a href={frontmatter.eurl} target="_blank" rel="noreferrer">Join this Workshop</a>
                    </button>
                </div>
            </div>
        </WorkshopSinglePageWrapper>
    );
};

export default WorkshopSinglePage;
