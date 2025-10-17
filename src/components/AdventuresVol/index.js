import React from "react";
import { HiChevronRight } from "@react-icons/all-files/hi/HiChevronRight";
import { AdventuresVolWrapper } from "./adventures-vol.style";

const AdventuresVol = ({ title, description, to, image }) => {
  return (
    <AdventuresVolWrapper>
      <a href={to} className="handbook__card--main">
        <div className="handbook__card">
          <h1 className="handbook__card--head">{title}</h1>
          <div className="handbook__card--line"></div>
          <img src={image} />
          <p className="handbook__card--para">
            {description}
          </p>
          {to && (
            <div className="handbook__card--lm__container">
              <a href={to} className="handbook__card--lm">
                Read More <HiChevronRight />
              </a>
            </div>
          )}
        </div>
      </a>
    </AdventuresVolWrapper>
  );
};

export default AdventuresVol;
