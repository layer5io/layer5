import React from "react";
import slugify from "../../../utils/slugify";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { SRLWrapper } from "simple-react-lightbox";
import { Link } from "gatsby";
import { MemberSingleWrapper } from "./memberSingle.style";
import { IoIosArrowDropleftCircle } from "@react-icons/all-files/io/IoIosArrowDropleftCircle";
import { Col, Container, Row } from "../../../reusecore/Layout";
import Image from "../../../components/image";

const MemberBio = ({ frontmatter, body }) => {
  const {
    name,
    executive_image,
    executive_position,
    company,
  } = frontmatter;
  return (
    <MemberSingleWrapper>
      <Container>
        <div className="executive-bio">
          <Row>
            <Col xs={12} sm={12} lg={9}>
              <div className="header">
                <div className="name">{name}</div>
                {executive_position && <div className="position">{executive_position}, {company}</div>}
              </div>
            </Col>
            <Col xs={12} sm={12} lg={3}>
              <div className="exec-bio-image">
                <Link to={executive_image.publicURL}>
                  <Image
                    className="profile-image"
                    {...executive_image}
                    alt={name}
                  />
                </Link>
              </div>
            </Col>
          </Row>
          <Row>
            <h3>Executive Bio</h3>
            <SRLWrapper>
              <MDXRenderer>{body}</MDXRenderer>
            </SRLWrapper>
          </Row>
        </div>
        <div className="backBtn">
          <Link to={`/community/members/${slugify(name)}`}>
            <IoIosArrowDropleftCircle />
            <h4>Go Back to Member Profile</h4>
          </Link>
        </div>
      </Container>
    </MemberSingleWrapper>
  );
};

export default MemberBio;
