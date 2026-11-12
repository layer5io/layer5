import React from "react";
import PropTypes from "prop-types";
import BlockquoteStyle from "./blockquote.style";

const Blockquote = ({
  className,
  ...props

}) => {
  const AllClasses = ["blockquote"];
  if (className){
    AllClasses.push(className);
  }
  if (!props.person && !props.title){
    // Without an attribution, nothing sits under the quote bubble, so its
    // tail (drawn 60px below the bubble) needs clearance of its own.
    AllClasses.push("blockquote-no-attribution");
  }
  return (
    <React.Fragment>
      {
        <BlockquoteStyle
          className={AllClasses.join(" ")} {...props}
        >
          <div className="blockquote-wrapper">
            <div className="blockquote">
              <h4>
                {props.quote}
              </h4>
              <h5 className="person">{props.person}</h5>
              <h5 className="title">{props.title}</h5>
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
  className: PropTypes.string,
  title: PropTypes.string,
};

export default Blockquote;
