import React, { useEffect, useState } from "react";
import { ReactComponent as IngressGatewayImage } from "../../../../sections/Kanvas/Kanvas-collaborate/images/banner-transitions/ingress-gateway-partial-colorMode.svg";
import { ReactComponent as KubernetesImage } from "../../../../sections/Kanvas/Kanvas-collaborate/images/banner-transitions/kubernetes-navbar.svg";
import { ReactComponent as KubernetesImage1 } from "../../../../sections/Kanvas/Kanvas-collaborate/images/banner-transitions/kubernetes-navbar-light.svg";
import { ReactComponent as PodImage } from "../../../../sections/Kanvas/Kanvas-collaborate/images/banner-transitions/pod-partial-colorMode.svg";
import { ReactComponent as PrometheusImage } from "../../../../sections/Kanvas/Kanvas-collaborate/images/banner-transitions/prometheus-partial-colorMode.svg";
import { ReactComponent as ServiceIntefaceImage } from "../../../../sections/Kanvas/Kanvas-collaborate/images/banner-transitions/service-interface-partial-colorMode.svg";
import SupportingArrows from "../../../../sections/Kanvas/Kanvas-collaborate/images/banner-transitions/supporting-arrows.svg";
import EmptyLight from "../../../../sections/Kanvas/Kanvas-collaborate/images/banner-transitions/empty-light.svg";
import EmptyDark from "../../../../sections/Kanvas/Kanvas-collaborate/images/banner-transitions/empty-dark.svg";
import { useInView } from "react-intersection-observer";
import { useStyledDarkMode } from "../../../../theme/app/useStyledDarkMode";

const KanvasCard = () => {
  const { isDark } = useStyledDarkMode();
  const [imageInView, setimageInView] = useState(false);

  const [transitionRef, inView] = useInView({ threshold: 0.7 });

  useEffect(() => {
    if (inView && !imageInView) {
      setimageInView(true);
    } else if (imageInView && !inView) {
      setimageInView(false);
    }
  }, [inView, imageInView]);

  return (
    <div className="transition-container" ref={transitionRef}>
      <img className="canvas" src={isDark ? EmptyDark : EmptyLight} alt="" />
      <ServiceIntefaceImage className="service-interface" alt="ServiceIntefaceImage" />
      <IngressGatewayImage alt="IngressGatewayImage" className={imageInView ? "ingress-gateway-transition ingress-gateway" : "ingress-gateway"} />
      {isDark ? <KubernetesImage className={imageInView ? "kubernetes-transition kubernetes" : "kubernetes"} alt="KubernetesImage" /> : <KubernetesImage1 className={imageInView ? "kubernetes-transition kubernetes" : "kubernetes"} alt="KubernetesImage" />}
      <PodImage className={imageInView ? "pod-transition pod" : "pod"} alt="PodImage" />
      <PrometheusImage className={imageInView ? "prometheus-transition prometheus" : "prometheus"} alt="PrometheusImage" />
      <img className={imageInView ? "supporting-arrows-transition supporting-arrows" : "supporting-arrows"} src={SupportingArrows} alt="" />
    </div>
  );
};

export default KanvasCard;
