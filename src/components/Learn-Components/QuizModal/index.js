import React, { useState } from "react";
import Button from "../../../reusecore/Button";
import { QuizContainerWrapper } from "./quizmodal.style";
import { Field, Formik, Form } from "formik";
import { Container } from "../../../reusecore/Layout";
import QuizComponent from "./quiz-component";

const QuizModal = ({ TOCData, chapterData, location }) => {
  const [userData, setUserData] = useState({});
  const [isLogin, setIsLogin] = useState(false);

  if (isLogin){
    return <QuizComponent />;
  }

  return (
    <QuizContainerWrapper>
      <Container>
        <h2 className="title">Login Form</h2>
        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            email: "",
            password: "",
          }}
          onSubmit={values => {
            setUserData(values);

            // User validation from backend
            if (values.email){
              // If successfully authenticated then display the quiz modal
              setIsLogin(true);
            }
          }}
        >
          <Form className="login-form" method="post">
            <label htmlFor="fname" className="form-name">First Name <span className="required-sign">*</span></label>
            <Field type="text" className="text-field" id="firstname" name="firstname" maxLength="32"  pattern="[A-Za-z]{1,32}" required onInvalid={e => e.target.setCustomValidity("Please fill-in this field")} onInput={e => e.target.setCustomValidity("")} />
            <label htmlFor="lname" className="form-name">Last Name <span className="required-sign">*</span></label>
            <Field type="text" className="text-field" id="lastname" name="lastname" maxLength="32"  pattern="[A-Za-z]{1,32}" required onInvalid={e => e.target.setCustomValidity("Please fill-in this field")} onInput={e => e.target.setCustomValidity("")} />
            <label htmlFor="email" className="form-name">Email <span className="required-sign">*</span></label>
            <Field type="email" className="text-field" id="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required onInvalid={e => e.target.setCustomValidity("Please fill-in this field")} onInput={e => e.target.setCustomValidity("")} />
            <label htmlFor="password" className="form-name">Password <span className="required-sign">*</span></label>
            <Field type="password" className="text-field" id="password" name="password" minLength="8" pattern="[A-Za-z]{1,32}" required onInvalid={e => e.target.setCustomValidity("Please fill-in this field")} onInput={e => e.target.setCustomValidity("")} />
            <Button secondary type="submit" className="btn" title="Log In" /> <br /><br /><br /><br />
          </Form>
        </Formik>
      </Container>
    </QuizContainerWrapper>
  );
};

export default QuizModal;
