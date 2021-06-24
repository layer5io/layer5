import React from "react";
import ContentCardWrapper from "./content.card.style";
import {
  IoDocumentTextOutline,
  IoVideocam,
  IoBookmarkOutline,
} from "react-icons/io5";
import Button from "../../../reusecore/Button";

const ContentCard = ({ chapter }) => (
  <ContentCardWrapper>
    <div className="chapter-content-div">
      <div className="chapter-content">
        <h2>
          {chapter.frontmatter.chapterTitle
            ? chapter.frontmatter.chapterTitle
            : chapter.frontmatter.courseTitle}
        </h2>
        <p>{chapter.frontmatter.description}</p>
      </div>
      <div className="chapter-info">
        <div className="info">
          <IoVideocam /> <span>{chapter.frontmatter.videos} videos</span>
        </div>
        <div className="info">
          <IoDocumentTextOutline />{" "}
          <span>{chapter.frontmatter.lectures} lectures</span>
        </div>
      </div>
    </div>
    <div className="bookmark-btn-div">
      <Button className="bookmark-btn">
        <IoBookmarkOutline />
      </Button>
    </div>
  </ContentCardWrapper>
);

export default ContentCard;
