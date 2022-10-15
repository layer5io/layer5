import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import slugify from "../../../utils/slugify";
import { Container } from "../../../reusecore/Layout";
import PageHeader from "../../../reusecore/PageHeader";
import EventPageWrapper from "./EventSingle.style";
import Button from "../../../reusecore/Button";
import { CTA_Bottom } from "../../../components/Call-To-Actions/CTA_Bottom";
import EventForm from "../../../components/CommonForm/events";

const checkSpeaker = (speaker) => {

  let isSlugAvailable = false;

  const validMembers = useStaticQuery(
    graphql`
              query eventValidMemberss{
                  allMdx(
                      filter:{ 
                          fields:{ collection:{eq:"members"} }
                      }
                  ) {
                      nodes {
                          frontmatter {
                              name
                          }
                      }
                  }
              }
          `
  );

  isSlugAvailable = validMembers.allMdx.nodes.some(matter => matter.frontmatter.name == speaker);


  return (
    <>
      {
        isSlugAvailable ?
          <Link to={`/community/members/${slugify(speaker)}`}>
            <span>{speaker}</span>
          </Link>
          : <span>{speaker}</span>
      }
    </>
  );
};


const EventSingle = ({ data }) => {

  //const frontmatter = ({speakers = []});
  const { frontmatter, body } = data.mdx;


  return (
    <EventPageWrapper>
      <PageHeader
        title={ frontmatter.title }
        thumbnail={ frontmatter.thumbnail }
      />
      <div className="single-event-wrapper">
        <Container>
          <div className="event-info-block">
            <div className="tags">

              { frontmatter.register &&
                  <EventForm
                    title="Register Today!"
                    form="event"
                    account_desc="Please provide at least one account."
                    submit_title = {`Thank you for registering to ${frontmatter.title}!`}
                    submit_body = {`You are now signed up for the ${frontmatter.title} workshop by Layer5. Please patiently await your acceptance. We'll send out additional information about the event soon.`}
                  />
              }

              <MDXRenderer>{body}</MDXRenderer>
              <ul className="speakers">
                {
                  frontmatter.speakers && frontmatter.speakers ? "Speakers:" : ""
                }
                {frontmatter.speakers && frontmatter.speakers.map((speaker, id) => (
                  <li key={{ id }} className="speakers">
                    {checkSpeaker(speaker)}
                  </li>
                ))}
              </ul>
              <div className="event-title">
                <Button primary url={frontmatter.eurl} external={true}>
                  <h3>
                    Join us at {frontmatter.title}
                  </h3>
                </Button>
              </div>
            </div>
            <CTA_Bottom
              category={"MeshMap"}
            />
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
