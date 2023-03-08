import React from "react";
import { Row } from "../reusecore/Layout";
import { TiThList } from "@react-icons/all-files/ti/TiThList";
import { BsGrid3X3GapFill } from "@react-icons/all-files/bs/BsGrid3X3GapFill";
import ReactTooltip from "react-tooltip";
import styled from "styled-components";

export const ToolTipWrapper = styled.div`
    @media screen and (max-width: 576px) {
        display: none;
    }
    float:left;
    margin: auto 1rem;

    .border {
        line-height: 36.4px;
    }

    a {
        align-items:center;
        padding: 5px;
        color: ${props => props.theme.keppletColor};
        background-color: ${props => props.theme.DarkTheme ? "#212121" : "#FFFFFF"};
        border: 1.5px solid ${props => props.theme.keppletColor};
        &:hover{
            background-color: ${props => props.theme.primaryColor};
            color: ${props => props.theme.primaryLightColorTwo};
            cursor: pointer;
            border: 1.5px solid ${props => props.theme.primaryColor};
        }             
    }
    .active {
        background-color: ${props => props.theme.primaryColor};
        color: ${props => props.theme.primaryLightColorTwo};
        border: 1.5px solid ${props => props.theme.primaryColor};
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
