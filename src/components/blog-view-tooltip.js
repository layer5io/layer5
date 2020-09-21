import React from "react";
import { Row } from "../reusecore/Layout";
import { FaThList } from "react-icons/fa";
import { RiLayoutGridFill } from "react-icons/ri";
import ReactTooltip from "react-tooltip";
import styled from "styled-components";

export const ToolTipWrapper = styled.div`
      @media screen and (max-width: 576px) {
            display: none;
      }
      float:right;
      margin-right: 10px;
      margin-left: 10px;
      .border {
        border: 2px solid gray;
        line-height: 18px;
      }
      a {
        padding: 5px;
        color: #1D316C;
        background-color: #00B39F; 
        &:hover{
            color: gray;
            cursor: pointer;
        }             
      }
      .active {
        background-color: #1D316C;
        color: #00B39F;
      }
`;

const BlogViewToolTip = ({ isListView, setListView, setGridView }) => {
    return (
        <ToolTipWrapper>
            <Row className="border">
                <a
                    data-tip="Grid View"
                    data-for="grid-view"
                    onClick={setGridView}
                    className={`${isListView ? "" : "active"}`}
                >
                    <RiLayoutGridFill size={22} />
                </a>
                <ReactTooltip
                    id="grid-view"
                    border
                    className="grid-view"
                    backgroundColor="black"
                    place="top"
                    effect="solid"
                />
                <a
                    data-tip="List View"
                    data-for="list-view"
                    onClick={setListView}
                    className={`${isListView ? "active" : ""}`}
                >
                    <FaThList size={22} />
                </a>
                <ReactTooltip
                    id="list-view"
                    className="list-view"
                    backgroundColor="black"
                    place="top"
                    type="dark"
                    effect="solid"
                />
            </Row>
        </ToolTipWrapper>
    );
};

export default BlogViewToolTip;
