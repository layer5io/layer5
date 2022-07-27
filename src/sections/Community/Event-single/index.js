import React, {useEffect, useState} from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import axios from "axios";
import slugify from "../../../utils/slugify";
import { Container, Row, Col } from "../../../reusecore/Layout";
import PageHeader from "../../../reusecore/PageHeader";
import { Field, Formik, Form } from "formik";
import EventPageWrapper from "./EventSingle.style";
import Button from "../../../reusecore/Button";
import { CTA_Bottom } from "../../../components/Call-To-Actions/CTA_Bottom";
import layer5_img from "../../../assets/images/layer5/layer5-only/svg/layer5-white-no-trim.svg";

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

  const [stepNumber, setStepNumber] = useState(0);
  // Form values
  const [memberFormOne, setMemberFormOne] = useState({});

  const [submit, setSubmit] = useState(false);

  const [email, setEmail] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [org, setOrg] = useState("");
  const [occupation, setOccupation] = useState("");

  const nextStep = () => {
    if (stepNumber === 0) {
      setSubmit(true);
    }
    window.scrollTo(0, 800);
  };

  useEffect(() => {
    if (submit) {
      axios.post("https://hook.us1.make.com/gguommoyd14634ur9xs7l37widuoa7e9", {
        memberFormOne,
      });
    }
  }, [submit]);

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

              { frontmatter.register && stepNumber === 0 &&
                <div className="form-body">
                <h3 className="form-title">Register Today!</h3>
                <Formik
                      initialValues={{
                        firstname: firstname,
                        lastname: lastname,
                        email: email,
                        occupation: occupation,
                        org: org,
                        form: "event",
                      }}
                      onSubmit={values => {
                          setMemberFormOne(values);
                          setStepNumber(1);
                          nextStep();
                          setFirstName(values.firstname);
                          setEmail(values.email);
                          setLastName(values.lastname);
                          setOccupation(values.occupation);
                          setOrg(values.org);
                      }}
                    >
                      <Form className="form" method="post">
                        <Row>
                          <Col xs={6}>
                        <label htmlFor="firstname" className="form-name">First Name <span className="required-sign">*</span></label>
                        <Field type="text" className="text-field" id="firstname" name="firstname" maxLength="32" pattern="[A-Za-z]{1,32}" required />
                          </Col>
                          <Col xs={6}>
                        <label htmlFor="lastname" className="form-name">Last Name <span className="required-sign">*</span></label>
                        <Field type="text" className="text-field" id="lastname" name="lastname" maxLength="32" pattern="[A-Za-z]{1,32}" required />
                          </Col>
                        </Row>
                        <label htmlFor="email" className="form-name">Email Address <span className="required-sign">*</span></label>
                        <Field type="text" className="text-field" id="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required />
                        <label htmlFor="occupation" className="form-name">Occupation / Title <span className="required-sign">*</span></label>
                        <Field type="text" className="text-field" id="occupation" name="occupation" required />
                        <label htmlFor="org" className="form-name">Organization / Company / School <span className="required-sign">*</span></label>
                        <Field type="text" className="text-field" id="org" name="org" />

                        <Button secondary type="submit" className="btn" title="Submit" />
                      </Form>
                    </Formik>
                    </div>
                    }
                  {
                    stepNumber === 1 &&
                    <ThankYou title={frontmatter.title} />
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

const ThankYou = (props) => {
  return (
    <Container>
      <div className="thank-you-box">
        <h2>Thank you for registering to {props.title}!</h2>
        <p>You are now signed up for the <i>{props.title}</i> workshop by Layer5. Please patiently await your acceptance and start of the beta program. We are working through a growing waitlist </p>
        <p>In the meantime, please visit our <a href="https://discuss.layer5.io">community forum</a> or join us in our <a href="https://slack.layer5.io">community Slack</a>.</p>
        <h3 className="white">- Team <img src={layer5_img} alt="Layer5" width="125" /></h3>
      </div>
    </Container>
  );
};

export default EventSingle;
