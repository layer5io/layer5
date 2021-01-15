import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { Container } from "../../../reusecore/Layout";
import PageHeader from "../../../reusecore/PageHeader";

import BookSinglePageWrapper from "./BookSingle.style.js";

const BookSingle = ({data}) => {
    const { frontmatter, body } = data.mdx;
    return (
        <BookSinglePageWrapper>
            <PageHeader
                title={frontmatter.title}
                author={{ name: frontmatter.author }}
            />
            <div className="single-post-wrapper">
                <Container>
                    <div className="single-post-block">
                        <MDXRenderer>{body}</MDXRenderer>
                    </div>
                </Container>
            </div>
        </BookSinglePageWrapper>
    );
};

export default BookSingle;
