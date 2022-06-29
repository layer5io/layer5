import React, { useState, useEffect, useRef } from "react";
import BrandPageWrapper from "./brandPage.style";
import { Row, Col } from "../../../reusecore/Layout";
import Layer5Brand from "./Brand-components/layer5";
import MesheryBrand from "./Brand-components/meshery";
import MeshSyncBrand from "./Brand-components/meshsync";
import MesheryOperatorBrand from "./Brand-components/meshery-operator";
import ImageHubBrand from "./Brand-components/imagehub";
import SMPBrand from "./Brand-components/smp";
import CommunityBrand from "./Brand-components/community";
import Button from "../../../reusecore/Button";
import { FiDownloadCloud } from "@react-icons/all-files/fi/FiDownloadCloud";
import NightHawk from "./Brand-components/nighthawk";
import ServiceMeshPatterns from "./Brand-components/servicemeshpatterns";
import MeshMasterBrand from "./Brand-components/meshmaster";
import MeshMarkBrand from "./Brand-components/meshmark";

const getDimensions = (ele) => {
  let dummyheight = 0,
      dummyoffsetTop = 0,
      dummyoffsetBottom = 0;
  if (ele) {
    const { height } = ele.getBoundingClientRect();
    const offsetTop = ele.offsetTop;
    const offsetBottom = offsetTop + height;

    return {
      height,
      offsetTop,
      offsetBottom,
    };
  }

  return {
    dummyheight,
    dummyoffsetTop,
    dummyoffsetBottom,
  };
};

// Functions to make scroll with speed control
// Element to move, element or px from, element or px to, time in ms to animate
const scrollTo = (element, duration = 2000) => {
  let e = document.documentElement;
  if (e.scrollTop === 0) {
    let t = e.scrollTop;
    ++e.scrollTop;
    e = t + 1 === e.scrollTop-- ? e : document.body;
  }
  scrollToC(e, e.scrollTop, element, duration);
};
// Element to move, element or px from, element or px to, time in ms to animate
const scrollToC = (element, from, to, duration) => {
  if (duration <= 0) return;
  if (typeof from === "object") from = from.offsetTop;
  if (typeof to === "object") to = to.offsetTop + 580;
  scrollToX(element, from, to, 0, 1 / duration, 20, easeOutCuaic);
};

const scrollToX = (element, xFrom, xTo, t01, speed, step, motion) => {
  if (t01 < 0 || t01 > 1 || speed <= 0) {
    element.scrollTop = xTo;
    return;
  }
  element.scrollTop = xFrom - (xFrom - xTo) * motion(t01);
  t01 += speed * step;

  setTimeout(function () {
    scrollToX(element, xFrom, xTo, t01, speed, step, motion);
  }, step);
};

const easeOutCuaic = (t) => {
  t--;
  return t * t * t + 1;
};

