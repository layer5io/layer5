import React, {
  memo,
  useCallback,
  useState,
  useEffect,
  useMemo
} from "react";

import DeployServiceMeshWrapper from "./DeployServiceMesh.style";
import { Container, Row, Col } from "../../reusecore/Layout";
import Button from "../../reusecore/Button";

const RangeSlider = memo(
  ({ classes, label, onChange, value, ...sliderProps }) => {
    const [sliderVal, setSliderVal] = useState(0);
    const [mouseState, setMouseState] = useState(null);

    useEffect(() => {
      setSliderVal(value);
    }, [value]);

    const changeCallback = e => {
      setSliderVal(e.target.value);
    };

    useEffect(() => {
      if (mouseState === "up") {
        onChange(sliderVal);
      }
    }, [mouseState]);
    console.log("RENDER");
    return (
      <div className="slidecontainer">
        {/* <p>{label}</p> */}
        <input
          type="range"
          value={sliderVal}
          {...sliderProps}
          className="slider"
          id="myRange"
          onChange={changeCallback}
          onMouseDown={() => setMouseState("down")}
          onMouseUp={() => setMouseState("up")}
        />
      </div>
    );
  }
);

const ServiceMesh = () => {
  const [parentVal1, setParentVal1] = useState(10);
  const [parentVal2, setParentVal2] = useState(10);
  const [parentVal3, setParentVal3] = useState(10);

  const sliderValueChanged1 = useCallback(val => {
    setParentVal1(val);
  });
  const sliderValueChanged2 = useCallback(val => {
    setParentVal2(val);
  });
  const sliderValueChanged3 = useCallback(val => {
    setParentVal3(val);
  });

  const sliderProps1 = useMemo(
    () => ({
      min: 0,
      max: 100,
      value: parentVal1,
      step: 2,
      label: "The higher volume of service",
      onChange: e => sliderValueChanged1(e)
    }),
    [parentVal1]
  );
  const sliderProps2 = useMemo(
    () => ({
      min: 0,
      max: 100,
      value: parentVal2,
      step: 2,
      label: "Edge focus—metrics ",
      onChange: e => sliderValueChanged2(e)
    }),
    [parentVal2]
  );
  const sliderProps3 = useMemo(
    () => ({
      min: 0,
      max: 100,
      value: parentVal3,
      step: 2,
      label: "Strong separation ",
      onChange: e => sliderValueChanged3(e)
    }),
    [parentVal3]
  );
  return (
    <DeployServiceMeshWrapper>
      <div id="hero">
        <h1>"When should i deploy a service mesh?"</h1>
        <p>The adopter's dilemma</p>
      </div>

      <div id="info">
        <Container>
          <Row>
            <Col sm={12} md={6} lg={4}>
              <h3>Factors of your service mesh's functionality</h3>
            </Col>
            <Col sm={12} md={6} lg={4}>
              <h4>it depends...</h4>
              <p>At this point, you might be thinking, “I have a container orchestrator. Why do I need another infrastructure layer?” </p>
            </Col>
            <Col sm={12} md={6} lg={4}>
              <h4>Service-level needs</h4>
              <p>With microservices and containers mainstreaming, container orchestrators provide much of what the cluster (nodes and containers) need.</p>
            </Col>
          </Row>

          <div className="button">
            <Button secondary url="#form" title="Take The Full Questionaire" />
          </div>
        </Container>
      </div>

      <div id="arrow">
        <h2>Consider a Service Mesh</h2>
        <div id="text">
          <p id="left">Lightly</p>
          <p id="right">Strongly</p>
        </div>
        <div id="arrow-box">
          <div className="arrow-left"></div>
          <div className="arrow-right"></div>
        </div>
      </div>

      <div id="info">
        <Container>
          <Row>
            <Col sm={12} md={6} lg={4}>
              <h3>Factors of your enviroment and workloads</h3>
            </Col>
            <Col sm={12} md={6} lg={4}>
              <h4>Service communication</h4>
              <p>The higher volume of service requests that you have to internal and external services there are, the more insight and control you will need and the higher the return on investment your service mesh will deliver.</p>
            </Col>
            <Col sm={12} md={6} lg={4}>
              <h4>Observability</h4>
              <p>Edge focus—metrics and usage are for response time to clients and request failure rates.</p>
            </Col>
          </Row>

          <div className="button">
            <Button secondary url="#form" title="Take The Full Questionaire" />
          </div>
        </Container>
      </div>

      <div id="form">
        <Container>
          <div id="text">
            <p id="left">Lightly</p>
            <p id="right">Strongly</p>
          </div>
          <div>
            <div className="range-slider">
              <div id="slider">
                <h4>
                  Interservice Communication
                </h4>
                <RangeSlider {...sliderProps1} />
              </div>

              <div id="slider">
                <h4>
                  Observability
                </h4>
                <RangeSlider {...sliderProps2} />
              </div>

              <div id="slider">
                <h4>
                  Perspective from which you think of your APIs
                </h4>
                <RangeSlider {...sliderProps3} />
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div id="submit">
        <h2>Complete the survey and receive <br/>an in-depth analysis</h2>
        <input type="email" className="email" placeholder="Email Address"></input>
        <Button secondary id="arrow-btn" type="button" title="Submit &rarr;"/>
      </div>

      <div id="bot">
        <Row>
          <Col sm={12} md={6} lg={6} id="green">
            <div id="text">
              <p id="cover">Services-first Network</p>
              <h1>What is A <br></br> Service Mesh?</h1>
              <p>
              Service meshes provide intent-based networking for microservices describing desired behavior of the network in the face of constantly changing conditions and network topology.
              </p>
              <Button primary id="learn" type="button" title="Learn More"/>
            </div>  
          </Col>
          <Col sm={12} md={6} lg={6} id="book" >
          </Col>
        </Row>
      </div>
    </DeployServiceMeshWrapper>
  );
};

export default ServiceMesh;
