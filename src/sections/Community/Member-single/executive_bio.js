import React from "react";
import slugify from "../../../utils/slugify";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { SRLWrapper } from "simple-react-lightbox";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaCloudDownloadAlt } from "@react-icons/all-files/fa/FaCloudDownloadAlt";
import { MdMail } from "@react-icons/all-files/md/MdMail";
import { Link } from "gatsby";
import { MemberSingleWrapper } from "./memberSingle.style";
import { IoIosArrowDropleftCircle } from "@react-icons/all-files/io/IoIosArrowDropleftCircle";
import { Col, Container, Row } from "../../../reusecore/Layout";
import Image from "../../../components/image";

const MemberBio = ({ frontmatter, body }) => {
  const {
    github,
    twitter,
    email,
    linkedin,
    name,
    executive_image,
    profile,
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
            <Col xs={12} sm={12} lg={9}>
              <h3>Executive Bio</h3>
              <SRLWrapper>
                <MDXRenderer>{body}</MDXRenderer>
              </SRLWrapper>
            </Col>
            <Col xs={12} sm={12} lg={3}>
              <div className="exec-bio-image">
                <div className="social-bg">
                  <ul className="profile-social-links">
                    <li>
                      <a href={profile}>
                        <FaCloudDownloadAlt className="github" size={32} />
                      </a>
                    </li>
                    {github && (
                      <li>
                        <a href={`https://github.com/${github}`}>
                          <FaGithub className="github" size={32} />
                        </a>
                      </li>
                    )}
                    {twitter && (
                      <li>
                        <a href={`https://twitter.com/${twitter}`}>
                          <FaTwitter className="twitter" size={32} />
                        </a>
                      </li>
                    )}
                    {linkedin && (
                      <li>
                        <a href={`https://Linkedin.com/in/${linkedin}`}>
                          <FaLinkedin className="linkedin" size={32} />
                        </a>
                      </li>
                    )}
                    {email && (
                      <li>
                        <a href={`mailto:=${email}`}>
                          <MdMail className="github" size={32} />
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </Col>
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
