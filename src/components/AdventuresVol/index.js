import React from "react";

import { HiOutlineChevronRight } from "@react-icons/all-files/hi/HiOutlineChevronRight";
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
          <div className="handbook__card--lm__container">
            <a href={to} className="handbook__card--lm">Read More <HiOutlineChevronRight /></a>
          </div>
        </div>
      </a>
    </AdventuresVolWrapper>
  );
};

export default AdventuresVol;
