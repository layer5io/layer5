import React from "react";
import { Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import slugify from "../../../utils/slugify";
import { Container } from "../../../reusecore/Layout";
import PageHeader from "../../../reusecore/PageHeader";
import EventPageWrapper from "./EventSingle.style";
import Button from "../../../reusecore/Button";

const EventSingle = ({ data }) => {

  //const frontmatter = ({speakers = []});
  const { frontmatter, body } = data.mdx;

  return (
    <EventPageWrapper>
      <PageHeader
        title={frontmatter.title}
        thumbnail={frontmatter.thumbnail}
      />
      <div className="single-event-wrapper">
        <Container>
          <div className="event-info-block">
            <div className="tags">
              <MDXRenderer>{body}</MDXRenderer>
              <ul className="speakers">
                {
                  frontmatter.speakers && frontmatter.speakers ? "Speakers:" : ""
                }
                {frontmatter.speakers && frontmatter.speakers.map((speaker, id) => (
                  <li key={{ id }} className="speakers">
                    <Link
                      to={`/community/members/${slugify(speaker)}`}>{speaker}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="event-title">
                <Button primary url={frontmatter.eurl}>
                  <h3>
                    Join us at {frontmatter.title}
                  </h3>
                </Button>
              </div>
            </div>
            {/* <RelatedPosts
            category={frontmatter.category}
            tags={frontmatter.tags}
            currentPostSlug={fields.slug}
          /> */}
          </div>
        </Container>
      </div>
    </EventPageWrapper>
  );
};

export default EventSingle;
