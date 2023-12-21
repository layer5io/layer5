import React from "react";
import UseCasesWrapper from "./usecases.style";
// import { graphql, useStaticQuery, Link } from "gatsby";
// import { MDXRenderer } from "gatsby-plugin-mdx";
// import { Container, Row, Col } from "../../../reusecore/Layout";
// import WorkshopCard from "../../../components/Workshop-Card";
import Partners from "../Home/Partners-home";
import SeeYou from "../SeeYou";
import use_case_1 from "../../assets/images/comments/use-case-1.png";
import use_case_2 from "../../assets/images/comments/use-case-2.png";
// import { FaRegWindowMaximize } from "@react-icons/all-files/fa/FaRegWindowMaximize";

let CARD_DATA = [
    {
        heading: "Whiteboarding",
        subtitle: "The Whiteboarding and Freestyle Drawing feature introduces versatile drawing capabilities within MeshMap.",
        image: use_case_1,
        url:"#"
    },
    {
        heading: "Brainstorm with commenting",
        subtitle: "MeshMap's Designer Mode offers a powerful collaboration feature through comments.",
        image: use_case_2,
        url:"#"
    },
    {
        heading: "Whiteboarding",
        subtitle: "The Whiteboarding and Freestyle Drawing feature introduces versatile drawing capabilities within MeshMap.",
        image: use_case_1,
        url:"#"
    },
    {
        heading: "Brainstorm with commenting",
        subtitle: "MeshMap's Designer Mode offers a powerful collaboration feature through comments.",
        image: use_case_2,
        url:"#"
    },
];

const UseCases = () => {
    return (
        <UseCasesWrapper>
            <div className="page-title">
                <h1 className="heading">Platform Engineering done right</h1>
                <p className="description">Infrastructure diagraming is a breeze with Meshery. Configuration and operational design reviews between SRE, Platform Engineer, DevOps pro, or Developer</p>
            </div>
            {/* Card */}
            {/* <Container>
                <div className="workshop-grid-wrapper">
                    <Row>
                        {data.allMdx.nodes.map(({ id, frontmatter, fields, body }) => (
                            <Col {...content && ID === id ? { xs: 12, sm: 12, lg: 12 } : { xs: 12, sm: 6, lg: 4 }} key={id} className="workshop-grid-col">
                                <div className="workshop-grid-card">
                                    <WorkshopCard frontmatter={frontmatter} content={content} ID={ID} id={id} />
                                    <div className={content && ID === id ? "active" : "text-contents"}>
                                        <div className="content">
                                            <MDXRenderer>{body}</MDXRenderer>
                                        </div>
                                    </div>

                                    <div className="externalLink">
                                        <Link to={fields.slug} className="siteLink"><FaRegWindowMaximize style={{ height: "25px", width: "auto" }} /></Link>
                                    </div>

                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container> */}
            <Partners />
            <SeeYou />
        </UseCasesWrapper>
    );
};

export default UseCases;