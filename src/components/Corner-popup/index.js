import React, { useState, useEffect } from "react";
import Button from "../../reusecore/Button";
import { ReactComponent as CloseIcon } from "./closeIcon.svg";
import CornerPopupWrapper from "./popup.style";

const CornerPopup = ({ storageKey = "showPopup", link, text, content }) => {
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
            <a href={link}>
              {content}
            </a>
            <Button $primary className="explore-playground-button" title={text} $url={link} $external={true}/>
          </div>
        </div>
      </div>
    </CornerPopupWrapper>
  );
};

export default CornerPopup;
