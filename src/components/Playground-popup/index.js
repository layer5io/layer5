import React, { useState, useEffect, useRef } from "react";
import PopupWrapper from "./popup.style";
import popupImage from "./power-of-meshery.svg";
import closeIcon from "./closeIcon.svg";
import Button from "../../reusecore/Button";

const PlaygroundPopup = () => {

  const [trigger, setTrigger] = useState(false);
  const popupRef = useRef();

  useEffect(() => {
    if (!localStorage.getItem("popupTrigger")) {
      setTimeout(() => {
        setTrigger(true);
      }, 2000);
      localStorage.setItem("popupTrigger", true);

      let clickHandler = (e) => {
        if (!popupRef.current.contains(e.target)){
          setTrigger(false);
        }
      };

      document.addEventListener("mousedown", clickHandler);
    } else setTrigger(false);
  }, []);


  return (
    trigger &&
        <PopupWrapper>
          <div className="popup">
            <div className="popup-inner" ref={popupRef}>
              <img className="close-btn" src={closeIcon} onClick={() => setTrigger(false)}/>
              <a href="https://play.meshery.io/">
                <img className="popup-image" src={popupImage} alt="" />
              </a>
              <Button primary className="join-community-button" title="Explore Meshery Playground" url="https://play.meshery.io/" />
            </div>
          </div>
        </PopupWrapper>
  );
};

export default PlaygroundPopup;
