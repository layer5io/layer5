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
       }
`;

const BlogVIewToolTip = () =>{
    return(
        <ToolTipWrapper>
            <div>
            <Link data-tip="Grid View" to="/blog-grid">
                <BsFillGrid3X3GapFill size={18}/>
            </Link>
            <ReactTooltip place="top" type="dark" effect="solid" />
            <Link data-tip="List View" to="/blog-list">
                <AiOutlineUnorderedList size={18}/>
            </Link >
            <ReactTooltip place="top" type="dark" effect="solid" />
            </div>
        </ToolTipWrapper>
    )
};

export default BlogVIewToolTip;
