import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import Vintage1 from "../../assets/images/app/vintage-1.svg";
import Vintage2 from "../../assets/images/app/vintage-2.svg";


const BoxWrapper = styled.div`
    display:inline-block;
    position:relative;
    &:before{
        content: url(${Vintage2});
        position: absolute;
        bottom: -30px;
        ${props => props.vintageOne && css(
  {
    content: `url(${Vintage1})`
  }
)}
        ${props => props.vintageTwo && css(
  {
    content: `url(${Vintage2})`
  }
)}
        ${props => props.right && css(
  {
    right: "-45px",
    left: "auto"
  }
)}
        ${props => props.left && css(
  {
    left: "-45px",
    right: "auto"
  }
)}
  @media screen and (max-width: 450px) and (min-width: 402px)
  {
    // content: '';
    right: -10px;
  }

  @media screen and (max-width: 402px)
  {
    content: '';
  }
    }
`;

const VintageBox = ({ children, ...props }) => {
  const addAllClasses = ["vintage-box"];
  if (props.className){
    addAllClasses.push(props.className);
  }
  return (
    <BoxWrapper  { ...props} className={addAllClasses.join(" ")} >
      {children}
    </BoxWrapper>
  );
};



VintageBox.propTypes = {
  children: PropTypes.any.isRequired
};

export default VintageBox;

