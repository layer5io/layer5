import React from "react";
import { Link } from "gatsby";
import { IoIosArrowRoundForward } from "react-icons/io";

import { Container, Row, Col } from "../../reusecore/Layout";
import PageHeader from "../../reusecore/PageHeader";
import Sidebar from "../Blog-sidebar";

import blogThumb2 from "../../assets/images/blog/post/blog-post-2.png";

import { BlogPageWrapper } from "./blogList.style";

const BlogList = () => {
  return (
    <BlogPageWrapper>
      <PageHeader title="Blog List" />
      <div className="blog-list-wrapper">
        <Container>
          <Row>
            <Col sm={12} md={8}>
              <Row>
                <Col xs={12}>
                  <div className="post-block list">
                    <div className="post-thumb-block">
                      <img src={blogThumb2} alt="prime blog page" />
                      <div className="post-meta">
                        <span>
                          <em> 15 </em> SEP
                        </span>
                      </div>
                    </div>
                    <h2 className="post-title">
                      <Link to="#">
                        It is a long established fact that
                      </Link>
                    </h2>
                    <p className="post-entry">
                      Readable content of a page when looking at its layout. The
                      point of using Lorem Ipsum is that it has a more-or-less
                      normal distribution of letters, as opposed to using
                      'Content here, content here', making it look like readable
                      English. Many desktop publishing packages and web page
                      editors now use
                    </p>

                    <Link to="#" className="readmore-btn">
                      see more <IoIosArrowRoundForward />
                    </Link>
                  </div>
                </Col>
                <Col xs={12}>
                  <div className="post-block list text-only">
                    <h2 className="post-title">
                      <Link to="#">
                        Friendship contrasted solicitude insipidity in
                        introduced literature it.
                      </Link>
                    </h2>
                    <p className="post-entry">
                      Readable content of a page when looking at its layout. The
                      point of using Lorem Ipsum is that it has a more-or-less
                      normal distribution of letters, as opposed to using
                      'Content here, content here', making it look like readable
                      English. Many desktop publishing packages and web page
                      editors now use
                    </p>

                    <Link to="#" className="readmore-btn">
                      see more <IoIosArrowRoundForward />
                    </Link>
                  </div>
                </Col>
                <Col xs={12}>
                  <div className="post-block list qutoe-post">
                    <h2 className="post-title">
                      <Link to="#">
                        Friendship contrasted solicitude insipidity in
                        introduced literature it. He seemed denote except as
                        oppose do spring my.
                      </Link>
                    </h2>
                  </div>
                </Col>
                <Col xs={12}>
                  <div className="post-block list">
                    <div className="post-thumb-block">
                      <img src={blogThumb2} alt="prime blog page" />
                      <div className="post-meta">
                        <span>
                          <em> 15 </em> SEP
                        </span>
                      </div>
                    </div>
                    <h2 className="post-title">
                      <Link to="#">
                        It is a long established fact that
                      </Link>
                    </h2>
                    <p className="post-entry">
                      Readable content of a page when looking at its layout. The
                      point of using Lorem Ipsum is that it has a more-or-less
                      normal distribution of letters, as opposed to using
                      'Content here, content here', making it look like readable
                      English. Many desktop publishing packages and web page
                      editors now use
                    </p>

                    <Link to="#" className="readmore-btn">
                      see more <IoIosArrowRoundForward />
                    </Link>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col sm={12} md={4}>
              <Sidebar />
            </Col>
          </Row>
        </Container>
      </div>
    </BlogPageWrapper>
  );
};

export default BlogList;
