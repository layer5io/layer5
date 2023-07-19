import React, { useState, useEffect, useRef } from "react";
import Button from "../../reusecore/Button";
import { ReactComponent as CloseIcon } from "./closeIcon.svg";
import popupImageSmall from "./power-of-meshery-small.svg";
import CornerPopupWrapper from "./popup.style";

const CornerPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (!localStorage.getItem("showPopup")) {
      timeoutRef.current = setTimeout(() => {
        setShowPopup(true);
      }, 8000);
      localStorage.setItem("showPopup", true);
    } else setShowPopup(false);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  },[]);

  return (
    showPopup &&
    <CornerPopupWrapper>
      <div>
        <div className="popup">
          <div className="popup-inner">
            <div className="close-btn" onClick={() => setShowPopup(false)}>
              <CloseIcon />
            </div>
            <a href="https://play.meshery.io/">
              <img className="popup-image" src={popupImageSmall} />
            </a>
            <Button primary className="explore-playground-button" title="Explore Meshery Playground" url="https://play.meshery.io/" />
          </div>
        </div>
      </div>
    </CornerPopupWrapper>
  );
};

export default CornerPopup;
