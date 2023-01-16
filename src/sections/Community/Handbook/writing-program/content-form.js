import React, { useState, useEffect } from "react";
import Button from "../../../../reusecore/Button";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import ContentFormWrapper from "./content-form.style";
import layer5_img from "../../../../assets/images/layer5/layer5-only/svg/layer5-white-no-trim.svg";

const ContentForm = () => {
  const [memberFormOne, setMemberFormOne] = useState({});
  const [stepNumber, setStepNumber] = useState(0);
  const [submit, setSubmit] = useState(false);
  // Form values
  const [validateContent, setValidateContent] = useState(false);
  const [validateSlack, setValidateSlack] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [slack, setSlack] = useState("");
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [comment, setComment] = useState("");
  const [slackName, setSlackName] = useState("");


  useEffect(() => {
    if (submit) {
      axios.post("https://hook.us1.make.com/r5qgpjel5tlhtyndcgjvkrdkoc65417y", {
        memberFormOne,
      });
    }
  }, [submit]);

  return (
    <ContentFormWrapper>
      {
        stepNumber === 0 &&
      <div className="form-data">
        <Formik
          initialValues={{
            subscribed: false,
            email: email,
            name: name,
            slack: slack,
            slackName: slackName,
            content: content,
            title: title,
            details: details,
            comment: comment,
            form: "content",
          }}
          onSubmit={values => {
            setEmail(values.email);
            setName(values.name);
            setSlackName(values.slackName);
            setTitle(values.title);
            setDetails(values.details);
            setComment(values.details);
            setSlack(values.slack);
            setContent(values.content);

            if (values.slack && values.content) {
              setMemberFormOne(values);
              setStepNumber(1);
              setSubmit(true);
            } else {
              if (!values.slack) {
                setValidateSlack(true);
              } else {
                setValidateSlack(false);
              }
              if (!(values.content)) {
                setValidateContent(true);
              } else {
                setValidateContent(false);
              }
            }
          }}
        >
          <Form className="form" method="post">

            <label htmlFor="email" className="form-name">Email Address <span className="required-sign">*</span></label>
            <Field type="text" className="text-field" id="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required />

            <label htmlFor="name" className="form-name">Name <span className="required-sign">*</span></label>
            <Field type="text" className="text-field" id="name" name="name" required />

            <label id="slack-member" className="form-name">Are you a member of the Layer5 Slack Community?<span className="required-sign">*</span></label>
            {validateSlack && <p className="validation">Please fill in this field</p>}
            <div role="group" aria-labelledby="slack-member">
              <label>
                <Field type="radio" name="slack" value="yes" />
              Yes
              </label>
              <label>
                <Field type="radio" name="slack" value="no" />
              No
              </label>
            </div>

            <label htmlFor="slackName" className="form-name">If yes, please mention your username on Slack. If no, you are welcome to join - http://slack.layer5.io/</label>
            <Field type="text" className="text-field" id="slackName" name="slackName" maxLength="32" />

            <label id="content-type" className="form-name">Choose the type of content<span className="required-sign">*</span></label>
            {validateContent && <p className="validation">Please provide your choice of content.</p>}
            <div role="group" aria-labelledby="content-type">
              <label>
                <Field type="radio" name="content" value="blog" />
              Blog Post
              </label>
              <label>
                <Field type="radio" name="content" value="article" />
              Article
              </label>
              <label>
                <Field type="radio" name="content" value="tutorial" />
              Tutorial
              </label>
              <label>
                <Field type="radio" name="content" value="workshop" />
              Workshop
              </label>
              <label>
                <Field type="radio" name="content" value="event" />
              Event
              </label>
              <label>
                <Field type="radio" name="content" value="other" />
              Other
              </label>
            </div>

            <label htmlFor="title" className="form-name">Title</label>
            <Field type="text" className="text-field" id="title" name="title" />

            <label htmlFor="details" className="form-name">Details</label>
            <Field type="text" className="text-field" id="details" name="details" />

            <label htmlFor="comments" className="form-name">Comments</label>
            <Field type="text" className="text-field" id="comments" name="comment" />

            <div className="form-submit">
              <Button secondary className="btn" title="Submit" />
            </div>
          </Form>
        </Formik>
      </div>
      }
      {
        stepNumber === 1 &&
                    <ThankYou />
      }
    </ContentFormWrapper>
  );
};

const ThankYou = () => {
  return (
    <div className="thank-you-box">
      <h2>Thank you for your interest in the Layer5 Writing Program!</h2>
      <p>You will soon receive detailed guidance from our content team. We'll get back to you as soon as we can.</p>
      <p>In the meantime, please visit our <a href="https://discuss.layer5.io">community forum</a> or join us in our <a href="https://slack.layer5.io">community Slack</a>.</p>
      <h3 className="white">- Team <img src={layer5_img} alt="Layer5" width="125" /></h3>
    </div>
  );
};

export default ContentForm;
