import React from "react";
import { Row } from "../reusecore/Layout";
import { TiThList } from "react-icons/ti";
import { BsGrid3X3GapFill } from "react-icons/bs";
import ReactTooltip from "react-tooltip";
import styled from "styled-components";

export const ToolTipWrapper = styled.div`
    @media screen and (max-width: 576px) {
        display: none;
    }
    float:left;
    margin: auto 1rem;

    .border {
        line-height: 18px;
    }

    a {
        padding: 5px;
        color: #00d3a9;
        background-color: white;
        border: 1.5px solid #00D3A9;
        &:hover{
            background-color: #3C494F;
            color: #00d3a9;
            cursor: pointer;
            border: 1.5px solid #3C494F;
        }             
    }
    .active {
        background-color: #3C494F;
        color: #00D3A9;
        border: 1.5px solid #3C494F;
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
                    <BsGrid3X3GapFill size={22} />
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
                    <TiThList size={22} />
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
