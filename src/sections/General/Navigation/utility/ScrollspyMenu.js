import React, { useState, useRef } from "react";
import { Link } from "gatsby";
import Card from "./Card";
import meshmap_designer from "../../../../assets/images/meshmap/meshmap-collaborate.webp";
import { IoIosArrowRoundForward } from "@react-icons/all-files/io/IoIosArrowRoundForward";
import { ReactComponent as IngressGatewayImage } from "../../../../sections/Meshmap/Meshmap-collaborate/images/banner-transitions/ingress-gateway-partial-colorMode.svg";
import { ReactComponent as KubernetesImage } from "../../../../sections/Meshmap/Meshmap-collaborate/images/banner-transitions/kubernetes-partial-colorMode.svg";
import { ReactComponent as PodImage } from "../../../../sections/Meshmap/Meshmap-collaborate/images/banner-transitions/pod-partial-colorMode.svg";
import { ReactComponent as PrometheusImage } from "../../../../sections/Meshmap/Meshmap-collaborate/images/banner-transitions/prometheus-partial-colorMode.svg";
import { ReactComponent as ServiceIntefaceImage } from "../../../../sections/Meshmap/Meshmap-collaborate/images/banner-transitions/service-interface-partial-colorMode.svg";
import SupportingArrows from "../../../../sections/Meshmap/Meshmap-collaborate/images/banner-transitions/supporting-arrows.svg";
import EmptyLight from "../../../../sections/Meshmap/Meshmap-collaborate/images/banner-transitions/empty-light.svg";
import EmptyDark from "../../../../sections/Meshmap/Meshmap-collaborate/images/banner-transitions/empty-dark.svg";
import { useInView } from "react-intersection-observer";

const ScrollspyMenu = ({ menuItems, theme, ...props }) => {
  const addAllClasses = [""];

  const [state, setState] = useState({
    active: menuItems[0]
  });

  const wrapRef = useRef(null);

  const handleMouseOver = (index) => {
    setState({
      active: menuItems[index]
    });
  };

  if (props.className) {
    addAllClasses.push(props.className);
  }

  const wrapDisplay = () => {
    if (wrapRef.current) {
      wrapRef.current.style.display = "block";
    }
  };

  const wrapNone = () => {
    if (wrapRef.current) {
      wrapRef.current.style.display = "none";
    }
  };

  const { active } = state;
  const blogData = props.blogData;

  const [transitionRef, inView] = useInView({ threshold: 0.7 });
  const [imageInView, setimageInView] = useState(false);
  if (inView && !imageInView)
    setimageInView(true);
  else if (imageInView && !inView)
    setimageInView(false);

  return (
    <ul className={addAllClasses.join(" ")} onMouseOver={wrapDisplay} onMouseOut={wrapNone}>
      {menuItems.map((menu, index) => (
        <li
          key={index}
          className={
            menu.subItems !== undefined ? "nav-item has-dropdown" : "nav-item"
          }
          onMouseOver={() => handleMouseOver(index)}
        >
          <Link to={menu.path} className="menu-link" activeClassName="nav-link-active">
            <span>
              {menu.name}
            </span>
          </Link>
        </li>
      ))}
      {active.subItems !== undefined && (
        <React.Fragment>
          <ul className="dropdown" style={{ zIndex: "101" }}>
            <div className="nav-grid">
              <div className="hr">
                <Link className="section" to={active.path} activeClassName="nav-link-active">{active.name}
                </Link>
                {active.subItems.map((subItem, i) => (
                  <li key={i}>
                    {subItem.name === "Forum" ?
                      <a href={subItem.path} target="_blank" className="sub-item" rel="noreferrer">
                        {subItem.name}
                      </a>
                      : <Link to={subItem.path} partiallyActive={true} className={subItem.sepLine && "sub-item"} activeClassName="nav-link-active">
                        {subItem.name}
                      </Link>
                    }
                  </li>
                ))}
                <div className="action-items">
                  {active.actionItems.map((actionItem, i) => (
                    (actionItem.actionName === "Join the discussion" ?
                      <a href={actionItem.actionLink} target="_blank" className="action-link" rel="noreferrer">
                        <span className="readmore-btn">
                          {actionItem.actionName} <IoIosArrowRoundForward />
                        </span>
                      </a>
                      : (<Link key={i} to={actionItem.actionLink} partiallyActive={true} className="action-link">
                        <span className="readmore-btn">
                          {actionItem.actionName} <IoIosArrowRoundForward />
                        </span>
                      </Link>
                      )
                    )
                  ))}
                </div>
              </div>
              {blogData[active.name].nodes.length !== 0 ? (
                <div className="nav-display">
                  <Card frontmatter={blogData[active.name].nodes[0].frontmatter} fields={blogData[active.name].nodes[0].fields} />
                  <Card frontmatter={blogData[active.name].nodes[1].frontmatter} fields={blogData[active.name].nodes[1].fields} />
                </div>) : (
                <>
                  <Link to="/cloud-native-management/meshmap">
                    <div className="single-card">
                      <div className="transition-container" ref={transitionRef}>
                        <img className="canvas" src={theme == "dark" ? EmptyDark : EmptyLight} alt="" />
                        <ServiceIntefaceImage className="service-interface" alt="ServiceIntefaceImage" />
                        <IngressGatewayImage alt="IngressGatewayImage" className={imageInView ? "ingress-gateway-transition ingress-gateway" : "ingress-gateway"}/>
                        <KubernetesImage className={imageInView ? "kubernetes-transition kubernetes" : "kubernetes"} alt="KubernetesImage" />
                        <PodImage className={imageInView ? "pod-transition pod" : "pod"} alt="PodImage" />
                        <PrometheusImage className={imageInView ? "prometheus-transition prometheus" : "prometheus"} alt="PrometheusImage" />
                        <img className={imageInView ? "supporting-arrows-transition supporting-arrows" : "supporting-arrows"} src={SupportingArrows} alt="" />
                      </div>
                      <div className="card-text">
                        <p>MeshMap</p>
                        <h6>Stop finger-pointing and start collaborating.</h6>
                      </div>
                    </div>
                  </Link>
                </>)
              }
            </div>
          </ul>
          <div className="wrap" ref={wrapRef} style={{ zIndex: "100" }} />
        </React.Fragment>
      )}
    </ul>
  );
};

export default ScrollspyMenu;
