import React, { useState } from "react";
import Webform from "./webform.style";
import SlackLinkNotif from "../../../components/SlackLinkNotif";
import { Container, Row, Col } from "../../../reusecore/Layout";
import Button from "../../../reusecore/Button";
import img1 from "./Rectangle 471.png";
import img2 from "./Vector.png";

const WebBasedForm = () => {

  const [stepNumber, setStepNumber] = useState(0);
  const [contributorFlag, setContributorFlag] = useState(false);
  const [userFlag, setUserFlag] = useState(false);
  const [standerbyFlag, setStanderbyFlag] = useState(false);
  const [checked, setChecked] = useState([false,false,false,false,false,false,false,false,false,false,false]);
  const [checked1, setChecked1] = useState([false,false,false,false,false,false]);
  const [checked2, setChecked2] = useState([false,false,false]);
  const [checked3, setChecked3] = useState([false,false,false,false,false,false,false,false,false]);
  const [checkMesh, setCheckMesh] = useState(false);
  const [checked4, setChecked4] = useState([false,false,false,false]);

  const handleFileSelected = (e) => {
    const files = Array.from(e.target.files);
  }; 

  const nextStep = () => {
    setStepNumber(stepNumber+1);
  };

  const laststep = () => {
    setStepNumber(stepNumber-1);
  };

  const contributor = () => {
    setStepNumber(stepNumber+1);
    setContributorFlag(true);
    setStanderbyFlag(false);
    setUserFlag(false);
  };
    
  const user = () => {
    setStepNumber(stepNumber+1);
    setUserFlag(true);
    setContributorFlag(false);
    setStanderbyFlag(false);
  };

  const standerby = () => {
    setStanderbyFlag(true);
    setContributorFlag(false);
    setUserFlag(false);
  };

  const standerbyBack = () => {
    setStanderbyFlag(false);
  };
 
  const RangeDisplay = () => {
    return (
      <ul className="timeline" id="timeline">
        <li className={(stepNumber >= 0 ? "li complete" : "li")}>
          <div className="status">
          </div>
        </li>
        <li className={(stepNumber >= 1 ? "li complete" : "li")}>
          <div className="status">
          </div>
        </li>
        <li className={(stepNumber >= 2 ? "li complete" : "li")}>
          <div className="status">
          </div>
        </li>
        <li className={(stepNumber >= 3 ? "li complete" : "li")}>
          <div className="status">
          </div>
        </li>
        <li className={(stepNumber >= 4 ? "li complete" : "li")}>
          <div className="status">
          </div>
        </li>
        <li className={(stepNumber >= 5 ? "li complete" : "li")}>
          <div className="status">
          </div>
        </li>
      </ul>      
    );
  };

  const MemberFormStart = () => {
    return (
      <Container>
        <h2 className="title">New Community Member</h2>
        <p className="para">Hi! Welcome to the Layer5 community. As you get oriented with the community and its projects, will you consider filling in this form? It helps us get familiarized with you and you with the ongoing projects and community. There is much to learn around the technologies at-hand. We'll look to get you acclimated and engaged around your areas of interest and passion. </p>
        <div className="form">
          <p className="form-name">Email Address</p>
          <input type="text" className="text-field"></input>
          <p className="form-name">First Name</p>
          <input type="text" className="text-field"></input>
          <p className="form-name">Last Name</p>
          <input type="text" className="text-field"></input>
          <p className="form-name">Occupation / Title</p>
          <input type="text" className="text-field"></input>
          <p className="form-name">Organization / Company / School</p>
          <input type="text" className="text-field"></input>
          <p className="form-name">Github</p>
          <input type="text" className="text-field"></input>
          <p className="form-name">Twitter</p>
          <input type="text" className="text-field"></input>
          <p className="form-name">Linkedin</p>
          <input type="text" className="text-field"></input>
          <p className="form-name">T-shirt size</p>
          <select className="form-select">
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
          <p className="form-name">Picture</p>
          <input type="file" label='Upload' accept="image/*,.png,.jpeg" onChange={handleFileSelected} className="upload-field"></input>
          <Button secondary onClick={nextStep} className="btn" title="Next Step" /> <br/><br/><br/><br/>
        </div>
      </Container>
    );
  };

  const MemberFormSecond = () => {
    return (
      <Container>
        <h2 className="title">About You and Why You're Here</h2>
        <p className="para">Which describes your main focus as a community member? </p>
        <div className="center">
          <div className="option" onClick={contributor}>
                    I'm here as a Developer
          </div>
          <div className="option" onClick={user}>
                    I'm here as a User
          </div>
          <div className="option" onClick={standerby}>
                    I'm here as a Standerby
          </div>
        </div>
      </Container>
    );
  };

  const ContributorFrom = () => {
    return (
      <Container>
        <h2 className="title">Layer5 and You</h2>
        <div className="form">
          <p className="form-name">What has your recent focus been? What are you passionate about? Is there a specific project or aspect a project that interests you?</p>
          <input type="text" className="text-field"></input>
          <p className="form-name">If a contributor, what tools, technologies, and languages are you most proficient with?</p>
          <input type="text" className="text-field"></input>
                
          <p className="form-name">Familiarize with the Layer5 Mentor Program.</p>
          <p className="para">If you would like to pair with a MeshMate, please review each MeshMate profile (https://layer5.io/community/meshmates) to identify your ideal mentor. Once you have identified your ideal MeshMate, message the MeshMate in the #newcomers channel</p>
          <label>
            <input type="checkbox"
              defaultChecked={checkMesh}
              onChange={() => setCheckMesh(!checkMesh)}
              className="form-check"
            />
                Ok
          </label>
          <br/><br/>
          <div className="btn-wrapper">
            <button onClick={laststep} className="btn-prev"><span className="back">&larr;</span> Previous step</button>
            <Button secondary onClick={nextStep} className="btn-next" title="Next Step" /> 
          </div>
          <br/><br/>
        </div>
      </Container>
    );
  };

  const UserForm = () => {
    return (
      <Container>
        <h2 className="title">Layer5 and You</h2>
        <div className="form">
          <p className="form-name">Mark any of the following 101 tutorials that you would like to receive.</p>
          <label>
            <input type="checkbox"
              defaultChecked={checked[0]}
              onChange={() => setChecked(!checked[0])}
              className="form-check"
            />
                A Git and Github primer
          </label>
          <br/>
          <label>
            <input type="checkbox"
              defaultChecked={checked[1]}
              onChange={() => setChecked(!checked[1])}
              className="form-check"
            />
                Contributing to Meshery UI with ReactJS, NextJS and Material UI
          </label>
          <br/>
          <label>
            <input type="checkbox"
              defaultChecked={checked[2]}
              onChange={() => setChecked(!checked[2])}
              className="form-check"
            />
                Introduction to Service Meshes
          </label>
          <br/>
          <label>
            <input type="checkbox"
              defaultChecked={checked[3]}
              onChange={() => setChecked(!checked[3])}
              className="form-check"
            />
                Introduction to using a service mesh management plane: Meshery
          </label>
          <br/>
          <label>
            <input type="checkbox"
              defaultChecked={checked[4]}
              onChange={() => setChecked(!checked[4])}
              className="form-check"
            />
                How to evaluate service mesh performance and analyze the data
          </label>
          <br/>
          <label>
            <input type="checkbox"
              defaultChecked={checked[5]}
              onChange={() => setChecked(!checked[5])}
              className="form-check"
            />
                How gRPC is used in Meshery and Service Mesh Performance (SMP)
          </label>
          <br/>
          <label>
            <input type="checkbox"
              defaultChecked={checked[6]}
              onChange={() => setChecked(!checked[6])}
              className="form-check"
            />
                How Jekyll websites work and how to contribute to Layer5 projects
          </label>
          <br/>
          <label>
            <input type="checkbox"
              defaultChecked={checked[7]}
              onChange={() => setChecked(!checked[7])}
              className="form-check"
            />
                How mesheryctl uses Go Cobra
          </label>
          <br/>
          <label>
            <input type="checkbox"
              defaultChecked={checked[8]}
              onChange={() => setChecked(!checked[8])}
              className="form-check"
            />
                Introduction to Gatsby and Layer5-ng
          </label>
          <br/>
          <label>
            <input type="checkbox"
              defaultChecked={checked[9]}
              onChange={() => setChecked(!checked[9])}
              className="form-check"
            />
                Introduction to Istio
          </label>
          <br/>
          <label>
            <input type="checkbox"
              defaultChecked={checked[10]}
              onChange={() => setChecked(!checked[10])}
              className="form-check"
            />
                None of the above
          </label>
          <p className="form-name">Have you previously heard of Layer5 or its projects?</p>
          <label>
            <input type="checkbox"
              defaultChecked={checked1[0]}
              onChange={() => setChecked1(!checked1[0])}
              className="form-check"
            />
                No
          </label>
          <br/>
          <label>
            <input type="checkbox"
              defaultChecked={checked1[1]}
              onChange={() => setChecked1(!checked1[1])}
              className="form-check"
            />
                Yes, Layer5 (https://layer5.io)
          </label>
          <br/>
          <label>
            <input type="checkbox"
              defaultChecked={checked1[2]}
              onChange={() => setChecked1(!checked1[2])}
              className="form-check"
            />
                Yes, Meshery (https://meshery.io)
          </label>
          <br/>
          <label>
            <input type="checkbox"
              defaultChecked={checked1[3]}
              onChange={() => setChecked1(!checked1[3])}
              className="form-check"
            />
                Yes, Service Mesh Performance (SMP) (https://smp-spec.io)
          </label>
          <br/>
          <label>
            <input type="checkbox"
              defaultChecked={checked1[4]}
              onChange={() => setChecked1(!checked1[4])}
              className="form-check"
            />
                Yes, Service Mesh Landscape (https://layer5.io/landscape)
          </label>
          <br/>
          <label>
            <input type="checkbox"
              defaultChecked={checked1[5]}
              onChange={() => setChecked1(!checked1[5])}
              className="form-check"
            />
                Yes, Image Hub (https://github.com/layer5io/image-hub)
          </label>
          <p className="form-name">Layer5 has a community member mentoring program, MeshMates, that is aimed at individuals new to open source or simply new to Layer5 projects. Learn more at https://layer5.io/community. Is this program of interest to you?</p>
          <label>
            <input type="checkbox"
              defaultChecked={checked2[0]}
              onChange={() => setChecked2(!checked2[0])}
              className="form-check"
            />
                Yes, and I would like to explore engaging with a Layer5 MeshMate.
          </label>
          <br/>
          <label>
            <input type="checkbox"
              defaultChecked={checked2[1]}
              onChange={() => setChecked2(!checked2[1])}
              className="form-check"
            />
                Maybe later.
          </label>
          <br/>
          <label>
            <input type="checkbox"
              defaultChecked={checked2[2]}
              onChange={() => setChecked2(!checked2[2])}
              className="form-check"
            />
                No, thank you.
          </label>
          <p className="form-name">How can we help?</p>
          <input type="text" className="text-field"></input>
          <br/><br/>
          <div className="btn-wrapper">
            <button onClick={laststep} className="btn-prev"><span className="back">&larr;</span> Previous step</button>
            <Button secondary onClick={nextStep} className="btn-next" title="Next Step" /> 
          </div>
          <br/><br/>
        </div>
      </Container>
    );
  };

  const Standerby = () => {
    return (
      <Container>
        <div className="container-1">
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className="text">
                <h2>Community First</h2>
                <p>The Layer5 community represents the largest collection of service mesh projects and their maintainers in the world.</p>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <img src={img1} alt="Community photo" />
            </Col>
          </Row>
        </div>

        <div className="container-1">
          <Row>
            <Col lg={6} md={6} sm={12}>
              <img src={img2} alt="Open source photo" />
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div className="text">
                <h2>Open Source First</h2>
                <p>Our projects establish industry standards and enable service developers, owners, and operators with repeatable patterns and best practices for managing all aspects of distributed services. Our shared commitment to the open source spirit push the Layer5 community and its projects forward.</p>
              </div>
            </Col>
          </Row>
        </div>
        <br/><br/>
        <button onClick={standerbyBack} className="btn-prev1"><span className="back">&larr;</span> Previous step</button>
        <br/><br/>
      </Container>
    );
  };

  const MemberFormThird = () => {
    return (
      <Container>
        <h2 className="title">Layer5 and You</h2>
        <div className="form">
          <p className="form-name">Now or eventually, would you like to speak or write about your works in the community and/or on the projects?</p>
          <select className="form-select">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <p className="form-name">Area(s) of Desired Focus</p>
          <label>
            <input type="checkbox"
              defaultChecked={checked3[0]}
              onChange={() => setChecked3(!checked3[0])}
              className="form-check"
            />
                Community Ambassador
          </label>
          <br/>
          <label>
            <input type="checkbox"
              defaultChecked={checked3[1]}
              onChange={() => setChecked3(!checked3[1])}
              className="form-check"
            />
                Community Management
          </label>
          <br/>
          <label>
            <input type="checkbox"
              defaultChecked={checked3[2]}
              onChange={() => setChecked3(!checked3[2])}
              className="form-check"
            />
                Documentation
          </label>
          <br/>
          <label>
            <input type="checkbox"
              defaultChecked={checked3[3]}
              onChange={() => setChecked3(!checked3[3])}
              className="form-check"
            />
                Digital Marketing
          </label>
          <br/>
          <label>
            <input type="checkbox"
              defaultChecked={checked3[4]}
              onChange={() => setChecked3(!checked3[4])}
              className="form-check"
            />
                Frontend Engineering
          </label>
          <br/>
          <label>
            <input type="checkbox"
              defaultChecked={checked3[5]}
              onChange={() => setChecked3(!checked3[5])}
              className="form-check"
            />
                Backend Engineering
          </label>
          <br/>
          <label>
            <input type="checkbox"
              defaultChecked={checked3[6]}
              onChange={() => setChecked3(!checked3[6])}
              className="form-check"
            />
                DevOps
          </label>
          <br/>
          <label>
            <input type="checkbox"
              defaultChecked={checked3[7]}
              onChange={() => setChecked3(!checked3[7])}
              className="form-check"
            />
                User
          </label>
          <br/>
          <label>
            <input type="checkbox"
              defaultChecked={checked3[8]}
              onChange={() => setChecked3(!checked3[8])}
              className="form-check"
            />
                Other
          </label>
          <br/><br/>
          <div className="btn-wrapper">
            <button onClick={laststep} className="btn-prev"><span className="back">&larr;</span> Previous step</button>
            <Button secondary onClick={nextStep} className="btn-next" title="Next Step" /> 
          </div>
          <br/><br/>
        </div>
      </Container>
    );
  };

  const MemberFormFour = () => {
    return (
      <Container>
        <h2 className="title">Expectations and Programs FAQ</h2>
        <div className="form">
          <p className="form-name">What can I expect from Layer5? What does Layer5 expect of me?</p>
          <p className="para">The Layer5 community expects you to get as much or more out of your time than you give to the projects. We expect earnest effort from its contributors. What “earnest effort” means is different for each community member as all have different circumstances. Suffice to say, the more you put into your efforts, the greater your reward will be. Most community contributors stay with the project for many months, if not indefinitely. Length of involvement is entirely up to the individual community member.</p>
          <label>
            <input type="checkbox"
              defaultChecked={checked4[0]}
              onChange={() => setChecked4(!checked4[0])}
              className="form-check"
            />
                Ok
          </label>
          <p className="form-name">I see works of other contributors being highlighted in the Layer5, Meshery, and SMP Twitter feeds, the Meshery and SMP showcases, and in the Layer5 YouTube channel.</p>
          <p className="para">We try to elevate the works of our contributors. All of our community members are proud of their work and so are we! We want their work and names to be recognized across our collective technology industry. Be sure to follow and engage with these Twitter accounts, YouTube, and LinkedIn accounts.</p>
          <label>
            <input type="checkbox"
              defaultChecked={checked4[1]}
              onChange={() => setChecked4(!checked4[1])}
              className="form-check"
            />
                Ok
          </label>
          <p className="form-name">Are community contributors paid? Are internships paid? What do I get in return?</p>
          <p className="para">With few exceptions, generally community contributors and interns are not paid. Those that participate through Google Summer of Code, CommunityBridge, or Google Season of Docs do receive a stipend at the culmination of their internship. The largest return on time invested in the community for any contributor is the knowledge, relationships, recognition, and experience gained throughout their engagement. Their participation affords them an opportunity to work with world-class engineers, gives focus and purpose to their learning efforts on technologies they otherwise may not understand, and exposes their work broadly to the Cloud Native community.Letters of recommendation, mentorship and coaching, introduction to engineers at globally-recognized technology companies, potential contract or full-time work at Layer5, public writing and speaking opportunities are all examples of benefits those that participate can receive for their time spent.</p>
          <label>
            <input type="checkbox"
              defaultChecked={checked4[2]}
              onChange={() => setChecked4(!checked4[2])}
              className="form-check"
            />
                Ok
          </label>
          <p className="form-name">I see other contributors have affiliated themselves with Layer5 on LinkedIn. Am I encouraged to do the same?</p>
          <p className="para">Yes! We welcome you to affiliate with the community and projects. We consider this affiliation helpful in boosting your profile and resume in context of job searches and overall in general. Be sure to update your profile, and be social about your activities. We love to highlight our members!</p>
          <label>
            <input type="checkbox"
              defaultChecked={checked4[3]}
              onChange={() => setChecked4(!checked4[3])}
              className="form-check"
            />
                Ok
          </label>
          <br/><br/>
          <div className="btn-wrapper">
            <button onClick={laststep} className="btn-prev"><span className="back">&larr;</span> Previous step</button>
            <Button secondary onClick={nextStep} className="btn-next" title="Submit" /> 
          </div>
          <br/><br/>
        </div>
      </Container>
    );
  };

  const FinalForm = () => {
    return (
      <Container>
        <h2 className="title">Welcome!</h2>
        <div className="black-box">
          <h2>
                    We are pleased to have you as a new member
          </h2>
          <p>New Community Member resources</p>
          <div className="btn-box">
            <Button primary className="btn-one" type="button" title="Join Slack Community" url="http://slack.layer5.io/" external={true}/>
            <Button secondary className="btn-two" type="button" title="Check The Docs" url="/learn/service-mesh-books/the-enterprise-path-to-service-mesh-architectures-2nd-edition"/>
          </div>
        </div>
      </Container>
    );
  };
 
  return(
    <Webform>
      <div>
        <SlackLinkNotif />
        {
          standerbyFlag &&
                <Standerby />
        }
        {
          !standerbyFlag &&
                <div>
                  <RangeDisplay />
                  {
                    stepNumber === 0 &&
                        <MemberFormStart />
                  }
                  {
                    stepNumber === 1 &&
                        <MemberFormSecond />
                  }
                  {
                    (userFlag && stepNumber === 2) &&
                        <UserForm />
                  }
                  {
                    (contributorFlag && stepNumber === 2) &&
                        <ContributorFrom />
                  }
                  {
                    stepNumber === 3 &&
                        <MemberFormThird />
                  }
                  {
                    stepNumber === 4 &&
                        <MemberFormFour />
                  }
                  {
                    stepNumber === 5 &&
                        <FinalForm />
                  }
                </div>
        }
            
            
      </div>
    </Webform>
  );
};
  
export default WebBasedForm;