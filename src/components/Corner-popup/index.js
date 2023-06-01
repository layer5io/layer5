import React, { useState, useEffect } from "react";
import Button from "../../reusecore/Button";
import closeIcon from "./closeIcon.svg";
import popupImage from "./power-of-meshery.svg";
import popupImageSmall from "./power-of-meshery-small.svg";
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
            <img className="close-btn" src={closeIcon} onClick={() => setShowPopup(false)} />
            <a href="https://play.meshery.io/">
              <img className="popup-image" src={popupImage} />
              <img className="popup-image-small" src={popupImageSmall} />
            </a>
            <Button primary className="explore-playground-button" title="Explore Meshery Playground" url="https://play.meshery.io/" />
          </div>
        </div>
      </div>
    </CornerPopupWrapper>
  );
};

export default CornerPopup;
