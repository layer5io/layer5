import React, { useEffect, useState } from "react";
import { Container } from "../../reusecore/Layout";
import L404SectionWrapper from "./404.style";
import serviceMesh from "../../assets/images/service-mesh-icons/service-mesh.svg";
import Button from "../../reusecore/Button";

const messages = [
  "Oh, no. Please pardon our meshy site.",
  "Oops. Please excuse the mesh.",
  "Looks like this page doesn't exists. What a mesh!",
  "Things tend to get a bit meshy around here.",
  "Please pardon our mesh.",
  "How did this mesh happen?",
  "Well, isn't this a mesh?",
  "Yikes. Things are a mesh here."
];

const L404 = () => {
  const [message, setMessage] = useState(messages[0]);
  useEffect( () => {
    setMessage(messages[Math.floor(Math.random()*messages.length)]);
  },[]);

  return (
    <L404SectionWrapper>
      <Container>
        <h1 className="message"> {message} </h1>
        <h3 className="subtitle">Page does not exist.</h3>
        <div className="button-row">
          <img src={serviceMesh} alt="service meshed" className="mesh" />
          <Button secondary url="/" external={false} >Return to Layer5</Button>
        </div>
      </Container>
    </L404SectionWrapper>
  );
};

export default L404;
