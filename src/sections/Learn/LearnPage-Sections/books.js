import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Container } from "../../../reusecore/Layout";
import { Link } from "gatsby";
import Button from "../../../reusecore/Button";
import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";
import styled from "styled-components";

const BooksListWrapper = styled.div`
    Button:hover {
      box-shadow: 0 2px 10px ${props => props.theme.whiteFourToBlackFour};

    }
    .book-heading {
        text-align: center;
        margin: 5rem 0
    }
    .books-card {
        display: flex;
        margin: 1rem auto;
        min-height: 15.5rem;
        max-width: 50.5rem;
        transition: all 0.2s;
        transition-timing-function: ease-in-out;

        .books-image {
            height: 12rem;
            margin: auto;
            text-align: center;
            filter: brightness(0.9);

            img {
                max-width: 18rem;
                height: inherit;
            }
        }
        .books-details {
            padding: 0 1rem;
            margin: auto;
            h2 {
                margin: 0.5rem 0;
            }
        }
        .arrow_icon{
            height: 2.5rem;
            min-width: 2.5rem;
            margin: auto 0;
            padding: 0;
            font-size: 1.25rem;
            border-radius: 2rem;
            transition: all 0.2s;
        }
        .books-page_link {
            display: flex;
            color: inherit;
            padding: 0 0.75rem;
        }
        &:hover{
            box-shadow: 0px 0px 20px ${props => props.theme.whiteNineToBlackOne};
            .arrow_icon{
                left: 0.2rem;
                color: white;
            }
        }
    }

    .see-more-button {
        margin: 4rem 0 0;
        text-align: center;
      }

    @media screen and (max-width: 600px) {
        .books-card {
            display: block;
            margin: 0.5rem auto;
            .books-details {
                overflow: hidden;
                p {
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
            .arrow_icon{
                display: block;
                min-width: 6rem;
                margin: auto;
            }
            .books-page_link {
                display: block;
                color: inherit;
                padding: 1rem 0rem;
            }
        }
    }
`;

const BooksSection = () => {
  const data = useStaticQuery(
    graphql`
            query booksList {
                allMdx(
                    filter: { fields: { collection: { eq: "service-mesh-books" } }, frontmatter: { published: { eq: true } } }
                    sort: { fields: [frontmatter___date], order: ASC }
                    limit: 2
                ) 
                {
                    nodes {
                        id
                        frontmatter {
                            title
                            author
                            abstract
                            thumbnail{
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

  return (
    <BooksListWrapper>
      <Container>
        <h1 className="book-heading">Service Mesh Books</h1>
        <div className="books-list">
          {data.allMdx.nodes.map(({ id, frontmatter, fields }) => (
            <div className="books-card" key={id}>
              <Link className="books-page_link" to={fields.slug} >
                <div className="books-image">
                  <img src={frontmatter.thumbnail.publicURL} alt={frontmatter.title} />
                </div>
                <div className="books-details">
                  <h2>{frontmatter.title}</h2>
                  <p>{frontmatter.abstract}</p>
                </div>
                <Button secondary title={<FaArrowRight />} className="arrow_icon" />
              </Link>
            </div>
          ))}
        </div>
        <div className="see-more-button">
          <Button primary title="Checkout all service mesh books" url="/learn/service-mesh-books" />
        </div>
      </Container>
    </BooksListWrapper>
  );
};

export default BooksSection;
