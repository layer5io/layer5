import React from "react";
import styled from "styled-components";
import { MdExpandMore } from "@react-icons/all-files/md/MdExpandMore";
import { RiArrowRightSLine } from "@react-icons/all-files/ri/RiArrowRightSLine";

const FeatureDetailsWrapper = styled.div`
display: inline;
cursor: pointer;
.open{
    margin: 0rem;
    list-style: none;
    height:auto !important;
    opacity:1 !important;
    margin-bottom: 2rem;
    transition:all .4s !important;
   }
   .toggle-icon{
    width: 1.2rem; 
    height: 1.2rem; 
    fill: ${props => props.theme.primaryColor};
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }
p{
    font-size: 0.9rem;
    color: ${props => props.theme.greyC1C1C1ToGreyB3B3B3}; 
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1); 
}
.toggle-btn{
    display:inline-block;
    float: left;
    vertical-align: middle;;
   }
   .closed{
    opacity:1;
    height:0;
    transition:none;
    visibility:hidden;
   }
   .open{
    visibility:visible;
   }

 h5{
   display: inline-block;
   vertical-align: middle;
 }

`;

const FeatureDetails = (props) => {
  const [expand, setExpand] = React.useState(false);

  return (
    <FeatureDetailsWrapper>
      <div onClick={function () {
        setExpand(!expand);
      }}>
        {props.description ?
          <div className="toggle-btn">
            {expand ? (
              <MdExpandMore
                className="toggle-icon"
                onClick={function () {
                  setExpand(!expand);
                }}
              />
            ) : (
              <RiArrowRightSLine
                className="toggle-icon"
                onClick={function () {
                  setExpand(!expand);
                }}
              />
            )}
          </div> : ""}
        <h5>{props.category}</h5>
        <div className="details">
          <p className={`closed ${expand ? "open" : ""}`}>
            {props.description}
          </p>
        </div>
      </div>
    </FeatureDetailsWrapper>
  );
};

export default FeatureDetails;
