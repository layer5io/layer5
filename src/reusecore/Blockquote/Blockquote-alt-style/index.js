import React from "react";
import PropTypes from "prop-types";
import BlockquoteStyle from "./blockquote.style";

const Blockquote = ({ className, ...props }) => {
  const AllClasses = ["blockquote"];
  if (className) {
    AllClasses.push(className);
  }
  return (
    <React.Fragment>
      {
        <BlockquoteStyle className={AllClasses.join(" ")} {...props}>
          <div className="blockquote-wrapper">
            <div className="blockquote-container">
              <h1 className="blockquote-quote">{props.quote}</h1>
              <h4 className="blockquote-person">&mdash;{props.person}</h4>
              <h5 className="blockquote-title">{props.title}</h5>
            </div>
          </div>
        </BlockquoteStyle>
      }
    </React.Fragment>
  );
};

Blockquote.propTypes = {
  quote: PropTypes.string,
  person: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
};

export default Blockquote;
