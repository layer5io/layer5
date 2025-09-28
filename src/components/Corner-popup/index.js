import React, { useState, useEffect } from "react";
import Button from "../../reusecore/Button";
import { ReactComponent as CloseIcon } from "./closeIcon.svg";
import popupImageSmall from "./power-of-meshery-small.webp";
import CornerPopupWrapper from "./popup.style";

const CornerPopup = ({ storageKey = "showPopup" }) => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(storageKey)) {
      setTimeout(() => {
        setShowPopup(true);
        localStorage.setItem(storageKey, true);
      }, 8000);
    } else {
      setShowPopup(false);
    }
  }, [storageKey]);

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
              <img alt="popup image" className="popup-image" src={popupImageSmall} />
            </a>
            <Button $primary className="explore-playground-button" title="Access Playground" $url="https://play.meshery.io/" $external={true}/>
          </div>
        </div>
      </div>
    </CornerPopupWrapper>
  );
};

export default CornerPopup;
