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
  return (
    <React.Fragment>
      {
        <BlockquoteStyle
          className={AllClasses.join(" ")} {...props}>
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
