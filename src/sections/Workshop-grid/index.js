import React, { useState } from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Container, Row, Col } from "../../reusecore/Layout";
import WorkshopCard from "../../components/Workshop-Card";
import PageHeader from "../../reusecore/PageHeader";
import { WorkshopPageWrapper } from "./WorkshopsGrid.style";
import { BsArrowDown } from "react-icons/bs";
import { BsArrowUp } from "react-icons/bs";
import Slack from "../../assets/images/socialIcons/slack-light.svg";
import Button from "../../reusecore/Button";
import { FaRegWindowMaximize } from "react-icons/fa";


const WorkshopsPage = ({hide_path, limit}) => {

    const [content, setContent] = useState(false);
    const [open, setOpen] = useState(false);
    const [ID, setID] = useState("");

    const data = useStaticQuery(
        graphql`
            query allWorkshops {
                allMdx(
                    sort: { fields: [frontmatter___date], order: DESC }
                    filter: { fields: { collection: { eq: "workshops" } } }
                ) {
                    nodes {
                        id
                        slug
                        body
                        frontmatter {
                            title
                            date(formatString: "MMMM Do, YYYY")
                            slack
                            slides
                            abstract
                            status
                            labs
                            video
                            eurl
                            thumbnail {
                                childImageSharp {
                                    fluid(maxWidth: 1000) {
                                    ...GatsbyImageSharpFluid_withWebp
                                    }
                                }
                            extension
                            publicURL
                        }
                    }
                    fields {
                        slug
                        }
                    }
                }
            }
        `
    );

    const toggleActive = (id) => {
        if(open){
            if(ID === id){
                setOpen(false);
                setContent(false);
                setID("");
            }
            else{
                setOpen(false);
                setContent(false);
                setID(id);
                setContent(true);
                setOpen(true);
            }
        }
        else{
            setID(id);
            setContent(true);
            setOpen(true);
        }
    };

    console.log(data);

    let path = hide_path ? "" : "Workshop";
    let no_of_items = limit ? limit : data.length;

    return (
        <WorkshopPageWrapper>
            <PageHeader title="Workshop" path={path}/>
            <div className="workshop-page-wrapper">
                <Container>
                    <div className="workshop-grid-wrapper">
                        <Row>
                            {data.allMdx.nodes.slice(0, no_of_items).map(({id, frontmatter, fields, body }) => (
                                <Col {...content && ID === id ? {xs:12, sm:12, lg:12} : {xs:12, sm:6, lg:4} } key={id}>
                                    <div className="workshop-grid-card">
                                        <WorkshopCard frontmatter={frontmatter} fields={fields} content={content} ID={ID} id={id} />
                                        <div className={content && ID === id ? "active" : "text-contents"}>
                                            <div className="content">
                                                <MDXRenderer>{body}</MDXRenderer>
                                            </div>
                                        </div>
                                        <div className={content && ID === id ? "btn-and-status-open" : "btn-and-status"}>
                                            <div className="social-icons">
                                                {frontmatter.slack && frontmatter.status === "delivered" && content && ID === id ?
                                                    <a href={frontmatter.slack} target = "_blank" rel="noreferrer" className="links">
                                                        <img src={Slack} alt="Slack"/>
                                                        Slack
                                                    </a> : ""}
                                            </div>
                                            <div className={content && ID === id ? "linkAndReadBtns-open" : "linkAndReadBtns"}>
                                                <div className="expand">
                                                    {content && ID === id ?
                                                        <button onClick={() => toggleActive(id)} className="readmeBtn"> Read Less <BsArrowUp className="icon" size={30} /></button> :
                                                        <button onClick={() => toggleActive(id)} className="readmeBtn"> Read More <BsArrowDown className="icon" size={30} /></button> }
                                                </div>
                                                <div className="externalLink">
                                                    <Link to={fields.slug} className="siteLink"><FaRegWindowMaximize style={{ height: "25px", width: "auto" }} /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                            { limit && (
                                <div className="see-more-button">
                                    <Button primary title="see more" url="workshops"/>
                                </div>
                            )}
                        </Row>
                    </div>
                </Container>
            </div>
        </WorkshopPageWrapper>
    );
};

export default WorkshopsPage;
