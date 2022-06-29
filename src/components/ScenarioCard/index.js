import React from "react";
import { Row, Col } from "../../reusecore/Layout";
import { ScenarioCardWrapper } from "./ScenarioCard.style";
import { BsArrowDown } from "@react-icons/all-files/bs/BsArrowDown";
import { BsArrowUp } from "@react-icons/all-files/bs/BsArrowUp";
import { Link } from "gatsby";
import { FaExternalLinkAlt } from "@react-icons/all-files/fa/FaExternalLinkAlt";

const Card = ({ title, info, courseLink, link, cover, content, embed, subId, ID, toggleActive }) => {

  const isScriptLoaded = (src) => {
    return document.querySelector("script[src=\"" + src + "\"]") ? true : false;
  };

  React.useEffect(() => {
    if (typeof window !== undefined && !isScriptLoaded("//katacoda.com/embed.js")) {
      const script = document.createElement("script");
      script.setAttribute("src", "//katacoda.com/embed.js");
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  return (
    <ScenarioCardWrapper>
      <div className="scenario-card-block" onClick={() => toggleActive(subId)}>
        <Row>
          <Col xs={12} sm={12}>
            <div className="full-screen">
              <Link to={link} className="siteLink"><FaExternalLinkAlt style={{ height : "1.5rem", width : "auto" }} /></Link>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={4}>
            <div className="scenario-cover">
              <img src={cover} className="scenario-image" />
            </div>
          </Col>
          <Col xs={12} sm={8}>
            <div className="scenario-description">

              <h4 className="title">{title}</h4>
              <p className="info">{info}</p>

              <div className="toggle-and-full-screen-wrapper">
                {content && ID === subId ?
                  <div className="open-close-scenario"> Close Scenario <BsArrowUp className="icon" size={30} /></div> :
                  <div className="open-close-scenario"> Open Scenario <BsArrowDown className="icon" size={30} /></div>
                }
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className={content && subId === ID ? "open-animate" : "close-animate"}>
            <div className={content && subId === ID ? "active" : "text-contents"}>
              <div className="sub-content">
                <div id="katacoda-scenario"
                  data-katacoda-id={`${courseLink}/${embed}`}
                  data-katacoda-startscenariobuttontext="Start Scenario"
                  data-katacoda-ctaurl="https://layer5.io/"
                  data-katacoda-color="#3C494F"
                  data-katacoda-secondary="#00b39f"
                  data-katacoda-background="#fff"
                  data-katacoda-hideprogress="true"
                  data-katacoda-font="Open Sans"
                  data-katacoda-fontheader="Open Sans" style={{ minHeight : "37rem" }}>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </ScenarioCardWrapper>
  );
};

export default Card;
