import React, { useEffect, useState } from "react";
import { CourseOverviewWrapper } from "./courseoverview.style";
import { Row, Col } from "../../../reusecore/Layout";
import Image from "../../../components/image";
import { Link } from "gatsby";

import { IoDocumentTextOutline, } from "@react-icons/all-files/io5/IoDocumentTextOutline";
import { IoChevronBackOutline } from "@react-icons/all-files/io5/IoChevronBackOutline";
import Button from "../../../reusecore/Button";
import ChapterCard from "../../../components/Learn-Components/Chapter-Card";

import { SRLWrapper } from "simple-react-lightbox";
import DiscussCallout from "../../Discuss-Callout";
import SubscribeLearnPath from "../../subscribe/SubscribeLearnPath";
import BookmarkNotification from "../../../components/Learn-Components/BookmarkNotification";

const CourseOverview = ({ course, chapters, serviceMeshesList, children }) => {

  const [hasBookmark, setHasBookmark] = useState(false);
  const [bookmarkUrl, setBookmarkUrl] = useState("");
  const [showNotification, setShowNotification] = useState(true);
  const serviceMeshImages = course.frontmatter.meshesYouLearn || [];
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
  const availableServiceMeshes = getAvailableServiceMeshes();
  const findServiceMeshImage = (images, serviceMesh) => {
    return images.find((image) => image.name.toLowerCase() == serviceMesh);
  };

  const ServiceMeshesAvailable = ({ serviceMeshes }) =>
    serviceMeshes.map((sm, index) => {
      const meshImage = findServiceMeshImage(serviceMeshImages, sm);
      if (!meshImage || !meshImage.imagepath) {
        return null;
      }

      return (
        <div className="service-mesh-courses" key={index}>
          <Image
            {...meshImage.imagepath}
            className="docker"
            alt={sm}
          />
        </div>
      );
    });

  const missingServiceMeshImages = availableServiceMeshes.filter((mesh) => {
    const meshImage = findServiceMeshImage(serviceMeshImages, mesh);
    return !(meshImage && meshImage.imagepath?.childImageSharp?.gatsbyImageData);
  });

  if (missingServiceMeshImages.length > 0) {
    const context = course?.fields?.slug || course?.frontmatter?.courseTitle || "unknown-course";
    throw new Error(`[CourseOverview] Missing meshesYouLearn image data for: ${missingServiceMeshImages.join(", ")} (course: ${context}).`);
  }

  useEffect(() => {
    let bookmarkPath = localStorage.getItem("bookmarkpath-" + course.fields.slug.split("/")[3]);
    if (bookmarkPath) {
      setHasBookmark(true);
      setBookmarkUrl(bookmarkPath);
    }
  });

  return (
    <CourseOverviewWrapper>
      <div className="course-back-btn">
        <Link to={"/learn/learning-paths/${course.fields.learnpath}"}>
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
            $url={getChapterTitle(course.frontmatter.toc[0], chapters) ? "/${getChapterTitle(course.frontmatter.toc[0], chapters).fields.slug}" : "#"}
          />
          {hasBookmark && (
            <Button
              className="start-again-button"
              $primary title="Resume"
              $url={bookmarkUrl}
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
          <Col $md={12} $lg={8} $xl={7}>
            <h2 className="overview">Overview</h2>
            <SRLWrapper>
              {children}
            </SRLWrapper>
            <h2 className="course-toc">Table Of Contents</h2>
            {course.frontmatter.toc.map((item, index) => {
              const chapterNode = getChapterTitle(item, chapters);
              return (
                <Link
                  key={index}
                  to={chapterNode ? `/${chapterNode.fields.slug}` : "#"}
                  className="chapter-link"
                >
                  <ChapterCard
                    chapterNum={index + 1}
                    chapter={chapterNode}
                  />
                </Link>
              );
            })}
          </Col>
          <Col $md={12} $lg={4} $xl={5}>
            <div className="service-meshes-you-can-learn">
              {serviceMeshImages.length !== 0 && availableServiceMeshes.length != 0 && (
                <>
                  <h2>Technologies You Can Learn</h2>
                  <ServiceMeshesAvailable serviceMeshes={availableServiceMeshes} />
                </>
              )}
            </div>
            {/* <div className="join-community_text-and_button">
              <h2>Contribute to Layer5</h2>
              <Button
                $secondary                title="Join The Community"
                $url="https://slack.layer5.io/"
                $external={true}
              />
            </div> */}
            <DiscussCallout />
            <SubscribeLearnPath />
          </Col>
        </Row>
      </div>f
      <BookmarkNotification showNotification={showNotification} closeNotification={() => setShowNotification(false)} />
    </CourseOverviewWrapper>
  );
};

export default CourseOverview;
