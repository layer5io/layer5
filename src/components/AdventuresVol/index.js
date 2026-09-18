import React from "react";
import { Link } from "gatsby";
import { HiOutlineChevronRight } from "@react-icons/all-files/hi/HiOutlineChevronRight";
import { AdventuresVolWrapper } from "./adventures-vol.style";

const AdventuresVol = ({ title, description, to, image }) => {
  const isExternalOrStatic =
    to &&
    (to.startsWith("http://") ||
      to.startsWith("https://") ||
      to.split("?")[0].split("#")[0].endsWith(".pdf") ||
      to.startsWith("mailto:"));

  const cardContent = (
    <div className="handbook__card">
      <h1 className="handbook__card--head">{title}</h1>
      <div className="handbook__card--line"></div>
      <img src={image} />
      <p className="handbook__card--para">{description}</p>
      {to && (
        <div className="handbook__card--lm__container">
          <span className="handbook__card--lm">
            Read More <HiOutlineChevronRight />
          </span>
        </div>
      )}
    </div>
  );

  return (
    <AdventuresVolWrapper>
      {!to ? (
        <div className="handbook__card--main">{cardContent}</div>
      ) : isExternalOrStatic ? (
        <a
          href={to}
          className="handbook__card--main"
          target="_blank"
          rel="noreferrer"
        >
          {cardContent}
        </a>
      ) : (
        <Link to={to} className="handbook__card--main">
          {cardContent}
        </Link>
      )}
    </AdventuresVolWrapper>
  );
};

export default AdventuresVol;
