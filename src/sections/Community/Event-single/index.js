import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { Container } from "../../../reusecore/Layout";
import PageHeader from "../../../reusecore/PageHeader";

import EventSinglePageWrapper from "./EventSingle.style.js";

const EventSingle = ({data}) => {
  const { frontmatter, body } = data.mdx;
  return (
    <EventSinglePageWrapper>
      <PageHeader
        title={frontmatter.title}
      />
      <div className="single-event-wrapper">
        <Container>
          <div className="single-event-block">
            <MDXRenderer>{body}</MDXRenderer>
          </div>
        </Container>
      </div>
    </EventSinglePageWrapper>
  );
};

export default EventSingle;
