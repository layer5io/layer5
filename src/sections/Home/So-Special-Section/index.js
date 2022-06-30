import React from "react";
import Slider from "react-slick";
import SoSpecialWrapper from "./so-special-style";

import Button from "../../../reusecore/Button";
import { graphql, useStaticQuery } from "gatsby";
import Image from "../../../components/image";

const SoSpecial = () => {
  const data = useStaticQuery(
    graphql`query newsList {
  allMdx(
    filter: {fields: {collection: {eq: "news"}}, frontmatter: {published: {eq: true}}}
    sort: {fields: [frontmatter___date], order: DESC}
    limit: 8
  ) {
    nodes {
      id
      frontmatter {
        title
        author
        eurl
        thumbnail {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
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
  const settings = {
    dots : false,
    infinite : false,
    speed : 500,
    slidesToShow : 2.5,
    swipeToSlide : true,

    responsive : [
      {
        breakpoint : 1200,
        settings : {
          slidesToShow : 2.2,

        }
      },
      {
        breakpoint : 1024,
        settings : {
          slidesToShow : 2,

        }
      },
      {
        breakpoint : 800,
        settings : {
          slidesToShow : 1.5,
          slidesToScroll : 1,
          initialSlide : 1
        }
      },
      {
        breakpoint : 600,
        settings : {
          dots : true,
          arrows : false,
          slidesToShow : 1,
          slidesToScroll : 1,
          initialSlide : 1
        }
      },
      {
        breakpoint : 400,
        settings : {
          dots : true,
          arrows : false,
          slidesToShow : 1,
          slidesToScroll : 1
        }
      }
    ]
  };
  return (
    <SoSpecialWrapper>
      <div className="so-special-head">
        <h4>LAYER5 IN THE NEWS</h4>
        <h1>We're making a mesh of things</h1>
      </div>
      <div className="special_carousel">
        <Slider {...settings}>
          {
            data.allMdx.nodes.map(({ id,frontmatter,fields }) => (
              <Button className="special-cont_btn" url={fields.slug} key={id}>
                <div id="special-cont" >
                  <div id="special-cont_img">
                    <Image
                      {...frontmatter.thumbnail}
                      imgStyle={{ objectFit : "contain" }}
                      alt={frontmatter.title}
                    />
                  </div>
                  <div id="special-cont_content">
                    <p className="special-cont_para">{frontmatter.title}</p>
                  </div>
                </div>
              </Button>
            ))}
        </Slider>
      </div>
      <div className="so-special-foot">
        <h5>Layer5 provides cloud native management for monoliths and</h5>
        <h5>microservices alike.</h5>
        <Button className="so-special-foot-btn" primary url="/projects" title="Our Projects"/>
      </div>
    </SoSpecialWrapper>
  );
};

export default SoSpecial;
