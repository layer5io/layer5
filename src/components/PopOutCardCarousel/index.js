import React from "react";
import PopOutCardWrapper from "./PopOutCardCarousel.style";

function PopOutCard({ children, index, active, onClick } ) {
  return (
    <PopOutCardWrapper index={index} active={active} onClick={onClick}>
      {children}
    </PopOutCardWrapper>
  );
}

export default PopOutCard;