import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import PageHeader from "../../reusecore/PageHeader";
import { Link } from "gatsby";
import Slider from "react-slick";
import "swiper/swiper-bundle.css";
import { BooksPageWrapper } from "./BooksGrid.style";

const BooksGrid = ({hide_path}) => {
    const data = useStaticQuery(
        graphql`
            query allBooks {
                allMdx(
                    filter: { fields: { collection: { eq: "books" } }, frontmatter: { published: { eq: true } } }
                    sort: { fields: [frontmatter___date], order: ASC }
                ) {
                    nodes {
                        id
                        frontmatter {
                            title
                            author
                            abstract
                            thumbnail{
                                childImageSharp{
                                    fluid(maxWidth: 480, maxHeight: 600){
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

    let path = hide_path ? "" : "Books";
    let thumb_imgs = [];
    {data.allMdx.nodes.map(({frontmatter}) => (
        thumb_imgs.push(frontmatter.thumbnail.publicURL)
    ));}

    var settings = {
        className: "center",
        centerMode: true,
        focusOnSelect: true,
        lazyLoad: true,
        infinite: false,
        speed: 400,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 1,
                    customPaging: function(index) {
                        return (
                            <a>
                                <img src={thumb_imgs[index]} />
                            </a>
                        );
                    },
                    dots: true,
                    dotsClass: "slick-dots slick-thumb",
                }
            },
        ]
    };

    return (
        <BooksPageWrapper>
            <PageHeader title="Service mesh with the best" path={path}/>
            <h2 className="sub-heading">Learn to service mesh from the world’s authority </h2>
            <div className="book_list">
                <Slider {...settings}>
                    {data.allMdx.nodes.map(({id, frontmatter, fields }) => (
                        <div className="book_image" key={id}>
                            <div className="blog-slider_img">
                                <img src={frontmatter.thumbnail.publicURL} alt={frontmatter.title} />
                            </div>
                            <Link className="book-page_link" to={fields.slug}></Link>
                        </div>
                    ))}
                </Slider>
            </div>
        </BooksPageWrapper>
    );
};

export default BooksGrid;
