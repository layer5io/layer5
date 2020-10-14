import React from "react"

import WorkshopImage from "../../images/workshops/workshops.svg"
import WorkshopBottomWrapper from "./Workshop-Bottom.style"

const WorkshopBottom = () => {
  return (
    <WorkshopBottomWrapper>
      <img src={WorkshopImage} alt="WorkshopImage" className="bottom-image" />
      <button type="button" className="request-btn">Request A Workshop</button>
    </WorkshopBottomWrapper>
  )
}

export default WorkshopBottom
