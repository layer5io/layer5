import React from "react";
import Slider from "react-slick";
import SoSpecialWrapper from "./so-special-style";

import Button from "../../../reusecore/Button";
import { graphql, useStaticQuery } from "gatsby";

const SoSpecial = () => {
  const data = useStaticQuery(
    graphql`
            query newsList {
                allMdx(
                    filter: { fields: { collection: { eq: "news" } }, frontmatter: { published: { eq: true } } }
                    sort: { fields: [frontmatter___date], order: ASC }
                ) 
                {
                    nodes {
                        id
                        frontmatter {
                            title
                            author
                            eurl
                            thumbnail{
                              childImageSharp{
                                fluid(maxWidth: 300, maxHeight: 300){
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
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.8,
    swipeToSlide:true,
    
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.5,
          
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.25,
          
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 670,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return(
    <SoSpecialWrapper>
      <div className="so-special-head">
        <h1>Why Is Layer5 So special?</h1>
      </div>
      <div className="special_carousel">
        <Slider {...settings}>
          {
            data.allMdx.nodes.map(({id,frontmatter,fields}) => (
              <Button class="special-cont_btn" url={fields.slug} key={id}>
                <div id="special-cont" >
                  <div id="special-cont_img">
                    <img src={frontmatter.thumbnail.publicURL} alt={frontmatter.title} />
                  </div>
                  <div id="special-cont_content">
                    <p className="special-cont_para">{frontmatter.title}</p>        
                  </div>
                </div>
              </Button>
            ))}   
        </Slider>
      </div>
    </SoSpecialWrapper>
  );
};

export default SoSpecial;