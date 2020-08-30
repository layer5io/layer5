import React from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import ReactTooltip from "react-tooltip";
import styled from "styled-components";

export const ToolTipWrapper = styled.div`
      float:right;
      a {
        margin: 1px;     
        &:hover{
            color: ${props => props.theme.secondaryColor ? props.theme.secondaryColor : "#FB7B81"};
            cursor: pointer;
        }             
      }
      .active {
        color: ${props => props.theme.secondaryColor ? props.theme.secondaryColor : "#FB7B81"};
      }
`;

const BlogViewToolTip = ({ isListView, setListView, setGridView}) =>{
    return(
        <ToolTipWrapper>
            <a data-tip="Grid View" data-for='grid-view' onClick={setGridView} className={`${isListView ? "": "active"}`}>
                <BsFillGrid3X3GapFill size={18}/>
            </a>
            <ReactTooltip id='grid-view' className='grid-view' backgroundColor="black" place="top" effect="solid" />
            <a data-tip="List View" data-for='list-view' onClick={setListView} className={`${isListView ? "active": ""}`}>
                <AiOutlineUnorderedList size={18}/>
            </a>
            <ReactTooltip id='list-view' className='list-view' backgroundColor="black" place="top" type="dark" effect="solid" />
        </ToolTipWrapper>
    );
};

export default BlogViewToolTip;
