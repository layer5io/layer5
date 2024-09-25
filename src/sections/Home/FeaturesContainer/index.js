import React, { useEffect, useRef } from "react";

// Default imports
import Features from "../../../components/Features/index.js";
import WhiteboardingImage from "./images/whiteboarding.svg";
import WhiteboardingImageLight from "./images/whiteboarding-light.svg";
import CommentingImageDark from "./images/commenting.svg";
import CommentingImageLight from "./images/commenting-white.svg";
import TwoColLayout from "../../../components/Features/TwoColLayout.js";
import AWSImage from "./images/aws.svg";
import AWSImageLight from "./images/aws-light.svg";
import AWSLogoDark from "./images/aws-logo-dark.svg";
import AWSLogoLight from "./images/aws-logo-light.svg";
import GCPLogo from "./images/gcp-logo.svg";
// Named imports
import { Container } from "./style.js";
import { useStyledDarkMode } from "../../../theme/app/useStyledDarkMode.js";

// Functional component
const FeaturesContainer = () => {
  const { isDark } = useStyledDarkMode();
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const containerRef = useRef(null);
  const featureRefs = useRef([]);
  const layoutRef = useRef(null);
  const featuresInfo = [
    {
      title: "Build Systems Faster, Together",
      show_custom_cursor: true,
      animationOne: true,
      redirectLink: "/cloud-native-management/kanvas/collaborate/peer-reviews",
      desc: "Real-time collaboration for cloud native and Kubernetes designs with live-editing, instant feedback, deploy dry runs, and secure access controls.",
      imgLink: isDark ? CommentingImageDark : CommentingImageLight,
      cursor: false,
    },
    {
      title: "Multi-Cloud by Design",
      show_custom_cursor: true,
      animationOne: true,
      redirectLink: "",
      desc: (
        <span>
          Incorporate AWS <i>and</i>{" "} GCP components into Meshery designs for
          comprehensive <i>and</i>{" "} intuitive system mapping, documentation, <i>and</i>{" "}
          orchestration.
        </span>
      ),
      imgLink: isDark ? AWSImage : AWSImageLight,
      cursor: true,
      redirectLinkWithImage: [
        {
          text: "Amazon Web Services",
          image: isDark ? AWSLogoDark : AWSLogoLight,
          redirect:
            "/cloud-native-management/generate-aws-architecture-diagram",
        },
        {
          text: "Google Cloud Platform",
          image: GCPLogo,
          redirect:
            "/cloud-native-management/generate-gcp-architecture-diagram",
        },
      ],
    },
    {
      title: "Be on the same page, literally",
      show_custom_cursor: true,
      animationOne: false,
      redirectLink: "/whiteboard",
      desc: "Crafting cloud-native symphonies: Our engineering diagramming tool is your conductor's baton, turning Kubernetes infrastructure into a canvas for freestyle orchestration.",
      imgLink: isDark ? WhiteboardingImage : WhiteboardingImageLight,
      cursor: true,
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const title = titleRef.current;
      const subtitle = subtitleRef.current;
      const container = containerRef.current;

      if (container && title && subtitle) {
        const rect = container.getBoundingClientRect();
        if (rect.top <= 0) {
          title.classList.add("fade-out");
          subtitle.classList.add("fade-out");
        } else {
          title.classList.remove("fade-out");
          subtitle.classList.remove("fade-out");
        }
      }
    };

    const options = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        } else {
          entry.target.classList.remove("fade-in");
        }
      });
    }, options);

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    if (subtitleRef.current) {
      observer.observe(subtitleRef.current);
    }

    featureRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    if (layoutRef.current) {
      observer.observe(layoutRef.current);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
      if (subtitleRef.current) {
        observer.unobserve(subtitleRef.current);
      }
      featureRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
      if (layoutRef.current) {
        observer.unobserve(layoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <Container ref={containerRef}>
        <h1 className="title" ref={titleRef}>
          Deploy <i>faster </i>together with <span>Confidence</span>
        </h1>
        <p className="subtitle" ref={subtitleRef}>
          Give your team full application visibility at every layer so the team
          can ship, refactor and onboard faster.
        </p>
        {/* Tools to help you scale your cloud native infrastructure */}
        {/* Elevate teamwork with integrated communication channels, ensuring efficient and secure project success. */}
        {/* a suite of annotation and visualization tools, allowing users to draw, annotate, and collaborate in real-time on their cloud native designs. */}

        {featuresInfo.map((feature, index) => (
          <div
            ref={(el) => (featureRefs.current[index] = el)}
            className="feature-item"
            key={feature.title}
          >
            <Features
              key={feature.title}
              title={feature.title}
              show_custom_cursor={feature.show_custom_cursor}
              animationOne={feature.animationOne}
              redirectLink={feature.redirectLink}
              desc={feature.desc}
              imgLink={feature.imgLink}
              cursor={feature.cursor}
              redirectLinkWithImage={feature.redirectLinkWithImage}
            />
          </div>
        ))}
        <div ref={layoutRef} className="layout-item">
          <TwoColLayout />
        </div>
      </Container>
    </>
  );
};

export default FeaturesContainer;
