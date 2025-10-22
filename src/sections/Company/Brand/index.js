import React, { useState, useEffect, useRef } from "react";
import BrandPageWrapper from "./brandPage.style";
import { Row, Col } from "../../../reusecore/Layout";
import Layer5Brand from "./Brand-components/layer5";
import MesheryBrand from "./Brand-components/meshery";
import { FiDownloadCloud } from "@react-icons/all-files/fi/FiDownloadCloud";
import loadable from "@loadable/component";

const MeshSyncBrand = loadable(() => import("./Brand-components/meshsync"));
const MesheryOperatorBrand = loadable(() => import("./Brand-components/meshery-operator"));
const ImageHubBrand = loadable(() => import("./Brand-components/imagehub"));
const SMPBrand = loadable(() => import("./Brand-components/smp"));
const CommunityBrand = loadable(() => import("./Brand-components/community"));
const Button = loadable(() => import("../../../reusecore/Button"));
const NightHawk = loadable(() => import("./Brand-components/nighthawk"));
const ServiceMeshPatterns = loadable(() => import("./Brand-components/servicemeshpatterns"));
const MeshMasterBrand = loadable(() => import("./Brand-components/meshmaster"));
const MeshMarkBrand = loadable(() => import("./Brand-components/meshmark"));
const KanvasBrand = loadable(() => import("./Brand-components/kanvas"));
const BrandGuide = loadable(() => import("./Brand-components/brand-guide"));
const StickFigures = loadable(() => import("./Brand-components/stickfigures"));
const Catalog = loadable(() => import("./Brand-components/catalog"));
const SocialBackgrounds = loadable(() => import("./Brand-components/social-backgrounds"));

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
const scrollTo = (element, sectionId, duration = 2000) => {
  // Update URL hash
  if (sectionId) {
    window.history.pushState(null, null, `#${sectionId}`);
  }
  
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
      window.scrollY > 510 ? setScroll(true) : setScroll(false)
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
  const kanvasRef = useRef(null);
  const stickfiguresRef = useRef(null);
  const CatalogRef = useRef(null);
  const SocialBackgroundsRef = useRef(null);

  const sectionRefs = [
    { section: "Layer5", ref: layer5Ref },
    { section: "Meshery", ref: mesheryRef },
    { section: "MeshSync", ref: meshsyncRef },
    { section: "MesheryOperator", ref: mesheryOperatorRef },
    { section: "ImageHub", ref: imageHubRef },
    { section: "SMP", ref: smpRef },
    { section: "MeshMark", ref: meshmarkRef },
    { section: "ServiceMeshPatterns", ref: servicemeshpatternsRef },
    { section: "NightHawk", ref: nightHawkRef },
    { section: "MeshMate", ref: meshmateRef },
    { section: "MeshMaster", ref: meshMasterRef },
    { section: "Kanvas", ref: kanvasRef },
    { section: "Five", ref: stickfiguresRef },
    { section: "Catalog", ref: CatalogRef },
    { section: "SocialBackgrounds", ref: SocialBackgroundsRef }
  ];

  const sectionIdMap = {
    "layer5": layer5Ref,
    "social-backgrounds": SocialBackgroundsRef,
    "meshery": mesheryRef,
    "meshsync": meshsyncRef,
    "meshery-operator": mesheryOperatorRef,
    "image-hub": imageHubRef,
    "smp": smpRef,
    "meshmark": meshmarkRef,
    "service-mesh-patterns": servicemeshpatternsRef,
    "nighthawk": nightHawkRef,
    "meshmate": meshmateRef,
    "meshmaster": meshMasterRef,
    "kanvas": kanvasRef,
    "catalog": CatalogRef,
    "five": stickfiguresRef
  };

  // Handle initial hash navigation on page load
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.substring(1);
      if (hash && sectionIdMap[hash]) {
        setTimeout(() => {
          scrollTo(sectionIdMap[hash].current, hash);
        }, 100);
      }
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(headerRef.current);
      const scrollPosition = window.scrollY + headerHeight;

      const selected = sectionRefs.find(({ ref }) => {
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
          <Button $primary title="Download Brand Kit">
            <FiDownloadCloud size={21} className="icon-left" />
          </Button>
        </a>
      </div>
      <Row className="brand-row">
        <Col $xs={12} $md={9} className="brand-col">
          <div className="section" id="brand-guide">
            <BrandGuide />
          </div>
          <div className="section" id="layer5" ref={layer5Ref}>
            <Layer5Brand />
          </div>
          <div className="section" id="social-backgrounds" ref={SocialBackgroundsRef}>
            <SocialBackgrounds />
          </div>
          <div className="section" id="meshery" ref={mesheryRef}>
            <MesheryBrand />
          </div>
          <div className="section" id="meshsync" ref={meshsyncRef}>
            <MeshSyncBrand />
          </div>
          <div className="section" id="meshery-operator" ref={mesheryOperatorRef}>
            <MesheryOperatorBrand />
          </div>
          <div className="section" id="image-hub" ref={imageHubRef}>
            <ImageHubBrand />
          </div>
          <div className="section" id="smp" ref={smpRef}>
            <SMPBrand />
          </div>
          <div className="section" id="meshmark" ref={meshmarkRef}>
            <MeshMarkBrand />
          </div>
          <div className="section" id="service-mesh-patterns" ref={servicemeshpatternsRef}>
            <ServiceMeshPatterns />
          </div>
          <div className="section" id="nighthawk" ref={nightHawkRef}>
            <NightHawk />
          </div>
          <div className="section" id="meshmate" ref={meshmateRef}>
            <CommunityBrand />
          </div>
          <div className="section" id="meshmaster" ref={meshMasterRef}>
            <MeshMasterBrand />
          </div>
          <div className="section" id="kanvas" ref={kanvasRef}>
            <KanvasBrand />
          </div>
          <div className="section" id="catalog" ref={CatalogRef}>
            <Catalog />
          </div>
          <div className="section" id="five" ref={stickfiguresRef}>
            <StickFigures />
          </div>
        </Col>
        <Col $md={3} className="brand-nav-col">
          <nav className={`brand-nav ${scroll ? "nav-fixed" : ""}`}>
            <p
              className={`header_link ${
                visibleSection === "Layer5" ? "selected" : ""
              }`}
              onClick={() => {
                scrollTo(layer5Ref.current, "layer5");
              }}
            >
              <span>Layer5</span>
            </p>
            <p
              className={`header_link ${
                visibleSection === "SocialBackgrounds" ? "selected" : ""
              }`}
              onClick={() => {
                scrollTo(SocialBackgroundsRef.current, "social-backgrounds");
              }}
            >
              <span> Layer5 Social Backgrounds </span>
            </p>
            <p
              className={`header_link ${
                visibleSection === "Meshery" ? "selected" : ""
              }`}
              onClick={() => {
                scrollTo(mesheryRef.current, "meshery");
              }}
            >
              <span>Meshery</span>
            </p>
            <p
              className={`header_link ${
                visibleSection === "MeshSync" ? "selected" : ""
              }`}
              onClick={() => {
                scrollTo(meshsyncRef.current, "meshsync");
              }}
            >
              <span>MeshSync</span>
            </p>
            <p
              className={`header_link ${
                visibleSection === "MesheryOperator" ? "selected" : ""
              }`}
              onClick={() => {
                scrollTo(mesheryOperatorRef.current, "meshery-operator");
              }}
            >
              <span>Meshery Operator</span>
            </p>
            <p
              className={`header_link ${
                visibleSection === "ImageHub" ? "selected" : ""
              }`}
              onClick={() => {
                scrollTo(imageHubRef.current, "image-hub");
              }}
            >
              <span>Image Hub</span>
            </p>
            <p
              className={`header_link ${
                visibleSection === "SMP" ? "selected" : ""
              }`}
              onClick={() => {
                scrollTo(smpRef.current, "smp");
              }}
            >
              <span>Cloud Native Performance</span>
            </p>
            <p
              className={`header_link ${
                visibleSection === "MeshMark" ? "selected" : ""
              }`}
              onClick={() => {
                scrollTo(meshmarkRef.current, "meshmark");
              }}
            >
              <span>MeshMark</span>
            </p>
            <p
              className={`header_link ${
                visibleSection === "ServiceMeshPatterns" ? "selected" : ""
              }`}
              onClick={() => {
                scrollTo(servicemeshpatternsRef.current, "service-mesh-patterns");
              }}
            >
              <span>Cloud Native Patterns</span>
            </p>
            <p
              className={`header_link ${
                visibleSection === "NightHawk" ? "selected" : ""
              }`}
              onClick={() => {
                scrollTo(nightHawkRef.current, "nighthawk");
              }}
            >
              <span> NightHawk </span>
            </p>
            <p
              className={`header_link ${
                visibleSection === "MeshMate" ? "selected" : ""
              }`}
              onClick={() => {
                scrollTo(meshmateRef.current, "meshmate");
              }}
            >
              <span>MeshMate</span>
            </p>
            <p
              className={`header_link ${
                visibleSection === "MeshMaster" ? "selected" : ""
              }`}
              onClick={() => {
                scrollTo(meshMasterRef.current, "meshmaster");
              }}
            >
              <span> MeshMaster </span>
            </p>
            <p
              className={`header_link ${
                visibleSection === "Kanvas" ? "selected" : ""
              }`}
              onClick={() => {
                scrollTo(kanvasRef.current, "kanvas");
              }}
            >
              <span> Kanvas </span>
            </p>
            <p
              className={`header_link ${
                visibleSection === "Catalog" ? "selected" : ""
              }`}
              onClick={() => {
                scrollTo(CatalogRef.current, "catalog");
              }}
            >
              <span> Catalog </span>
            </p>
            <p
              className={`header_link ${
                visibleSection === "Five" ? "selected" : ""
              }`}
              onClick={() => {
                scrollTo(stickfiguresRef.current, "five");
              }}
            >
              <span> Five, our mascot </span>
            </p>
          </nav>
        </Col>
      </Row>
    </BrandPageWrapper>
  );
};

export default Brand;
