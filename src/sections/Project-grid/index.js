import React from "react";
import { Link } from "gatsby";
import { Container } from "../../reusecore/Layout";

import PageHeader from "../../reusecore/PageHeader";

import { ProjectWrapper } from "./projectGrid.style";

import Image from "../../components/image";
import meshery from "../../assets/images/app/projects/meshery-logo-light.png";
import landscape from "../../assets/images/app/projects/landscape.png";
import smi from "../../assets/images/app/projects/smi.svg";
import imagehub from "../../assets/images/image-hub/layer5-image-hub.png"; 

const ProjectPage = ({data}) => {
    return (
        <ProjectWrapper>
            <PageHeader title="Projects" path="Projects"/>
            <div className="project-page-wrapper">
                <Container>
                    <div className="project__grid">
                        {data.allMdx.nodes.map(({id, frontmatter, fields }) => (
                            <Link to={fields.slug} key={id} className={`project__card ${frontmatter.title === "Service Mesh Performance" ? "five": "six"}`}>
                                <div className="project__card-container" >
                                    <Image
                                        {...frontmatter.thumbnail}
                                        alt={frontmatter.title}
                                    />
                                    <h5>{frontmatter.title}</h5>
                                </div>
                            </Link>        
                        ))}
                        <Link to="/landscape" className="project__card one">
                            <div className="project__card-container">
                                <img src={landscape}
                                    alt="Landscape"
                                />
                                <h5>Landscape</h5>
                            </div>
                        </Link>
                        <Link to="/meshery" className="project__card two">
                            <div className="project__card-container">
                                <img src={meshery}
                                    alt="Meshery"
                                />
                                <h5>MESHERY</h5>
                            </div>
                        </Link>
                        <Link to="/projects/image-hub" className="project__card three">
                            <div className="project__card-container">
                                <img src={imagehub}
                                    alt="Image Hub"
                                />
                                <h5>Image Hub</h5>
                            </div>
                        </Link>
                        <Link to="/projects/service-mesh-interface-conformance" className="project__card four">
                            <div className="project__card-container">
                                <img src={smi}
                                    alt="Service Mesh Interface Conformance" 
                                />
                                <h5>Service Mesh Interface Conformance</h5>
                            </div>
                        </Link>
                    </div>
                </Container>
            </div>
        </ProjectWrapper>
    );
};

export default ProjectPage;
