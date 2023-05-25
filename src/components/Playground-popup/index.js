import React, { useState, useEffect } from "react";
import PopupWrapper from "./popup.style";
import popupImage from "./power-of-meshery.svg";
import closeIcon from "./closeIcon.svg";
import Button from "../../reusecore/Button";

const PlaygroundPopup = () => {

  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("popupTrigger")) {
      setTimeout(() => {
        setTrigger(true);
      }, 2000);
      localStorage.setItem("popupTrigger", true);
    } else setTrigger(false);
  }, []);


  return (
    trigger &&
        <PopupWrapper>
          <div className="popup">
            <div className="popup-inner">
              <img className="close-btn" src={closeIcon} onClick={() => setTrigger(false)}/>
              <img src={popupImage} alt="" />
              <Button primary className="join-community-button" title="Explore Meshery Playground" url="https://play.meshery.io/" />
            </div>
          </div>
        </PopupWrapper>
  );
};

export default PlaygroundPopup;