const Brand = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () =>
      window.pageYOffset > 510 ? setScroll(true) : setScroll(false)
    );
  }, []);

  const [visibleSection, setVisibleSection] = useState();

  const headerRef = useRef(null);
  const layer5Ref = useRef(null);
  const mesheryRef = useRef(null);
  const meshsyncRef = useRef(null);
  const mesheryOperatorRef = useRef(null);
  const imageHubRef = useRef(null);
  const meshMasterRef = useRef(null);
  const smpRef = useRef(null);
  const servicemeshpatternsRef = useRef(null);
  const nightHawkRef = useRef(null);
  const meshmateRef = useRef(null);
  const meshmarkRef = useRef(null);

  const sectionRefs = [
    { section : "Layer5", ref : layer5Ref },
    { section : "Meshery", ref : mesheryRef },
    { section : "MeshSync", ref : meshsyncRef },
    { section : "MesheryOperator", ref : mesheryOperatorRef },
    { section : "ImageHub", ref : imageHubRef },
    { section : "SMP", ref : smpRef },
    { section : "MeshMark", ref : meshmarkRef },
    { section : "ServiceMeshPatterns", ref : servicemeshpatternsRef },
    { section : "NightHawk", ref : nightHawkRef },
    { section : "MeshMate", ref : meshmateRef },
    { section : "MeshMaster", ref : meshMasterRef },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const { height : headerHeight } = getDimensions(headerRef.current);
      const scrollPosition = window.scrollY + headerHeight;

      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
      });

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleSection]);

  return (
    <BrandPageWrapper>
      <div className="brandHeader" ref={headerRef}>
        <h1>Layer5 Brand Kits</h1>
        <p>
          We’ve created some guidelines to help you use our brand and assets,
          including our logo, content and trademarks, without having to
          negotiate legal agreements for each use. To make any use of our marks
          in a way not covered by these guidelines, please contact us and
          include a visual mockup of intended use.
        </p>
        <a href="/brand/brand-kit.zip">
          <Button primary title="Download Brand Kit">
            <FiDownloadCloud size={21} className="icon-left" />
          </Button>
        </a>
      </div>
      <Row className="brand-row">
        <Col xs={12} md={9} className="brand-col">
          <div className="section" ref={layer5Ref}>
            <Layer5Brand />
          </div>
          <div className="section" ref={mesheryRef}>
            <MesheryBrand />
          </div>
          <div className="section" ref={meshsyncRef}>
            <MeshSyncBrand />
          </div>
          <div className="section" ref={mesheryOperatorRef}>
            <MesheryOperatorBrand />
          </div>
          <div className="section" ref={imageHubRef}>
            <ImageHubBrand />
          </div>
          <div className="section" ref={smpRef}>
            <SMPBrand />
          </div>
          <div className="section" ref={meshmarkRef}>
            <MeshMarkBrand />
          </div>
          <div className="section" ref={servicemeshpatternsRef}>
            <ServiceMeshPatterns />
          </div>
          <div className="section" ref={nightHawkRef}>
            <NightHawk />
          </div>
          <div className="section" ref={meshmateRef}>
            <CommunityBrand />
          </div>
          <div className="section" ref={meshMasterRef}>
            <MeshMasterBrand />
          </div>
        </Col>
        <Col md={3} className="brand-nav-col">
          <nav className={`brand-nav ${scroll ? "nav-fixed" : ""}`}>
            <p
              className={`header_link ${
                visibleSection === "Layer5" ? "selected" : ""
              }`}
              onClick={() => {
                scrollTo(layer5Ref.current);
              }}
            >
              <span>Layer5</span>
            </p>
            <p
              className={`header_link ${
                visibleSection === "Meshery" ? "selected" : ""
              }`}
              onClick={() => {
                scrollTo(mesheryRef.current);
              }}
            >
              <span>Meshery</span>
            </p>
            <p
              className={`header_link ${
                visibleSection === "MeshSync" ? "selected" : ""
              }`}
              onClick={() => {
                scrollTo(meshsyncRef.current);
              }}
            >
              <span>MeshSync</span>
            </p>
            <p
              className={`header_link ${
                visibleSection === "MesheryOperator" ? "selected" : ""
              }`}
              onClick={() => {
                scrollTo(mesheryOperatorRef.current);
              }}
            >
              <span>Meshery Operator</span>
            </p>
            <p
              className={`header_link ${
                visibleSection === "ImageHub" ? "selected" : ""
              }`}
              onClick={() => {
                scrollTo(imageHubRef.current);
              }}
            >
              <span>Image Hub</span>
            </p>
            <p
              className={`header_link ${
                visibleSection === "SMP" ? "selected" : ""
              }`}
              onClick={() => {
                scrollTo(smpRef.current);
              }}
            >
              <span>Service Mesh Performance</span>
            </p>
            <p
              className={`header_link ${
                visibleSection === "MeshMark" ? "selected" : ""
              }`}
              onClick={() => {
                scrollTo(meshmarkRef.current);
              }}
            >
              <span>MeshMark</span>
            </p>
            <p
              className={`header_link ${
                visibleSection === "ServiceMeshPatterns" ? "selected" : ""
              }`}
              onClick={() => {
                scrollTo(servicemeshpatternsRef.current);
              }}
            >
              <span>Service Mesh Patterns</span>
            </p>
            <p
              className={`header_link ${
                visibleSection === "NightHawk" ? "selected" : ""
              }`}
              onClick={() => {
                scrollTo(nightHawkRef.current);
              }}
            >
              <span> NightHawk </span>
            </p>
            <p
              className={`header_link ${
                visibleSection === "MeshMate" ? "selected" : ""
              }`}
              onClick={() => {
                scrollTo(meshmateRef.current);
              }}
            >
              <span>MeshMate</span>
            </p>
            <p
              className={`header_link ${
                visibleSection === "MeshMaster" ? "selected" : ""
              }`}
              onClick={() => {
                scrollTo(meshMasterRef.current);
              }}
            >
              <span> MeshMaster </span>
            </p>
          </nav>
        </Col>
      </Row>
    </BrandPageWrapper>
  );
};

export default Brand;
