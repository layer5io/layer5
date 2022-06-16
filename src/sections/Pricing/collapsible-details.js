import React from "react";
import styled from "styled-components";
import { MdExpandLess} from "@react-icons/all-files/md/MdExpandLess";
import { MdExpandMore } from "@react-icons/all-files/md/MdExpandMore";

const FeatureDetailsWrapper = styled.div`
margin: 0;
display: inline;
.open{
    display: flex;
    flex-direction: column;
    margin-top: 0rem;
    list-style: none;
    height:auto !important;
    opacity:1 !important;
    margin-bottom: 2rem;
    transition:all .4s !important;
   }
   .toggle-icon{
    width: 2rem; 
    height: 2rem; 
    cursor: pointer;
    fill: ${props => props.theme.primaryColor};
  }
p{
    font-size: 0.9rem;
}
.toggle-btn{
    padding-top: 0.8rem;
    display:inline-block;
    float: right;
   }
   .toc-ul{
    opacity:1;
    height:0;
    transition:none;
    visibility:hidden;
   }
   .open{
    visibility:visible;
   }
 @media only screen and (max-width: 992px){
    .toggle-btn{
        display:none;;
       }
 }

`;

const FeatureDetails = (props) => {
  const [expand, setExpand] = React.useState(false);

  return (
    <FeatureDetailsWrapper>
      {props.description ? 
        <div className="toggle-btn">
          {expand ? (
            <MdExpandLess
              className="toggle-icon"
              onClick={function () {
                setExpand(!expand);
              }}
            />
          ) : (
            <MdExpandMore
              className="toggle-icon"
              onClick={function () {
                setExpand(!expand);
              }}
            />
          )}
        </div> : "" }
      <div className="details">
        <p className={`toc-ul ${expand ? "open" : ""}`}>
          {props.description}
        </p>
      </div> 
    </FeatureDetailsWrapper>
  );
};

export default FeatureDetails;
