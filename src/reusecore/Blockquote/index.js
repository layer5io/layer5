import React from "react";
import PropTypes from "prop-types";
import BlockquoteStyle from "./blockquote.style";

const Blockquote = ({
  className,
  children,
  ...props

}) => {
  const addClasses = ["appion__btn"];
  if (className) {
    addClasses.push(className);
  }

  // const initalBlockquote = 
  // <BlockquoteStyle 
  //   className={addClasses.join(" ")}{...props} >
  //   {children}
  //   {props.quote}
  // </BlockquoteStyle>;

  return (
    <React.Fragment>
      {
        <BlockquoteStyle
          className={addClasses.join(" ")}{...props} >
          <div className="blockquote-wrapper">
            <div className="blockquote">
              <h1>
                {props.quote}
              </h1>
              <h4> {props.person}</h4>
              <h4>{props.title}</h4>
            </div>
          </div>
        </BlockquoteStyle>

      }
    </React.Fragment>
  );
};

Blockquote.propTypes = {
  as: PropTypes.oneOf(["Blockquote", "blockquote",]), //--
  quote: PropTypes.string,
  person: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
};

export default Blockquote;
