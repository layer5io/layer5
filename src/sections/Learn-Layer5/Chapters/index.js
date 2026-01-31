import React, { useState, useEffect } from "react";
import { Link } from "gatsby";

import { SRLWrapper } from "simple-react-lightbox";
import { Container, Row, Col } from "../../../reusecore/Layout";
import TOC from "../../../components/Learn-Components/TOC-Chapters";
import Image from "../../../components/image";
import { ChapterWrapper } from "./chapters.style";
import { Tooltip } from "react-tooltip";
import Pagination from "../../../components/Learn-Components/Pagination";
import QuizModal from "../../../components/Learn-Components/QuizModal";

const Chapters = ({ chapterData, courseData, location, serviceMeshesList, TOCData, children }) => {

  const { frontmatter } = chapterData;
  const [showQuizModal, setShowQuizModal] = useState(false);

  const serviceMeshImages = courseData.frontmatter.meshesYouLearn || [];
  const tableOfContents = TOCData
    .filter(node => !!node.fields.section)
    .map(toc => ({ section: toc.fields.section, chapter: toc.fields.chapter }));


  const replaceSlugPart = (index) => (oldSlug) => (replacement) => {
    let parts = oldSlug.split("/");
    parts[index] = replacement;
    return parts.join("/");
  };
  const replaceServiceMeshInSlug = replaceSlugPart(4)(chapterData.fields.slug);
  const replaceChapterInSlug = (slugWithReplacedMesh) => replaceSlugPart(5)(slugWithReplacedMesh);

  useEffect(() => {

    let bookmarkPath = location.pathname;
    if (bookmarkPath.endsWith(".html")) {
      bookmarkPath = bookmarkPath.replace(".html", "");
    }
    localStorage.setItem(`bookmarkpath-${location.pathname.split("/")[4]}`, bookmarkPath);
  }, []);

  const isMeshActive = (sm) => chapterData.fields.slug.split("/")[4] === sm;

  const mapMeshWithFormattedSlug = (sm, serviceMeshes) => {
    let chapterFound = false;
    tableOfContents.forEach(toc => {
      if (toc.section === sm.fields.section) {
        if (toc.chapter === chapterData.fields.slug.split("/")[5]) chapterFound = true;
      }
    });

    if (!serviceMeshes.map(sm => sm.section).includes(sm.fields.section))
      serviceMeshes.push({
        section: sm.fields.section, slug: chapterFound ?
          replaceServiceMeshInSlug(sm.fields.section)
          : replaceChapterInSlug(replaceServiceMeshInSlug(sm.fields.section))(tableOfContents[0].chapter)
      });

  };

  const getAvailableServiceMeshes = () => {
    let serviceMeshes = [];
    serviceMeshesList.forEach(sm => {
      mapMeshWithFormattedSlug(sm, serviceMeshes);
    });

    return serviceMeshes;
  };
  const availableServiceMeshesArray = getAvailableServiceMeshes();

  const findServiceMeshImage = (images, serviceMesh) => images.find(image => image.name.toLowerCase() == serviceMesh);
  const hasMeshImageData = (meshImage) => {
    const imagePath = meshImage?.imagepath;
    return Boolean(imagePath?.childImageSharp?.gatsbyImageData || imagePath?.publicURL);
  };
  const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

  const missingServiceMeshImages = availableServiceMeshesArray
    .filter(({ section }) => {
      const meshImage = findServiceMeshImage(serviceMeshImages, section);
      return !hasMeshImageData(meshImage);
    })
    .map(({ section }) => section);

  if (missingServiceMeshImages.length > 0) {
    const context = chapterData?.fields?.slug || "unknown-chapter";
    throw new Error(`[Chapters] Missing meshesYouLearn image data for: ${missingServiceMeshImages.join(", ")} (chapter: ${context}).`);
  }

  const ServiceMeshesAvailable = ({ serviceMeshes }) => serviceMeshes.map((sm, index) => {
    const meshImage = findServiceMeshImage(serviceMeshImages, sm.section);

    if (!meshImage?.imagepath) {
      if (process.env.NODE_ENV === "development") {
        console.warn(`[Chapters] Missing meshesYouLearn image data for: ${sm.section} (chapter: ${chapterData.fields.slug})`);
      }
      return null;
    }

    return (
      <React.Fragment key={sm.section || index}>
        <div className={`service-mesh-image ${isMeshActive(sm.section) ? "service-mesh-image-active" : ""}`}>
          <Link to={`/${sm.slug}`} data-tooltip-id="mesh-name" data-tooltip-content={capitalize(sm.section)} className="course" key={index}>
            <Image
              {...meshImage.imagepath}
              className="docker"
              alt={sm.section}
            />
          </Link>
        </div>
        <Tooltip
          id="mesh-name"
          place="bottom"

          style={{ backgroundColor: "rgb(60,73,79)" }}
          className="mesh-tooltip"
        />
      </React.Fragment>);
  });

  if (showQuizModal) {
    return <QuizModal />;
  }


  return (
    <ChapterWrapper>
      <Container className="chapter-container">
        <Row>
          <Col $sm={12} $md={3}>
            <div className="toc-switcher-parent-div">
              <TOC courseData={courseData} TOCData={TOCData} chapterData={chapterData} location={location} />
              <div>
                {serviceMeshImages.length !== 0 && availableServiceMeshesArray.length != 0 && (
                  <>
                    <h4>Technologies Available</h4>
                    <div className="service-mesh-switcher">
                      <ServiceMeshesAvailable serviceMeshes={availableServiceMeshesArray} />
                    </div>
                  </>
                )}
              </div>
            </div>
          </Col>
          <Col $sm={12} $md={9}>
            <div className="chapter-data">
              <h1 className="chapter-heading">{frontmatter.chapterTitle}</h1>
              <SRLWrapper>
                {children}
              </SRLWrapper>
            </div>
            <Pagination TOCData={TOCData} chapterData={chapterData} location={location} showQuizModal={() => setShowQuizModal(true)} />
          </Col>
        </Row>
      </Container>
    </ChapterWrapper>
  );
};

export default Chapters;
