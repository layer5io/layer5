import React from "react"; 
import PropTypes from "prop-types";
import BlockquoteStyle from "./blockquote.style";
import {Link} from "gatsby"; 



const Blockquote = ({
  className,
  children,
  ...props

}) => {
  const addClasses = ["appion__btn"];
  if (className) {
    addClasses.push(className);
  }

  const initalBlockquote = 
    <BlockquoteStyle 
      className={addClasses.join(" ")}{...props} >
      {children}
      {props.quote}
    </BlockquoteStyle>;


  return (
    <React.Fragment>
      {
        <div className="blockquote-wrapper">
        <div className="blockquote">
        <h1>
         Intuitive design happens when <span>current knowledge</span> is the same as the <span>target knowledge.</span>
         </h1>
        <h4>Jared Spool<br /><em>Web Site UsabilityA Designer Guide</em></h4>
      </div>
    </div>      }
    </React.Fragment>
  );
};

Blockquote.propTypes = {
  as: PropTypes.oneOf(["Blockquote", "blockquote",]), //--
  upperCase: PropTypes.bool,
  quote: PropTypes.string,
  url: PropTypes.string,
  className: PropTypes.string,
  external: PropTypes.bool,
  icon: PropTypes.string,
};

export default Blockquote;
