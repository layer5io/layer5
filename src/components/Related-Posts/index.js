import React from "react";
import { Link } from "gatsby";
import { IoIosArrowRoundForward } from "@react-icons/all-files/io/IoIosArrowRoundForward";
import Card from "../Card";
import RelatedPostsWrapper from "./relatedPosts.style";
import { Col } from "../../reusecore/Layout";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useHasMounted from "../../utils/useHasMounted";

const RelatedPosts = props => {

  const { postType , relatedPosts , mainHead , lastCardHead , linkToAllItems } = props;

  const hasMounted = useHasMounted();

  return (
    <RelatedPostsWrapper>
      <div className="widgets-title">
        <h3>{mainHead}</h3>
      </div>
      {
        hasMounted &&
                <Slider
                  dots= { window.innerWidth < 992 }
                  arrows={ window.innerWidth >= 992 }
                  infinite= {false}
                  speed= "500"
                  slidesToShow= {window.innerWidth <= 720 ? 1 : window.innerWidth <= 991 ? 2 : 3}
                  slidesToScroll= {1}
                >
                  {
                    postType === "blogs" ? relatedPosts.map(({ post }) => {
                      return (
                        <Col className="cardCol" xs={12} key={post.fields.slug}>
                          <Card frontmatter={post.frontmatter} fields={post.fields}/>
                        </Col>
                      );
                    }) : relatedPosts.map((post) => {
                      return (
                        <Col className="cardCol" xs={12} key={post.fields.slug}>
                          <Card frontmatter={post.frontmatter} fields={post.fields}/>
                        </Col>
                      );
                    })
                  }
                  <Col xs={12} lg={12} className="allBlogs">
                    <div className="allBlogs_card">
                      <Link to={linkToAllItems}>
                        <h2>{lastCardHead}</h2>
                        <IoIosArrowRoundForward/>
                      </Link>
                    </div>
                  </Col>
                </Slider>
      }
    </RelatedPostsWrapper>
  );
};

export default RelatedPosts;
