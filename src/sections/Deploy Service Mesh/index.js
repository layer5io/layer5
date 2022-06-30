import React, {
  memo,
  useCallback,
  useState,
  useEffect,
  useMemo
} from "react";

import axios from "axios";
import DeployServiceMeshWrapper from "./DeployServiceMesh.style";
import { Container, Row, Col } from "../../reusecore/Layout";
import Button from "../../reusecore/Button";
import { Link } from "gatsby";
import bookCover from "../../assets/images/learn/book-cover.png";

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

    const sliderStyle = {
      backgroundImage: `-webkit-gradient(linear,left top,right top,color-stop(${(sliderVal/100)}, #0098A6),color-stop(${(sliderVal/100)}, #D2CECC))`
    };

    const bubbleStyle = {
      left: `calc(${sliderVal}%)`
    };

    useEffect(() => {
      if (mouseState === "up") {
        onChange(sliderVal);
      }
    }, [mouseState]);
    return (
      <div className="slidecontainer tooltip">
        {/* <p>{label}</p> */}
        <input
          type="range"
          value={sliderVal}
          {...sliderProps}
          className="slider"
          id="myRange"
          style={sliderStyle}
          onChange={changeCallback}
          onMouseDown={() => setMouseState("down")}
          onMouseUp={() => setMouseState("up")}
        />
        <span className="bubble tooltiptext" style={bubbleStyle}>{label}</span>
      </div>

    );
  }
);

