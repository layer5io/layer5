import React from "react";
import { AiOutlineUnorderedList } from "react-icons/ai"
import { BsFillGrid3X3GapFill } from "react-icons/bs"
import ReactTooltip from 'react-tooltip';
import { Link } from "gatsby";
import styled from "styled-components";

export const ToolTipWrapper = styled.div`
      float:right;
      a {
        margin: 1px;     
        &:hover{
            color: ${props => props.theme.secondaryColor ? props.theme.secondaryColor : "#FB7B81"};
            cursor: pointer;             
      }
`;

const BlogViewToolTip = ({ setListView, setGridView}) =>{
    return(
        <ToolTipWrapper>
            <a data-tip="Grid View" onClick={setGridView}>
                <BsFillGrid3X3GapFill size={18}/>
            </a>
            <ReactTooltip place="top" type="dark" effect="solid" />
            <a data-tip="List View" onClick={setListView}>
                <AiOutlineUnorderedList size={18}/>
            </a>
            <ReactTooltip place="top" type="dark" effect="solid" />
        </ToolTipWrapper>
    )
};

export default BlogViewToolTip;
