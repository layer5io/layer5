import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import Card from "./Card";
import { IoIosArrowRoundForward } from "@react-icons/all-files/io/IoIosArrowRoundForward";
import IngressGatewayImage from "../../../../sections/Meshmap/Meshmap-collaborate/images/banner-transitions/ingress-gateway-partial.svg";
import IngressGatewayImageDark from "../../../../sections/Meshmap/Meshmap-collaborate/images/banner-transitions/ingress-gateway-partial-dark.svg";
import KubernetesImage from "../../../../sections/Meshmap/Meshmap-collaborate/images/banner-transitions/kubernetes-partial.svg";
import KubernetesImageDark from "../../../../sections/Meshmap/Meshmap-collaborate/images/banner-transitions/kubernetes-partial-dark.svg";
import PodImage from "../../../../sections/Meshmap/Meshmap-collaborate/images/banner-transitions/pod-partial.svg";
import PodImageDark from "../../../../sections/Meshmap/Meshmap-collaborate/images/banner-transitions/pod-partial-dark.svg";
import PrometheusImage from "../../../../sections/Meshmap/Meshmap-collaborate/images/banner-transitions/prometheus-partial.svg";
import PrometheusImageDark from "../../../../sections/Meshmap/Meshmap-collaborate/images/banner-transitions/prometheus-partial-dark.svg";
import ServiceIntefaceImage from "../../../../sections/Meshmap/Meshmap-collaborate/images/banner-transitions/service-interface-partial.svg";
import ServiceIntefaceImageDark from "../../../../sections/Meshmap/Meshmap-collaborate/images/banner-transitions/service-interface-partial-dark.svg";
import SupportingArrows from "../../../../sections/Meshmap/Meshmap-collaborate/images/banner-transitions/supporting-arrows.svg";
import EmptyLight from "../../../../sections/Meshmap/Meshmap-collaborate/images/banner-transitions/empty-light.svg";
import EmptyDark from "../../../../sections/Meshmap/Meshmap-collaborate/images/banner-transitions/empty-dark.svg";
import { useInView } from "react-intersection-observer";

const ScrollspyMenu = ({ menuItems, theme, ...props }) => {
  const { blogData,className } = props;

  const addAllClasses = className ? [className] : [""];
  const [activeState,setActiveState] = useState(null);

  const [hover, setHover] = useState(false);

  const [isWrapVisible,setIsWrapperVisible] = useState(false);
  const [imageInView, setimageInView] = useState(false);

  const handleMouseOver = (index) => {
    setActiveState(menuItems[index]);
  };

  const wrapDisplay = () => {
    setIsWrapperVisible(true);
  };

  const wrapNone = () => {
    setIsWrapperVisible(false);
  };

  const [transitionRef, inView] = useInView({ threshold: 0.7 });

  useEffect(() => {
    if (inView && !imageInView){
      setimageInView(true);
    } else if (imageInView && !inView){
      setimageInView(false);
    }
  },[inView,imageInView]);

  return (
    <ul className={addAllClasses.join(" ")} onMouseEnter={wrapDisplay} onMouseLeave={wrapNone}>
      {menuItems.map((menu, index) => (
        <li
          key={index}
          className={
            menu.subItems ? "nav-item has-dropdown" : "nav-item"
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
      {activeState?.subItems && (
        <React.Fragment>
          <ul className="dropdown" style={{ zIndex: "101" }}>
            <div className="nav-grid">
              <div
                className="hr" onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}
              >
                <Link
                  className="section"
                  to={activeState.path}
                  activeClassName="nav-link-active"
                >
                  {activeState.name}
                </Link>
                {activeState.subItems.map((subItem, i) => (
                  <li key={i}>
                    {subItem.name === "Forum" ?
                      <a href={subItem.path} target="_blank" className="sub-item" rel="noreferrer">
                        {subItem.name}
                      </a>
                      : <div>
                        {hover
                          ? <Link to={subItem.path} partiallyActive={true} className={subItem.sepLine && "sub-item"} activeClassName="nav-link-active"
                          >
                            {subItem.name}
                          </Link>
                          : <Link to={subItem.path} partiallyActive={true} className={subItem.sepLine && "sub-item"} activeClassName="nav-link-active" style={(activeState.name === "Projects" && !subItem.sepLine) ? { display: "none" } : { display: "block" }}
                          >
                            {subItem.name}
                          </Link>
                        }
                      </div>
                    }
                  </li>
                ))}
                <div className="action-items">
                  {activeState.actionItems.map((actionItem, i) => (
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
              {blogData[activeState.name].nodes.length !== 0 ? (
                <div className="nav-display">
                  <Card frontmatter={blogData[activeState.name].nodes[0].frontmatter} fields={blogData[activeState.name].nodes[0].fields} />
                  <Card frontmatter={blogData[activeState.name].nodes[1].frontmatter} fields={blogData[activeState.name].nodes[1].fields} />
                </div>) : (
                <>
                  <Link to="/cloud-native-management/meshmap">
                    <div className="single-card">
                      <div className="transition-container" ref={transitionRef}>
                        <img className="canvas" src={theme == "dark" ? EmptyDark : EmptyLight} alt="" />
                        <img className="service-interface" src={theme == "dark" ? ServiceIntefaceImageDark : ServiceIntefaceImage} alt="" />
                        <img className={imageInView ? "ingress-gateway-transition ingress-gateway" : "ingress-gateway"} src={theme == "dark" ? IngressGatewayImageDark : IngressGatewayImage} alt="" />
                        <img className={imageInView ? "kubernetes-transition kubernetes" : "kubernetes"} src={theme == "dark" ? KubernetesImageDark : KubernetesImage} alt="" />
                        <img className={imageInView ? "pod-transition pod" : "pod"} src={theme == "dark" ? PodImageDark : PodImage} alt="" />
                        <img className={imageInView ? "prometheus-transition prometheus" : "prometheus"} src={theme == "dark" ? PrometheusImageDark : PrometheusImage} alt="" />
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
          {isWrapVisible && <div className="wrap"  style={{ zIndex: "100" }} />}
        </React.Fragment>
      )}
    </ul>
  );
};

export default ScrollspyMenu;
