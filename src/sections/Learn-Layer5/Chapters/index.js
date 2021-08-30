import React from "react";
import { Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { SRLWrapper } from "simple-react-lightbox";
import { Container, Row, Col } from "../../../reusecore/Layout";
import TOC from "../../../components/Learn-Components/TOC-Chapters";
import Image from "../../../components/image";
import { ChapterWrapper } from "./chapters.style";
import ReactTooltip from "react-tooltip";
import Pagination from "../../../components/Learn-Components/Pagination";

const Chapters = ({chapterData, courseData, location, serviceMeshesList, TOCData}) => {

  const { frontmatter, body } = chapterData;
  const serviceMeshImages = courseData.frontmatter.meshesYouLearn;
  const tableOfContents = TOCData
    .filter(node => !!node.fields.section)
    .map( toc => ({section: toc.fields.section, chapter: toc.fields.chapter}) );


  const replaceSlugPart = (index) => (oldSlug) => (replacement) => {
    let parts = oldSlug.split("/");
    parts[index] = replacement;
    return parts.join("/");
  };
  const replaceServiceMeshInSlug = replaceSlugPart(3)(chapterData.fields.slug);
  const replaceChapterInSlug = (slugWithReplacedMesh) => replaceSlugPart(4)(slugWithReplacedMesh);


  const isMeshActive = (sm) => chapterData.fields.slug.split("/")[3] === sm;

  const mapMeshWithFormattedSlug = (sm, serviceMeshes) => {
    let chapterFound = false;
    tableOfContents.forEach(toc => {
      if(toc.section === sm.fields.section){
        if(toc.chapter === chapterData.fields.slug.split("/")[4]) chapterFound = true;
      }
    });

    if(!serviceMeshes.map(sm => sm.section).includes(sm.fields.section)) 
      serviceMeshes.push({section: sm.fields.section, slug: chapterFound ? 
        replaceServiceMeshInSlug( sm.fields.section)
        : replaceChapterInSlug(replaceServiceMeshInSlug(sm.fields.section))(tableOfContents[0].chapter)});

  }; 

  const getAvailableServiceMeshes = () => {
    let serviceMeshes = [];
    serviceMeshesList.forEach(sm => {
      mapMeshWithFormattedSlug(sm, serviceMeshes);    
    });
    return serviceMeshes;
  };

  const findServiceMeshImage = (images, serviceMesh) => images.find(image => image.name.toLowerCase() == serviceMesh);
  const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

  const ServiceMeshesAvailable = ({serviceMeshes}) => serviceMeshes.map((sm, index) => {

    return(  
      <>
        <div className={`service-mesh-image ${isMeshActive(sm.section) ? "service-mesh-image-active" : ""}`}>
          <Link to={`/${sm.slug}`} data-for="mesh-name" data-tip={capitalize(sm.section)} className="course" key={sm+index}>
            <Image
              {...findServiceMeshImage(serviceMeshImages, sm.section).imagepath}
              className="docker"
              alt={sm.section}
            />
          </Link>
        </div>
        <ReactTooltip 
          id="mesh-name"
          place="bottom"
          effect="solid"
          backgroundColor="rgb(60,73,79)"
          className="mesh-tooltip"
        />
      </>);
  }
  ); 


  return (
    <ChapterWrapper>
      <Container className="chapter-container">
        <Row>
          <Col sm={12} md={3}>
            <div className="toc-switcher-parent-div">
              <TOC courseData={courseData} TOCData={TOCData} chapterData={chapterData} location={location} />
              <div>
                <h4>Service Meshes Available</h4>
                <div className="service-mesh-switcher">
                  <ServiceMeshesAvailable serviceMeshes={getAvailableServiceMeshes()}/>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={12} md={9}>
            <div className="chapter-data">
              <h1 className="chapter-heading">{frontmatter.chapterTitle}</h1>
              <SRLWrapper>
                <MDXRenderer>{body}</MDXRenderer>
              </SRLWrapper>
            </div>
            <Pagination TOCData={TOCData} chapterData={chapterData} location={location} />
          </Col>
        </Row>
      </Container>
    </ChapterWrapper>
  );
};

export default Chapters;
