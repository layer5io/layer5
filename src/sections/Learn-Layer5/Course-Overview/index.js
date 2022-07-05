import React, { useEffect, useState } from "react";
import { CourseOverviewWrapper } from "./courseoverview.style";
import { Row, Col } from "../../../reusecore/Layout";
import Image from "../../../components/image";
import { Link } from "gatsby";

import { IoDocumentTextOutline, } from "@react-icons/all-files/io5/IoDocumentTextOutline";
import { IoChevronBackOutline } from "@react-icons/all-files/io5/IoChevronBackOutline";
import Button from "../../../reusecore/Button";
import ChapterCard from "../../../components/Learn-Components/Chapter-Card";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { SRLWrapper } from "simple-react-lightbox";
import DiscussCallout from "../../Discuss-Callout";
import SubscribeLearnPath from "../../subscribe/SubscribeLearnPath";
import BookmarkNotification from "../../../components/Learn-Components/BookmarkNotification";

const CourseOverview = ({ course, chapters, serviceMeshesList }) => {
  const [hasBookmark, setHasBookmark] = useState(false);
  const [bookmarkUrl, setBookmarkUrl] = useState("");
  const [showNotification, setShowNotification] = useState(true);
  const serviceMeshImages = course.frontmatter.meshesYouLearn;
  const getChapterTitle = (chapter, chapterList) => {
    for (let i = 0; i < chapterList.length; i++) {
      if (chapterList[i].fields.chapter === chapter) return chapterList[i];
    }
  };

  const getAvailableServiceMeshes = () => {
    let serviceMeshes = [];
    serviceMeshesList.forEach((item) => {
      if (serviceMeshes.indexOf(item["fields"]["section"]) === -1)
        serviceMeshes.push(item["fields"]["section"]);
    });
    return serviceMeshes;
  };

  const findServiceMeshImage = (images, serviceMesh) => {
    return images.find((image) => image.name.toLowerCase() == serviceMesh);
  };

  const ServiceMeshesAvailable = ({ serviceMeshes }) =>
    serviceMeshes.map((sm, index) => {
      return (
        <div className="service-mesh-courses" key={index}>
          <Image
            {...findServiceMeshImage(serviceMeshImages, sm).imagepath}
            className="docker"
            alt={sm}
          />
        </div>
      );
    });

  useEffect(() => {
    let bookmarkPath = localStorage.getItem("bookmarkpath-"+course.fields.slug.split("/")[3]);
    if (bookmarkPath){
      setHasBookmark(true);
      setBookmarkUrl(bookmarkPath);
    }
  });

  return (
    <CourseOverviewWrapper>
      <div className="course-back-btn">
        <Link to={`/learn/learning-paths/${course.fields.learnpath}`}>
          <IoChevronBackOutline /> <h4>Learning Paths/Courses</h4>
        </Link>
      </div>
      <div
        style={{ backgroundColor: course.frontmatter.themeColor }}
        className="course-overview-hero"
      >
        <div className="course-info-content">
          <div className="course-hero-head">
            <h2>{course.frontmatter.courseTitle}</h2>
            <p>{course.frontmatter.description}</p>
          </div>
          <div className="content-info">
            {/* <div className="info">
              <IoVideocam /> <span>{course.frontmatter.videos} videos</span>
            </div> */}
            <div className="info">
              <IoDocumentTextOutline />{" "}
              <span>{course.frontmatter.toc.length} Chapters</span>
            </div>
          </div>
          <Button
            title={hasBookmark ? "Start Again" : "Get Started"}
            url={`istio/${course.frontmatter.toc[0]}`}
          />
          {hasBookmark && (
            <Button
              className="start-again-button"
              primary
              title="Resume"
              url={bookmarkUrl}
            />
          )}
        </div>
        <div className="course-hero-head-image">
          <Image
            {...course.frontmatter.cardImage}
            alt={course.frontmatter.title}
          />
        </div>
      </div>
      <div className="content-section-container" id="toc">
        <Row className="content-section">
          <Col md={12} lg={8} xl={7}>
            <h2 className="overview">Overview</h2>
            <SRLWrapper>
              <MDXRenderer>{course.body}</MDXRenderer>
            </SRLWrapper>
            <h2 className="course-toc">Table Of Contents</h2>
            {course.frontmatter.toc.map((item, index) => (
              <Link key={index} to={`istio/${item}`} className="chapter-link">
                <ChapterCard
                  chapterNum={index + 1}
                  chapter={getChapterTitle(item, chapters)}
                />
              </Link>
            ))}
          </Col>
          <Col md={12} lg={4} xl={5}>
            <div className="service-meshes-you-can-learn">
              <h2>Service Meshes You can Learn</h2>
              <ServiceMeshesAvailable
                serviceMeshes={getAvailableServiceMeshes()}
              />
            </div>
            {/* <div className="join-community_text-and_button">
              <h2>Contribute to Layer5</h2>
              <Button
                secondary
                title="Join The Community"
                url="http://slack.layer5.io/"
                external={true}
              />
            </div> */}
            <DiscussCallout />
            <SubscribeLearnPath />
          </Col>
        </Row>
      </div>
      <BookmarkNotification showNotification={showNotification} closeNotification={() => setShowNotification(false)} />
    </CourseOverviewWrapper>
  );
};

export default CourseOverview;
