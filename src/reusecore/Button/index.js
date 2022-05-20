import React from "react"; 
import PropTypes from "prop-types";
import BtnStyle from "./btn.style";
import {Link} from "gatsby"; 



const Button = ({
  className,
  children,
  ...props

}) => {
  const addClasses = ["appion__btn"];
  if (className) {
    addClasses.push(className);
  }

  let options = {
    ...props,
    className: addClasses.join(" "),
    onClick: props.onClick,

    // convert dom attribute to string
    // this error: "Received `true` for a non-boolean attribute <attribute_name>"" will occur if not converted.
    primary: String(props.primary), 
    secondary: String(props.secondary), 
  };

  if(props.url) {
    if(props.external) {
      options = {
        ...options,
        as: "a",
        href: props.url,
        target: "_blank",
        rel: "noreferrer",
      };
    } else {
      options = {
        ...options,
        as: Link,
        to: props.url,
      };
    }
  }

  return (
    <BtnStyle {...options}>
      {children}
      {props.icon ? <img src={props.icon} alt={props.title} /> : <> </>}
      {props.title}
    </BtnStyle>
  );
};

Button.propTypes = {
  as: PropTypes.oneOf(["button", "a", Link]), //--
  upperCase: PropTypes.bool,
  title: PropTypes.string,
  url: PropTypes.string,
  className: PropTypes.string,
  external: PropTypes.bool,
  icon: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
