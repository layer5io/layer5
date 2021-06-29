import React from "react";
import ChapterCardWrapper from "./chapter-card.style";

const ChapterCard = ({ chapterNum, chapter }) => (
  <ChapterCardWrapper>
    <div className="chapter-content">
      <h2 className="chapter-number">{chapterNum}</h2>
      <div className="chapter-desc">
        <h3>
          {chapter.frontmatter.chapterTitle
            ? chapter.frontmatter.chapterTitle
            : chapter.frontmatter.courseTitle}
        </h3>
        <p>{chapter.frontmatter.description}</p>
      </div>
    </div>
  </ChapterCardWrapper>
);

export default ChapterCard;