const ServiceMesh = () => {
  const submit = () => {
    setSubmit(true);
    axios.post("https://hook.us1.make.com/3t59ylhftnrmgrweonlr3cve5eltlaa5", {
      parentVal1,
      parentVal2,
      parentVal3,
      parentVal4,
      parentVal5,
      parentVal6,
      parentVal7,
      parentVal8,
      email,
      first,
      second,
      org
    });
  };
  const [parentVal1, setParentVal1] = useState(50);
  const [parentVal2, setParentVal2] = useState(50);
  const [parentVal3, setParentVal3] = useState(50);
  const [parentVal4, setParentVal4] = useState(50);
  const [parentVal5, setParentVal5] = useState(50);
  const [parentVal6, setParentVal6] = useState(50);
  const [parentVal7, setParentVal7] = useState(50);
  const [parentVal8, setParentVal8] = useState(50);
  const [average, SetAverage] = useState(50);
  const [email, setEmail] = useState("");
  const [flag, setFlag] = useState(false);
  const [submitFlag, setSubmit] = useState(false);
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [org, setOrg] = useState("");

  useEffect(() => {
    if (!flag) {
      const sum = parseInt(parentVal1) + parseInt(parentVal2) + parseInt(parentVal3);
      SetAverage((sum/300)*100);
    } else {
      const sum = parseInt(parentVal1) + parseInt(parentVal2) + parseInt(parentVal3) + parseInt(parentVal4) + parseInt(parentVal5) + parseInt(parentVal6) + parseInt(parentVal7) + parseInt(parentVal8);
      SetAverage((sum/800)*100);
    }
  }, [flag,parentVal1,parentVal2,parentVal3,parentVal4,parentVal5,parentVal6,parentVal7,parentVal8]);

  const expand = () => {
    if (email === "" || first === "" || second === "" || org === ""){
      alert("Kindly fill all the required details");
    } else {
      setFlag(true);
    }
  };

  const addData = (e) => {
    setEmail(e.target.value);
  };

  const addData1 = (e) => {
    setFirst(e.target.value);
  };

  const addData2 = (e) => {
    setSecond(e.target.value);
  };

  const addData3 = (e) => {
    setOrg(e.target.value);
  };

  const sliderProps1 = useMemo(
    () => ({
      min: 0,
      max: 100,
      value: parentVal1,
      step: 2,
      label: "The higher volume of service requests that you have to internal and external services there are, the more insight and control you will need and the higher the return on investment your service mesh will deliver.",
      onChange: e => {
        setParentVal1(e);
      }
    }),
    [parentVal1]
  );
  const sliderProps2 = useMemo(
    () => ({
      min: 0,
      max: 100,
      value: parentVal2,
      step: 2,
      label: "Edge focus—metrics and usage are for response time to clients and request failure rates.",
      onChange: e => {
        setParentVal2(e);
      }
    }),
    [parentVal2]
  );
  const sliderProps3 = useMemo(
    () => ({
      min: 0,
      max: 100,
      value: parentVal3,
      step: 2,
      label: "Strong separation of external and internal users. Focused on external API experience. APIs are used primarily for client-facing interaction.APIs are for clients only.",
      onChange: e => {
        setParentVal3(e);
      }
    }),
    [parentVal3]
  );
  const sliderProps4 = useMemo(
    () => ({
      min: 0,
      max: 100,
      value: parentVal4,
      step: 2,
      label: "The security characteristics are desirable qualities of any deployment. Apply defense-in-depth. Why not pull these into a single layer of control?",
      onChange: e => {
        setParentVal4(e);
      }
    }),
    [parentVal4]
  );
  const sliderProps5 = useMemo(
    () => ({
      min: 0,
      max: 100,
      value: parentVal5,
      step: 2,
      label: "Deploy a service mesh early. Doing so lowers risk and affords you time to become confident with the operations of a service mesh.",
      onChange: e => {
        setParentVal5(e);
      }
    }),
    [parentVal5]
  );
  const sliderProps6 = useMemo(
    () => ({
      min: 0,
      max: 100,
      value: parentVal6,
      step: 2,
      label: "Resilient infrastructure and highly available services are ideal in any environment. Let the service mesh do the heavy lifting for you.",
      onChange: e => {
        setParentVal6(e);
      }
    }),
    [parentVal6]
  );
  const sliderProps7 = useMemo(
    () => ({
      min: 0,
      max: 100,
      value: parentVal7,
      step: 2,
      label: "a very small (<5 engineer) team",
      onChange: e => {
        setParentVal7(e);
      }
    }),
    [parentVal7]
  );
  const sliderProps8 = useMemo(
    () => ({
      min: 0,
      max: 100,
      value: parentVal8,
      step: 2,
      label: "Whether your environment is polyglot or not, service mesh instrumentation delivers uniformity, decouples Dev and Ops, and melts infrastructure concern off of application code.",
      onChange: e => {
        setParentVal8(e);
      }
    }),
    [parentVal8]
  );

  const handleKeyPress = (event) => {
    if (event.key === "Enter"){
      expand();
    }
  };
  const Progress = ({ done }) => {
    const [style, setStyle] = React.useState({});

    setTimeout(() => {
      const newStyle = {
        opacity: 1,
        width: `${done}%`
      };

      setStyle(newStyle);
    }, 200);

    return (
      <div className="progress">
        <div className="progress-done" style={style}>
        </div>
      </div>
    );
  };

  return (
    <DeployServiceMeshWrapper>
      <div className="hero">
        <h1>"When should I deploy a service mesh?"</h1>
        <h3 className="sub-heading">the adopter's dilemma</h3>
      </div>

      <div className="info">
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

      <div className="arrow">
        <h2>How Strongly to Consider a Service Mesh</h2>
        <div className="text">
          <p className="left">Lightly</p>
          <p className="right">Strongly</p>
        </div>
        <Progress done={average}/>
      </div>

      <div className="info">
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

      <div className="form" id="form">
        <Container>
          <div className="text">
            <p className="left">Lightly</p>
            <p className="right">Strongly</p>
          </div>
          <div>
            <div className="range-slider">
              <div id="slider">
                <h4>
                  Interservice Communication
                </h4>
                <RangeSlider {...sliderProps1}/>
                <h5>
                  {parentVal1}
                </h5>
              </div>

              <div id="slider">
                <h4>
                  Observability
                </h4>
                <RangeSlider {...sliderProps2}/>
                <h5>
                  {parentVal2}
                </h5>
              </div>

              <div id="slider">
                <h4>
                  Perspective from which you think of your APIs
                </h4>
                <RangeSlider {...sliderProps3}/>
                <h5>
                  {parentVal3}
                </h5>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="form">
          <div className="additional">
            {
              !flag
              &&
              <div className="submit">
                <h2>Complete the survey and receive <br/>an in-depth analysis</h2>
                <input type="text" className="email" onKeyDown={handleKeyPress} onChange={addData1}  placeholder="First Name"></input>
                <input type="text" className="email" onKeyDown={handleKeyPress} onChange={addData2}  placeholder="Second Name"></input>
                <br/>
                <input type="text" className="email" onKeyDown={handleKeyPress} onChange={addData3}  placeholder="Organization or Company"></input>
                <input type="email" className="email" onKeyDown={handleKeyPress} onChange={addData}  placeholder="Email Address"></input>
                <br/>
                <Button secondary id="arrow-btn" type="button"  onClick={expand} title="Continue &rarr;"/>
              </div>
            }
            <div className={!flag ? "blur" : ""}>
              <div className="range-slider">
                <div id="slider">
                  <h4>
                        Security Model
                  </h4>
                  <RangeSlider {...sliderProps4}/>
                  <h5>
                    {parentVal4}
                  </h5>
                </div>

                <div id="slider">
                  <h4>
                        # of services
                  </h4>
                  <RangeSlider {...sliderProps5}/>
                  <h5>
                    {parentVal5}
                  </h5>
                </div>

                <div id="slider">
                  <h4>
                        Service reliability
                  </h4>
                  <RangeSlider {...sliderProps6}/>
                  <h5>
                    {parentVal6}
                  </h5>
                </div>

                <div id="slider">
                  <h4>
                        Size of your organization
                  </h4>
                  <RangeSlider {...sliderProps7}/>
                  <h5>
                    {parentVal7}
                  </h5>
                </div>

                <div id="slider">
                  <h4>
                        Diversity of application stack
                  </h4>
                  <RangeSlider {...sliderProps8}/>
                  <h5>
                    {parentVal8}
                  </h5>
                </div>
              </div>
              <div className="submit-btn">
                {
                  !submitFlag
                    &&
                    <Button secondary type="button" onClick={submit} title="Submit &rarr;"/>
                }
                {
                  submitFlag
                    &&
                    <h3>Your response has been recorded!</h3>
                }
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Row className="book_cover">
        <Col xs={12} sm={6} className="book_col text">
          <p className="cover">Services-first Network</p>
          <h1>What is A <br></br> Service Mesh?</h1>
          <p>
            Service meshes provide intent-based networking for microservices describing desired behavior of the network in the face of constantly changing conditions and network topology.
          </p>
          <Button primary className="learn" type="button" title="Learn More" url="/learn/service-mesh-books/the-enterprise-path-to-service-mesh-architectures-2nd-edition"/>
        </Col>
        <Col xs={12} sm={6} className="book_col book_img">
          <Link to={"/learn/service-mesh-books/the-enterprise-path-to-service-mesh-architectures-2nd-edition"} className="bookLink">
            <img src={bookCover} alt="Book Image" />
          </Link>
        </Col>
      </Row>
    </DeployServiceMeshWrapper>
  );
};

export default ServiceMesh;