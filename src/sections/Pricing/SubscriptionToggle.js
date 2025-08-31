/* eslint-disable indent */
import React, { useState, useEffect } from "react";
import PricingWrapper from "./pricing.style";

export const SubscriptionToggle = ({ isYearly = false, setIsYearly }) => {
  return (
    <div className="toggle-container">
      <div className="toggle">
        <span
          className={!isYearly ? "active" : ""}
          onClick={() => setIsYearly(false)}
      >
        Monthly
      </span>
      <span
        className={isYearly ? "active" : ""}
        onClick={() => setIsYearly(true)}
      >
        Yearly
      </span>
    </div>
  </div>
);
};
export default SubscriptionToggle;