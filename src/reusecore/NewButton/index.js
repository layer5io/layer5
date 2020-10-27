import React from "react"; 
import PropTypes from "prop-types";
import BtnStyle from "./btn.style"; 



const Button = ({
    className,
    children,
    ...props

}) => {
    const addClasses = ["appion__btn"];
    if (className) {
        addClasses.push(className);
    }

    const initalButton = <BtnStyle className={addClasses.join(" ")}{...props} onClick={props.onClick}>{children}<img src={props.icon} />{props.title}</BtnStyle>;


    return (
        <React.Fragment>
            { props.url && props.external &&       
            <a href={props.url} target="_blank" rel="noreferrer">{initalButton}</a>}
            {props.url && !props.external && 
             <a href={props.url}>{initalButton}</a>}
            {
                !props.url &&
              initalButton
            }
        </React.Fragment>
    );
};

Button.propTypes = {
    as: PropTypes.oneOf(["button", "a",]), //--
    upperCase: PropTypes.bool,
    title: PropTypes.string,
    url: PropTypes.string,
    className: PropTypes.string,
    external: PropTypes.bool,
    icon: PropTypes.string,
    onClick: PropTypes.func
};

export default Button;
