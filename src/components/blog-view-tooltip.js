import React from "react";
import { AiOutlineUnorderedList } from "react-icons/ai"
import { BsFillGrid3X3GapFill } from "react-icons/bs"
import ReactTooltip from 'react-tooltip';
import { Link } from "gatsby";
import styled from "styled-components";

export const ToolTipWrapper = styled.div`
      a {
        margin: 1px;
        float:right;       
        &:hover{
            color: ${props => props.theme.secondaryColor ? props.theme.secondaryColor : "#FB7B81"};             
       }
`;

const BlogVIewToolTip = () =>{
    return(
        <ToolTipWrapper>
            <Link data-tip="Grid View" to="/blog-grid">
                <BsFillGrid3X3GapFill/>
            </Link>
            <ReactTooltip place="top" type="dark" effect="solid" />
            <Link data-tip="List View" to="/blog-list">
                <AiOutlineUnorderedList/>
            </Link >
            <ReactTooltip place="top" type="dark" effect="solid" />
        </ToolTipWrapper>
    )
};

export default BlogVIewToolTip;
