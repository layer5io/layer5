import React from "react";
import { Link } from "gatsby";
import { HiChevronRight } from "@react-icons/all-files/hi/HiChevronRight";
import { HandbookCardWrapper } from "./HandbookCard.style";

const HandbookCard = ({ title, description, to }) => {
  return (
    <HandbookCardWrapper>
      <Link to={to} class="handbook__card--main">
        <div className="handbook__card">
          <h1 className="handbook__card--head">{title}</h1>
          <div className="handbook__card--line"></div>
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
      </Link>
    </HandbookCardWrapper>
  );
};

export default HandbookCard;
