import React from "react";
import { BackToTopButton } from "./ScrollToTopStyles";
import { IoIosArrowUp } from "@react-icons/all-files/io/IoIosArrowUp";
import useDelayUnmount from "./useDelayedUnmount";
import useWindowHasScrolled from "./useWindowHasScrolled";

const ScrollToTopBtn = () => {

  const isMounted = useWindowHasScrolled(false);

  const [shouldRender, delay] = useDelayUnmount({ isMounted, delayTime: 250 });

  return (
    <>
      {shouldRender && (
        <BackToTopButton
          isMounted={isMounted}
          aria-label="back-to-top"
          delay={delay}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <IoIosArrowUp color={"#fff"} size={24}/>
        </BackToTopButton>
      )
      }
    </>
  );
};

export default ScrollToTopBtn;