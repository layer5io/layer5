import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SoSpecialWrapper from "./so-special-style";

import Button from "../../../reusecore/Button";
import { graphql, useStaticQuery } from "gatsby";
import Image from "../../../components/image";
import { useStyledDarkMode } from "../../../theme/app/useStyledDarkMode";

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
        darkthumbnail{
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
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    swipeToSlide: true,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.2,

        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,

        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          dots: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 400,
        settings: {
          dots: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const { isDark } = useStyledDarkMode();

  return (
    <SoSpecialWrapper>
      <div className="so-special-head">
        <p>LAYER5 IN THE NEWS</p>
        <h1>We're making a splash</h1>
      </div>
      <div className="special_carousel">
        <Slider {...settings}>
          {
            data.allMdx.nodes.map(({ id, frontmatter, fields }) => (
              <Button className="special-cont_btn" url={fields.slug} key={id}>
                <div id="special-cont" >
                  <div id="special-cont_img">
                    <Image
                      {...((isDark && frontmatter.darkthumbnail.publicURL !== frontmatter.thumbnail.publicURL) ? frontmatter.darkthumbnail : frontmatter.thumbnail)}
                      imgStyle={{ objectFit: "contain" }}
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
        <p>Layer5 provides cloud native management for monoliths and <br></br>
                   microservices alike.</p>
        <Button className="so-special-foot-btn" primary url="/projects" title="Our Projects" />
      </div>
    </SoSpecialWrapper>
  );
};

export default SoSpecial;
