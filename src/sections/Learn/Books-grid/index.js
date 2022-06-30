import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import PageHeader from "../../../reusecore/PageHeader";
import { Link } from "gatsby";
import Slider from "react-slick";
import "swiper/swiper-bundle.css";
import { BooksPageWrapper } from "./BooksGrid.style";

const BooksPage = ({ hide_path }) => {
  const data = useStaticQuery(
    graphql`query allBooks {
  allMdx(
    filter: {fields: {collection: {eq: "service-mesh-books"}}, frontmatter: {published: {eq: true}}}
    sort: {fields: [frontmatter___date], order: ASC}
  ) {
    nodes {
      id
      frontmatter {
        title
        author
        abstract
        cover {
          childImageSharp {
            gatsbyImageData(width: 480, height: 600, layout: CONSTRAINED)
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

  let path = hide_path ? "" : "Books";

  var settings = {
    focusOnSelect : true,
    lazyLoad : true,
    infinite : false,
    speed : 400,
    slidesToShow : 3.5,
    slidesToScroll : 1,
    responsive : [
      {
        breakpoint : 1400,
        settings : {
          slidesToShow : 3,
        }
      },
      {
        breakpoint : 700,
        settings : {
          slidesToShow : 2.25,
        }
      },
      {
        breakpoint : 550,
        settings : {
          slidesToShow : 1.5,
        }
      },
    ]
  };

  return (
    <BooksPageWrapper>
      <PageHeader title="Service mesh with the best" path={path}/>
      <h2 className="sub-heading">Learn to service mesh from the world’s authority </h2>
      <div className="books_caraousel">
        <Slider {...settings}>
          {data.allMdx.nodes.map(({ id, frontmatter, fields }) => (
            <div className="book_image" key={id}>
              <div className="blog-slider_img">
                <img src={frontmatter.cover.publicURL} alt={frontmatter.title} />
              </div>
              <Link className="book-page_link" to={fields.slug}/>
            </div>
          ))}
        </Slider>
      </div>
    </BooksPageWrapper>
  );
};

export default BooksPage;
