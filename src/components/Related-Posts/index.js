import React, { useLayoutEffect, useState, useRef }  from "react";
import { Link } from "gatsby";
import { IoIosArrowRoundForward } from "@react-icons/all-files/io/IoIosArrowRoundForward";
import Card from "../Card";
import RelatedPostsWrapper from "./relatedPosts.style";
import { Col } from "../../reusecore/Layout";
import Slider from "react-slick";

const RelatedPosts = props => {
  const [isClient, setIsClient] = useState(false);
  const [slidesToShowState, setSlidesToShowState] = useState(null);
  const sliderRef = useRef(null);

  const { postType , relatedPosts , mainHead , lastCardHead , linkToAllItems } = props;

  const computeSlides = () => {
    const w = typeof window !== "undefined" ? (window.innerWidth || document.documentElement.clientWidth) : 1200;
    if (w <= 600) return 1;
    if (w <= 800) return 1.5;
    if (w <= 1024) return 2;
    if (w <= 1200) return 3;
    return 3;
  };

  useLayoutEffect(() => {
    setIsClient(true);
    setSlidesToShowState(computeSlides());

    let resizeTimeout = null;
    const onResizeDebounced = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const slides = computeSlides();
        setSlidesToShowState((prev) => {
          if (prev !== slides) return slides;
          return prev;
        });
        if (sliderRef.current && sliderRef.current.innerSlider && typeof sliderRef.current.innerSlider.onWindowResized === "function") {
          sliderRef.current.innerSlider.onWindowResized();
        }
      }, 100);
    };

    window.addEventListener("resize", onResizeDebounced);
    window.addEventListener("load", onResizeDebounced);

    return () => {
      window.removeEventListener("resize", onResizeDebounced);
      window.removeEventListener("load", onResizeDebounced);
      clearTimeout(resizeTimeout);
    };
  }, []);

  const settings = {
    dots: slidesToShowState < 2,
    arrows: slidesToShowState >= 2,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShowState,
    slidesToScroll: 1,
    swipe: true,
    swipeToSlide: true,
    touchThreshold: 10,
  };


  return (
    <RelatedPostsWrapper>
      <div className="widgets-title">
        <h3>{mainHead}</h3>
      </div>
      {
        isClient &&
                <Slider{...settings} ref={sliderRef} key={`review-slider-${slidesToShowState}`}>
                  {
                    postType === "blogs" ? relatedPosts.map((item) => {
                      const post = item.post || item;
                      return (
                        <Col className="cardCol" $xs={12} key={post.fields.slug}>
                          <Card frontmatter={post.frontmatter} fields={post.fields}/>
                        </Col>
                      );
                    }) : relatedPosts.map((post) => {
                      return (
                        <Col className="cardCol" $xs={12} key={post.fields.slug}>
                          <Card frontmatter={post.frontmatter} fields={post.fields}/>
                        </Col>
                      );
                    })
                  }
                  <Col $xs={12} $lg={12} className="allBlogs">
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
