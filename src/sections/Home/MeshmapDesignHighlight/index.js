import React from "react";
import { Row, Col } from "../../../reusecore/Layout";
import SectionTitle from "../../../reusecore/SectionTitle";
import Button from "../../../reusecore/Button";
import integrationsImageLight from "./integration-image-light.svg";
import integrationsImageDark from "./integration-image-dark.svg";
import DesignDefaultWrapper from "./highlight.style";import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { useStyledDarkMode } from "../../../theme/app/useStyledDarkMode";



// const imgHero = "../service-mesh-management/images/service-mesh.svg";

const DesignDefault = () => {
  const [diagramRef, inView] = useInView({ threshold: 0.6 });
  const [imageInView, setimageInView] = useState(false);
  const { isDark } = useStyledDarkMode();
  const theme = (typeof isDark === "boolean" && isDark) ? "dark" : "light";

  if (inView && !imageInView)
    setimageInView(true);
  else if (imageInView && !inView)
    setimageInView(false);

  return (
    <DesignDefaultWrapper>
      <div className="section">
        <Row className="row">
          <Col sm={12} md={6} lg={6} className="left-col">
            <div className="left">
              <div className="left-child">
                {/* <div className="svg-background">
                  <img src={svgBackground} alt="background" />
                </div> */}
                <SectionTitle
                  className="section-title"
                  leftAlign={true}
                  UniWidth="100%"
                >
                  <h4 className="statement">Step onto</h4>
                  <div className="demo">
                    The <span>world's most integrated visual management platform</span>
                  </div>
                  <h3 className="statement">
                    <div className="side">
                      {/* <div className="side-text">
                        The <span>extensible</span> cloud native manager.
                      </div> */}
                      <div className="description">
                        <p>Drag-and-drop your cloud native infrastructure using a pallete of thousands of versioned Kubernetes components. Say goodbye to YAML configurations.</p>
                        <p>
                          Play with powerful features including context-aware designs and namespace configurations to easily manage all services.
                        </p>
                      </div>
                    </div>
                  </h3>
                  <div className="join-community">
                    <Button primary className="join-community-button" title="Extend your control" url="/projects" />
                  </div>
                </SectionTitle>
              </div>
            </div>
          </Col>
          <Col sm={12} md={6} lg={6} className="right-col">
            <img className={imageInView ? "diagram-visible" : "diagram-hidden"} src={theme === "dark" ? integrationsImageDark : integrationsImageLight} alt="integrations-img" ref={diagramRef} />
          </Col>
        </Row>
      </div>
    </DesignDefaultWrapper>
  );
};

export default DesignDefault;
