import React, { useState, useEffect } from "react";
import Button from "../../reusecore/Button";
import { ReactComponent as CloseIcon } from "./closeIcon.svg";
import popupImageSmall from "./power-of-meshery-small.webp";
import CornerPopupWrapper from "./popup.style";

const CornerPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("showPopup")) {
      setTimeout(() => {
        setShowPopup(true);
      }, 8000);
      localStorage.setItem("showPopup", true);
    } else setShowPopup(false);
  },[]);

  return (
    showPopup &&
    <CornerPopupWrapper>
      <div>
        <div className="popup">
          <div className="popup-inner">
            <button
              type="button"
              className="close-btn"
              aria-label="Close popup"
              onClick={() => setShowPopup(false)}
            >
              <CloseIcon aria-hidden="true" focusable="false" />
            </button>
            <a href="https://play.meshery.io/">
              <img
                className="popup-image"
                src={popupImageSmall}
                alt="Explore Meshery's cloud native playground"
              />
            </a>
            <Button $primary className="explore-playground-button" title="Access Playground" $url="https://play.meshery.io/" $external={true}/>
          </div>
        </div>
      </div>
    </CornerPopupWrapper>
  );
};

export default CornerPopup;
