import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { Container } from "../../reusecore/Layout";
import PageHeader from "../../reusecore/PageHeader";

import NewsPageWrapper from "./NewsSingle.style.js";

const NewsSingle = ({data}) => {
    const { frontmatter, body } = data.mdx;

    return (
        <NewsPageWrapper>
            <PageHeader
                title={frontmatter.title}
                subtitle={frontmatter.subtitle}
                category={frontmatter.category}
                author={{ name: frontmatter.author }}
                thumbnail={frontmatter.thumbnail}
            />
            <div className="single-post-wrapper">
                <Container>
                    <div className="single-post-block">
                        <MDXRenderer>{body}</MDXRenderer>
                    </div>
                </Container>
            </div>
        </NewsPageWrapper>
    );
};

export default NewsSingle;
