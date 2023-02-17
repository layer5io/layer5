import React from "react";
import { Container } from "../../../../reusecore/Layout";
import DesignerFeaturesWrapper from "./DesignerFeatures.style";
import DesignerFeaturesDiagram from "./DesignerFeatures_diagram";
import Feature from "../../features";
// import { useInView } from "react-intersection-observer";
import { useRef, useState, useEffect } from "react";
// import useScrollBlock from "../useScrollBlock";

export default function DesignerFeatures({ title, features }) {
  const [activeExampleIndex, setActiveExampleIndex] = useState(0);
  const [viewportStatus, setViewportStatus] = useState(
    new Array(features.length).fill(false)
  );

  // const [blockScroll, allowScroll] = useScrollBlock();
  // const [contentHover, setContentHover] = useState(false);
  // const contentRef = useRef(null);
  // const [contentViewRef, inView, entry] = useInView({ threshold: 1 });
  // console.log(inView);


  // useEffect(() => {
  //   // console.log(inView);
  //   const handleScrolling = (event) => {
  //     if (inView) {
  //       if (contentRef !== null) {
  //         if (contentHover === false) {
  //           event.preventDefault();
  //           // console.log(inView, entry.target.scrollTop);
  //           contentRef.current.scrollTo({
  //             top: contentRef.current.scrollTop + event.deltaY,
  //             behavior: "smooth",
  //           });
  //         }
  //       }
  //     }
  //   }
  //   window.addEventListener("wheel", handleScrolling);

  //   return () => {
  //     window.removeEventListener("wheel", handleScrolling);
  //   }

  // })
  // useEffect(() => {
  //   console.log(inView);
  //   const handleScrolling = (event) => {
  //     if(inView) {
  //       if(contentHover === false) {
  //         // console.log(inView, entry.target.scrollTop);
  //         entry.target.scrollTo({
  //           top: entry.target.scrollTop + event.deltaY,
  //           behavior: "smooth",
  //         });
  //       }
  //     }
  //   }
  //   window.addEventListener("wheel", handleScrolling);

  // })

  // const stickRef = useRef();
  // // const [fix, setFix] = useState(false);
  // const [scrollDist, setScrollDist] = useState(0);
  // console.log(scrollDist, window.scrollY);

  // useEffect(() => {
  //   const setFixed = () => {
  //     if (stickRef.current.getBoundingClientRect().top <= 98 && !fix) {
  //       setFix(true);
  //       if(!scrollDist)
  //       setScrollDist(window.scrollY);
  //       if (contentHover === false) {
  //             contentRef.current.scrollTo({
  //               top: contentRef.current.scrollTop + (window.scrollY - scrollDist),
  //               behavior: "smooth"
  //             });
  //           }
  //       // blockScroll();
  //       // const handleScrolling = (event) => {
  //         // console.log(contentRef.current.scrollTop);
  //         // if (contentRef !== null){
  //         //   if (contentHover === false) {
  //         //     contentRef.current.scrollTo({
  //         //       top: contentRef.current.scrollTop + e.deltaY,
  //         //       behavior: "smooth",
  //         //     });
  //         //   }
  //         // }
  //         // blockScroll();
  //       // }

  //       // window.addEventListener("wheel", handleScrolling)
  //     }
  //     else
  //       setFix(false);
  //   };
  //   window.addEventListener("scroll", setFixed);
  // }, []);

  return (
    <DesignerFeaturesWrapper>
      <Container className="designer-container">
        <div className="root">
          <div id="featureHeading" className="fixed" >
            <h1>Design</h1>
          </div>
          <div className="g-grid-container contentContainer" id="add-border" >
            <div className="diagram scroll">
              <DesignerFeaturesDiagram activeExampleIndex={activeExampleIndex} />
            </div>
            <ul className="features">
              {features.map((feature, index) => (
                <li key={index}>
                  <Feature
                    {...feature}
                    onInViewStatusChanged={(state) => {
                      const newStatusArray = [...viewportStatus];
                      newStatusArray[index] = state;
                      setViewportStatus(newStatusArray);
                      // Calculate the first element in focus, set that as
                      // our new activeExampleIndex. If it's been updated
                      // notify the subscriber.
                      const newExampleIndex = newStatusArray.lastIndexOf(true);
                      if (activeExampleIndex !== newExampleIndex && newExampleIndex !== -1) {
                        setActiveExampleIndex(newExampleIndex);
                      }
                    }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </DesignerFeaturesWrapper>
  );
}
